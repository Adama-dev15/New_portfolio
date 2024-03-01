import React, { useEffect } from "react";

const NewHeaderView = () => {
  // Function to handle click on mobile nav toggle
  const toggleMobileNav = () => {
    const navbar = document.getElementById("navbar");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

    if (navbar && mobileNavToggle) {
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        mobileNavToggle.classList.remove("bi-x");
        mobileNavToggle.classList.add("bi-list");
        document.querySelectorAll(".navbar ul").forEach((ul) => {
          ul.style.display = "none";
        });
      } else {
        navbar.classList.add("navbar-mobile");
        mobileNavToggle.classList.remove("bi-list");
        mobileNavToggle.classList.add("bi-x");
        document.querySelectorAll(".navbar ul").forEach((ul) => {
          ul.style.display = "block";
        });
      }
    }
  };

  // Function to handle click on nav links
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const section = document.querySelector(targetId);

    if (section) {
      const navbar = document.getElementById("navbar");
      const header = document.getElementById("header");
      const navlinks = document.querySelectorAll("#navbar .nav-link");

      navlinks.forEach((link) => {
        link.classList.remove("active");
      });
      e.currentTarget.classList.add("active");

      if (navbar.classList.contains("navbar-mobile")) {
        toggleMobileNav();
      }

      if (targetId === "#header") {
        header.classList.remove("header-top");
        document.querySelectorAll("section").forEach((item) => {
          item.classList.remove("section-show");
        });
        return;
      }

      if (!header.classList.contains("header-top")) {
        header.classList.add("header-top");
        setTimeout(() => {
          document.querySelectorAll("section").forEach((item) => {
            item.classList.remove("section-show");
          });
          section.classList.add("section-show");
        }, 350);
      } else {
        document.querySelectorAll("section").forEach((item) => {
          item.classList.remove("section-show");
        });
        section.classList.add("section-show");
      }

      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  // Function to handle hash links on page load
  const activateSectionOnLoad = () => {
    if (window.location.hash) {
      const initialNav = document.querySelector(window.location.hash);

      if (initialNav) {
        const header = document.getElementById("header");
        const navlinks = document.querySelectorAll("#navbar .nav-link");

        header.classList.add("header-top");

        navlinks.forEach((link) => {
          if (link.getAttribute("href") === window.location.hash) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });

        setTimeout(() => {
          document.querySelectorAll("section").forEach((item) => {
            item.classList.remove("section-show");
          });
          initialNav.classList.add("section-show");
        }, 350);

        window.scrollTo({
          top: initialNav.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  };

  // Event listener for mobile nav toggle
  useEffect(() => {
    document
      .querySelector(".mobile-nav-toggle")
      .addEventListener("click", toggleMobileNav);
  }, []);

  // Event listener for nav links
  useEffect(() => {
    document
      .querySelectorAll("#navbar .nav-link")
      .forEach((link) => link.addEventListener("click", scrollToSection));
  }, []);

  // Call function to activate section on page load
  useEffect(() => {
    activateSectionOnLoad();
  }, []);

  return (
    <div>
      <header id="header">
        <div className="container">
          <h1>
            <a href="index.html">Emily Jones</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> --> */}
          <h2>
            I'm a passionate <span>graphic designer</span> from New York
          </h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link active" href="#header">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NewHeaderView;
