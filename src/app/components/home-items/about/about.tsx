import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import './styles.css';

export default function About() {
  return (
    <section className='light-zone'>
      <div className="home-content-wrapper about-wrapper">
        <h1 className='dark-text'>Sobre a SEMA</h1>
        <p className="dark-text text">
          Fundada em 16 de março de 1994 no bairro de Guaianases, a Sema Natação
          foi a primeira escola de esportes aquáticos da região. Inicialmente,
          atendia apenas demandas como a natação e a hidroginástica, mas com a
          dedicação de seus colaboradores, o aprimoramento dos serviços alinhado
          a qualidade dos profissionais, sentiu a necessidade de ampliar os
          horizontes e passou por uma reformulação no ano de 2001, nascendo
          assim, a Academia Sema, que além de esportes aquáticos, agora também
          possui a musculação, circuito, aeroboxe e treino funcional em seu
          portfólio.
        </p>
        <h2 className='dark-text'>Quais seus objetivos?</h2>
        <p className='dark-text text'>Em cinco anos operar processos de atendimento voltado para alunos com doenças crônicas e em 10 anos, estender esse atendimento para uma equipe com profissionais multidisciplinares.</p>
        <h2 className='dark-text'>O que ela oferece?</h2>
        <ul>
          <li className='dark-text text'>Aulas de natação de bebês (a partir dos 06 meses) e adultos;</li>
          <li className='dark-text text'>Aulas de hidroginástica;</li>
          <li className='dark-text text'>Musculação, treino funcional, circuito e aeroboxe;</li>
          <li className='dark-text text'>Avaliações físicas e orientações e consultas nutricionais;</li>
          <li className='dark-text text'>Equipe de professores experientes;</li>
          <li className='dark-text text'>Infraestrutura diferenciada: piscina semi-olímpica (25 metros);</li>
          <li className='dark-text text'>Acessórios para natação que são vendidos na própria Academia.</li>
        </ul>
        <div className='about-connections'>
          <div className='about-connections-text'>
            <h1 className='dark-text'>A <span className='blue-text'>SEMA</span> sempre conectada com <span className='blue-text'>VOCÊ</span></h1>
            <div className='about-connections-social'>
              <a href='https://www.instagram.com/academiasema?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='social-item text dark-text'><InstagramLogo size={32} color='#282341'/> academiasema</a>
              <a className='social-item text dark-text'><WhatsappLogo size={32} color='#282341'/>Whatsapp</a>
            </div>
          </div>
          <div className='about-connections-icons'>
            <div className='about-connection-icon'>
              <img src="/figures/totalpass.png" alt="Totalpass" />
            </div>
            <div className='about-connection-icon'>
              <img src="/figures/wellhub.png" alt="Wellhub" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
