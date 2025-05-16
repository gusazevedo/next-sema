import { Envelope, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import './styles.css';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='logo-horizontal'>
                    <img src='/figures/logo-horizontal.png' alt='Logo da academia sema' />
                </div>

                <div className="informations">
                    <div className='informations-content'>
                        <h3>Horário de funcionamento</h3>
                        <span>
                            Segunda à sexta - 06h00 às 21h00
                            <br />
                            Sábado - 07h00 às 16h00
                        </span>
                    </div>
                    <div className='informations-content'>
                        <h3>Redes sociais</h3>
                        <span>
                            <Envelope size={24} />
                            faleconosco@sema.com.br
                        </span>
                        <span>
                            <InstagramLogo size={24} color='#282341'/>
                            <a href="https://www.instagram.com/academiasema/" target="_blank" rel="noreferrer">Instagram</a>
                        </span>
                        <span>
                            <WhatsappLogo size={24} color='#282341'/>
                            <a href='https://wa.me/5511991213789' target='_blank' rel="noreferrer">Whatsapp</a>
                        </span>
                    </div>
                    <div className='informations-content'>
                        <h3>Trabalhe conosco</h3>
                        <span>
                            trabalheconosco@sema.com.br
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
