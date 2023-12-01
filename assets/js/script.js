document.addEventListener("DOMContentLoaded", function () {
  createStars();
});

function createStars() {
  const numStars = 300;

  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = `${Math.random() * 98}vw`;
  star.style.top = `${Math.random() * 180}vh`;
  star.style.animationDuration = `${Math.random() * 1 + 2}s`;

  const starContainer = document.querySelector("#star-container");
  starContainer.appendChild(star);
}


const btn = document.getElementById('send');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_qi6w3xy';
    const templateID = 'template_m05wvtb';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert("Message send successfully!");
        document.getElementById("form").reset();
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        alert("Message send failed!");
        document.getElementById("form").reset();
      });
  });

document.addEventListener("DOMContentLoaded", function () {
  var skillsImages = document.querySelectorAll(".skills img");

  function checkScroll() {
    skillsImages.forEach(function (img) {
      var bounding = img.getBoundingClientRect();
      if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);

  // Initial check
  checkScroll();
});