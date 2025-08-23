export const scrollToSection = (index: number) => {
  const el = document.getElementById(`wiki-section-${index}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
