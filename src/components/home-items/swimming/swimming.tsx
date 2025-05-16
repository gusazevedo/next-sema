import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import './styles.css';

export default function Swimming() {
  return (
    <section className="dark-zone">
      <div className="home-content-wrapper swimming-wrapper">
        <h1 className="light-text">Natação & Hidroginástica</h1>
        <p className="text light-text">
          Na nossa academia, oferecemos atividades aquáticas para todas as
          idades e níveis de habilidade. Confira as opções disponíveis:
        </p>
        <h2 className="light-text">Natação</h2>
        <ul>
          <li className="text light-text">
            <b>Bebê</b>: Sim, até os pequenininhos (a partir de 6 meses) podem
            aproveitar! Nossas aulas de natação para bebês são seguras,
            divertidas e ajudam no desenvolvimento motor dos pequenos.
          </li>
          <li className="text light-text">
            <b>Infantil e Adulto:</b> Quer melhorar suas braçadas ou apenas
            aproveitar um bom treino na água? Nossos instrutores são super
            qualificados e vão te ajudar a atingir suas metas, seja qual for o
            seu nível.
          </li>
        </ul>

        <h2 className="light-text">Hidroginástica</h2>
        <p className="text light-text">
          A hidroginástica é perfeita para quem tem 15 anos ou mais e quer um
          exercício de baixo impacto, mas super eficiente. Com a resistência da
          água, você melhora a força muscular, flexibilidade e o condicionamento
          físico, tudo isso sem forçar as articulações.
        </p>

        <h3 className="light-text">Quer saber os horários? <br/> Manda um WhatsApp pra gente!</h3>
        <button type="button">
          <WhatsappLogo size={28} color='#f4f4f4'/>
          Entrar em contato
        </button>

        <div className='swimming-disclaimer'>
          <div className='warning'>
            <h2 className='light-text'>Atenção!</h2>
            <p className='text light-text'>Pais ou responsável, que irão acompanhar os bebês nas aulas, sempre devem estar prevenidos com os trajes obrigatórios para entrar na água, caso seja necessário ou solicitado pelo professor.</p>
          </div>
          <div className='suits'>
            <h2 className='light-text'>Trajes obrigatórios para natação</h2>
            <p className='text light-text'><b>Meninas</b>: Maiô ou macaquinho e touca;</p>
            <p className='text light-text'><b>Meninos</b>: Sunga e touca;</p>
            <small className='light-text'>O óculos não é obrigatório, porém indicamos o uso devido ao cloro.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
