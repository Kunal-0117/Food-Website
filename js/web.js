function debounce(func, timeout = 30){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

// function throttle (callback, limit=25) {
//   let tick = false;
//   return function () {
//     if (!tick) {
//       callback.call();
//       tick = true;
//       setTimeout(function () {
//         tick = false;
//       }, limit);
//     }
//   }
// }

function activeNav() {
  const navLinks = Array.from(document.getElementsByClassName('nav_panel')[0].children);
  navLinks.forEach(navLink => {
      let navLinkid = document.getElementById(navLink.getAttribute("href").slice(1));
      navLink.classList.remove("active");
      if ((window.scrollY > navLinkid.offsetTop -150) && (window.scrollY < (navLinkid.offsetTop + navLinkid.offsetHeight -150))) {
          navLink.classList.add("active");
      };
  });
};

function scrollToTop() {
      //Go to Top Button JS 
    const topBtn = document.getElementById("top");
    pastServices = (window.innerHeight + window.scrollY > document.getElementById("about").offsetTop)
    let method = pastServices ? "add" : "remove";
    topBtn.classList[method]("visible");
}

function onLoadFuncs() {
  // Run the below functions when the window loads
  scrollToTop();
  activeNav();
}

// Events 
document.addEventListener("scroll", debounce(scrollToTop));
document.addEventListener("scroll", debounce(activeNav));
window.addEventListener("load", onLoadFuncs);