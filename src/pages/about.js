import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"
import { Container, Row, Col, Image } from "react-bootstrap"

const About = () => (
  <Layout>
      <SEO title="About" />
      <Container>
          <p style={{marginTop: '80px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ex pharetra, auctor nisi laoreet, maximus urna. Sed eget ullamcorper est. Suspendisse ac quam laoreet, bibendum felis ac, accumsan justo. Ut gravida, nibh a sagittis cursus, ligula magna consectetur ante, sed imperdiet ante purus nec neque. Nam imperdiet ante nec feugiat pellentesque. Nulla pharetra sem ante, ut dapibus orci mattis scelerisque. Nullam sagittis viverra nisi quis bibendum. Integer blandit odio a nulla vestibulum, vitae dapibus velit sagittis. Vestibulum ex erat, suscipit sit amet fermentum in, porttitor eu nulla. Nulla viverra eleifend felis, vitae lobortis neque eleifend et. Curabitur mollis, arcu quis posuere hendrerit, massa nulla viverra felis, nec rhoncus augue velit cursus purus. Integer magna nisi, placerat ac nunc vitae, vulputate blandit arcu. Donec dictum faucibus tellus, in eleifend felis suscipit non.</p>
      </Container>
  </Layout>
)

export default About
