const allContainer = gsap.utils.toArray('.container-item');
const venueImageWrap = document.querySelector('.container-img-wrapper');
const venueImage = document.querySelector('.container-img');

function initContainer() {
  allContainer.forEach((link) => {
    link.addEventListener('mouseenter', venueHover);
    link.addEventListener('mouseleave', venueHover);
    link.addEventListener('mousemove', moveVenueImage);
  });
}

function moveVenueImage(e) {
  let xpos = e.clientX;
  let ypos = e.clientY;
  const tl = gsap.timeline();
  tl.to(venueImageWrap, {
    x: xpos,
    y: ypos,
  });
}

function venueHover(e) {
  const tl = gsap.timeline();

  if (e.type === 'mouseenter') {
    const targetImage = e.target.dataset.img;
    tl.set(venueImage, {
      backgroundImage: `url(${targetImage})`,
    }).to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (e.type === 'mouseleave') {
    tl.to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
}

function init() {
  initContainer();
}

window.addEventListener('load', init());

const tl = gsap.timeline();

tl.from('.navbar > *', 1.6, {
  opacity: 0,
  y: 60,
  ease: Expo.easeInOut,
  delay: 0.6,
});

tl.from(
  '.logo',
  1.6,
  {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  },
  '-=1.6'
);

tl.staggerFrom(
  '.site-menu > *',
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
  },
  0.2
);

tl.staggerFrom(
  '.header > div',
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
    delay: -1.4,
  },
  0.2
);

tl.staggerFrom(
  '.item',
  1,
  {
    opacity: 0,
    y: 60,
    ease: Power2.easeOut,
    delay: -1.4,
  },
  0.2
);
