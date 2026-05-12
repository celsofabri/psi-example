import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from './SocialIcons'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span className="logo-name">Dra. Maria Silva</span>
                <span className="logo-title">Psicóloga | CRP 00/00000</span>
              </Link>
              <p className="footer-description">
                Acolhimento e transformação através da Gestalt-terapia.
                Um espaço seguro para você se reconectar consigo mesmo.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="mailto:contato@psicologa.com.br" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Navegação</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/atendimento">Tipos de Atendimento</Link></li>
                <li><Link to="/metodologia">Metodologia</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contato</h4>
              <ul>
                <li>
                  <Phone size={18} />
                  <span>(11) 99999-9999</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>contato@psicologa.com.br</span>
                </li>
                <li>
                  <MapPin size={18} />
                  <span>Rua das Flores, 123 - Sala 45<br />São Paulo - SP</span>
                </li>
                <li>
                  <Clock size={18} />
                  <span>Seg - Sex: 8h às 20h<br />Sáb: 8h às 14h</span>
                </li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Receba Conteúdos</h4>
              <p>Inscreva-se para receber dicas de bem-estar e saúde emocional.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  aria-label="Seu e-mail"
                />
                <button type="submit" className="btn btn-primary">
                  Inscrever
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Dra. Maria Silva. Todos os direitos reservados.</p>
          <p className="footer-legal">
            Psicóloga | CRP 00/00000 | Especialista em Gestalt-terapia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
