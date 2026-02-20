import React from "react"
import { Helmet } from "react-helmet"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "./about.css"

const profilePhotoSrc = "data:image/jpeg;base64,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"

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Me - PPC Atlas</title>
        <meta property="og:title" content="About Me - PPC Atlas" />
      </Helmet>
      <Navigation />
      <div className="about-hero">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">PPC Specialist with proven track record in Google Ads and Meta Ads</p>
      </div>
      <div className="about-content">
        <div className="about-wrapper">
          <section className="about-section">
            <div className="about-intro">
              <div className="about-image-container">
                <img src={profilePhotoSrc} alt="Profile" className="about-profile-image" />
              </div>
              <div className="about-intro-text">
                <h2 className="about-heading">Your PPC Expert</h2>
                <p className="about-text">
                  With over 5 years of hands-on experience in PPC, I help businesses turn paid traffic into predictable, scalable revenue. I specialize in Google Ads and Meta Ads, building performance-focused campaigns that go beyond vanity metrics and concentrate on what truly matters: profitable growth.
                </p>
                <p className="about-text">
                  My approach is data-driven, commercially sharp, and slightly contrarian when needed, because scaling results often requires challenging assumptions, not just increasing budgets. I've worked with a wide range of clients across multiple industries, from lean startups to established companies, crafting tailored strategies that generate measurable impact and long-term performance.
                </p>
              </div>
            </div>
          </section>
          <section className="about-section">
            <h2 className="about-heading">My PPC Journey</h2>
            <div className="about-timeline">
              <div className="about-timeline-item">
                <div className="about-timeline-year">2024</div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">Current Focus</h3>
                  <p className="about-text">Managing multi-million dollar ad budgets across Google Ads and Meta platforms. Specializing in Performance Max, Shopping, and advanced audience strategies.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-year">2022</div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">Expansion & Scaling</h3>
                  <p className="about-text">Expanded expertise to include Meta Ads (Facebook & Instagram), developing comprehensive omnichannel strategies for clients across e-commerce, SaaS, and services.</p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-year">2020</div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">Getting Started</h3>
                  <p className="about-text">Began my journey in PPC advertising, focusing on Google Ads Search and Shopping campaigns. Quickly developed skills in campaign optimization and data analysis.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="about-section">
            <h2 className="about-heading">Success Stories</h2>
            <div className="about-success-grid">
              <div className="about-success-card">
                <div className="about-success-metric">+285%</div>
                <h3 className="about-success-title">E-commerce Revenue Growth</h3>
                <p className="about-text">Transformed an online fashion retailer's Google Shopping campaigns, achieving a 285% increase in revenue while maintaining profitable ROAS through strategic bidding and feed optimization.</p>
              </div>
              <div className="about-success-card">
                <div className="about-success-metric">4.2x</div>
                <h3 className="about-success-title">ROAS on Meta Ads</h3>
                <p className="about-text">Scaled a SaaS company's Meta Ads campaigns from k to 0k monthly spend while improving ROAS from 2.1x to 4.2x through advanced audience segmentation and creative testing.</p>
              </div>
              <div className="about-success-card">
                <div className="about-success-metric">-62%</div>
                <h3 className="about-success-title">Cost Per Acquisition</h3>
                <p className="about-text">Reduced CPA by 62% for a lead generation client through comprehensive account restructuring, quality score improvements, and conversion rate optimization across landing pages.</p>
              </div>
              <div className="about-success-card">
                <div className="about-success-metric">.4M</div>
                <h3 className="about-success-title">Annual Revenue Generated</h3>
                <p className="about-text">Managed Performance Max campaigns for a local services business, generating .4M in trackable revenue with a 5.8x ROAS through strategic budget allocation and asset optimization.</p>
              </div>
            </div>
          </section>
          <section className="about-section">
            <h2 className="about-heading">Why I Created PPC Atlas</h2>
            <div className="about-highlight">
              <p className="about-text">Throughout my PPC journey, I've learned countless lessons through trial and error, staying updated with platform changes, and continuously testing new strategies. PPC Atlas was born from my desire to share this knowledge and help other marketers accelerate their learning curve.</p>
              <p className="about-text">This resource combines theoretical knowledge with practical insights from real campaigns, providing you with a comprehensive guide to mastering both Google Ads and Meta Ads. Whether you're just starting out or looking to refine your advanced strategies, PPC Atlas is here to guide your journey.</p>
            </div>
          </section>
          <section className="about-section">
            <h2 className="about-heading">Certifications & Expertise</h2>
            <div className="about-certifications">
              <div className="about-cert-item">
                <div className="about-cert-icon">🎓</div>
                <div className="about-cert-text">
                  <h4 className="about-cert-title">Google Ads Certified</h4>
                  <p className="about-cert-description">Search, Display, Shopping, Video, Apps</p>
                </div>
              </div>
              <div className="about-cert-item">
                <div className="about-cert-icon">🎓</div>
                <div className="about-cert-text">
                  <h4 className="about-cert-title">Meta Blueprint Certified</h4>
                  <p className="about-cert-description">Media Buying & Planning Professional</p>
                </div>
              </div>
              <div className="about-cert-item">
                <div className="about-cert-icon">📊</div>
                <div className="about-cert-text">
                  <h4 className="about-cert-title">Google Analytics 4</h4>
                  <p className="about-cert-description">Advanced tracking & attribution</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
