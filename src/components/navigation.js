import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="PPC Lexicon Home" className="navigation-brand">
              <span className="section-title navigation-logo-text">
                PPC Atlas
              </span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li className="navigation-link-item">
                <a href="/">
                  <div className="navigation-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/google-ads">
                  <div className="navigation-link">
                    <span>Google Ads</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/meta-ads">
                  <div className="navigation-link">
                    <span>Meta Ads</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/services">
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/about">
                  <div className="navigation-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li className="navigation-link-item">
                <a href="/case">
                  <div className="navigation-link">
                    <span>Case</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="/contact">
              <div className="btn-sm btn navigation-cta btn-primary">
                <span>Get Started</span>
              </div>
            </a>
          </div>
          <button
            id="nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-icon-open"
            >
              <path
                d="M4 8h16M4 16h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="nav-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div aria-label="PPC Lexicon Home" className="navigation-brand">
              <span className="section-title navigation-logo-text">
                PPC Lexicon
              </span>
            </div>
          </a>
          <button
            id="nav-close"
            aria-label="Close navigation menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-mobile-links">
            <li className="navigation-mobile-item">
              <a href="/">
                <div className="navigation-mobile-link">
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/google-ads">
                <div className="navigation-mobile-link">
                  <span>Google Ads</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/meta-ads">
                <div className="navigation-mobile-link">
                  <span>Meta Ads</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/services">
                <div className="navigation-mobile-link">
                  <span>Services</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/about">
                <div className="navigation-mobile-link">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="navigation-mobile-item">
              <a href="/case">
                <div className="navigation-mobile-link">
                  <span>Case</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <a href="/contact">
              <div className="btn-lg btn btn-primary navigation-mobile-cta">
                <span>Start Your Audit</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7l7 7l-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-mobile-link, .navigation-link {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("nav-toggle")
  const closeBtn = document.getElementById("nav-close")
  const overlay = document.getElementById("nav-overlay")
  const body = document.body

  const openMenu = () => {
    overlay.classList.add("is-active")
    toggleBtn.setAttribute("aria-expanded", "true")
    body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    overlay.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    body.style.overflow = ""
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  overlay.querySelectorAll(".navigation-mobile-link").forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && !overlay.classList.contains("is-active")) {
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      navWrapper.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
