  // ===========stiky navbar===================
//   const herosection=document.querySelector('.sectionone');
//   const observer= new IntersectionObserver((entries)=>{
//     const ent=entries[0];
// !ent.isIntersecting ? document.body.classList.add("sticky"):document.body.classList.remove("sticky");
//     console.log(ent);
    
//   },{root:null,threshold:0});
//   observer.observe(herosection);

  var bannerHeight;
  $(window).scroll(function () {
    bannerHeight = $(".sectionone").height();
    if ($(window).scrollTop() >= bannerHeight + 50) {
        $('body').addClass('sticky')
    } else {
      $('body').removeClass('sticky')
    }
  });



const buttons=document.querySelector('.inner_btn');
const button=document.querySelectorAll('.p-btn');
const image=document.querySelectorAll('.sectionthree_inner_img');
buttons.addEventListener('click',(e)=>{

    const clickedbutton=e.target;
    console.log(clickedbutton);
})

//============================== swipper code==============================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // ==============================scrool to top button=================


  scrooltotop.addEventListener("click",scroolup);
  // ===================navbar responsive menu=================
  $(document).ready(function(){
    $(".menu-btn").click(function(){
      $('.navbar').toggleClass('active')
    })
  })






