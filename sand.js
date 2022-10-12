       /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
      function openNav() {
      document.getElementById("mySidebar").style.width = "75%";
      //   document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      } 
      
      


      var swiper = new Swiper(".mySwiper", {
       effect: "coverflow",
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: "auto",
       loop: true,
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: false,
       },
       pagination: {
         el: ".swiper-pagination",
       },
     });
