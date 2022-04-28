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
  const scrooltotop=document.createElement("div");
  const header=document.querySelector('.header');
  const footer_element=document.querySelector('.footer');
  scrooltotop.classList.add("scroolTotop-style");
  scrooltotop.innerHTML='<i class="fa-solid fa-arrow-up scrool-top"></i>';

  footer_element.after(scrooltotop);  

const scroolup=()=>{
header.scrollIntoView({behavior:"smooth"})
}
  scrooltotop.addEventListener("click",scroolup);
  // ===================navbar responsive menu=================
  $(document).ready(function(){
    $(".fa-bars").click(function(){
      $('.navbar').toggleClass('.navbar')
    })
  })