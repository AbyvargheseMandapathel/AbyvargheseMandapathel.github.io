document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cform");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const phone = form.querySelector('[name="phone"]').value;
        const message = form.querySelector('[name="message"]').value;

        // Load the EmailJS library with your User ID
        emailjs.init("vm698kR0O7cHNBe8F"); // Replace with your EmailJS User ID

        // Use EmailJS to send the email
        emailjs.send("service_uu77u5k", "template_1qjk0pg", {
            to_email: "abyvarghesemandapathel@gmail.com",
            full_name: name,    // Pass the full_name, email, and other variables
            email: email,       // as they are defined in your EmailJS template
            phone: phone,          // You can adjust this based on your form fields
            message: message
        })
        .then(function(response) {
            console.log("Email sent successfully:", response);
            // Display the success message
            successMessage.style.display = "block";
            // Clear the form fields
            form.reset();
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
            // You can display an error message to the user here
        });
    });
});
