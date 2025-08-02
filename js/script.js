

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