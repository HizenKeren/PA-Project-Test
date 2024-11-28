// Get form and feedback list elements
const form = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value || "Not rated";

    // Validate inputs
    if (name && email && feedback) {
        // Create new feedback item
        const feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");
        feedbackItem.innerHTML = `
            <h3>Feedback from: ${name} (${email})</h3>
            <p><strong>Rating:</strong> ${rating}</p>
            <p><strong>Feedback:</strong> ${feedback}</p>
            <hr>
        `;

        // Append feedback item to the list
        feedbackList.appendChild(feedbackItem);

        // Clear the form fields
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
});