import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'I want to try Devoleum!',
    content: () => (
      <>
        You can try our simulation for free <ExternalLink href="https://simulation.devoleum.com/">
        here</ExternalLink>, build your supply chain and please give us a feedback :)
      </>
    ),
  },
  {
    title: 'How Devoleum integrates Smart Tags?',
    content: () => (
      <>
        Take a look at <ExternalLink href="https://simulation.devoleum.com/"> this video
        here</ExternalLink>, using different kinds of Oracles Devoleum can integrate even more
        advanced smart tags.
      </>
    ),
  },
  {
    title: 'What tech does Devoleum use?',
    content: () => (
      <>
        All the tech behind Devoleum is open source, Ethereum blockchain, Tensor Flow,
        PySyft, Truffle, Zokrates, React, Electron etc...
      </>
    ),
  },
  {
    title: 'Why Devoleum is not yet commercialized?',
    content: () => (
      <>
        We are improving our AI models, we're searching
        companies that uses precision farming in order to gather enough data
        to develop accurate AI models.
      </>
    ),
  },
  {
    title: 'Deveolum is a software or hardware solution?',
    content: () => (
      <>
        Devoleum is a digital solution, we manage the data provided by the users,
        we do not generate data or provide hardware tools.
      </>
    ),
  },
  {
    title: 'Do you have a white paper?',
    content: () => (
      <>
      No, we are busy working on the real project and is in constant evolution,
      we do not have time to waste on a fake paper, we suggest to read <ExternalLink href="https://medium.com/loom-network/loom-network-wheres-your-whitepaper-5c5c9075af72">
        this article</ExternalLink>
      </>
    ),
  },
  {
    title: 'Do you plan an ICO?',
    content: () => (
      <>
        No, we do not beg for money,
        if you want to invest in Devoleum you are welcome, <ExternalLink href="https://lorenzozaccagnini360607.typeform.com/to/ie22gw">
          contact us</ExternalLink> and do not forget to link your investments portfolio.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
