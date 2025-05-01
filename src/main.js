import gsap from "gsap/all";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

const business_section = document.querySelector(
  "#business-section .b"
).children;
const emblaNode = document.querySelector(".embla");
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const options = { loop: true };
const plugins = [Autoplay({ delay: 3000, stopOnMouseEnter: true })];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 900,
};

gsap.registerPlugin(ScrollTrigger);
var tl1 = gsap.timeline().delay(2);
var tl = gsap.timeline().delay(0.8);

const counter = { val: 0 };
let counterTween;

ScrollTrigger.create({
  trigger: ".user-active",
  start: "top 95%",
  end: "bottom top",
  onEnter: () => {
    const counter = { val: 0 };
    counterTween = gsap.to(counter, {
      val: 300,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        document.querySelector(".user-active").innerText = Math.floor(
          counter.val
        ).toLocaleString();
      },
    });
  },
});
ScrollTrigger.create({
  trigger: ".trusted-by-company",
  start: "top 95%",
  end: "bottom top",
  onEnter: () => {
    const counter = { val: 0 };
    counterTween = gsap.to(counter, {
      val: 230,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        document.querySelector(".trusted-by-company").innerText = Math.floor(
          counter.val
        ).toLocaleString();
      },
    });
  },
});
ScrollTrigger.create({
  trigger: ".transaction",
  start: "top 95%",
  end: "bottom top",
  onEnter: () => {
    const counter = { val: 0 };
    counterTween = gsap.to(counter, {
      val: 230,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        document.querySelector(".transaction").innerText = `$${Math.floor(
          counter.val
        ).toLocaleString()}m+`;
      },
    });
  },
});
gsap.fromTo(
  ".robot",
  { rotationZ: "-8", transformOrigin: "right" },
  {
    duration: 1,
    rotationZ: "0",
  }
);
tl1
  .fromTo(
    ".bubble-1",
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
    }
  )
  .fromTo(
    ".bubble-2",
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
    }
  )
  .fromTo(
    ".bubble-3",
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
    }
  );
gsap.fromTo(
  ".light-b",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  }
);

tl.fromTo(
  ".card-1",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 0.5,
    ease: "power1.in",
  }
)
  .fromTo(
    ".card-2",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.in",
    }
  )
  .fromTo(
    ".card-3",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power1.in",
    }
  );
const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 5500,
  freeMode: true,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    640: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
  breakpoints: {
    767: {
      spaceBetween: 0,
      slidesPerGroup: 2,
      slidesPerView: 3,
    },
  },
  breakpoints: {
    1000: {
      spaceBetween: 0,
      slidesPerGroup: 1,
      slidesPerView: 3,
    },
  },
});
ScrollReveal().reveal(business_section, {
  ...scrollRevealOption,
  interval: 300,
});
let showModal = (id, icon) => {
  let modal = document.querySelector(`#${id}`);
  document.querySelector(`.${icon} .i-1`).style.transition = "all .5s";
  document.querySelector(`.${icon} .i-2`).style.transition = "all .5s";
  document.querySelector(`.${icon} .i-3`).style.transition = "all .5s";
  modal.style.transition = "all .5s";
  if (!modal.classList.contains("active")) {
    requestAnimationFrame(function () {
      document.body.classList.toggle("overflow-y-hidden");
      modal.classList.toggle("active");
      document.querySelector(`.${icon} .i-1`).style.width = "100%";
      document.querySelector(`.${icon} .i-1`).style.transform =
        "rotate(-45deg) translate(-17px, 0)";
      document.querySelector(`.${icon} .i-3`).style.width = "100%";
      document.querySelector(`.${icon} .i-3`).style.transform =
        "rotate(45deg) translate(-17px, 0)";
      document.querySelector(`.${icon} .i-2`).style.width = "100%";
      document.querySelector(`.${icon} .i-2`).style.opacity = "0";
    });
  } else {
    requestAnimationFrame(function () {
      document.body.classList.toggle("overflow-y-hidden");
      modal.classList.toggle("active");
      document.querySelector(`.${icon} .i-1`).style.width = "80%";
      document.querySelector(`.${icon} .i-1`).style.transform =
        "rotate(0deg) translate(0px, 0)";
      document.querySelector(`.${icon} .i-3`).style.width = "60%";
      document.querySelector(`.${icon} .i-3`).style.transform =
        "rotate(0deg) translate(0px, 0)";
      document.querySelector(`.${icon} .i-2`).style.width = "100%";
      document.querySelector(`.${icon} .i-2`).style.opacity = "1";
    });
  }
  modal.addEventListener("click", (e) => {
    e.stopPropagation();
    requestAnimationFrame(function () {
      modal.classList.remove("active");
      document.body.classList.remove("overflow-y-hidden");
      document.querySelector(`.${icon} .i-1`).style.width = "80%";
      document.querySelector(`.${icon} .i-1`).style.transform =
        "rotate(0deg) translate(0px, 0)";
      document.querySelector(`.${icon} .i-3`).style.width = "60%";
      document.querySelector(`.${icon} .i-3`).style.transform =
        "rotate(0deg) translate(0px, 0)";
      document.querySelector(`.${icon} .i-2`).style.width = "100%";
      document.querySelector(`.${icon} .i-2`).style.opacity = "1";
    });
  });
};
window.showModal = showModal;
