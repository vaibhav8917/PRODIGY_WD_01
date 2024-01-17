function changeColor() {
    const navbar = document.querySelector('#nav');
    var y = window.scrollY;
    var lastpos = 0;
    if (y > 50) {
        navbar.style.backgroundColor = 'rgba(39, 70, 133, 0.546)';
    }

    if (y < 50) {
        navbar.style.backgroundColor = 'transparent';
    }
}
window.addEventListener('scroll', changeColor);

var curIndex = 0;
var dots = document.querySelectorAll('.dot');
function slider(index){
    var slides = document.querySelectorAll('.slide');

    if(index < 0){
        curIndex = slides.length - 1;
    }
    else if(index >= slides.length){
        curIndex = 0;
    }

    slides.forEach((slide) => slide.style.display = 'none');

    slides[curIndex].style.display = 'flex';

    dots.forEach((dot, i) => {
        if (i == curIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
slider(curIndex);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        curIndex = index;
        slider(curIndex);
    })
})

setInterval(() => {
    curIndex++;
    slider(curIndex);
}, 5000);


function loadingAnimation(){
    gsap.fromTo(".nav-links a", 
        {
            transform: "translateY(-40px)",
            opacity:0
        },
        {
            transform: "translateY(0px)",
            opacity:1,
            stagger:0.1,
            duration:0.2
        }
    );

    gsap.to('#phone_1', {
        left:"20%",
        opacity: 1,
        stagger:0.2,
        duration:0.8,
        delay:0.1
    });

    gsap.to('#phone_2', {
        left:"36%",
        opacity: 1,
        stagger:0.2,
        duration:0.8,
        delay:0.3
    });

    gsap.fromTo('.anim',
        {
            transform: "translateX(-100px)",
            opacity:0,
        },
        {
            transform: "translateX(0px)",
            opacity:1,
            duration:0.3,
            stagger:0.3,
            delay:0.2
        }
    )

}

loadingAnimation();

function scrollAnimation(){
    gsap.fromTo('.feature-section h1',
        {
            y:200,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:0.5,
            stagger:0.2,
            delay:0.3,
            scrollTrigger:{
                trigger:".feature-section h1",
                scroller:"body",
                start:"-200px 50%",
                end:"-50px 50%",
                // markers:true,
                scrub:false
            }
        }
    );

    gsap.fromTo('.feature-section .card',
        {
            y:200,
            opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:0.5,
            stagger:0.2,
            delay:0.3,
            scrollTrigger:{
                trigger:".feature-section h1",
                scroller:"body",
                start:"top 50%",
                end:"bottom 50%",
                // markers:true,
                scrub:false
            }
        }
    );

    gsap.to('.intro-section img',{
        opacity:1,
        duration:0.3,
        delay:0.5,
        scrollTrigger:{
            trigger:".intro-section img",
            scroller:"body",
            start:"0 50%",
            end:"100px 50%",
            // markers:true,
            scrub:false
        }
    });

    gsap.fromTo('.steps-section .step',
        {
            transform: "translateX(100px)",
            opacity:0
        },
        {
            transform: "translateX(0px)",
            opacity:1,
            duration:0.3,
            stagger:0.3,
            delay:0.5,
            scrollTrigger:{
                trigger:".steps-section .step",
                scroller:"body",
                start:"0 50%",
                end:"10px 50%",
                scrub:false
            }
        }
    )

    gsap.fromTo("#emp-img1",
        {
            transform:"translateX(500px)",
            opacity:0
        },
        {
            transform:"translateX(0px)",
            opacity:1,
            duration:0.8,
            delay:0.3,
            scrollTrigger:{
                trigger:"#emp-img1",
                scroller:"body",
                start:"10px 50%",
                end:"20px 50%",
                scrub:false
            }
        }
    );

    gsap.fromTo("#emp-img2",
        {
            transform:"translateX(-500px)",
            opacity:0
        },
        {
            transform:"translateX(0px)",
            opacity:1,
            duration:0.8,
            delay:0.3,
            scrollTrigger:{
                trigger:"#emp-img2",
                scroller:"body",
                start:"10px 50%",
                end:"20px 50%",
                scrub:false
            }
        }
    );
}
scrollAnimation();

var button = document.getElementById('nav-btn');
button.addEventListener('click', ()=> {
    if (button.classList.contains('fa-bars')) {
        button.classList.remove('fa-bars');
        button.classList.add('fa-xmark');
        document.querySelector('.nav-popup').style.display = 'flex';
    }
    else{
        button.classList.remove('fa-xmark');
        button.classList.add('fa-bars');
        document.querySelector('.nav-popup').style.display = 'none';
    }
})

