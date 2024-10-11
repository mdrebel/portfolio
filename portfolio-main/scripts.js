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
