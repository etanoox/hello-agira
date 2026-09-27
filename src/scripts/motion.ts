import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const scene = document.querySelector<HTMLElement>('[data-journey]');
const media = gsap.matchMedia();

// Every animated style belongs to matchMedia, so changing the system's motion
// preference also restores readable static content without a reload.
if (scene) {
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } });
    entrance.from('.journey-letter', { yPercent: 105, rotation: 5, duration: 1.15, stagger: .055 })
      .from('.journey-aperture', { opacity: 0, duration: 1.15 }, .1)
      .from('.journey-title-line, .journey-aside, .journey-meta, .journey-scroll', { y: 22, opacity: 0, duration: .8, stagger: .07 }, .35);

    const headings = gsap.utils.toArray<HTMLElement>('.intro-grid .display-title, .section-heading h2, .pastry-copy h2, .food-grid h2, .stay-copy h2, .event-grid h2, .history-grid h2, .info-grid h2');
    headings.forEach(heading => gsap.from(heading, {
      y: 38, opacity: 0, duration: .85, ease: 'power3.out',
      scrollTrigger: { trigger: heading, start: 'top 93%', once: true },
    }));
    gsap.utils.toArray<HTMLElement>('.gateway, .route-card').forEach((card,i) => {
      gsap.from(card, { y: 28, opacity: 0, duration: .7, delay: i % 3 * .06,
        scrollTrigger: { trigger: card, start: 'top 95%', once: true } });
    });
    return () => { entrance.kill(); };
  });

  media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
    scene.classList.add('journey--scrub');
    const opening = gsap.timeline({ scrollTrigger: {
      trigger: scene, start: 'top top', end: 'bottom bottom', scrub: .7,
      invalidateOnRefresh: true,
    }});
    opening.to('.journey-aperture', { '--opening-top': 0, '--opening-side': 0, '--opening-bottom': 0, '--opening-radius': '0px', '--opening-foot': '0px', duration: 1, ease: 'none' }, 0)
      .fromTo('.journey-image', { scale: 1.14 }, { scale: 1, duration: 1, ease: 'none' }, 0)
      .to('.journey-word', { yPercent: -40, scale: .85, opacity: 0, duration: .8, ease: 'none' }, .05)
      .to('.journey-scroll-line i', { scaleY: 1, transformOrigin: 'top', duration: 1, ease: 'none' }, 0)
      .to('.journey-scroll', { opacity: 0, duration: .2 }, .8);

    gsap.fromTo('.pastry-visual figure', { rotation: -5, y: 45 }, {
      rotation: 3, y: -20, ease: 'none', scrollTrigger: { trigger: '.pastry-section', start: 'top bottom', end: 'bottom top', scrub: 1.1 },
    });
    gsap.fromTo('.pastry-giant', { xPercent: 10 }, { xPercent: -12, ease: 'none',
      scrollTrigger: { trigger: '.pastry-section', start: 'top bottom', end: 'bottom top', scrub: .8 } });
    gsap.utils.toArray<HTMLElement>('.pastry-tags span').forEach((tag,i) => {
      gsap.fromTo(tag, { y: i % 2 ? -35 : 35, rotation: i % 2 ? 8 : -7 }, {
        y: i % 2 ? 20 : -20, rotation: i % 2 ? -5 : 5, ease: 'none',
        scrollTrigger: { trigger: '.pastry-section', start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });
    gsap.fromTo('.stay-photo img', { yPercent: -8 }, { yPercent: 8, ease: 'none',
      scrollTrigger: { trigger: '.stay-section', start: 'top bottom', end: 'bottom top', scrub: .7 } });
    return () => { scene.classList.remove('journey--scrub'); };
  });

  // Hover adds a small amount of depth only on devices with a precise pointer.
  media.add('(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    const image = scene.querySelector<HTMLElement>('.journey-photo')!;
    const x = gsap.quickTo(image, 'x', { duration: .8, ease: 'power3.out' });
    const y = gsap.quickTo(image, 'y', { duration: .8, ease: 'power3.out' });
    const move = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      x((event.clientX / rect.width - .5) * 18);
      y((event.clientY / window.innerHeight - .5) * 12);
    };
    const reset = () => {x(0);y(0);};
    scene.addEventListener('pointermove', move);
    scene.addEventListener('pointerleave', reset);
    return () => {scene.removeEventListener('pointermove',move);scene.removeEventListener('pointerleave',reset);};
  });
  // Refresh after font metrics settle; image dimensions are reserved in HTML.
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => ScrollTrigger.refresh()));
}

if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
