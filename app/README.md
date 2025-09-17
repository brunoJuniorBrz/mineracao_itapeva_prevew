
# Mineração Itapeva - Site Institucional

Site institucional moderno e responsivo para a Mineração Itapeva, desenvolvido com Next.js 14, Tailwind CSS e Supabase.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações suaves
- **Supabase/PostgreSQL** - Banco de dados
- **Prisma** - ORM para banco de dados
- **Lucide React** - Ícones modernos

## 🎨 Características

- **Design Responsivo** - Adaptado para todos os dispositivos
- **Animações Suaves** - Experiência visual aprimorada
- **Formulário Funcional** - Integrado com banco de dados
- **Botão WhatsApp** - Contato direto flutuante
- **Galeria Interativa** - Visualização de imagens
- **SEO Otimizado** - Metadados completos

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ 
- Yarn ou npm
- Banco PostgreSQL (Supabase)

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd mineracao_itapeva_site/app
```

2. **Instale as dependências**
```bash
yarn install
# ou
npm install
```

3. **Configure o banco de dados**
```bash
# Gerar cliente Prisma
npx prisma generate

# Executar migrações
npx prisma db push

# Popular banco com dados iniciais
npx prisma db seed
```

4. **Configure as variáveis de ambiente**
O arquivo `.env` já está configurado com a URL do banco de dados.

5. **Execute o projeto**
```bash
yarn dev
# ou
npm run dev
```

6. **Acesse o site**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🗂️ Estrutura do Projeto

```
app/
├── app/                    # Páginas Next.js (App Router)
│   ├── api/               # API Routes
│   │   ├── contato/       # Endpoint de contato
│   │   ├── noticias/      # Endpoint de notícias
│   │   ├── galeria/       # Endpoint da galeria
│   │   └── whatsapp/      # Endpoint WhatsApp
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI
│   ├── cabecalho.tsx     # Cabeçalho do site
│   ├── secao-hero.tsx    # Seção hero
│   ├── secao-sobre.tsx   # Seção sobre
│   ├── secao-produtos.tsx # Seção produtos
│   ├── secao-sustentabilidade.tsx # Sustentabilidade
│   ├── secao-noticias.tsx # Notícias
│   ├── secao-galeria.tsx # Galeria
│   ├── secao-contato.tsx # Contato
│   ├── rodape.tsx        # Rodapé
│   └── botao-whatsapp.tsx # Botão WhatsApp
├── lib/                   # Utilitários
├── prisma/               # Configuração Prisma
│   └── schema.prisma     # Schema do banco
├── scripts/              # Scripts utilitários
│   └── seed.ts           # Seed do banco
└── hooks/                # Hooks customizados
```

## 🎯 Funcionalidades

### Seções do Site

1. **Hero** - Apresentação inicial com estatísticas animadas
2. **Sobre** - História e informações da empresa
3. **Produtos** - Filito e Ligamil com especificações
4. **Sustentabilidade** - Práticas ambientais e sociais
5. **Notícias** - Atualizações e novidades
6. **Galeria** - Fotos das operações e instalações
7. **Contato** - Formulário e informações de contato

### Características Técnicas

- **Responsividade Completa** - Mobile-first design
- **Animações Framer Motion** - Entrada suave dos elementos
- **Formulário Funcional** - Salva no banco PostgreSQL
- **Botão WhatsApp** - Flutuante com link direto
- **Galeria Modal** - Visualização ampliada de imagens
- **SEO Otimizado** - Meta tags e estrutura adequada

## 🗃️ Banco de Dados

### Tabelas Principais

- **contatos_formulario** - Formulários de contato
- **contatos_whatsapp** - Contatos via WhatsApp
- **noticias** - Notícias e atualizações
- **produtos** - Produtos da empresa
- **galeria_imagens** - Imagens da galeria

### Comandos Úteis

```bash
# Visualizar banco no Prisma Studio
npx prisma studio

# Reset do banco
npx prisma migrate reset

# Aplicar alterações do schema
npx prisma db push

# Reexecutar seed
npx prisma db seed
```

## 🎨 Cores Oficiais

- **Vermelho Principal**: `#d00000`
- **Branco Gelo**: `#f5f5f5`
- **Cinza Escuro**: `#1e1e1e`
- **Cinza Claro**: `#e0e0e0`

## 🚀 Deploy

### Vercel (Recomendado)

1. **Faça upload do projeto para GitHub**
2. **Conecte com Vercel**
3. **Configure as variáveis de ambiente**
4. **Deploy automático**

### Outras Plataformas

- **Netlify** - Configuração similar
- **Railway** - Suporte nativo ao PostgreSQL
- **Render** - Deploy gratuito

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
yarn dev

# Build de produção
yarn build

# Iniciar produção
yarn start

# Lint
yarn lint

# Prisma Studio
npx prisma studio
```

### Estrutura de Componentes

- **Componentes Server** - Renderização no servidor
- **Componentes Client** - Interatividade ('use client')
- **Componentes UI** - Reutilizáveis (Radix UI)

## 🐛 Resolução de Problemas

### Erro de Banco de Dados

```bash
# Recriar banco
npx prisma migrate reset
npx prisma db push
npx prisma db seed
```

### Problemas de Build

```bash
# Limpar cache
rm -rf .next
yarn build
```

### Erros de Tipos

```bash
# Regenerar tipos Prisma
npx prisma generate
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para a Mineração Itapeva. Todos os direitos reservados.

## 📞 Suporte

Para suporte técnico ou dúvidas:

- **E-mail**: contato@mineracaoitapeva.com.br
- **Telefone**: (15) 3521-9550
- **WhatsApp**: (15) 99999-9999

---

**Desenvolvido com ❤️ para a mineração sustentável**

*Mineração Itapeva - Desde 1959 produzindo com excelência*
