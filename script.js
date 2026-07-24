const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let text = document.getElementById("message").value.trim();

    if(name === "" || email === "" || text === ""){
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
    }
    else{
        message.style.color = "green";
        message.textContent = "Message sent successfully!";
        form.reset();
    }

});