# Site Oficial do ÚDI

Site oficial do cantor, compositor e instrumentista ÚDI, criado para promover o novo álbum "SEIS CORDAS E UMA VOZ GUEST MPC" e conectar com os fãs.

## Sobre o Projeto

Este site foi desenvolvido para:
- Apresentar o artista ÚDI e sua música
- Promover a campanha de crowdfunding do novo álbum
- Conectar com fãs através das redes sociais
- Divulgar shows e eventos
- Facilitar o contato com o artista

## Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Widget Fundrazr**: Integração com a campanha de financiamento
- **Redes Sociais**: Links para Spotify, Instagram, YouTube e outras plataformas
- **Formulário de Contato**: Permite que fãs entrem em contato diretamente
- **Seções Organizadas**: Hero, Sobre, Música, Financiamento, Shows e Contato

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript vanilla para interatividade
- Font Awesome para ícones
- Google Fonts (Montserrat)
- Widget Fundrazr para crowdfunding

## Estrutura do Projeto

```
udi-website/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # JavaScript para interatividade
├── images/
│   ├── udi-hero.jpg    # Imagem principal do artista
│   ├── udi-about.jpg   # Imagem da seção sobre
│   ├── album-1.jpg     # Capa do álbum 1
│   ├── album-2.jpg     # Capa do álbum 2
│   └── album-3.jpg     # Capa do álbum 3
└── assets/             # Outros recursos
```

## Como Usar

### Para GitHub Pages

1. Faça upload de todos os arquivos para um repositório no GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "main" branch e "/ (root)"
5. O site estará disponível em `https://seuusuario.github.io/nome-do-repositorio`

### Para Domínio Personalizado

1. Crie um arquivo `CNAME` na raiz do projeto com seu domínio
2. Configure os DNS do seu domínio para apontar para o GitHub Pages
3. Aguarde a propagação DNS (pode levar até 24 horas)

## Configurações Necessárias

### Links das Redes Sociais

Edite o arquivo `js/script.js` e atualize os links na seção `socialLinks`:

```javascript
const socialLinks = {
    spotify: 'https://open.spotify.com/artist/seu-id-spotify',
    instagram: 'https://instagram.com/udi_oficial',
    youtube: 'https://youtube.com/@udi_oficial',
    // ... outros links
};
```

### Widget Fundrazr

O widget já está configurado com a URL da campanha real:
`https://fnd.us/udioficial`

### Formulário de Contato

O formulário atualmente simula o envio. Para funcionalidade real, integre com:
- Formspree
- Netlify Forms
- EmailJS
- Ou outro serviço de formulários

## Personalização

### Cores

As cores principais estão definidas no CSS:
- Azul escuro: `#2c3e50`
- Laranja: `#e74c3c`
- Cinza claro: `#ecf0f1`

### Tipografia

Fonte principal: Montserrat (Google Fonts)
- Títulos: 700-900 weight
- Texto: 400-600 weight

### Imagens

Substitua as imagens na pasta `images/` pelas fotos reais do artista e capas dos álbuns.

## Suporte

Para dúvidas ou problemas com o site, entre em contato através dos canais oficiais do ÚDI.

## Licença

Este projeto foi criado especificamente para o artista ÚDI. Todos os direitos reservados.

