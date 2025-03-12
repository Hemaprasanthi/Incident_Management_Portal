import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState(""); // No tab selected by default
  const [incidents, setIncidents] = useState([
    { id: 1, title: "Database Issue", description: "DB connection error", priority: "High", assignedTo: "John Doe", createdBy: "Alice", status: "Open" },
    { id: 2, title: "Service Downtime", description: "API server down", priority: "Medium", assignedTo: "Jane Smith", createdBy: "Bob", status: "In Progress" },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    assignedTo: "",
    createdBy: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.assignedTo || !formData.createdBy) {
      alert("Please fill in all fields");
      return;
    }

    const newIncident = {
      id: incidents.length + 1,
      ...formData,
      status: "Open",
    };

    setIncidents([...incidents, newIncident]);
    setFormData({ title: "", description: "", priority: "Low", assignedTo: "", createdBy: "" });
  };

  return (
    <div>
      <h1>Incident Management Portal</h1>

      {/* Tabs Navigation */}
      <div>
        <button onClick={() => setActiveTab("create")}>Create Incident</button>
        <button onClick={() => setActiveTab("view")}>View Incidents</button>
      </div>

      {/* Show selected tab only when a tab is clicked */}
      {activeTab === "create" && (
        <div>
          <h2>Create New Incident</h2>
          <input type="text" name="title" placeholder="Incident Title" value={formData.title} onChange={handleInputChange} />
          <textarea name="description" placeholder="Incident Description" value={formData.description} onChange={handleInputChange}></textarea>

          <select name="priority" value={formData.priority} onChange={handleInputChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input type="text" name="assignedTo" placeholder="Assign To" value={formData.assignedTo} onChange={handleInputChange} />
          <input type="text" name="createdBy" placeholder="Created By" value={formData.createdBy} onChange={handleInputChange} />

          <button onClick={handleSubmit}>Create Incident</button>
        </div>
      )}

      {activeTab === "view" && (
        <div>
          <h2>Existing Incidents</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Assigned To</th>
                <th>Created By</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.id}>
                  <td>{incident.id}</td>
                  <td>{incident.title}</td>
                  <td>{incident.description}</td>
                  <td>{incident.priority}</td>
                  <td>{incident.assignedTo}</td>
                  <td>{incident.createdBy}</td>
                  <td>{incident.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
