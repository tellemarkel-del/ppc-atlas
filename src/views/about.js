import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about.css'

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
        <p className="about-subtitle">
          PPC Specialist with proven track record in Google Ads and Meta Ads
        </p>
      </div>
      <div className="about-content">
        <div className="about-wrapper">
          <section className="about-section">
            <div className="about-intro">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                  alt="Profile"
                  className="about-profile-image"
                />
              </div>
              <div className="about-intro-text">
                <h2 className="about-heading">Your PPC Expert</h2>
                <p className="about-text">
                  With over [X years] of experience in digital advertising, I've helped businesses of all sizes achieve their marketing goals through strategic PPC campaigns. My expertise spans across Google Ads and Meta Ads platforms, delivering measurable results and maximizing return on ad spend.
                </p>
                <p className="about-text">
                  I specialize in creating data-driven campaigns that not only drive conversions but also build sustainable growth for businesses. From startups to enterprises, I've worked with diverse industries to craft tailored advertising strategies that deliver real business impact.
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
                  <p className="about-text">
                    Managing multi-million dollar ad budgets across Google Ads and Meta platforms. Specializing in Performance Max, Shopping, and advanced audience strategies.
                  </p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-year">2022</div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">Expansion & Scaling</h3>
                  <p className="about-text">
                    Expanded expertise to include Meta Ads (Facebook & Instagram), developing comprehensive omnichannel strategies for clients across e-commerce, SaaS, and services.
                  </p>
                </div>
              </div>
              <div className="about-timeline-item">
                <div className="about-timeline-year">2020</div>
                <div className="about-timeline-content">
                  <h3 className="about-timeline-title">Getting Started</h3>
                  <p className="about-text">
                    Began my journey in PPC advertising, focusing on Google Ads Search and Shopping campaigns. Quickly developed skills in campaign optimization and data analysis.
                  </p>
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
                <p className="about-text">
                  Transformed an online fashion retailer's Google Shopping campaigns, achieving a 285% increase in revenue while maintaining profitable ROAS through strategic bidding and feed optimization.
                </p>
                <div className="about-success-screenshot">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop" 
                    alt="Campaign performance dashboard"
                    className="about-screenshot-image"
                  />
                </div>
              </div>

              <div className="about-success-card">
                <div className="about-success-metric">4.2x</div>
                <h3 className="about-success-title">ROAS on Meta Ads</h3>
                <p className="about-text">
                  Scaled a SaaS company's Meta Ads campaigns from $5k to $50k monthly spend while improving ROAS from 2.1x to 4.2x through advanced audience segmentation and creative testing.
                </p>
                <div className="about-success-screenshot">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop" 
                    alt="Meta Ads performance metrics"
                    className="about-screenshot-image"
                  />
                </div>
              </div>

              <div className="about-success-card">
                <div className="about-success-metric">-62%</div>
                <h3 className="about-success-title">Cost Per Acquisition</h3>
                <p className="about-text">
                  Reduced CPA by 62% for a lead generation client through comprehensive account restructuring, quality score improvements, and conversion rate optimization across landing pages.
                </p>
                <div className="about-success-screenshot">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop" 
                    alt="CPA reduction graph"
                    className="about-screenshot-image"
                  />
                </div>
              </div>

              <div className="about-success-card">
                <div className="about-success-metric">$2.4M</div>
                <h3 className="about-success-title">Annual Revenue Generated</h3>
                <p className="about-text">
                  Managed Performance Max campaigns for a local services business, generating $2.4M in trackable revenue with a 5.8x ROAS through strategic budget allocation and asset optimization.
                </p>
                <div className="about-success-screenshot">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=300&fit=crop" 
                    alt="Revenue performance overview"
                    className="about-screenshot-image"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2 className="about-heading">Why I Created PPC Atlas</h2>
            <div className="about-highlight">
              <p className="about-text">
                Throughout my PPC journey, I've learned countless lessons through trial and error, staying updated with platform changes, and continuously testing new strategies. PPC Atlas was born from my desire to share this knowledge and help other marketers accelerate their learning curve.
              </p>
              <p className="about-text">
                This resource combines theoretical knowledge with practical insights from real campaigns, providing you with a comprehensive guide to mastering both Google Ads and Meta Ads. Whether you're just starting out or looking to refine your advanced strategies, PPC Atlas is here to guide your journey.
              </p>
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
