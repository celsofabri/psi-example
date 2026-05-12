import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Layers, Compass, Sparkles, Quote } from 'lucide-react'
import './Metodologia.css'

function Metodologia() {
  const principles = [
    {
      icon: <Eye size={32} />,
      title: 'Aqui e Agora',
      description: 'Na Gestalt, o foco está no momento presente. Trabalhamos com o que você está experienciando agora, permitindo maior consciência de suas emoções, pensamentos e sensações corporais.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Figura e Fundo',
      description: 'Assim como na percepção visual, na psique temos aquilo que está em destaque (figura) e o que fica em segundo plano (fundo). Ajudamos você a identificar o que precisa de atenção.',
    },
    {
      icon: <Compass size={32} />,
      title: 'Awareness (Consciência)',
      description: 'Desenvolvemos sua capacidade de estar consciente de si mesmo, suas necessidades, sentimentos e padrões de comportamento, ampliando suas possibilidades de escolha.',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Totalidade',
      description: 'Você é visto como um ser integral - corpo, mente e emoções estão interligados. Trabalhamos todas essas dimensões para uma compreensão mais completa de quem você é.',
    },
  ]

  const techniques = [
    {
      title: 'Experimentos Vivenciais',
      description: 'Atividades propostas durante a sessão que permitem explorar situações de forma mais profunda e significativa.',
    },
    {
      title: 'Trabalho com o Corpo',
      description: 'Atenção às sensações corporais, respiração e postura como fontes de informação sobre seu estado emocional.',
    },
    {
      title: 'Diálogo Existencial',
      description: 'Uma conversa genuína e presente, onde o terapeuta se coloca de forma autêntica na relação.',
    },
    {
      title: 'Técnica da Cadeira Vazia',
      description: 'Exercício que permite dialogar com aspectos de si mesmo ou com pessoas ausentes para elaborar conflitos.',
    },
    {
      title: 'Amplificação',
      description: 'Intensificação de gestos, sensações ou emoções para maior consciência do que está sendo vivenciado.',
    },
    {
      title: 'Sonhos e Fantasias',
      description: 'Exploração de sonhos e imagens como expressões de aspectos do self que buscam integração.',
    },
  ]

  const benefits = [
    'Maior autoconhecimento e consciência de si',
    'Desenvolvimento da capacidade de fazer escolhas mais autênticas',
    'Melhora na expressão emocional',
    'Resolução de conflitos internos',
    'Fortalecimento da autoestima e autoconfiança',
    'Relações interpessoais mais saudáveis',
    'Redução de sintomas de ansiedade e depressão',
    'Maior capacidade de estar presente',
  ]

  return (
    <div className="metodologia">
      {/* Hero Section */}
      <section className="metodologia-hero">
        <div className="container">
          <div className="metodologia-hero-content">
            <span className="section-label">Metodologia</span>
            <h1>Gestalt-terapia</h1>
            <p>
              Uma abordagem humanista que valoriza o momento presente, a experiência
              individual e o potencial de cada pessoa para se transformar.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <span className="section-label">O que é</span>
              <h2>Uma abordagem centrada em você</h2>
              <p>
                A Gestalt-terapia foi desenvolvida por Fritz Perls, Laura Perls e
                Paul Goodman na década de 1950. É uma abordagem psicológica que se
                fundamenta na fenomenologia, no existencialismo e na teoria de campo.
              </p>
              <p>
                O termo "Gestalt" vem do alemão e significa "forma" ou "configuração".
                A ideia central é que nós percebemos o mundo em totalidades organizadas,
                não em partes isoladas. Da mesma forma, somos seres inteiros, onde
                corpo, mente e emoções estão interconectados.
              </p>
              <p>
                Na prática clínica, isso significa que não olhamos apenas para seus
                sintomas ou problemas isolados, mas para você como pessoa integral,
                considerando seu contexto, suas relações e sua forma única de estar
                no mundo.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder intro-placeholder">
                <span>Imagem Conceitual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <Quote size={48} className="quote-icon" />
            <blockquote>
              "Eu faço as minhas coisas, você faz as suas. Não estou neste mundo para
              viver de acordo com as suas expectativas. E você não está neste mundo
              para viver de acordo com as minhas. Você é você, e eu sou eu. E se por
              acaso nos encontrarmos, é lindo. Se não, nada há a fazer."
            </blockquote>
            <cite>— Fritz Perls, criador da Gestalt-terapia</cite>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Fundamentos</span>
            <h2>Princípios da Gestalt-terapia</h2>
            <p>
              Conceitos centrais que fundamentam a prática e a compreensão
              do ser humano na abordagem gestáltica.
            </p>
            <div className="decorative-line"></div>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-icon">{principle.icon}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="techniques section">
        <div className="container">
          <div className="techniques-grid">
            <div className="techniques-content">
              <span className="section-label">Na Prática</span>
              <h2>Como trabalhamos nas sessões</h2>
              <p>
                A Gestalt-terapia utiliza diversas técnicas e recursos para facilitar
                o processo de awareness e mudança. Cada sessão é única e os recursos
                são utilizados de acordo com o que surge no momento.
              </p>
              <div className="techniques-list">
                {techniques.map((technique, index) => (
                  <div key={index} className="technique-item">
                    <h4>{technique.title}</h4>
                    <p>{technique.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="techniques-image">
              <div className="image-placeholder techniques-placeholder">
                <span>Imagem Sessão</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-image">
              <div className="image-placeholder benefits-placeholder">
                <span>Imagem Benefícios</span>
              </div>
            </div>
            <div className="benefits-content">
              <span className="section-label">Resultados</span>
              <h2>Benefícios da Gestalt-terapia</h2>
              <p>
                O processo terapêutico na abordagem gestáltica pode trazer
                diversos benefícios para sua vida e bem-estar.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="benefit-check">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="difference section">
        <div className="container">
          <div className="section-title">
            <span className="section-label">Diferenciais</span>
            <h2>Por que escolher a Gestalt-terapia?</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="difference-content">
            <div className="difference-item">
              <h3>Foco no Presente</h3>
              <p>
                Diferente de abordagens que focam excessivamente no passado, a Gestalt
                trabalha com o que está vivo agora. O passado é acessado quando se
                manifesta no presente, de forma orgânica e significativa.
              </p>
            </div>
            <div className="difference-item">
              <h3>Relação Terapêutica</h3>
              <p>
                O terapeuta não é uma figura distante e neutra. Na Gestalt, a relação
                entre terapeuta e cliente é considerada um instrumento fundamental de
                cura e transformação.
              </p>
            </div>
            <div className="difference-item">
              <h3>Responsabilidade e Autonomia</h3>
              <p>
                A Gestalt-terapia acredita no seu potencial de autorregulação e mudança.
                O objetivo não é criar dependência, mas ajudá-lo a desenvolver recursos
                próprios para lidar com a vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="metodologia-cta section">
        <div className="container">
          <div className="metodologia-cta-content">
            <h2>Quer experimentar a Gestalt-terapia?</h2>
            <p>
              A melhor forma de entender como a Gestalt pode te ajudar é
              vivenciando. Agende uma sessão e descubra o poder do aqui e agora.
            </p>
            <Link to="/contato" className="btn btn-primary">
              Agendar Primeira Sessão
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Metodologia
