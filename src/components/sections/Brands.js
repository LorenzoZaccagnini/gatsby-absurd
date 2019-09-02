import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const QUOTES = [
{
    quote: "Forbes mentioned Elisa Romondia in the 60 Women-Led Startups That Are Shaking Up Tech Across The Globe list",
    source: "https://www.forbes.com/sites/allysonkapin/2018/09/19/60-women-led-startups-who-are-shaking-up-tech-across-the-globe/#6f716ea875da",
    journal: "Forbes"
},
{
    quote: "Projet d'Elisa Romondia, développe use de Devoleum, afin de certifier l'origine des huiles d'olive de son Italie natale. Une initiative qui lui vaut d'avoir été repérée par la chambre de commerce et de l'industrie italienne, avec qui elle a entamé des discussions.",
    source: "http://www.lefigaro.fr/secteur/high-tech/start-up/2017/10/20/32004-20171020ARTFIG00341-qui-est-derriere-novagray-la-start-up-recompensee-par-le-prix-starther.php",
    journal: "Le Figaro"
},
{
    quote: "La développeuse Élisa Romondia, qui a cofondé Devoleum, une marketplace italienne utilisant la blockchain pour certifier et commercialiser des huiles d’olive produites localement.",
    source: "https://www.usinenouvelle.com/article/les-reseaux-se-mobilisent-pour-promouvoir-les-femmes-dans-le-numerique-pour-quel-resultat.N619018",
    journal: "L'Usine Nouvelle"
},
{
    quote: "Certificare la qualità dell'olio d'oliva come si fa con i diamanti, l'idea alla Sapienza.",
    source: "http://www.ilmessaggero.it/roma/cronaca/roma_laureati_con_il_pollice_verde_start_up_e_robot_per_i_campi_con_l_universita_il_lavoro_e_bio-3454639.html",
    journal: "Il Messaggero"
},
{
    quote: "Devoleum, utiliser la Blockchain pour certifier et commercialiser les huiles d’olives produites localement.",
    source: "https://www.forbes.fr/femmes-at-forbes/starther-awards-la-start-up-medtech-novagray-remporte-le-concours/?cn-reloaded=1",
    journal: "Forbes"
},
{
    quote: "Permettent de certifier l'huile d'olive grâce à la technologie blockchain",
    source: "http://www.businessinsider.fr/startups-finalistes-starther-awards-2017",
    journal: "Business Insider"
}]


const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled>
      { QUOTES.map( el =>
        <div onDragStart={handleOnDragStart} className="press_gallery">
        <div align="left">
        <p className="pcolor">
        {el.quote}
        </p>
        </div>
          <br />
          <h2>{el.journal}</h2>
            <StyledExternalLink href={el.source}>
              <h4>Link to source</h4>
          </StyledExternalLink>
        </div>
      )
    }
    </AliceCarousel>
  )
}

const UsedBy = () => (
      <Section id="press" accent>
          <div  align="center">
            <h2>Who's talking about Us</h2>
          </div>
          <br />
            <br />
              <br />
          <br />
          <Gallery />

      </Section>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 64px;
  justify-items: center;
  margin-top: 96px;

  a {
    svg {
      width: 100%;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -12%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default UsedBy;
