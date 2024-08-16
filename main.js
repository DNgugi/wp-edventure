let toggle = document.querySelector(".toggle");

let nav = document.querySelector(".main-nav");

toggle.addEventListener("click", (e) => {
  console.log(nav.style.display);
  if (nav.style.display == "" || nav.style.display == "none") {
    nav.style.display = "flex";
  } else if (nav.style.display == "flex") {
    nav.style.display = "none";
  }
});

// const hero__content = document.querySelector(".hero__content");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("hithere");
//       } else {
//         entry.target.classList.remove("hithere");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
// observer.observe(hero__content);

const schools__content = document.querySelector(".schools__content");

const schoolsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideright");
      } else {
        entry.target.classList.remove("slideright");
      }
    });
  }
);
schoolsObserver.observe(schools__content);

const corporate__content = document.querySelector(".corporate__content");
const corporateObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideleft");
    } else {
      entry.target.classList.remove("slideleft");
    }
  });
});
corporateObserver.observe(corporate__content);

const recreation__content = document.querySelector(".recreation__content");
const recreationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideright");
    } else {
      entry.target.classList.remove("slideright");
    }
  });
});
recreationObserver.observe(recreation__content);
