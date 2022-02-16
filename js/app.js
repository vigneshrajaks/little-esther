const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const secEl = document.querySelector(href);
      secEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 1000,
  // reset: true,
});

sr.reveal(
  `.hero-text-box, .about-text-box, .features-text-box-n, .features-img-box-d, .community-text-box`,
  {
    origin: "left",
    interval: 300,
    opacity: 0,
    easing: "ease",
  }
);

sr.reveal(
  `.hero-img-box, .about-img-box, .features-img-box-n, .features-text-box-d, .community-img-box`,
  {
    origin: "right",
    delay: 300,
    opacity: 0,
    // delay: 1000,
    easing: "ease",
  }
);

sr.reveal(`.roadmap`, {
  origin: "bottom",
  interval: 300,
  opacity: 0,
  easing: "ease",
});
