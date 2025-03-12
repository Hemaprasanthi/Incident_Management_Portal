import { useState } from "react";

export default function IncidentManagementPortal() {
  const [alerts, setAlerts] = useState([
    { id: 1, title: "Database Issue", status: "Open", assignedTo: "John Doe" },
    { id: 2, title: "Service Downtime", status: "In Progress", assignedTo: "Jane Smith" },
  ]);

  return (
    <div style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>Incident Management Portal</h1>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <button style={{ flex: 1, padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}>Create Alert</button>
          <button style={{ flex: 1, padding: "10px", backgroundColor: "#6c757d", color: "white", border: "none", cursor: "pointer" }}>View Alerts</button>
        </div>

        {/* Create Alert Form */}
        <div>
          <input type="text" placeholder="Alert Title" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }} />
          <textarea placeholder="Alert Description" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}></textarea>
          <button style={{ width: "100%", padding: "10px", backgroundColor: "green", color: "white", border: "none", cursor: "pointer" }}>Submit Alert</button>
        </div>

        {/* View Alerts Table */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Existing Alerts</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
            <thead>
              <tr style={{ backgroundColor: "#eee", borderBottom: "2px solid #ccc" }}>
                <th style={{ padding: "8px", textAlign: "left" }}>ID</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Title</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Status</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map(alert => (
                <tr key={alert.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "8px" }}>{alert.id}</td>
                  <td style={{ padding: "8px" }}>{alert.title}</td>
                  <td style={{ padding: "8px", color: alert.status === "Open" ? "red" : "blue" }}>{alert.status}</td>
                  <td style={{ padding: "8px" }}>{alert.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
