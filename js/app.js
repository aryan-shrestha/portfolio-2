const downArrowAnimation = () => {
  const downArrowContainer = document.querySelector(".down-arrow-container");
  const downArrow = document.querySelector(".down-arrow");
  downArrowContainer.addEventListener("mousemove", (event) => {
    let distanceX = event.clientX - downArrow.getBoundingClientRect().left;
    let distanceY = event.clientY - downArrow.getBoundingClientRect().top;
    console.log(distanceX);
    gsap.to(downArrow, {
      left: distanceX,
      top: distanceY,
    });
  });

  downArrowContainer.addEventListener("mouseleave", (event) => {
    console.log("mouse left");
    gsap.to(downArrow, {
      left: "",
      top: "",
    });
  });
};

downArrowAnimation();

const animatedGrain = () => {
  grained('#hero-section', {
    "animate": true,
    "patternWidth": 200,
    "patternHeight": 100,
    "grainOpacity": 0.15,
    "grainDensity": 1,
    "grainWidth": 1.1,
    "grainHeight": 1
  });
}

animatedGrain()