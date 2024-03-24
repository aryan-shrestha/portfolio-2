gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.services-card');
const header = document.querySelector('.service-header');
const animation = gsap.timeline()
let cardHeight

function initCards() {
    animation.clear()
    cardHeight = cards[0].offsetHeight
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

const changeBackground = () => {
    const body = document.querySelector('body');

    const tlServices = gsap.timeline({
        scrollTrigger: {
            markers: false,
            trigger: ".services-section",
            start: "top 80%",
            end: "bottom 30%%",
            toggleActions: "play reverse play reverse",
        },
    });

    const tlPortfolio = gsap.timeline({
        scrollTrigger: {
            markers: false,
            trigger: ".porfolio-section",
            start: "top 30%",
            end: "bottom 0%",
            toggleActions: "play reverse play reverse",
        },
    });

    tlServices.to(body, { backgroundColor: "#000" }, "bodyColor");
    // tlPortfolio.to(body, { backgroundColor: "yellow" })
    tlPortfolio.to(".services-section", { opacity: "0" });
}

changeBackground();
