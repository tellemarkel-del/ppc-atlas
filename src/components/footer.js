import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">PPC Atlas</Link>
          <p className="footer-tagline">
            Your comprehensive knowledge base for Google Ads & Meta Ads.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <Link to="/google-ads-hub" className="footer-link">Google Ads Atlas</Link>
            <Link to="/meta-ads-hub" className="footer-link">Meta Ads Atlas</Link>
            <Link to="/about" className="footer-link">About Me</Link>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/cookies" className="footer-link">Cookie Settings</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2026 PPC Atlas. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
