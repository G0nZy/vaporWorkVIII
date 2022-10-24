      //  BUTTON LEFT
       // Set the width of the sidebar to 250px and the left margin of the page content to 250px */
      function openNav() {
      document.getElementById("mySidebar").style.width = "75%";
      //   document.getElementById("main").style.marginLeft = "250px";
      }
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      } 



      // BUTTON RIGHT
       // Set the width of the sidebar to 250px and the left margin of the page content to 250px */
   function openNav1() {
    document.getElementById("mySidebar1").style.width = "75%";
    //   document.getElementById("main").style.marginLeft = "250px";
    }
    
    // Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav1() {
    document.getElementById("mySidebar1").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    } 
    
      
      

// SWIPER JS
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



     
    


  //  Desktop Dev Log JS
  document.querySelectorAll(".projcard-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
    });
    
    
    // document.getElementById("pictureBox1").onclick = function(){myFunction1()};
    function card1Function(){
      window.location.href = "https://www.google.com/";
    };
    
    // document.getElementById("card55").onclick = function(){cardF()};
    // function cardF(){
    //     window.location.href = "https://www.google.com/";
    // };
    
    document.getElementById("card55").href = "https://www.google.com/";
    // END OF DEV LOG JS




    
    // NOT WORKING
    // NEW LINK TREE SCRIPTS 
    const emailBtn = document.getElementById('tLink7');
    emailBtn.addEventListener('click', function handleClick(){
      emailBtn.textContent = 'therealg0nzy@protonmail.ch';
    });
    // END OF LINKTREE SCRIPTS
    