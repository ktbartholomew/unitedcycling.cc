import React from "react"

import Layout from "../components/layout"
import UnitedLogo from "../images/united-logo.svg"
import TrekLogo from "../images/trek-logo.svg"
import HTLogo from "../images/hyperthreads-logo.svg"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="logo-band">
      <img alt="United Logo" src={UnitedLogo} />
    </div>
    <div className="sponsor-band">
      <img alt="Trek logo" src={TrekLogo} />
      <img alt="Hyperthreads logo" src={HTLogo} />
    </div>
    <div className="info-band">
      <span>Find us on:</span>
      <a href="https://www.instagram.com/united__cycling/">Instagram</a>
      <a href="https://www.instagram.com/united__cycling/">Facebook</a>
    </div>
  </Layout>
)

export default IndexPage
