export const scrollToElement = (el: HTMLElement | null) => {
  if (!el) return;

  const header = document.querySelector('header');
  const offset = header ? header.getBoundingClientRect().height : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: 'smooth' });
};
