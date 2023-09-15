window.sr = ScrollReveal({reset: true});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');

console.log(navLinks);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        


        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let correspondingLink = document.querySelector('ul li a[href="#' + id + '"]');
            if (correspondingLink) {
                correspondingLink.classList.add('active');
        };
    }
});
} 

/* sr.reveal('#intro',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    ); */
sr.reveal('.description',{distance: '-100px',
    duration:3000}
)
sr.reveal('#intro img',{delay: 700,
    distance:'70px',
    duration: 3000}
)

sr.reveal('#aboutme',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );

sr.reveal('#featured',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );

sr.reveal('#contact',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );

/* Add Blur to header */
 const blurNavbar = () =>{
     
     const navbar = document.querySelector('.navbar');
    this.scrollY >= 50 ? navbar.classList.remove('navbar-blur') 
                        :navbar.classList.add('navbar-blur') 
                       
};
 window.addEventListener('scroll', blurNavbar)

 /*===============================SCROLL UP ========================= */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)

/* =============================== CHANGE THEME ====================================== */
const changeThemeBtn = document.querySelector('#change-theme')

changeThemeBtn.addEventListener("change",()=>{
    document.body.classList.toggle('dark')
});