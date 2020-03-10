import React from "react"
import Layout from "../components/layout"
import MainImage from "../images/jp-madrigal.png"
import SEO from "../components/seo"

import { Container, Row, Col, Image } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const facebookLogo = <FontAwesomeIcon icon={faFacebook} size="lg" />
const twitterLogo = <FontAwesomeIcon icon={faTwitter} size="lg" />
const githubLogo = <FontAwesomeIcon icon={faGithub} size="lg" />
const linkedinLogo = <FontAwesomeIcon icon={faLinkedin} size="lg" />
const instagramLogo = <FontAwesomeIcon icon={faInstagram} size="lg" />
const youtubeLogo = <FontAwesomeIcon icon={faYoutube} size="lg" />

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row style={{marginTop: '70px'}}>
        <Col>
        </Col>
        <Col md={3}>
          <Image src={MainImage} className="image" />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 style={{textAlign: 'center', marginTop: '15px'}}>John Patrick Madrigal</h3>
          <h5 style={{textAlign: 'center', fontWeight: '400', fontStyle: 'italic'}}>React Developer. Vlogger.</h5>
        </Col>
      </Row>
      <Row  style={{marginTop: '20px'}}>
        <Col>
        </Col>
        <Col md={3}>
          <div>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://www.youtube.com/channel/UCc3QfWQQ5HJ7vgAJz8vLLag/" rel="noopener noreferrer" target="_blank" className="icon">{youtubeLogo}</a></span>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://www.facebook.com/john.madrigal.1650/" rel="noopener noreferrer" target="_blank" className="icon">{facebookLogo}</a></span>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://twitter.com/jpmadrigal_/" rel="noopener noreferrer" target="_blank" className="icon">{twitterLogo}</a></span>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://github.com/jpmadrigal07/" rel="noopener noreferrer" target="_blank" className="icon">{githubLogo}</a></span>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://www.linkedin.com/in/john-patrick-madrigal-0b56b8144/" rel="noopener noreferrer" target="_blank" className="icon">{linkedinLogo}</a></span>
            <span style={{marginLeft: '10px', marginRight: '10px'}}><a href="https://www.instagram.com/_jpmadrigal/" rel="noopener noreferrer" target="_blank" className="icon">{instagramLogo}</a></span>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row style={{marginTop: '150px', marginBottom: '50px'}}>
        <Col>
          <h6 style={{textAlign: 'center', fontWeight: '500'}}>Hi There!</h6>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
