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
                  <svg viewBox="0 0 48 48" fill="none" width="20" height="20">
                    <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2"/>
                  </svg>
                </span>
                Google Ads Hub
              </Link>
              <Link to="/meta-ads-hub" className="home-button home-button-meta">
                <span className="home-button-icon">
                  <svg viewBox="0 0 48 48" fill="none" width="20" height="20">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm0 36c-8.837 0-16-7.163-16-16S15.163 8 24 8s16 7.163 16 16-7.163 16-16 16z" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2.5"/>
                    <path d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2.5"
                          strokeLinecap="round"/>
                    <path d="M32 24c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2.5"
                          strokeLinecap="round"/>
                  </svg>
                </span>
                Meta Ads Hub
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
