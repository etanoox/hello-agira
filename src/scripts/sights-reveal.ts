const targets = document.querySelectorAll<HTMLElement>('.sights-editorial-card, .sights-more-card, .food-place-card, .stay-criterion, .history-chapter, .events-reveal');
if (targets.length && !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-sights-reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -4% 0px' });
  targets.forEach(target => observer.observe(target));
}
