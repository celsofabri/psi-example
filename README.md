# Psicologa Gestalt

Website institucional construído com React e Vite.

## Tecnologias

- React 19
- React Router DOM 7
- Vite 8
- Lucide React
- ESLint

## Pré-requisitos

- Node.js 18+
- npm

## Instalação

```bash
git clone git@github.com:celsofabri/psi-example.git
cd psi-example
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |
| `npm run lint` | Verificação de código |

## Deploy

O projeto utiliza GitHub Actions para deploy automático no GitHub Pages.

### Deploy automático

O deploy é executado automaticamente a cada push na branch `main`.

### Deploy manual

1. Gere o build:
```bash
npm run build
```

2. Os arquivos serão gerados em `/dist`

### Configuração do GitHub Pages

1. No repositório, vá em **Settings > Pages**
2. Em **Source**, selecione **GitHub Actions**
3. O workflow `.github/workflows/deploy.yml` fará o deploy automático

### URL de produção

https://celsofabri.github.io/psi-example/
