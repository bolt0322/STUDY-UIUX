document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelectorAll(".home-link");
    const introduceLink = document.querySelectorAll(".introduce-link");
    const travelLink = document.querySelectorAll(".travel-link");
    const movieLink = document.querySelectorAll(".movie-link");
  
    homeLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToSection("#main");
      });
    });
  
    introduceLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToSection("#introduce");
      });
    });
    travelLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToSection("#travel");
      });
    });
    movieLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        scrollToSection("#movie");
      });
    });
  
    function scrollToSection(sectionSelector) {
      const section = document.querySelector(sectionSelector);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });