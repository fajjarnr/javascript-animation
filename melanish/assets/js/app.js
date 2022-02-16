const tl = gsap.timeline();

tl.from('.logo', {
  y: '-100%',
  opacity: 0,
  duration: 0.8,
});

tl.from(
  '.menu',
  {
    y: '-100%',
    opacity: 0,
    duration: 0.8,
    stagger: {
      amount: 0.4,
    },
  },
  '<50%'
);

const blocks = document.querySelector('.content-container');
const content = document.querySelector('.content');

let horizontal = new HorizontalScroll.default({
  blocks: blocks,
  container: content,
  isAnimated: true,
  springEffect: 5,
});
