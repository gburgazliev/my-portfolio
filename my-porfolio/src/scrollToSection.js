export const scrollToSection = (id, toggleOpen) => {
  const element = document.getElementById(id);
  const body = document.body;
  let bodyWidth = window.getComputedStyle(body);
  bodyWidth = bodyWidth.width;
  bodyWidth = Number(bodyWidth.slice(0, bodyWidth.length - 2));


  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offset = -250;
    const target = elementPosition + offset;
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    })
  }

  if (bodyWidth < 1017) {
    if (toggleOpen) {
      toggleOpen();
    }
  }
};