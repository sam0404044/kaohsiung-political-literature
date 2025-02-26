document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function fadeInOnScroll() {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        element.classList.add("show");
      }
    });
  }

  // 初次載入時檢查
  fadeInOnScroll();

  // 滾動時檢查
  window.addEventListener("scroll", fadeInOnScroll);
});
