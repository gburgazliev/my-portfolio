export const scrollToSection = (id, toggleOpen) => {
  const element = document.getElementById(id);
  const body = document.body;
  let bodyWidth = window.getComputedStyle(body);
  bodyWidth = bodyWidth.width;
  bodyWidth = Number(bodyWidth.slice(0, bodyWidth.length - 2));


  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  if (bodyWidth < 1017) {
    if (toggleOpen) {
      toggleOpen();
    }
  }
};