import { Link } from 'react-router-dom'
import { ArrowRight, User, Users, Heart, Monitor, Clock, CheckCircle } from 'lucide-react'
import './Atendimento.css'

function Atendimento() {
  const services = [
    {
      id: 'individual',
      icon: <User size={36} />,
      title: 'Terapia Individual',
      subtitle: 'Adultos e Adolescentes',
      description: 'Um espaço dedicado exclusivamente a você, para explorar suas questões, emoções e padrões de comportamento. Na terapia individual, trabalhamos juntos no seu processo de autoconhecimento e desenvolvimento pessoal.',
      benefits: [
        'Autoconhecimento aprofundado',
        'Desenvolvimento de recursos emocionais',
        'Resolução de conflitos internos',
        'Melhora na qualidade de vida',
        'Fortalecimento da autoestima',
      ],
      indications: [
        'Ansiedade e estresse',
        'Depressão',
        'Dificuldades nos relacionamentos',
        'Transições de vida',
        'Luto e perdas',
        'Autoestima e autoconfiança',
      ],
      duration: '50 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      id: 'casal',
      icon: <Heart size={36} />,
      title: 'Terapia de Casal',
      subtitle: 'Fortalecendo Relacionamentos',
      description: 'Um espaço seguro para casais que desejam melhorar a comunicação, resolver conflitos e fortalecer os vínculos. Na terapia de casal, trabalhamos as dinâmicas relacionais e ajudamos vocês a construir uma relação mais saudável.',
      benefits: [
        'Melhora na comunicação',
        'Resolução de conflitos recorrentes',
        'Reconexão emocional',
        'Fortalecimento dos vínculos',
        'Maior compreensão mútua',
      ],
      indications: [
        'Dificuldades de comunicação',
        'Conflitos frequentes',
        'Crises no relacionamento',
        'Infidelidade',
        'Decisão sobre o futuro da relação',
        'Preparação para casamento',
      ],
      duration: '1 hora e 30 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      id: 'grupo',
      icon: <Users size={36} />,
      title: 'Grupos Terapêuticos',
      subtitle: 'Crescendo Juntos',
      description: 'Experiências em grupo que permitem compartilhar vivências, aprender com os outros e desenvolver habilidades sociais em um ambiente acolhedor e terapêutico.',
      benefits: [
        'Sensação de pertencimento',
        'Aprendizado com experiências compartilhadas',
        'Desenvolvimento de habilidades sociais',
        'Suporte mútuo',
        'Custo mais acessível',
      ],
      indications: [
        'Ansiedade social',
        'Dificuldades interpessoais',
        'Desenvolvimento pessoal',
        'Apoio em momentos de transição',
        'Complemento à terapia individual',
      ],
      duration: '2 horas',
      frequency: 'Semanal (grupos fechados)',
    },
    {
      id: 'online',
      icon: <Monitor size={36} />,
      title: 'Atendimento Online',
      subtitle: 'Terapia Onde Você Estiver',
      description: 'Sessões realizadas por videochamada, com a mesma qualidade e cuidado do atendimento presencial. Uma opção flexível para quem tem rotina intensa ou mora em outras cidades.',
      benefits: [
        'Flexibilidade de horários',
        'Conforto do seu espaço',
        'Economia de tempo com deslocamento',
        'Continuidade em viagens',
        'Acesso de qualquer lugar',
      ],
      indications: [
        'Agenda muito ocupada',
        'Moradores de outras cidades',
        'Preferência por atendimento remoto',
        'Pessoas com mobilidade reduzida',
        'Continuidade durante viagens',
      ],
      duration: '50 minutos',
      frequency: 'Semanal ou quinzenal',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Contato Inicial',
      description: 'Entre em contato por WhatsApp, telefone ou formulário. Respondo em até 24 horas úteis.',
    },
    {
      step: '02',
      title: 'Primeira Sessão',
      description: 'Uma conversa para nos conhecermos, entender suas demandas e alinhar expectativas.',
    },
    {
      step: '03',
      title: 'Processo Terapêutico',
      description: 'Sessões regulares onde trabalhamos juntos suas questões e objetivos terapêuticos.',
    },
    {
      step: '04',
      title: 'Evolução e Fechamento',
      description: 'Acompanhamento do progresso e, quando apropriado, encerramento consciente do processo.',
    },
  ]

  return (
    <div className="atendimento">
      {/* Hero Section */}
      <section className="atendimento-hero">
        <div className="container">
          <div className="atendimento-hero-content">
            <span className="section-label">Tipos de Atendimento</span>
            <h1>Como posso te ajudar</h1>
            <p>
              Ofereço diferentes modalidades de atendimento para melhor atender às suas
              necessidades e momento de vida. Conheça cada uma delas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="atendimento-services section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-info">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div>
                    <h2>{service.title}</h2>
                    <span className="service-subtitle">{service.subtitle}</span>
                  </div>
                </div>
                <p className="service-description">{service.description}</p>

                <div className="service-details">
                  <div className="service-meta">
                    <Clock size={18} />
                    <span><strong>Duração:</strong> {service.duration}</span>
                  </div>
                  <div className="service-meta">
                    <Clock size={18} />
                    <span><strong>Frequência:</strong> {service.frequency}</span>
                  </div>
                </div>

                <div className="service-lists">
                  <div className="service-list">
                    <h4>Benefícios</h4>
                    <ul>
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>
                          <CheckCircle size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-list">
                    <h4>Indicações</h4>
                    <ul>
                      {service.indications.map((indication, i) => (
                        <li key={i}>
                          <CheckCircle size={16} />
                          {indication}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/contato" className="btn btn-primary">
                  Agendar {service.title}
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="service-image">
                <div className="image-placeholder service-placeholder">
                  <span>Imagem {service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Como Funciona</span>
            <h2>O Processo Terapêutico</h2>
            <p>
              Entenda como funcionam as etapas do nosso trabalho juntos,
              do primeiro contato até a evolução do seu processo.
            </p>
            <div className="decorative-line"></div>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={index} className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Dúvidas Frequentes</span>
            <h2>Perguntas Comuns</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Qual a diferença entre atendimento presencial e online?</h4>
              <p>
                Ambos seguem os mesmos princípios éticos e metodológicos. A principal
                diferença é o meio: presencial ocorre no consultório e online por
                videochamada. A qualidade e efetividade são equivalentes.
              </p>
            </div>
            <div className="faq-item">
              <h4>Com que frequência devo fazer terapia?</h4>
              <p>
                A frequência mais comum é semanal, especialmente no início do processo.
                Com o tempo, podemos ajustar para quinzenal conforme sua evolução e
                necessidades.
              </p>
            </div>
            <div className="faq-item">
              <h4>Quanto tempo dura um processo terapêutico?</h4>
              <p>
                Não existe tempo pré-determinado. Depende das suas demandas, objetivos
                e ritmo pessoal. Algumas questões podem ser trabalhadas em meses,
                outras podem demandar mais tempo.
              </p>
            </div>
            <div className="faq-item">
              <h4>A terapia de casal substitui a individual?</h4>
              <p>
                São processos diferentes e complementares. Na terapia de casal, o foco
                é a relação. Se questões individuais surgirem, pode ser indicado um
                acompanhamento individual paralelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="atendimento-cta section">
        <div className="container">
          <div className="atendimento-cta-content">
            <h2>Pronto para começar?</h2>
            <p>
              Escolha a modalidade que melhor se adapta às suas necessidades
              e entre em contato para agendar sua primeira sessão.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Agendar Consulta
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Atendimento
