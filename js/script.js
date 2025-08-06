  // Hide preloader after page load
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });

    function animateCount(el, stop, speed) {
    let start = 0;
    const duration = Math.floor(speed / stop);
    el.textContent = '0'; // reset to 0 before each animation

    const counter = setInterval(() => {
      start++;
      el.textContent = start;
      if (start >= stop) {
        clearInterval(counter);
      }
    }, duration);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.count-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const stop = parseInt(el.getAttribute('data-stop'));
          const speed = parseInt(el.getAttribute('data-speed'));

          // Always animate (no once-only check)
          animateCount(el, stop, speed);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  document.addEventListener("DOMContentLoaded", initCounters);
  // Handle location click with preloader
  document.querySelectorAll('.location-option').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      const selectedLocation = this.getAttribute('data-location');
      document.getElementById('locationDropdown').textContent = selectedLocation;

      const currentPage = window.location.pathname.split("/").pop();

      if (currentPage === "index.html" || currentPage === "") {
        // Already on index, just update dropdown
        return;
      }

      // Show preloader and redirect after 1 sec
      document.getElementById("preloader").style.display = "flex";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    });
  });
  // Accrodion
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

   const buttons = document.querySelectorAll('.filter-buttons button');
  const items = document.querySelectorAll('.gallery-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

 $(document).ready(function(){
      $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1024: {
            items: 3
          }
        }
      });
    });

      const phoneInput = document.querySelector("#phone");
  window.intlTelInput(phoneInput, {
    initialCountry: "in", // Set India as default
    preferredCountries: ["in", "us", "gb", "ae", "au"],
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // for formatting
  });
