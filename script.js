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
                document.querySelector('ul li a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};

sr.reveal('#intro',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );

sr.reveal('#aboutme',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );

sr.reveal('#featured',{
    duration: 3000,
    rotate:{x: 30, y: 30, z: 0}}
    );