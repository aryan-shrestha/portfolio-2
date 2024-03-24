gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.services-card');
const header = document.querySelector('.service-header');
const animation = gsap.timeline()
let cardHeight



function initCards() {
    animation.clear()
    cardHeight = cards[0].offsetHeight
    console.log("initCards()", cardHeight)
    cards.forEach((card, index) => {
        if (index > 0) {
            //increment y value of each card by cardHeight
            gsap.set(card, { y: index * cardHeight })
            //animate each card back to 0 (for stacking)
            animation.to(card, { y: 0, duration: index * 0.5, ease: "none" }, 0)

        }
    })
}

initCards()

ScrollTrigger.create({
    trigger: "#serviceSectionScrollTrigger",
    start: "top top",
    pin: true,
    end: () => `+=${(cards.length * cardHeight) + header.offsetHeight}`,
    scrub: true,
    animation: animation,
    markers: false,
    invalidateOnRefresh: true
})

ScrollTrigger.addEventListener("refreshInit", initCards)
