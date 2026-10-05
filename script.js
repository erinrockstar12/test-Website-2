// =========================
// NAVBAR
// =========================

function toggleMenu() {

    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");

}


// =========================
// PROJECT BUTTON
// =========================

function projectInfo(projectName) {

    alert(
        "Kamu memilih project: " +
        projectName +
        "\n\nProject ini masih dalam tahap pengembangan."
    );

}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Silakan isi semua bagian form.");

        return;
    }


    alert(
        "Terima kasih, " +
        name +
        "!\n\nPesan kamu sudah diterima."
    );


    contactForm.reset();

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.querySelector(".nav-menu");

        menu.classList.remove("active");

    });

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Website berhasil dijalankan!");
console.log("Welcome to Erin's Portfolio.");