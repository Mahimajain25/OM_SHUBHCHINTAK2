// Custom JS Loaded
console.log("Custom JS loaded!");

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------
     ACTIVE NAVBAR LINK
  --------------------------------- */
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /* ---------------------------------
     ENQUIRE NOW MODAL (Youform)
  --------------------------------- */
  const modal = document.getElementById("enquireModal");
  const enquireBtn = document.querySelector(".btn-custom");
  const closeBtn = document.querySelector(".close-btn");

  if (modal && enquireBtn && closeBtn) {

    // Open modal
    enquireBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // prevent background scroll
    });

    // Close modal on X click
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

  }

  /* ---------------------------------
     OPTIONAL: AUTO CLOSE MODAL
     AFTER YOUFORM SUBMISSION
  --------------------------------- */
  window.addEventListener("message", function (event) {
    if (event.data === "youform:submission") {
      alert("Thank you for your enquiry!");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

});
