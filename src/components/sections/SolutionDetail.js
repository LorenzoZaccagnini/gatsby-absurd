import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const SolutionDetail = () => (
  <StaticQuery
    query={graphql`
      query {
        art_branch: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "branch" }
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
      <Section id="about" accent>
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_branch.childImageSharp.fluid} />
            </Art>
            <div align="left">
              <h2>Versatility</h2>
              <p className="pcolor">
                Devoleum offers a versatile platform that adapts to every supply chain.
                It's possible to trace the history of an agri-food product, from land monitoring data to sale.
                In the field of construction (AEC), you can track the first project phases, the construction and maintenance.
                Digital creatives can use Devoleum for a song or other
                digital artworks, in order to protect their intellectual rights and assure a fair distribution
                of earnings. Devoleum promotes sustainable supply chains, ensuring that the work of everyone will be credited, believing that fair supply chains make awesome products.
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
  grid-template-columns: 2fr 3fr;
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

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default SolutionDetail;
