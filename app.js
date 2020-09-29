const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLinks = document.querySelector(".nav-links")

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active')
    })
}




const tl = gsap.timeline({defaults: {
    ease: 'power1.out'
}})



// change values back to 1 instead of 0.1

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
tl.to('.intro', { y: '-100%', duration: 1, delay: 0.3 })
tl.from('.big-text', { opacity: 0, duration:1, y: -50})


navSlide()