/* ============================
   GSAP SETUP
============================ */
gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ============================
   HERO ANIMATION (ON LOAD)
============================ */
if (!prefersReducedMotion) {
  const heroTl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 1
    }
  });

  heroTl
    .from(".hero-title span", {
      y: 30,
      opacity: 0,
      stagger: 0.08
    })
    .from(
      ".o-wrap img",
      {
        scale: 0.7,
        opacity: 0
      },
      "-=0.6"
    )
    .from(
      ".arrow path",
      {
        strokeDasharray: 400,
        strokeDashoffset: 400
      },
      "-=0.4"
    )
    .from(
      ".hero-name",
      {
        opacity: 0,
        y: 12,
        duration: 0.6
      },
      "-=0.3"
    );
}

/* ============================
   SCROLL ANIMATIONS
============================ */
if (!prefersReducedMotion) {
  /* Section headings */
  gsap.utils.toArray("h2").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 85%"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  /* Case studies */
  gsap.utils.toArray(".case").forEach((section) => {
    const items = section.querySelectorAll(".case-text, img");

    gsap.from(items, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%"
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out"
    });
  });

  /* Image rows (client projects + UI explorations) */
  gsap.utils.toArray(".image-row").forEach((row) => {
    gsap.from(row.children, {
      scrollTrigger: {
        trigger: row,
        start: "top 85%"
      },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  /* Skills */
  gsap.from(".skills > div", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  });

  /* Contact */
  gsap.from(".contact", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
}

/* ============================
   THEME TOGGLE
============================ */
function toggleTheme() {
  const body = document.body;
  body.dataset.theme =
    body.dataset.theme === "dark" ? "light" : "dark";
}
