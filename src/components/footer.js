import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo-group">
                <span className="footer-logo-text">PPC Lexicon</span>
                <span className="footer-tagline">
                  The Definitive Hub for SEM Intelligence
                </span>
              </div>
              <p className="section-content footer-description">
                A structured knowledge hub for Google Ads and Meta Ads
                specialists. Permanent, ordered, and technically deep.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="LinkedIn Profile"
                    className="footer-social-item"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Twitter Profile"
                    className="footer-social-item"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
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
            <nav aria-label="Footer Navigation" className="footer-nav-grid">
              <div className="footer-nav-column">
                <h2 className="footer-nav-title section-subtitle">
                  Knowledge Hub
                </h2>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Google Ads Encyclopedia</span>
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 7h10v10M7 17L17 7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Meta Ads Framework</span>
                        <svg
                          width="14"
                          xmlns="http://www.w3.org/2000/svg"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 7h10v10M7 17L17 7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>SEM Lexicon Terms</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Technical Audits</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h2 className="footer-nav-title section-subtitle">Company</h2>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>About the Specialist</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Consulting Services</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Success Stories</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Contact Hub</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-nav-column">
                <h2 className="footer-nav-title section-subtitle">
                  Legal &amp; Access
                </h2>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Terms of Service</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Cookie Settings</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Sitemap</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="footer-newsletter">
            <div className="footer-newsletter-content">
              <h2 className="section-subtitle">Weekly Insights</h2>
              <p className="section-content">
                No spam. Only deep technical updates on PPC algorithms.
              </p>
            </div>
            <form
              action="/subscribe"
              method="POST"
              data-form-id="61c6d79c-1543-485b-ae58-75673a6a6558"
              className="footer-form"
            >
              <div className="footer-input-wrapper">
                <input
                  type="email"
                  id="thq_email_Wbgy"
                  name="email"
                  required="true"
                  aria-label="Email for newsletter"
                  placeholder="Enter your email"
                  data-form-field-id="thq_email_Wbgy"
                  className="footer-input"
                />
                <button
                  id="thq_button_bd-g"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_bd-g"
                  className="footer-submit-btn btn-sm btn btn-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>
                &amp;copy; 2026 PPC Lexicon. All rights reserved. Built for
                technical clarity.
              </span>
            </div>
            <div className="footer-status">
              <span className="footer-status-dot"></span>
              <span className="footer-status-text">
                Algorithms Synced: 100%
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes pulse {0% {opacity: 0.5;}
50% {opacity: 1;}
100% {opacity: 0.5;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-logic">
(function(){
  const footerForm = document.querySelector(".footer-form")

  if (footerForm) {
    footerForm.addEventListener("submit", function (e) {
      const emailInput = this.querySelector(".footer-input")
      const submitBtn = this.querySelector(".footer-submit-btn")

      if (emailInput.checkValidity()) {
        const originalText = submitBtn.textContent
        submitBtn.textContent = "Subscribed"
        submitBtn.disabled = true
        submitBtn.style.backgroundColor = "#2ecc71"
        submitBtn.style.borderColor = "#2ecc71"

        emailInput.value = ""
        emailInput.placeholder = "Thank you for joining."
        emailInput.disabled = true
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
