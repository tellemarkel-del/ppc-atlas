import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Bubbly Relieved Spoonbill</title>
        <meta property="og:title" content="Bubbly Relieved Spoonbill" />
        <link
          rel="canonical"
          href="https://bubbly-relieved-spoonbill-kka08g.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-hub">
        <div className="hero-hub-container">
          <div className="hero-hub-content">
            <h1 className="home-thq-hero-title-elm hero-title home-hero-title">
              The PPC Atlas: Your knowledge site for Google Ads &amp; Meta Ads
            </h1>
            <p className="hero-subtitle">
              Structured, permanent, and deep-dive technical insights for Google
              Ads and Meta Ads specialists. No noise, just authority.
            </p>
            <div className="hero-hub-search-wrapper">
              <div className="hero-hub-search-input-group">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  className="hero-hub-search-icon"
                >
                  <circle r="8" cx="11" cy="11"></circle>
                  <path d="m21 21l-4.34-4.34"></path>
                </svg>
                <input
                  type="text"
                  aria-label="Search PPC concepts"
                  placeholder="Search concepts: Bidding, Pixel, CBO..."
                  className="hero-hub-search-input"
                />
              </div>
            </div>
            <div className="hero-hub-tiles">
              <a href="#google-ads">
                <div className="hero-hub-tile">
                  <div className="hero-hub-tile-icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M20.945 11a9 9 0 1 1-3.284-5.997l-2.655 2.392A5.5 5.5 0 1 0 17.125 14H13v-3z"></path>
                    </svg>
                  </div>
                  <span className="hero-hub-tile-text">Google Ads Hub</span>
                </div>
              </a>
              <a href="#meta-ads">
                <div className="hero-hub-tile">
                  <div className="hero-hub-tile-icon">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path d="M12 10.174Q14.649 5.999 16.648 6c2 0 3.263 2.213 4 5.217c.704 2.869.5 6.783-2 6.783c-1.114 0-2.648-1.565-4.148-3.652a27.6 27.6 0 0 1-2.5-4.174m0 0Q9.351 5.999 7.352 6c-2 0-3.263 2.213-4 5.217c-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348q1.5-2.087 2.5-4.174"></path>
                    </svg>
                  </div>
                  <span className="hero-hub-tile-text">Meta Ads Hub</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-hub-visual">
            <div className="hero-hub-visual-overlay"></div>
            <video
              src="https://videos.pexels.com/video-files/34645046/14683738_640_360_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-hub-video"
            ></video>
          </div>
        </div>
      </section>
      <section className="concepts-snapshot">
        <div className="concepts-snapshot-container">
          <div className="concepts-snapshot-header">
            <h2 className="section-title">Core Knowledge Pillars</h2>
            <p className="section-subtitle">
              The fundamental components of precision advertising.
            </p>
          </div>
          <div className="concepts-snapshot-grid">
            <div className="concepts-snapshot-card">
              <div className="concepts-snapshot-icon-box">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <circle r="6" cx="12" cy="12"></circle>
                  <circle r="2" cx="12" cy="12"></circle>
                </svg>
              </div>
              <h3 className="concepts-snapshot-title">
                Bidding &amp; Auctions
              </h3>
              <p className="section-content">
                Deep dive into algorithm behavior, smart bidding strategies, and
                auction dynamics.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Explore Bidding</span>
                </div>
              </a>
            </div>
            <div className="concepts-snapshot-card">
              <div className="concepts-snapshot-icon-box">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M10 10.105A1.105 1.105 0 0 1 11.105 9h1.79A1.105 1.105 0 0 1 14 10.105v9.79A1.105 1.105 0 0 1 12.895 21h-1.79A1.105 1.105 0 0 1 10 19.895zm7-6A1.105 1.105 0 0 1 18.105 3h1.79A1.105 1.105 0 0 1 21 4.105v15.79A1.105 1.105 0 0 1 19.895 21h-1.79A1.105 1.105 0 0 1 17 19.895zM3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path>
                </svg>
              </div>
              <h3 className="concepts-snapshot-title">Tracking &amp; Data</h3>
              <p className="section-content">
                Technical implementation of GTM, server-side tracking, and
                attribution models.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Explore Data</span>
                </div>
              </a>
            </div>
            <div className="concepts-snapshot-card">
              <div className="concepts-snapshot-icon-box">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M9 12V8m6 4v-2m-3 2v-1M3 4h18M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4m-8 12v4m-3 0h6"></path>
                </svg>
              </div>
              <h3 className="concepts-snapshot-title">Creative Strategy</h3>
              <p className="section-content">
                Visual storytelling backed by data. A/B testing frameworks for
                high-converting ads.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Explore Creatives</span>
                </div>
              </a>
            </div>
            <div className="concepts-snapshot-card">
              <div className="concepts-snapshot-icon-box">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle r="4" cx="10" cy="7"></circle>
                  <path d="M10.3 15H7a4 4 0 0 0-4 4v2"></path>
                  <circle r="3" cx="17" cy="17"></circle>
                  <path d="m21 21l-1.9-1.9"></path>
                </svg>
              </div>
              <h3 className="concepts-snapshot-title">Audience Architecture</h3>
              <p className="section-content">
                Advanced targeting, lookalikes, and first-party data
                segmentation strategies.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Explore Audience</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="platform-gateway">
        <div className="platform-gateway-container">
          <div className="platform-gateway-split">
            <div className="platform-card platform-google">
              <div className="platform-card-inner">
                <div className="platform-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20.945 11a9 9 0 1 1-3.284-5.997l-2.655 2.392A5.5 5.5 0 1 0 17.125 14H13v-3z"></path>
                  </svg>
                </div>
                <h2 className="section-title">Google Ads</h2>
                <p className="section-content">
                  Intent-based advertising focused on capture. Master Search,
                  Shopping, and PMax with technical precision.
                </p>
                <ul className="platform-features">
                  <li>
                    <span>Search Intent Analysis</span>
                  </li>
                  <li>
                    <span>PMax Optimization</span>
                  </li>
                  <li>
                    <span>Shopping Feed Mastery</span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Enter Google Hub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="platform-meta platform-card">
              <div className="platform-card-inner">
                <div className="platform-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M12 10.174Q14.649 5.999 16.648 6c2 0 3.263 2.213 4 5.217c.704 2.869.5 6.783-2 6.783c-1.114 0-2.648-1.565-4.148-3.652a27.6 27.6 0 0 1-2.5-4.174m0 0Q9.351 5.999 7.352 6c-2 0-3.263 2.213-4 5.217c-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348q1.5-2.087 2.5-4.174"></path>
                  </svg>
                </div>
                <h2 className="section-title">Meta Ads</h2>
                <p className="section-content">
                  Interruption-based advertising focused on desire. Scale
                  through creative-led growth and algorithmic trust.
                </p>
                <ul className="platform-features">
                  <li>
                    <span>Creative-Led Growth</span>
                  </li>
                  <li>
                    <span>CBO/Advantage+ Strategy</span>
                  </li>
                  <li>
                    <span>Pixel Technical Setup</span>
                  </li>
                </ul>
                <a href="#">
                  <div className="btn btn-secondary">
                    <span>Enter Meta Hub</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-snapshot">
        <div className="services-snapshot-container">
          <div className="services-snapshot-header">
            <h2 className="section-title">Professional Offerings</h2>
            <p className="section-subtitle">
              Beyond knowledge: Strategic execution for high-growth brands.
            </p>
          </div>
          <div className="services-snapshot-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <circle r="2.5" cx="11.5" cy="14.5"></circle>
                  <path d="M13.3 16.3L15 18"></path>
                </svg>
              </div>
              <h3 className="service-title">Technical Audit</h3>
              <p className="section-content">
                Comprehensive review of tracking, account structure, and wasted
                spend opportunities.
              </p>
              <a href="#">
                <div className="btn-sm btn btn-outline">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></path>
                </svg>
              </div>
              <h3 className="service-title">Growth Strategy</h3>
              <p className="section-content">
                Custom roadmaps for scaling ad spend while maintaining target
                ROAS and efficiency.
              </p>
              <a href="#">
                <div className="btn-sm btn btn-outline">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m3 17l6-6l4 4l8-8"></path>
                  <path d="M14 7h7v7"></path>
                </svg>
              </div>
              <h3 className="service-title">Full Management</h3>
              <p className="section-content">
                End-to-end management of PPC campaigns with a focus on
                bottom-line profitability.
              </p>
              <a href="#">
                <div className="btn-sm btn btn-outline">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501M21 22l-1.879-1.878"></path>
                  <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"></path>
                  <circle r="3" cx="17" cy="18"></circle>
                </svg>
              </div>
              <h3 className="service-title">Specialist Training</h3>
              <p className="section-content">
                Internal team upskilling on technical PPC frameworks and
                advanced platform features.
              </p>
              <a href="#">
                <div className="btn-sm btn btn-outline">
                  <span>Learn More</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="case-highlights">
        <div className="case-highlights-container">
          <div className="case-highlights-header">
            <h2 className="section-title">Authority in Action</h2>
            <p className="section-subtitle">
              Real-world results derived from the Lexicon frameworks.
            </p>
          </div>
          <div className="case-highlights-grid">
            <div className="case-card">
              <div className="case-card-image">
                <img
                  alt="E-commerce Scaling"
                  src="https://images.pexels.com/photos/7947999/pexels-photo-7947999.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="case-card-badge">
                  <span>E-commerce</span>
                </div>
              </div>
              <div className="case-card-content">
                <h3 className="case-card-title">Scaling Search Alpha</h3>
                <p className="section-content">
                  How we scaled a fashion brand from $50k to $250k monthly spend
                  with 4.5x ROAS.
                </p>
                <div className="case-card-metrics">
                  <div className="metric">
                    <span className="metric-value">+400%</span>
                    <span className="metric-label">Spend Scale</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">4.5x</span>
                    <span className="metric-label">Stable ROAS</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Case Study</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="case-card">
              <div className="case-card-image">
                <img
                  alt="SaaS Lead Gen"
                  src="https://images.pexels.com/photos/6476776/pexels-photo-6476776.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="case-card-badge">
                  <span>SaaS</span>
                </div>
              </div>
              <div className="case-card-content">
                <h3 className="case-card-title">B2B Lead Precision</h3>
                <p className="section-content">
                  Reducing CPL by 60% through advanced server-side tracking and
                  offline conversions.
                </p>
                <div className="case-card-metrics">
                  <div className="metric">
                    <span className="metric-value">-60%</span>
                    <span className="metric-label">CPL Reduction</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">85%</span>
                    <span className="metric-label">Lead Quality</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Case Study</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="case-card">
              <div className="case-card-image">
                <img
                  alt="Creative Testing"
                  src="https://images.pexels.com/photos/6476787/pexels-photo-6476787.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="case-card-badge">
                  <span>FinTech</span>
                </div>
              </div>
              <div className="case-card-content">
                <h3 className="case-card-title">Creative-Led Scale</h3>
                <p className="section-content">
                  Leveraging Meta&apos;s algorithm through a systematic creative
                  testing framework.
                </p>
                <div className="case-card-metrics">
                  <div className="metric">
                    <span className="metric-value">3.2x</span>
                    <span className="metric-label">CTR Uplift</span>
                  </div>
                  <div className="metric">
                    <span className="metric-value">$1.2M</span>
                    <span className="metric-label">Attr. Revenue</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read Case Study</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="authority-metrics">
        <div className="authority-metrics-container">
          <div className="authority-metrics-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M8 2v4m8-4v4"></path>
                  <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>10+</span>
              </div>
              <div className="stat-label">
                <span>Years of Deep PPC Experience</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="m3 17l6-6l4 4l8-8"></path>
                  <path d="M14 7h7v7"></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>$50M+</span>
              </div>
              <div className="stat-label">
                <span>Ad Spend Managed Annually</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path d="M12 8.866L9.267 6.132A3.866 3.866 0 0 0 3.8 11.599l2.733 2.734L12 19.8l8.202-8.201a3.866 3.866 0 0 0-5.469-5.466l-8.201 8.2"></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>35%</span>
              </div>
              <div className="stat-label">
                <span>Avg. Efficiency Improvement</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
              </div>
              <div className="stat-number">
                <span>100%</span>
              </div>
              <div className="stat-label">
                <span>Technical Setup Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hub-process">
        <div className="hub-process-container">
          <div className="hub-process-header">
            <h2 className="section-title">Navigating the Lexicon</h2>
            <p className="section-subtitle">
              A structured path from research to high-performance
              implementation.
            </p>
          </div>
          <div className="hub-process-timeline">
            <div className="timeline-step">
              <div className="step-marker">
                <span>01</span>
              </div>
              <h3 className="step-title">Research &amp; Audit</h3>
              <p className="section-content">
                Analyze current data structures and identify technical
                bottlenecks in tracking or bidding.
              </p>
            </div>
            <div className="timeline-step">
              <div className="step-marker">
                <span>02</span>
              </div>
              <h3 className="step-title">Strategy Mapping</h3>
              <p className="section-content">
                Align platform capabilities with business objectives using
                Lexicon-verified frameworks.
              </p>
            </div>
            <div className="timeline-step">
              <div className="step-marker">
                <span>03</span>
              </div>
              <h3 className="step-title">Implementation</h3>
              <p className="section-content">
                Deploy structured account changes, creative systems, and
                technical tracking updates.
              </p>
            </div>
            <div className="timeline-step">
              <div className="step-marker">
                <span>04</span>
              </div>
              <h3 className="step-title">Review &amp; Scale</h3>
              <p className="section-content">
                Iterative analysis of performance data to identify the next
                level of growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="engagement-cta">
        <div className="engagement-cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title">Ready for a Technical Audit?</h2>
              <p className="section-content">
                Stop guessing. Get a professional review of your PPC accounts to
                uncover hidden growth levers and efficiency leaks.
              </p>
              <div className="cta-features">
                <div className="cta-feature-item">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                  <span>Complete Tracking Validation</span>
                </div>
                <div className="cta-feature-item">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                  <span>Waste Reduction Analysis</span>
                </div>
              </div>
            </div>
            <div className="cta-form-wrapper">
              <form
                action="/submit"
                method="POST"
                data-form-id="205ead17-9aa8-45cc-838f-551cb7e2d1ad"
                className="cta-form"
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="true"
                    required="true"
                    placeholder="John Doe"
                    data-form-field-id="name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="john@company.com"
                    data-form-field-id="email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website" className="form-label">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required="true"
                    placeholder="https://"
                    data-form-field-id="website"
                    className="form-input"
                  />
                </div>
                <button
                  id="thq_button_paoK"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_paoK"
                  className="btn-lg btn btn-primary"
                >
                  Request Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="ppc-lexicon-interactions">
(function(){
  // Simple intersection observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply initial hidden state and observe elements
  const revealElements = document.querySelectorAll(".concepts-snapshot-card, .service-card, .case-card, .timeline-step, .stat-item")

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    observer.observe(el)
  })

  // Handle Search Input focus effects
  const searchInput = document.querySelector(".hero-hub-search-input")
  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      document.querySelector(".hero-hub-search-wrapper").style.transform = "scale(1.02)"
    })
    searchInput.addEventListener("blur", () => {
      document.querySelector(".hero-hub-search-wrapper").style.transform = "scale(1)"
    })
  }

  // Handle Form Submission UX
  const ctaForm = document.querySelector(".cta-form")
  if (ctaForm) {
    ctaForm.addEventListener("submit", (e) => {
      // Browsers handle the native submission, we just provide feedback
      const submitBtn = ctaForm.querySelector('button[type="submit"]')
      submitBtn.textContent = "Preparing Audit..."
      submitBtn.disabled = true
      submitBtn.style.opacity = "0.7"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon66"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text46">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
