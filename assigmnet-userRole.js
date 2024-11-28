// Simulate fetching user role ( can replace this with actual logic, e.g., from an API or database)
const userRole = 'student'; // Change this to 'teacher' to test the other role

// Get references to the sections
const studentView = document.getElementById('student-view');
const teacherView = document.getElementById('teacher-view');

// Show content based on role
if (userRole === 'student') {
    studentView.classList.remove('hidden'); // Show student view
} else if (userRole === 'teacher') {
    teacherView.classList.remove('hidden'); // Show teacher view
}