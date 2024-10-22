// Interactive Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! I will contact you soon.');
});


var typed = new typed(".tex",{
    strings:["Frontend Developer" , "Video Editor" ,"Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".tex", {
        strings: ["Frontend Developer", "Video Editor", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
    
        loop: true
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };

    fetch('contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        if (data.success) {
            alert(`Thank you, ${data.name}! Your message has been sent.`);
        } else {
            alert(`Error: ${data.error}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});