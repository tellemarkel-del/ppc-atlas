import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './google-ads-foundations.css'

const GoogleAdsFoundations = (props) => {
  return (
    <div className="google-ads-foundations-container1">
      <Helmet>
        <title>Google-Ads-Foundations - Bubbly Relieved Spoonbill</title>
        <meta
          property="og:title"
          content="Google-Ads-Foundations - Bubbly Relieved Spoonbill"
        />
        <link
          rel="canonical"
          href="https://bubbly-relieved-spoonbill-kka08g.teleporthq.app/google-ads-foundations"
        />
      </Helmet>
      <Navigation></Navigation>
      <header className="lexicon-header">
        <div className="flex-row-between lexicon-container">
          <div className="lexicon-logo">
            <span className="logo-text">PPC Lexicon</span>
          </div>
          <nav className="lexicon-nav">
            <ul className="nav-list flex-row">
              <li>
                <a href="#">
                  <div className="nav-link active">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-link">
                    <span>Google Ads</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-link">
                    <span>Meta Ads</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="nav-link">
                    <span>Case</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="intro-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h1 className="hero-title">Google Ads Foundations</h1>
              <div className="visual-accent"></div>
              <p className="section-content article-text">
                Google Ads is Google’s digital advertising platform, originally
                launched in 2000 as Google AdWords and rebranded in 2018 as
                Google Ads. It is one of the most powerful tools for businesses,
                brands, and entrepreneurs to promote products or services
                effectively within the digital ecosystem. Its primary purpose is
                to connect advertisers with users at the exact moment they show
                intent—whether searching for information, products, or services.
              </p>
              <div className="article-media">
                <img
                  alt="Modern technology workspace"
                  src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="premium-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="performance-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Performance-Based Model</h2>
              <p className="section-content article-text">
                {' '}
                Unlike traditional advertising, Google Ads operates on a
                performance-based model: advertisers typically pay only when a
                user takes a specific action, such as clicking on an ad (CPC –
                Cost Per Click), when an ad is shown a set number of times (CPM
                – Cost Per Mille, per 1,000 impressions), or when a conversion
                is completed (CPA – Cost Per Acquisition). This allows precise
                control over return on investment (ROI), which is critical in
                digital marketing.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </section>
        <section className="auction-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Real-Time Auction System</h2>
              <div className="diagram-space">
                <div className="auction-flow">
                  <div className="flow-step">
                    <span>Intent</span>
                  </div>
                  <div className="flow-arrow">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="flow-step">
                    <span>Auction</span>
                  </div>
                  <div className="flow-arrow">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="flow-step">
                    <span>Relevance</span>
                  </div>
                </div>
              </div>
              <p className="section-content article-text">
                {' '}
                The platform relies on a real-time auction system. Every time a
                user performs a Google search or visits a site in Google’s
                Display Network, an instant auction is triggered where ads
                compete for placement. Winning isn’t determined solely by bid
                amount; Google evaluates a combination of relevance, ad quality,
                and user experience to determine which ad appears and in which
                position. This means advertisers can achieve better results even
                with a smaller budget if their ads and landing pages are high
                quality.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </section>
        <section className="channels-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Advertising Channels</h2>
              <p className="section-content article-text">
                {' '}
                Google Ads is not limited to search engine results. It offers
                multiple advertising channels, including the Search Network (ads
                appear alongside organic search results), the Display Network
                (ads across millions of websites, apps, and videos), Google
                Shopping (for e-commerce product promotion), YouTube ads, and
                Discovery Ads (appearing in Google feeds such as Gmail, YouTube,
                and Discover). This allows advertisers to reach users at
                different stages of the customer journey, from discovery to
                conversion.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="article-media">
                <img
                  alt="Data analysis across channels"
                  src="https://images.pexels.com/photos/5831670/pexels-photo-5831670.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="premium-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="goals-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Business Goals</h2>
              <p className="section-content article-text">
                <span>
                  {' '}
                  Google Ads can be used for virtually any business goal:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="google-ads-foundations-thq-goal-highlight-elm1">
                  Sales and e-commerce
                </span>
                <span>
                  {' '}
                  promoting products and driving direct transactions;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="google-ads-foundations-thq-goal-highlight-elm2">
                  Lead generation
                </span>
                <span>
                  {' '}
                  capturing contacts for services like professional consulting,
                  education, or insurance;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="google-ads-foundations-thq-goal-highlight-elm3">
                  Brand awareness
                </span>
                <span>
                  {' '}
                  increasing visibility through visual or video ads;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="google-ads-foundations-thq-goal-highlight-elm4">
                  Local promotion
                </span>
                <span>
                  {' '}
                  attracting customers to physical stores or nearby services;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="google-ads-foundations-thq-goal-highlight-elm5">
                  Apps and software
                </span>
                <span>
                  {' '}
                  driving downloads, subscriptions, or SaaS adoption.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </section>
        <section className="concepts-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Core Concepts &amp; Automation</h2>
              <p className="section-content article-text">
                At its core, Google Ads is an intention-based marketing tool,
                allowing advertisers to reach people exactly when they are
                searching for what the business offers. This distinguishes it
                from platforms where ads are shown more passively, without the
                user necessarily intending to engage or purchase.
              </p>
              <p className="section-content article-text">
                To use Google Ads effectively, one must understand not only the
                interface and metrics but also fundamental concepts like
                campaign structure, ad groups, keywords, targeting, match types,
                bidding strategies, and conversion tracking. A solid
                understanding of these fundamentals forms the foundation for
                scalable, measurable, and successful PPC strategies.
              </p>
              <p className="section-content article-text">
                In recent years, Google has integrated automation and artificial
                intelligence through features like Smart Bidding, Performance
                Max campaigns, and audience-based targeting, which optimize
                results using machine learning. Despite these advancements, the
                core principle remains the same: combining relevance, user
                intent, and strategic budget management to maximize ROI.
              </p>
            </div>
          </div>
        </section>
        <section className="conclusion-section">
          <div className="lexicon-container">
            <div className="article-wrapper">
              <h2 className="section-title">Summary &amp; Conclusion</h2>
              <p className="section-content article-text">
                In summary, Google Ads is the backbone of performance-driven
                digital marketing, providing a complete ecosystem to attract,
                convert, and retain customers while allowing precise measurement
                of every advertising investment. Understanding its foundations
                is essential for any PPC specialist, marketer, or business
                aiming to compete effectively in today’s digital landscape.
              </p>
            </div>
          </div>
        </section>
        <section className="hub-section">
          <div className="lexicon-container">
            <h2 className="section-title text-center">Knowledge Hub</h2>
            <div className="hub-grid">
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Account Structure</h3>
              </div>
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Keywords &amp; Match Types</h3>
              </div>
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <circle r="6" cx="12" cy="12"></circle>
                      <circle r="2" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Search Intent</h3>
              </div>
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 5v14m7-7l-7 7l-7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Quality Score</h3>
              </div>
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74zm7 .545l1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Landing Pages</h3>
              </div>
              <div className="hub-card">
                <div className="hub-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path>
                      <path d="M12 7a5 5 0 1 0 5 5"></path>
                      <path d="M13 3.055A9 9 0 1 0 20.941 11"></path>
                      <path d="M15 6v3h3l3-3h-3V3zm0 3l-3 3"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Tracking &amp; Measurement</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="google-ads-foundations-container3">
        <div className="google-ads-foundations-container4">
          <Script
            html={`<script defer data-name="lexicon-interactions">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".article-wrapper, .hub-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    observer.observe(el)
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="google-ads-foundations-container5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="google-ads-foundations-icon38"
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
          <span className="google-ads-foundations-text25">
            Built in TeleportHQ
          </span>
        </div>
      </a>
    </div>
  )
}

export default GoogleAdsFoundations
