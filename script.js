// ===============================
// Portfolio JavaScript
// Gauri Bhadoriya
// ===============================

// Typing Effect

const roles = [
    "M.Sc. Computer Science Student",
    "Web Developer",
    "Data Analytics Learner",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const heading = document.querySelector(".hero-text h2");

function typingEffect(){

    const currentRole = roles[roleIndex];

    if(!isDeleting){

        heading.textContent = currentRole.substring(0,charIndex++);
    }
    else{

        heading.textContent = currentRole.substring(0,charIndex--);
    }

    let speed = 120;

    if(!isDeleting && charIndex === currentRole.length + 1){

        isDeleting = true;
        speed = 1800;

    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;
        roleIndex++;

        if(roleIndex >= roles.length){

            roleIndex = 0;

        }

    }

    setTimeout(typingEffect,speed);

}

typingEffect();


// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll(
".card,.project-card,.skill-box span,.hero-image,.hero-text");

window.addEventListener("scroll",()=>{

    revealElements.forEach((item)=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-100){

            item.classList.add("active");

        }

    });

});


// ===============================
// Scroll To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#ff7da7";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Contact Form
// ===============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you Gauri! Your message has been submitted.");

    form.reset();

});


// ===============================
// Navbar Highlight
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Welcome Message
// ===============================

window.onload=()=>{

console.log("Welcome to Gauri Bhadoriya Portfolio 🌸");

};