# 📹 BodyCam AI - Plataforma de Monitoramento & Visão Computacional

Sistema web em React + TypeScript + Vite + Tailwind CSS para monitoramento em tempo real de câmeras corporais (bodycams) com triagem automática de ameaças por Inteligência Artificial.

---

## 🚀 Estrutura do Projeto

A arquitetura segue o padrão modular e escalável:

```text
bodycamai/
├── public/                 # Favicon e assets públicos estáticos
├── src/
│   ├── assets/             # Imagens e ícones locais
│   ├── components/         # Componentes reutilizáveis de interface
│   │   ├── common/         # Componentes base (Button, Card, Badge, Modal)
│   │   ├── layout/         # Header, Sidebar, MainLayout
│   │   └── bodycam/        # VideoPlayer, DetectionList, CameraFeedGrid, IncidentCard
│   ├── context/            # Gerenciamento de estado global (CameraContext)
│   ├── hooks/              # Custom hooks (useCameraFeed, useIncidents)
│   ├── pages/              # Páginas/Telas da aplicação (Dashboard, LiveFeeds, Incidents, Settings)
│   ├── services/           # Camada de comunicação com APIs e streams
│   ├── types/              # Definições de tipos e interfaces TypeScript
│   ├── utils/              # Funções utilitárias, constantes e dados mockados
│   ├── App.tsx             # Componente raiz e roteamento de abas
│   ├── index.css           # Estilos globais e diretivas do Tailwind CSS
│   └── main.tsx            # Ponto de entrada da aplicação React
├── index.html              # Template HTML principal
├── package.json            # Dependências e scripts npm
├── postcss.config.js       # Configuração do PostCSS
├── tailwind.config.js      # Configuração de temas e cores do Tailwind
├── tsconfig.json           # Configurações do compilador TypeScript
├── tsconfig.node.json      # Configurações TypeScript para o Vite
└── vite.config.ts          # Configuração do bundler Vite (com alias `@/`)
```

---

## 🛠️ Como Executar o Projeto

### 1. Pré-requisito: Instalar o Node.js
Se você ainda não possui o **Node.js** instalado na sua máquina:
- Baixe e instale a versão **LTS** em: [https://nodejs.org/](https://nodejs.org/)

### 2. Instalação das Dependências
Abra o terminal na pasta do projeto (`c:\Users\ALUNO\Desktop\bodycamai`) e execute:

```bash
npm install
```

### 3. Executar em Modo de Desenvolvimento
Inicie o servidor de desenvolvimento local:

```bash
npm run dev
```

O terminal exibirá o endereço local, geralmente:
👉 `http://localhost:3000`

### 4. Gerar Build de Produção
Para compilar o projeto para produção:

```bash
npm run build
```

---

## ✨ Funcionalidades Incluídas
- **Visão Geral com KPIs Operacionais:** Métricas de câmeras ativas, incidentes críticos e assertividade da IA.
- **Player de Streaming com HUD:** Simulação de stream com sobreposição de caixas delimitadoras de detecção (Bounding Boxes), telemetria GPS e nível de bateria.
- **Mural de Câmeras (CCTV Grid):** Visualização em grade para acompanhamento simultâneo de múltiplos operadores.
- **Gestão de Incidentes com Validação:** Registro de ocorrências com classificação de severidade (*Crítico, Alto, Médio*) e ações de validação/descarte.
- **Configuração de Sensibilidade:** Painel para calibração do limiar de confiança da IA e ativação de módulos neurais (armas, biometria e estresse vocal).

