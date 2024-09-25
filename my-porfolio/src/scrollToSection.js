export const scrollToSection = (id, toggleOpen) => {
  const element = document.getElementById(id);
  const body = document.body;
  let bodyWidth = window.getComputedStyle(body);
  bodyWidth = bodyWidth.width;
  bodyWidth = Number(bodyWidth.slice(0, bodyWidth.length - 2));


  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const viewportHeight = window.innerHeight;
    const elementHeight = element.getBoundingClientRect().height;

    // Calculate offset to center the element vertically
    const offset = (viewportHeight - elementHeight) / 2;
    
    // Calculate the final target position to scroll to
    const target = elementPosition - offset
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