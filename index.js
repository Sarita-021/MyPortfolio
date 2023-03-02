// ---------------------------scroll animation-----------------------------------

window.addEventListener('scroll', () => {
    let content = document.querySelectorAll('.hidden');
    content.forEach(hidden => {
        let contentPosition = hidden.getBoundingClientRect().top; 
        let screenPosition = window.innerHeight/1.3;
        if(contentPosition< screenPosition){
            hidden.classList.add('show');
        }else{
            hidden.classList.remove('show');
        }
    })
});

// -------------------------------------------Navbar js----------------------------------------------

var header = document.getElementById("navbar");
var navlink = header.getElementsByClassName("nav-link");
for (var i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// ------------------------------------------Way 1 scroll animation ------------------------------------

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".nav-link");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if ( scrollY >= sectionTop - 200) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//         li.classList.add("active");
//     }
//   });
// };

//    ---------------------------------------------type animation ---------------------------------------------------

var typed = new Typed(".auto-type" , {
    strings : ["Full Stack Web Developer." , "MERN Stack Web Developer"] ,
    typeSpeed : 100 ,
    backSpeed : 100 ,
    loop : true 
    })

//    --------------------------------------- Way 2 scroll Animation --------------------------------------------------


const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section'); 

window.addEventListener('scroll', () => {
    let current = '' ;
    sections.forEach(section => {
        let sectionTop = section.offsetTop  ;
        if (scrollY > sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach(li => {
        li.classList.remove("active");
        document.querySelector('nav ul li a[href*= ' + current +']').classList.add('active');
    })
}

)