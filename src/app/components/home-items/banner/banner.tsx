import './style.css';

export default function Banner() {
  return (
    <section className="banner-section">
      <div className='banner-container'>
        <img
          src='/figures/banner.jpg'
          alt='banner da academia'
        />
        <h1 className='light-text'>Academia <br />Sema</h1>
      </div>
    </section>
  );
}