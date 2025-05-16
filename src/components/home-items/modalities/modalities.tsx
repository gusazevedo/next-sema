import {modailities} from './data.json';

import './styles.css';

export default function Modalities() {
  return (
    <section className='dark-zone'>
      <div className='home-content-wrapper modalities-wrapper'>
          <h1 className='light-text'>NOSSAS <span className='blue-text'>MODALIDADES</span></h1>
          <div className='modalities-grid'>
            {modailities.map(({ name, img }) => (
              <ModalityCard key={name} title={name} image={img} />
            ))}
          </div>
      </div>
    </section>
  );
}

function ModalityCard({ title, image }: {title: string; image: string}) {
  return (
    <div className='modality-card'>
      <img src={`/figures/${image}`} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}