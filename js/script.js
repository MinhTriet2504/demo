// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');

  if(scrollY > 250){
    scrollUpBtn.classList.add("scrollUpBtn-active");
  }else{
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
  
  
  // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section =>{
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

          let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
          if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
            navId.classList.add("active-navlink");           
          }else{
            navId.classList.remove("active-navlink");     
          }
          
          navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
          })
  })
})  
  
  
  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  
  sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})

sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})


document.addEventListener("DOMContentLoaded", function() {
  const exploreButtons = document.querySelectorAll(".button");

  exploreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      const homeSection = document.querySelector("#about");
      homeSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});


  function redirectToFacebook() {
    window.location.href = "https://vi.aliexpress.com/item/1005004794360293.html?pdp_ext_f=%7B%22ship_from%22%3A%22CN%22%2C%22sku_id%22%3A%2212000030510133379%22%7D&scm=1007.28480.338741.0&scm_id=1007.28480.338741.0&scm-url=1007.28480.338741.0&pvid=518ba5c3-70eb-457a-8133-0a05550217fd&utparam=%257B%2522process_id%2522%253A%25221102%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522518ba5c3-70eb-457a-8133-0a05550217fd%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%252232094162%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%252210%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.338741.0%2522%252C%2522countryId%2522%253A%2522VN%2522%252C%2522scene%2522%253A%2522SD-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252355_21669%25234190%252319166%2523859_18480%25230%2523338741%25230_18480%25233885%252317676%25237%2522%252C%2522x_object_id%2522%253A%25221005004794360293%2522%257D&pdp_npi=3%40dis%21VND%21%E2%82%AB%201%2C173%2C992%21%E2%82%AB%20370%2C920%21%21%21%21%21%402101d8b516839546378921298eebec%2112000030510133379%21gsd%21%21&spm=a2g0o.11810135fornew.waterfall.0&aecmd=true&gatewayAdapt=glo2vnm";
  }

