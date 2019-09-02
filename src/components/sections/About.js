import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fake" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_transparency: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "trans" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_privacy: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "safe" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

      art_scalability: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "scala" }
      ) {
        childImageSharp {
          fluid(maxWidth: 760) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }

    art_interoperability: file(
      sourceInstanceName: { eq: "art" }
      name: { eq: "inter" }
    ) {
      childImageSharp {
        fluid(maxWidth: 760) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

  art_correctness: file(
    sourceInstanceName: { eq: "art" }
    name: { eq: "correctness" }
  ) {
    childImageSharp {
      fluid(maxWidth: 760) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }

}
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_transparency.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Transparency</h2>
              <p>
                Devoleum stores the supply chain steps in the Ethereum blockchain, a tamper proof system
						    open and transparent. The data inside the blockchain becomes immutable, impossible to manipulate.
                Every interaction with the data is recorded in public transactions. King Joffrey knows why transparency is important in food supply chains
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Privacy</h2>
              <p>
                Our integration of zk-SNARKs (Zokrates) allows the tokenization of a physical asset without revealing sensitive data on the blockchain.
            		We are using Federated Learning to train
                 our AI models in combination with zk-SNARKs.
                <br />
                <strong>Devoleum offers the possibility
                  to use a fully decentralized architecture
                   without requiring any sensitive data from the users</strong>,
            		ensuring full compliance with the GDPR.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_privacy.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_correctness.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Correctness</h2>
              <p>
                We are building AI models that will inspect data correctness before being pushed immutably inside Ethereum.
            		Using AI we can provide accurate real time prediction with the blockchain tamper proof data. We are actively
            		open to collaboration with companies that gather data using precision farming, feel free to contact us.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Interoperability</h2>
              <p>
                Devoleum smart contracts can be triggered by events external to Ethereum blockchain, thanks to oracles.
          			IoT devices and Open Bank APIs can be used in combination with Devoleum to automize the supply chain workflow, saving time and money.

              </p>
            </div>
            <Art>
              <Img fluid={data.art_interoperability.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_scalability.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Scalability</h2>
              <p>
                Devoleum smart contracts can be used in combination with IPFS and traditional databases,
            		allowing great scalability and lower costs.
                
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
