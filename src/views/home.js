import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PPC Atlas - Master Google Ads & Meta Ads</title>
        <meta
          property="og:title"
          content="PPC Atlas - Master Google Ads & Meta Ads"
        />
      </Helmet>
      <Navigation />
      <div className="home-hero">
        <div className="home-hero-content">
          <div className="home-text-section">
            <h1 className="home-heading">
              Master PPC Advertising
            </h1>
            <p className="home-description">
              Your comprehensive knowledge base for Google Ads and Meta Ads. Learn strategies, best practices, and advanced techniques to elevate your digital advertising campaigns.
            </p>
            <div className="home-cta-buttons">
              <Link to="/google-ads-hub" className="home-button home-button-google">
                <span className="home-button-icon">
                  {/* Logo oficial Google G */}
                  <svg viewBox="0 0 533.5 544.3" width="20" height="20" fill="white">
                    <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"/>
                    <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"/>
                    <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"/>
                    <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"/>
                  </svg>
                </span>
                Google Ads Atlas
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  {/* Logo oficial Meta - infinito exacto del brand kit */}
                  <svg viewBox="0 0 287.56 191" width="22" height="15" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.06 126.77C31.06 145.71 34.8 160.34 39.57 168.85C45.64 179.43 54.07 184.46 62.61 184.46C73.54 184.46 83.57 181.2 105.42 152.83C122.83 130.3 143.24 98.63 157.08 77.34L178.93 43.08C193.89 19.41 211.19 -0.01 233.69 -0.01C253.61 -0.01 272.52 11.41 287.56 32.99V32.99C287.56 32.99 287.56 32.99 287.56 33C287.56 33 266.8 56.92 247.96 79.29C229.13 101.66 211.03 122.41 211.03 122.41C211.03 122.41 210.34 118.5 209.7 115.33C208.04 107.3 205.36 99.59 201.03 92.93C194.94 83.58 186.27 78.4 177.48 78.4C164.5 78.4 153.98 87.47 139.4 110.12C131.33 123.08 123.07 139.64 115.94 153.63C108.81 167.61 101.09 180.72 92.28 189.76C81.53 200.77 69.31 191 62.61 191C31.06 191 -0.01 163.06 -0.01 108.68C-0.01 83.55 5.56 61.2 18.06 44.21L18.07 44.21C18.07 44.21 18.07 44.22 18.08 44.22C18.08 44.22 18.08 44.22 18.08 44.22C31.06 126.77 31.06 126.77 31.06 126.77Z"/>
                    <path d="M74.08 30.76C89.23 10.55 110.64 -0.01 131.91 -0.01C145.35 -0.01 158.67 3.93 171.27 12.45C184.72 21.55 198.59 37.49 211.16 61.59L214.65 68.28C225.22 88.72 231.44 100.12 237.67 109.55C246.27 122.62 252.66 128.86 260.42 128.86C272.12 128.86 278.93 118.93 278.93 104.44C278.93 90.26 275.08 76.93 268.63 66.03L287.56 33C287.56 33 287.56 33 287.56 32.99C287.56 32.99 287.56 32.99 287.56 33L287.56 32.99C301.14 52.54 309.37 79.62 309.37 105.35C309.37 143.29 292.51 169.72 265.34 179.36C258.12 181.85 250.52 183.15 242.68 183.15C228.31 183.15 215.77 178.27 205.11 168.99C194.88 160.08 188.24 148.77 178.93 131.54L165.25 106.71C155.89 89.41 146.25 74.93 140.43 68.63C134.4 62.09 127.23 57.52 119.73 57.52C107.84 57.52 96.64 66.16 88.55 82.42C83.94 91.67 81.02 102.37 81.02 112.93C81.02 124.4 83.39 135.28 87.87 144.74L74.08 173.22C67.2 157.75 63.37 139.46 63.37 120.99C63.37 89.66 70.8 58.3 85.51 34.89L74.08 30.76Z"/>
                  </svg>
                </span>
                Meta Ads Atlas
              </Link>
            </div>
          </div>
          <div className="home-animation-section">
            <div className="home-animation-placeholder">
              <div className="home-compass-container">
                <div className="home-compass-inner">
                  <div className="home-compass-n">N</div>
                  <div className="home-compass-needle">
                    <div className="home-compass-needle-north"></div>
                    <div className="home-compass-needle-south"></div>
                  </div>
                  <div className="home-compass-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-features">
        <div className="home-features-grid">
          <div className="home-feature-card">
            <div className="home-feature-icon">📊</div>
            <h3 className="home-feature-title">Comprehensive Guides</h3>
            <p className="home-feature-description">
              In-depth articles covering every aspect of PPC advertising from foundations to advanced optimization.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🎯</div>
            <h3 className="home-feature-title">Best Practices</h3>
            <p className="home-feature-description">
              Learn proven strategies and techniques used by top PPC professionals worldwide.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon">🚀</div>
            <h3 className="home-feature-title">Actionable Insights</h3>
            <p className="home-feature-description">
              Practical tips and tactics you can implement immediately to improve your campaigns.
            </p>
          </div>
        </div>
      </div>

      <div className="home-help-section">
        <div className="home-help-content">
          <h2 className="home-help-title">Need Help?</h2>
          <p className="home-help-description">
            Get in touch with us for personalized guidance and support with your PPC campaigns.
          </p>
          <form className="home-help-form" id="contact">
            <div className="home-form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="home-form-input"
                required
              />
            </div>
            <div className="home-form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="home-form-input"
                required
              />
            </div>
            <div className="home-form-group">
              <textarea
                placeholder="How can we help you?"
                className="home-form-textarea"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="home-form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
