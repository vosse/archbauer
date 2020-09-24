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


tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
tl.to('.intro', { y: '-100%', duration: 1, delay: 0.3 })


navSlide()