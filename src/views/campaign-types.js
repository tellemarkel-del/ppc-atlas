import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './campaign-types.css'

const CampaignTypes = (props) => {
  return (
    <div className="campaign-types-container1">
      <Helmet>
        <title>Campaign-Types - Bubbly Relieved Spoonbill</title>
        <meta
          property="og:title"
          content="Campaign-Types - Bubbly Relieved Spoonbill"
        />
        <link
          rel="canonical"
          href="https://bubbly-relieved-spoonbill-kka08g.teleporthq.app/campaign-types"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="campaign-lexicon">
        <section className="campaign-types-intro-section">
          <div className="intro-container">
            <h1 className="hero-title campaign-types-hero-title">
              Campaign Types
            </h1>
            <div className="intro-content-wrapper">
              <p className="section-content">
                Google Ads offers multiple campaign types to help advertisers
                achieve specific marketing objectives. Each campaign type is
                designed for a particular goal, from driving website traffic and
                generating leads to boosting in-store visits or increasing brand
                awareness. Choosing the right campaign type is critical because
                it defines the ad formats available, targeting options, bidding
                strategies, and where your ads appear.
              </p>
              <p className="section-content">
                Campaigns are the highest organizational layer in Google Ads.
                Within a campaign, you can create multiple ad groups, each with
                its own keywords, audiences, and ads. Understanding the
                available campaign types allows marketers to align their
                strategies with business goals and maximize return on ad spend
                (ROAS).
              </p>
            </div>
            <div className="intro-visual">
              <img
                alt="Google Search Interface"
                src="https://images.pexels.com/photos/15406292/pexels-photo-15406292.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="intro-image"
              />
            </div>
          </div>
        </section>
        <section className="search-section">
          <div className="article-container">
            <h2 className="section-title">
              1. Search Campaigns (Network: Google Search)
            </h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text10">Description:</span>
                <span>
                  {' '}
                  Display text ads on Google Search results when users search
                  for relevant keywords. Ads can appear at the top or bottom of
                  search results.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text12">Purpose:</span>
                <span>
                  {' '}
                  Capture high-intent traffic, reach users actively searching
                  for products or services, ideal for direct response, lead
                  generation, and e-commerce.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text14">Key Features:</span>
                <span>
                  {' '}
                  Keyword targeting (broad, phrase, exact, negative), ad
                  extensions, automated bidding (Maximize Conversions, Target
                  CPA).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text16">Best Use Cases:</span>
                <span>
                  {' '}
                  Selling products online, capturing leads, driving website
                  conversions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="campaign-types-article-media">
              <img
                alt="Search Intent Visualization"
                src="https://images.pexels.com/photos/20716652/pexels-photo-20716652.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="article-image"
              />
            </div>
          </div>
        </section>
        <section className="display-section">
          <div className="article-container">
            <h2 className="section-title">
              2. Display Campaigns (Network: Google Display Network)
            </h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text18">Description:</span>
                <span>
                  {' '}
                  Visual banner, responsive, or rich media ads on millions of
                  websites, apps, and YouTube placements.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text20">Purpose:</span>
                <span>
                  {' '}
                  Brand awareness and consideration, remarketing, reach users
                  while browsing content.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text22">Key Features:</span>
                <span>
                  {' '}
                  Audience targeting, placement targeting, responsive display
                  ads.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text24">Best Use Cases:</span>
                <span>
                  {' '}
                  Introducing new products, retargeting, driving landing page
                  traffic.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="article-diagram">
              <div className="diagram-placeholder">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="diagram-icon"
                >
                  <circle r="10" cx="12" cy="12"></circle>
                  <circle r="6" cx="12" cy="12"></circle>
                  <circle r="2" cx="12" cy="12"></circle>
                </svg>
                <span className="section-subtitle">
                  Visual Network Reach Diagram
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="shopping-section">
          <div className="article-container">
            <h2 className="section-title">3. Shopping Campaigns</h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text26">Description:</span>
                <span>
                  {' '}
                  Product-based ads with images, prices, store names in Google
                  Search and Shopping.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text28">Purpose:</span>
                <span>
                  {' '}
                  Drive product-specific traffic, increase purchase intent,
                  streamline promotions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text30">Key Features:</span>
                <span>
                  {' '}
                  Google Merchant Center integration, automated targeting by
                  product attributes, Smart Shopping campaigns with AI
                  optimization.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text32">Best Use Cases:</span>
                <span>
                  {' '}
                  E-commerce businesses, boosting seasonal sales, high
                  visibility for specific SKUs.
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
        <section className="video-section">
          <div className="article-container">
            <h2 className="section-title">
              4. Video Campaigns (YouTube &amp; Partners)
            </h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text34">Description:</span>
                <span>
                  {' '}
                  Video ads on YouTube, YouTube Shorts, and Google Video
                  partners.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text36">Purpose:</span>
                <span>
                  {' '}
                  Brand awareness, engagement, storytelling.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text38">Key Features:</span>
                <span>
                  {' '}
                  Skippable/non-skippable in-stream, bumper, discovery ads;
                  demographic/interests targeting; CPV, CPM, or maximize
                  conversions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text40">Best Use Cases:</span>
                <span>
                  {' '}
                  Launching brand campaigns, tutorials/demos, retargeting.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <div className="campaign-types-article-media">
              <img
                alt="Video Engagement"
                src="https://images.pexels.com/photos/33440447/pexels-photo-33440447.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="article-image"
              />
            </div>
          </div>
        </section>
        <section className="pmax-section">
          <div className="article-container">
            <h2 className="section-title">5. Performance Max Campaigns</h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text42">Description:</span>
                <span>
                  {' '}
                  AI-driven omnichannel campaigns across Search, Display,
                  YouTube, Gmail, Discover.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text44">Purpose:</span>
                <span>
                  {' '}
                  Maximize conversions using automation, simplify management.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text46">Key Features:</span>
                <span>
                  {' '}
                  Automated bidding, ad creation, targeting; requires text,
                  image, video assets.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text48">Best Use Cases:</span>
                <span>
                  {' '}
                  Fully automated campaigns, scaling quickly, testing new
                  products or markets.
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
        <section className="discovery-section">
          <div className="article-container">
            <h2 className="section-title">6. Discovery Campaigns</h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text50">Description:</span>
                <span>
                  {' '}
                  Native, visually rich ads in Google feeds (YouTube Home, Gmail
                  Promotions, Discover).
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text52">Purpose:</span>
                <span>
                  {' '}
                  Reach users before they search for your product, generate
                  awareness.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text54">Key Features:</span>
                <span>
                  {' '}
                  Native ad formats, audience targeting, AI-driven creative
                  optimization.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text56">Best Use Cases:</span>
                <span>
                  {' '}
                  Driving traffic, engagement, expanding brand presence.
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
        <section className="local-section">
          <div className="article-container">
            <h2 className="section-title">7. Local Campaigns</h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text58">Description:</span>
                <span>
                  {' '}
                  Promote physical stores, locations, or local services across
                  Google Search, Maps, Display, YouTube.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text60">Purpose:</span>
                <span>
                  {' '}
                  Drive foot traffic, highlight store locations.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text62">Key Features:</span>
                <span>
                  {' '}
                  Automated ad placements, call-to-action buttons, Google My
                  Business integration.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text64">Best Use Cases:</span>
                <span>
                  {' '}
                  Retail, restaurants, local promotions or events.
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
        <section className="app-section">
          <div className="article-container">
            <h2 className="section-title">8. App Campaigns</h2>
            <div className="article-body">
              <p className="section-content">
                <span className="campaign-types-text66">Description:</span>
                <span>
                  {' '}
                  Promote mobile apps across Search, Play Store, YouTube,
                  Display, and Discovery.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text68">Purpose:</span>
                <span>
                  {' '}
                  Increase app downloads or engagement, promote in-app actions.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text70">Key Features:</span>
                <span>
                  {' '}
                  CPI or in-app conversion bidding, automated targeting and
                  creative optimization, requires app assets.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span className="campaign-types-text72">Best Use Cases:</span>
                <span>
                  {' '}
                  Mobile games or SaaS apps, driving downloads and active user
                  engagement.
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
        <section className="campaign-types-conclusion-section">
          <div className="article-container">
            <div className="conclusion-content">
              <p className="section-content">
                Choosing the right campaign type in Google Ads is strategic.
                Each serves different stages of the customer journey:
              </p>
              <ul className="conclusion-list">
                <li className="section-content">
                  <strong>Search</strong>
                  <span>
                    {' '}
                    → high-intent, conversion-driven
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Display &amp; Discovery</strong>
                  <span>
                    {' '}
                    → awareness and engagement
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Shopping</strong>
                  <span>
                    {' '}
                    → e-commerce conversion-focused
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Video</strong>
                  <span>
                    {' '}
                    → storytelling, brand recall
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Performance Max</strong>
                  <span>
                    {' '}
                    → omnichannel automation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Local &amp; App</strong>
                  <span>
                    {' '}
                    → location- or app-specific objectives
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <p className="section-content">
                Senior PPC strategists use campaign types together to create a
                holistic marketing ecosystem, maximizing reach, conversions, and
                ROI.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className="campaign-types-container2">
        <div className="campaign-types-container3">
          <Script
            html={`<script defer data-name="campaign-lexicon-effects">
(function(){
  // Intersection Observer for scroll reveal effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply initial styles and observe sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    revealObserver.observe(section)
  })

  // Subtle Parallax for images
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    document.querySelectorAll(".article-image, .intro-image").forEach((img) => {
      const rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const speed = 0.1
        const yPos = -(scrolled * speed) % 20
        img.style.transform = \`translateY(\${yPos}px)\`
      }
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
          className="campaign-types-container4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="campaign-types-icon4"
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
          <span className="campaign-types-text86">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default CampaignTypes
