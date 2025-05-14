import { Metadata } from 'next';
import ContentContainer from '../components/content-container/content-container';
import FixedBanner from '../components/fixed-banner/fixed-banner';
import data from './data.json';

import './styles.css';

export const metadata: Metadata = {
  title: "Musculação na Sema",
  description: "Importância da musculação para a saúde e bem-estar.",
  keywords: "musculação, saúde, bem-estar, exercícios físicos, academia",
  authors: [{name: "Sema"}],
  robots: "index, follow",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Musculação na Sema",
    description: "Importância da musculação para a saúde e bem-estar.",
    url: "https://www.sema.com/musculacao",
    images: [
      {
        url: "/figures/musculacao2.jpeg",
        width: 1200,
        height: 630,
        alt: "Musculação",
      },
    ],
  },
};

export default function About() {
  return (
    <ContentContainer>
      <div className='content-wrapper'>
        <div className='page-title-wrapper'>
          <h1 className='dark-text'>{data.title}</h1>
          <small>A apartir de 15 anos.</small>
        </div>
        <FixedBanner img='/figures/musculacao2.jpeg' alt='Musculação' />
        {data.paragraphs.map(({id, text}) => (
          <p key={id} className='text dark-text'>{text}</p>
        ))}
      </div>
      <div className='content-wrapper'>
        <h2 className='dark-text'>{data.subtitle}</h2>
        <ul>
          {data.benefits.map(({id, text}) => (
            <li key={id} className='text dark-text'>{text}</li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  );
}