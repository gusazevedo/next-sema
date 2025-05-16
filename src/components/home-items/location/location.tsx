import './styles.css';

export default function Location() {
  return (
    <section className='light-zone'>
      <div className="home-content-wrapper">
        <h1 className="dark-text">Localização</h1>
        <iframe
          title='google maps'
            className='location-map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.7996102945947!2d-46.41338039695141!3d-23.54691306506932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65745a5bb551%3A0x192a370c73c2c5c6!2sAcademia%20SEMA!5e0!3m2!1sen!2sbr!4v1653480737638!5m2!1sen!2sbr'
            width='600'
            height='450'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            draggable='false'
        />
      </div>
    </section>
  );
}