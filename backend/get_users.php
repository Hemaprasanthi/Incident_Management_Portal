<?php
require '../vendor/autoload.php';

header('Content-Type: application/json');

try {
    $mongoClient = new MongoDB\Client("mongodb://localhost:27017");
    $collection = $mongoClient->incident_management->users;

    $users = $collection->find([], ['projection' => ['username' => 1, 'full_name' => 1, 'email' => 1]]);
    $userList = [];

    foreach ($users as $user) {
        $userList[] = [
            'username' => $user['username'],
            'full_name' => $user['full_name'],
            'email' => $user['email']
        ];
    }

    echo json_encode($userList);
} catch (Exception $e) {
    echo json_encode(['error' => 'Failed to fetch users']);
}
?>
