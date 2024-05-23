$(document).ready(function() {
    // Function to fetch and display recent activity logs
    function fetchLogs() {
        $.ajax({
            url: '/api/logs/', // URL for fetching logs
            success: function(data) {
                $('#log-list').empty();
                data.forEach(function(log) {
                    $('#log-list').append('<li>' + log.action + ' - ' + log.timestamp + '</li>');
                });
            }
        });
    }

    // Function to fetch and display assigned tasks
    function fetchTasks() {
        $.ajax({
            url: '/api/tasks/', // URL for fetching tasks
            success: function(data) {
                $('#task-list').empty();
                data.forEach(function(task) {
                    $('#task-list').append('<li>' + task.title + ' - ' + task.description + '</li>');
                });
            }
        });
    }

    // Call fetchLogs and fetchTasks functions initially
    fetchLogs();
    fetchTasks();

    // Set interval to fetch logs and tasks periodically
    setInterval(fetchLogs, 5000); // Fetch logs every 5 seconds
    setInterval(fetchTasks, 10000); // Fetch tasks every 10 seconds
});
