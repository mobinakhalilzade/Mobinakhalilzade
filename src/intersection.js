document.querySelectorAll(".bar").forEach((el) => {
  const observer = new IntersectionObserver(
    (intersections) => {
      intersections.forEach(({ target, isIntersecting }) => {
        target.classList.contains("animate")
          ? observer.disconnect()
          : target.classList.toggle("animate", isIntersecting);
      });
    },
    {
      threshold: 0,
    }
  );

  observer.observe(el);
});