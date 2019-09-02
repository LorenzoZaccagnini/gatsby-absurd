import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Elisa Romondia',
    image: 'elisa.jpg',
    role: 'Co-founder',
    link: 'https://www.linkedin.com/in/elisa-romondia/',
    desc: `
          Data Analyst, AI and  Blockchain developer in the Forbes list
          "60 Women-Led Startups That Are Shaking Up Tech Across The Globe"
          with the project Devoleum. Italian InspiringFifty 2018.
    `
  },
  {
    name: 'Lorenzo Zaccagnini',
    image: 'lorenzo.jpg',
    link: 'https://www.linkedin.com/in/lorenzo-zaccagnini/',
    role: 'Co-founder',
    desc: `
        Blockchain and AI developer. Winner of the TIM #Wcap prize at
        the first Italian official hackathon, Digithon 2016. Blockchain
        mentor for the Silicon Valley top company Udacity.
    `
  },
];

const imgStyle = {
  maxWidth: '200px'
};


const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}



    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Team</h1>
            {TEAM.map(({ name, image, role, link, desc }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <Grid>
                  <Art>
                      <Img fluid={img.childImageSharp.fluid} alt={name} />
                    <StyledExternalLink href={link} align="left">
                        <Subtitle>Linkedin profile</Subtitle>
                    </StyledExternalLink>
                  </Art>

                <div align="left">
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                  <Subtitle >{desc}</Subtitle>

                </div>
              </Grid>

              );
            })}
        </Container>
      </Section>
    )}
  />
);

const Art = styled.figure`
  margin: 0;
  max-width: 280px;
  width: 100%;
`;

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
  }
`;


const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Team;
