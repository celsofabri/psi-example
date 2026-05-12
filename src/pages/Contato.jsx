import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons'
import './Contato.css'

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Form data:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Telefone / WhatsApp',
      info: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999',
    },
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      info: 'contato@psicologa.com.br',
      link: 'mailto:contato@psicologa.com.br',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Endereço',
      info: 'Rua das Flores, 123 - Sala 45\nJardins, São Paulo - SP',
      link: 'https://maps.google.com',
    },
    {
      icon: <Clock size={24} />,
      title: 'Horário de Atendimento',
      info: 'Segunda a Sexta: 8h às 20h\nSábado: 8h às 14h',
    },
  ]

  return (
    <div className="contato">
      {/* Hero Section */}
      <section className="contato-hero">
        <div className="container">
          <div className="contato-hero-content">
            <span className="section-label">Contato</span>
            <h1>Vamos conversar?</h1>
            <p>
              Estou aqui para te ouvir. Entre em contato para agendar sua
              primeira sessão ou tirar suas dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contato-main section">
        <div className="container">
          <div className="contato-grid">
            {/* Contact Form */}
            <div className="contato-form-wrapper">
              <h2>Envie uma mensagem</h2>
              <p>
                Preencha o formulário abaixo e entrarei em contato em até 24 horas úteis.
              </p>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                </div>
              )}

              <form className="contato-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Tipo de atendimento</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="individual">Terapia Individual</option>
                    <option value="casal">Terapia de Casal</option>
                    <option value="grupo">Grupo Terapêutico</option>
                    <option value="online">Atendimento Online</option>
                    <option value="duvida">Apenas tirando dúvidas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Conte um pouco sobre o que você está buscando..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Enviar Mensagem
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contato-info">
              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.info.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.info.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </a>
                      ) : (
                        <p>
                          {item.info.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.info.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4>Siga nas redes sociais</h4>
                <div className="social-links">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <InstagramIcon size={24} />
                    <span>@dra.mariasilva</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <LinkedinIcon size={24} />
                    <span>Dra. Maria Silva</span>
                  </a>
                </div>
              </div>

              <div className="map-placeholder image-placeholder">
                <span>Mapa do Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contato-faq section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Informações</span>
            <h2>Antes de agendar</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Como funciona a primeira sessão?</h4>
              <p>
                A primeira sessão é um momento de conhecimento mútuo. Vamos conversar
                sobre suas demandas, esclarecer dúvidas sobre o processo terapêutico
                e verificar se faz sentido trabalharmos juntos.
              </p>
            </div>
            <div className="faq-item">
              <h4>Qual o valor das sessões?</h4>
              <p>
                Os valores são informados diretamente no contato inicial, pois podem
                variar de acordo com a modalidade de atendimento. Trabalho com valores
                acessíveis e possibilidade de negociação.
              </p>
            </div>
            <div className="faq-item">
              <h4>Vocês aceitam convênio?</h4>
              <p>
                Atualmente trabalho apenas de forma particular. Porém, emito recibo
                para reembolso junto às operadoras de plano de saúde que oferecem
                essa possibilidade.
              </p>
            </div>
            <div className="faq-item">
              <h4>Como é a política de cancelamento?</h4>
              <p>
                Peço que cancelamentos ou remarcações sejam feitos com pelo menos
                24 horas de antecedência. Cancelamentos em cima da hora ou faltas
                sem aviso são cobrados integralmente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
