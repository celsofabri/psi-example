import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Sparkles, Users, Calendar, Award } from 'lucide-react'
import './Home.css'

function Home() {
  const services = [
    {
      icon: <Users size={32} />,
      title: 'Terapia Individual',
      description: 'Espaço de escuta e acolhimento para autoconhecimento e transformação pessoal.',
    },
    {
      icon: <Heart size={32} />,
      title: 'Terapia de Casal',
      description: 'Fortalecimento de vínculos e resolução de conflitos para relacionamentos saudáveis.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Atendimento Online',
      description: 'Sessões com a mesma qualidade do presencial, no conforto da sua casa.',
    },
  ]

  const features = [
    {
      icon: <Shield size={28} />,
      title: 'Sigilo Profissional',
      description: 'Ambiente seguro e confidencial para suas questões mais íntimas.',
    },
    {
      icon: <Calendar size={28} />,
      title: 'Horários Flexíveis',
      description: 'Atendimento adaptado à sua rotina, incluindo finais de semana.',
    },
    {
      icon: <Award size={28} />,
      title: 'Especialização',
      description: 'Formação sólida em Gestalt-terapia e atualização constante.',
    },
  ]

  const testimonials = [
    {
      text: 'A terapia com a Dra. Maria mudou minha forma de ver a vida. Me sinto mais conectada comigo mesma e mais capaz de lidar com os desafios do dia a dia.',
      author: 'Ana C.',
      role: 'Paciente há 2 anos',
    },
    {
      text: 'Encontrei um espaço de acolhimento genuíno. A abordagem da Gestalt me ajudou a me tornar mais consciente das minhas emoções e padrões de comportamento.',
      author: 'Roberto M.',
      role: 'Paciente há 1 ano',
    },
    {
      text: 'As sessões online são muito práticas e mantêm a mesma qualidade do atendimento presencial. Recomendo a todos que buscam autoconhecimento.',
      author: 'Juliana S.',
      role: 'Paciente há 8 meses',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Gestalt-terapia</span>
            <h1>Um espaço para você se reconectar consigo mesmo</h1>
            <p>
              Acolhimento, escuta atenta e transformação. Descubra o poder de estar
              presente e viver de forma mais autêntica através da Gestalt-terapia.
            </p>
            <div className="hero-buttons">
              <Link to="/contato" className="btn btn-primary">
                Agendar Consulta
                <ArrowRight size={18} />
              </Link>
              <Link to="/sobre" className="btn btn-outline-light">
                Conheça-me
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder hero-placeholder">
              <span>Foto da Psicóloga</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Role para descobrir</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-image">
              <div className="image-placeholder welcome-placeholder">
                <span>Foto do Consultório</span>
              </div>
              <div className="welcome-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Anos de Experiência</span>
              </div>
            </div>
            <div className="welcome-content">
              <span className="section-label">Bem-vindo(a)</span>
              <h2>Cada pessoa é única, assim como seu processo terapêutico</h2>
              <p>
                Olá, sou a Dra. Maria Silva, psicóloga especializada em Gestalt-terapia.
                Acredito que cada ser humano possui em si a capacidade de se transformar
                e viver de forma mais plena e autêntica.
              </p>
              <p>
                Na Gestalt-terapia, trabalhamos com o aqui e agora, valorizando sua
                experiência presente e ajudando você a desenvolver maior consciência
                sobre si mesmo, suas emoções e suas relações.
              </p>
              <Link to="/sobre" className="btn btn-secondary">
                Saiba mais sobre mim
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Serviços</span>
            <h2>Como posso te ajudar</h2>
            <p>
              Ofereço diferentes modalidades de atendimento para melhor atender
              às suas necessidades e momento de vida.
            </p>
            <div className="decorative-line"></div>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/atendimento" className="service-link">
                  Saiba mais <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="features-content">
            <span className="section-label">Por que escolher</span>
            <h2>Um atendimento pensado para você</h2>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/metodologia" className="btn btn-primary">
              Conheça a Gestalt-terapia
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="features-image">
            <div className="image-placeholder features-placeholder">
              <span>Imagem Decorativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Depoimentos</span>
            <h2>O que dizem sobre o processo terapêutico</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar image-placeholder">
                    <span>{testimonial.author[0]}</span>
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.author}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para iniciar sua jornada de autoconhecimento?</h2>
            <p>
              O primeiro passo é sempre o mais importante. Entre em contato e
              agende sua primeira sessão.
            </p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary">
                Agendar Primeira Consulta
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
