import { Link } from 'react-router-dom'
import { ArrowRight, Award, BookOpen, GraduationCap, Heart } from 'lucide-react'
import './Sobre.css'

function Sobre() {
  const timeline = [
    {
      year: '2010',
      title: 'Graduação em Psicologia',
      description: 'Universidade de São Paulo (USP)',
      icon: <GraduationCap size={24} />,
    },
    {
      year: '2012',
      title: 'Especialização em Gestalt-terapia',
      description: 'Instituto Sedes Sapientiae',
      icon: <BookOpen size={24} />,
    },
    {
      year: '2015',
      title: 'Mestrado em Psicologia Clínica',
      description: 'PUC-SP',
      icon: <Award size={24} />,
    },
    {
      year: '2018',
      title: 'Formação em Terapia de Casal',
      description: 'Instituto Gestalt de São Paulo',
      icon: <Heart size={24} />,
    },
  ]

  const values = [
    {
      title: 'Acolhimento',
      description: 'Criar um espaço seguro onde você possa se expressar livremente, sem julgamentos.',
    },
    {
      title: 'Autenticidade',
      description: 'Valorizar quem você realmente é e ajudá-lo a viver de forma mais genuína.',
    },
    {
      title: 'Presença',
      description: 'Estar verdadeiramente presente em cada sessão, com escuta atenta e empática.',
    },
    {
      title: 'Transformação',
      description: 'Acreditar no seu potencial de mudança e crescimento pessoal.',
    },
  ]

  return (
    <div className="sobre">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="container">
          <div className="sobre-hero-content">
            <span className="section-label">Sobre Mim</span>
            <h1>Prazer, eu sou a Dra. Maria Silva</h1>
            <p>
              Psicóloga clínica apaixonada por ajudar pessoas a se reconectarem
              consigo mesmas e viverem de forma mais autêntica e plena.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="sobre-content section">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-image">
              <div className="image-placeholder sobre-placeholder">
                <span>Foto Profissional</span>
              </div>
              <div className="sobre-quote">
                <p>"O que me move é ver as pessoas se tornando quem realmente são."</p>
              </div>
            </div>
            <div className="sobre-text">
              <h2>Minha Trajetória</h2>
              <p>
                Desde muito jovem, sempre fui fascinada pelo comportamento humano e
                pela complexidade das relações. Essa curiosidade me levou à Psicologia,
                onde encontrei minha verdadeira vocação.
              </p>
              <p>
                Ao longo de mais de 10 anos de atuação clínica, tive o privilégio de
                acompanhar centenas de pessoas em suas jornadas de autoconhecimento e
                transformação. Cada história é única, e é essa singularidade que torna
                meu trabalho tão significativo.
              </p>
              <p>
                A Gestalt-terapia me escolheu tanto quanto eu a escolhi. Sua abordagem
                humanista, que valoriza o momento presente e a experiência individual,
                ressoa profundamente com meus valores pessoais e minha forma de ver o
                ser humano.
              </p>
              <p>
                Acredito que cada pessoa carrega em si a capacidade de se transformar.
                Meu papel é ser uma facilitadora nesse processo, oferecendo um espaço
                de acolhimento, escuta genuína e suporte para que você possa explorar
                suas questões e encontrar seus próprios caminhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Formação</span>
            <h2>Minha Jornada Acadêmica</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="timeline-container">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-icon">{item.icon}</div>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section">
        <div className="container">
          <div className="values-header">
            <span className="section-label">Filosofia</span>
            <h2>Valores que guiam meu trabalho</h2>
            <p>
              Princípios fundamentais que norteiam minha prática clínica e a
              relação que construo com cada paciente.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-number">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="personal section">
        <div className="container">
          <div className="personal-grid">
            <div className="personal-content">
              <span className="section-label">Além do Consultório</span>
              <h2>Um pouco mais sobre mim</h2>
              <p>
                Além da minha paixão pela psicologia, sou uma pessoa que valoriza
                as pequenas coisas da vida. Adoro ler, especialmente literatura
                brasileira e livros de filosofia. Nas horas vagas, pratico yoga
                e meditação, práticas que complementam minha visão de bem-estar
                integral.
              </p>
              <p>
                Acredito que o terapeuta também precisa cuidar de si para poder
                cuidar do outro. Por isso, mantenho minha própria terapia,
                supervisão clínica e busco constantemente atualização profissional.
              </p>
              <p>
                Sou mãe de dois filhos, o que me ensinou muito sobre paciência,
                amor incondicional e a beleza de acompanhar o desenvolvimento
                de outro ser humano.
              </p>
            </div>
            <div className="personal-images">
              <div className="image-placeholder personal-placeholder-1">
                <span>Foto Pessoal 1</span>
              </div>
              <div className="image-placeholder personal-placeholder-2">
                <span>Foto Pessoal 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sobre-cta section">
        <div className="container">
          <div className="sobre-cta-content">
            <h2>Vamos conversar?</h2>
            <p>
              Estou aqui para te ouvir. Se você está buscando apoio psicológico,
              entre em contato e vamos agendar uma conversa inicial.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Entrar em Contato
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sobre
