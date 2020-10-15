import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Cafe Location</h2>
    <p>Computer Enginerring Co-Working Space</p>
    <h2>Open</h2>
    <p>OPEN DAILY 10.00am - 22.00pm</p>
    <h2>Contact</h2>
    <p>Tel. 084-5214899</p>
    <h1></h1>
    <p>Welcome to our cafe :)</p> 
    <Link to="/">Go back to menu page</Link>
  </Layout>
)

export default SecondPage
