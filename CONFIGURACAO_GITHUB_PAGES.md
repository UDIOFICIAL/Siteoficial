# Guia de Configuração - GitHub Pages com Domínio Personalizado

Este guia explica como publicar o site do ÚDI no GitHub Pages e configurar um domínio personalizado.

## Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique em "New repository" (botão verde)
3. Nome sugerido: `udi-website` ou `udi-oficial`
4. Marque como "Public" (necessário para GitHub Pages gratuito)
5. NÃO marque "Add a README file" (já temos um)
6. Clique em "Create repository"

## Passo 2: Upload dos Arquivos

### Opção A: Via Interface Web do GitHub

1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos da pasta `udi-website/` para a área de upload
3. Aguarde o upload completar
4. Adicione uma mensagem de commit: "Adicionar site oficial do ÚDI"
5. Clique em "Commit changes"

### Opção B: Via Git (Linha de Comando)

```bash
# Navegar para a pasta do projeto
cd udi-website

# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Adicionar site oficial do ÚDI"

# Adicionar repositório remoto (substitua SEU_USUARIO e NOME_REPO)
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

## Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (aba no topo)
2. Role para baixo até encontrar **Pages** no menu lateral
3. Em "Source", selecione **"Deploy from a branch"**
4. Em "Branch", selecione **"main"**
5. Em "Folder", deixe **"/ (root)"**
6. Clique em **"Save"**

O GitHub irá processar e em alguns minutos o site estará disponível em:
`https://SEU_USUARIO.github.io/NOME_REPO`

## Passo 4: Configurar Domínio Personalizado

### 4.1 Registrar um Domínio

Registre um domínio em um provedor como:
- GoDaddy
- Namecheap
- Google Domains
- Registro.br (para .com.br)

Sugestões de domínio:
- `udi-music.com`
- `udioficial.com`
- `udi-artist.com`

### 4.2 Configurar DNS

No painel do seu provedor de domínio, configure os seguintes registros DNS:

#### Para domínio raiz (exemplo.com):

Adicione registros **A** apontando para:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### Para subdomínio www (www.exemplo.com):

Adicione registro **CNAME**:
```
www.exemplo.com -> SEU_USUARIO.github.io
```

### 4.3 Configurar no GitHub

1. No repositório, vá em **Settings > Pages**
2. Em "Custom domain", digite seu domínio: `udi-music.com`
3. Clique em **"Save"**
4. Aguarde a verificação DNS (pode levar até 24 horas)
5. Quando disponível, marque **"Enforce HTTPS"**

### 4.4 Atualizar arquivo CNAME

O arquivo `CNAME` já está configurado com `udi-music.com`. Se usar outro domínio:

1. Edite o arquivo `CNAME` no repositório
2. Substitua por seu domínio (sem https:// ou www)
3. Faça commit da alteração

## Passo 5: Verificar Configuração

### Testar o Site

1. Acesse `https://SEU_USUARIO.github.io/NOME_REPO`
2. Verifique se todas as seções carregam corretamente
3. Teste a responsividade em diferentes dispositivos
4. Confirme que o widget Fundrazr está funcionando

### Testar Domínio Personalizado

1. Acesse seu domínio personalizado
2. Verifique se redireciona corretamente
3. Confirme que o certificado SSL está ativo (ícone de cadeado)

## Passo 6: Configurações Adicionais

### 6.1 Atualizar Links das Redes Sociais

Edite `js/script.js` e atualize os links reais:

```javascript
const socialLinks = {
    spotify: 'https://open.spotify.com/artist/ID_REAL_DO_UDI',
    instagram: 'https://instagram.com/udi_oficial',
    youtube: 'https://youtube.com/@udi_oficial',
    facebook: 'https://facebook.com/udi.oficial',
    tiktok: 'https://tiktok.com/@udi_oficial',
    twitter: 'https://twitter.com/udi_oficial'
};
```

### 6.2 Configurar Formulário de Contato

Para o formulário funcionar, integre com um serviço:

#### Opção 1: Formspree (Recomendado)
1. Acesse [formspree.io](https://formspree.io)
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Substitua a ação do formulário no HTML:

```html
<form class="contact-form" action="https://formspree.io/f/SEU_ID" method="POST">
```

#### Opção 2: EmailJS
1. Acesse [emailjs.com](https://emailjs.com)
2. Configure o serviço
3. Atualize o JavaScript conforme documentação

### 6.3 Analytics (Opcional)

Para acompanhar visitantes, adicione Google Analytics:

1. Crie conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de tracking antes do `</head>` no HTML

## Solução de Problemas

### Site não carrega
- Verifique se os arquivos foram enviados corretamente
- Confirme que GitHub Pages está ativado
- Aguarde alguns minutos para propagação

### Domínio personalizado não funciona
- Verifique configuração DNS
- Aguarde até 24h para propagação
- Use ferramentas como [DNS Checker](https://dnschecker.org)

### Widget Fundrazr não aparece
- Verifique conexão com internet
- Confirme que o script está carregando
- Teste em navegador diferente

### Formulário não envia
- Configure serviço de formulário (Formspree/EmailJS)
- Verifique se não há bloqueadores de script

## Manutenção

### Atualizações Regulares
- Atualize informações de shows
- Adicione novos lançamentos musicais
- Mantenha links das redes sociais atualizados

### Backup
- Mantenha cópia local dos arquivos
- Use Git para controle de versão
- Faça commits regulares das alterações

## Suporte

Para dúvidas técnicas:
- [Documentação GitHub Pages](https://docs.github.com/pages)
- [Suporte GitHub](https://support.github.com)

Para dúvidas sobre o site:
- Consulte este guia
- Verifique o arquivo README.md

