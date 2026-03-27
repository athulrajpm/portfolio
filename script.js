function submitForm() {
    alert("Message sent successfully!");
    return false;
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}