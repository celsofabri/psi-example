# Psicologa Gestalt

Website institucional profissional para psicóloga especializada em Gestalt-terapia. Uma aplicação SPA (Single Page Application) moderna construída com React e Vite.

## Visão Geral

Este projeto é um site institucional completo para uma psicóloga, apresentando serviços, metodologia terapêutica, informações profissionais e formas de contato. O design prioriza uma estética acolhedora e profissional, transmitindo confiança e tranquilidade aos visitantes.

## Tecnologias Utilizadas

### Core
- **React 19** - Biblioteca UI com Hooks
- **React Router DOM 7** - Roteamento client-side
- **Vite 8** - Build tool e servidor de desenvolvimento

### UI/UX
- **Lucide React** - Biblioteca de ícones SVG
- **CSS Modules** - Estilização componentizada
- **Google Fonts** - Cormorant Garamond e Montserrat

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e qualidade de código
- **Vite Plugin React** - Suporte React com compilador Oxc

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx          # Navegação com menu mobile
│   ├── Footer.jsx          # Rodapé com contato e newsletter
│   ├── WhatsAppButton.jsx  # Botão flutuante do WhatsApp
│   └── SocialIcons.jsx     # Ícones de redes sociais
│
├── pages/
│   ├── Home.jsx            # Página inicial com hero e serviços
│   ├── Sobre.jsx           # Sobre a psicóloga e trajetória
│   ├── Atendimento.jsx     # Tipos de atendimento e FAQ
│   ├── Metodologia.jsx     # Abordagem Gestalt e técnicas
│   └── Contato.jsx         # Formulário e informações de contato
│
├── App.jsx                 # Componente principal com rotas
├── main.jsx                # Ponto de entrada
└── index.css               # Estilos globais e design system
```

## Páginas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Landing page com hero, serviços e depoimentos |
| `/sobre` | Sobre | Biografia, formação e valores profissionais |
| `/atendimento` | Atendimento | Modalidades de terapia e processo terapêutico |
| `/metodologia` | Metodologia | Gestalt-terapia, princípios e técnicas |
| `/contato` | Contato | Formulário de contato e informações |

## Design System

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Primary | `#7D9B8C` | Cor principal (verde suave) |
| Secondary | `#E8DDD4` | Fundo secundário (creme) |
| Accent | `#C4A77D` | Destaques (dourado) |
| Text Dark | `#3A3A3A` | Texto principal |
| Text Light | `#7A7A7A` | Texto secundário |

### Tipografia

- **Títulos:** Cormorant Garamond (serif elegante)
- **Corpo:** Montserrat (sans-serif limpa)

## Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd site-teste
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no navegador

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR |
| `npm run build` | Gera build de produção em `/dist` |
| `npm run preview` | Visualiza build de produção localmente |
| `npm run lint` | Executa verificação de código com ESLint |

## Funcionalidades

- **Design Responsivo** - Layout adaptável para desktop e mobile
- **Navegação SPA** - Transições suaves entre páginas
- **Menu Mobile** - Hamburger menu para dispositivos móveis
- **Integração WhatsApp** - Botão flutuante com mensagem pré-configurada
- **Formulário de Contato** - Validação client-side com feedback visual
- **Newsletter** - Formulário de inscrição no rodapé
- **Header Dinâmico** - Estilo muda ao rolar a página
- **Acessibilidade** - ARIA labels e HTML semântico

## Personalização

### Informações de Contato

Atualize as informações de contato nos seguintes arquivos:

- `src/components/Footer.jsx` - Telefone, email e endereço
- `src/components/WhatsAppButton.jsx` - Número do WhatsApp
- `src/pages/Contato.jsx` - Informações de contato

### Conteúdo

O conteúdo está definido como objetos JavaScript dentro de cada componente:

- **Serviços:** `src/pages/Home.jsx` e `src/pages/Atendimento.jsx`
- **Timeline/Formação:** `src/pages/Sobre.jsx`
- **Princípios e Técnicas:** `src/pages/Metodologia.jsx`
- **FAQs:** `src/pages/Atendimento.jsx` e `src/pages/Contato.jsx`

### Imagens

Substitua as imagens placeholder em `/public` por imagens reais da profissional e do consultório.

## Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `/dist`.

### Hospedagem

O projeto pode ser hospedado em qualquer serviço de hospedagem estática:

- **Vercel** - `vercel deploy`
- **Netlify** - Arraste a pasta `dist`
- **GitHub Pages** - Configure o workflow de deploy
- **Firebase Hosting** - `firebase deploy`

## Notas Importantes

- Todas as informações de contato (CRP, telefone, email) são **placeholders** e devem ser substituídas antes do deploy
- O formulário de contato é apenas frontend - necessita integração com backend ou serviço de email
- O formulário de newsletter também necessita integração com serviço de email marketing

## Licença

Este projeto é privado e de uso exclusivo do cliente.

---

Desenvolvido com React + Vite
