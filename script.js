// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close mobile menu after clicking a link

document
    .querySelectorAll("#nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });


// ================= CERTIFICATE HINT =================

const certificateHint =
    document.getElementById("certificateHint");

const hintText =
    document.getElementById("hintText");


certificateHint.addEventListener("click", () => {

    hintText.classList.toggle("hidden");

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();