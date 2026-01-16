// year
document.getElementById("y").textContent = String(new Date().getFullYear());

// sticky header elevate
const header = document.querySelector(".header");
const onScroll = () => {
  header.dataset.stuck = window.scrollY > 10 ? "true" : "false";
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    }
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// mobile drawer
const menuBtn = document.querySelector(".menuBtn");
const drawer = document.querySelector(".drawer");

const setDrawer = (open) => {
  menuBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    drawer.hidden = false;
    drawer.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 180,
      easing: "ease-out",
    });
  } else {
    const a = drawer.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 160,
      easing: "ease-in",
    });
    a.onfinish = () => (drawer.hidden = true);
  }
};

menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  setDrawer(!open);
});

drawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => setDrawer(false));
});

// toTop
document.querySelector(".toTop")?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
