// main.js - All custom JS for The Digital Chessboard

// Slick Carousel for testimonials
$(document).ready(function(){
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

// EmailJS form handling
emailjs.init("AUrDjCFXKEPQFcONg"); // your EmailJS public key

const demoForm = document.getElementById("demoForm");
const overlay = document.getElementById("form-overlay");

if (demoForm && overlay) {
  demoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!demoForm.checkValidity()) {
      demoForm.classList.add("was-validated");
      return;
    }

    emailjs.sendForm("service_8ibej0o", "template_j0yo23b", demoForm)
      .then(() => {
        demoForm.reset();
        demoForm.classList.remove("was-validated");
        overlay.classList.remove("d-none");
      })
      .catch((error) => {
        alert("Oops! Something went wrong 😓\n" + JSON.stringify(error));
      });
  });
}

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


  const monthlyBtn = document.getElementById("monthlyBtn");
  const quarterlyBtn = document.getElementById("quarterlyBtn");
  const monthlyPlans = document.querySelectorAll(".pricing-plan.monthly");
  const quarterlyPlans = document.querySelectorAll(".pricing-plan.quarterly");

  monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("btn-dark", "active");
    monthlyBtn.classList.remove("btn-outline-dark");
    quarterlyBtn.classList.remove("btn-dark", "active");
    quarterlyBtn.classList.add("btn-outline-dark");

    monthlyPlans.forEach(plan => plan.classList.remove("d-none"));
    quarterlyPlans.forEach(plan => plan.classList.add("d-none"));
  });

  quarterlyBtn.addEventListener("click", () => {
    quarterlyBtn.classList.add("btn-dark", "active");
    quarterlyBtn.classList.remove("btn-outline-dark");
    monthlyBtn.classList.remove("btn-dark", "active");
    monthlyBtn.classList.add("btn-outline-dark");

    quarterlyPlans.forEach(plan => plan.classList.remove("d-none"));
    monthlyPlans.forEach(plan => plan.classList.add("d-none"));
  });