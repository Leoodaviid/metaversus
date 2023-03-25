<p>O site foi desenvolvido para fornecer informações sobre o conceito de metaverso, que é um universo virtual que conecta pessoas, lugares e coisas por meio de experiências imersivas.O web site Metaverse foi construído usando tecnologias modernas de desenvolvimento web, como Next.js e Tailwind CSS, permitindo desempenho rápido e design responsivo.</p>

🔗: <a href="https://metaversus-leoodaviid.vercel.app/">https://metaversus-leoodaviid.vercel.app/</a>



## 💻Tecnologias:

- Typescript

- Next.Js

- Tailwind CSS

- PostCSS

- Framer Motion

  

## 🛠️Instalação:

Para instalar as dependências, execute o seguinte comando:

```
npm install || yarn install || pnpm install
```



## 🧑‍💻Uso:

Para iniciar o projeto, execute o seguinte comando:

```
npm start || yarn start || pnpm dev
```

Isso iniciará o projeto em`http://localhost:3000`.



## 🗃️Estrutura dos arquivos:



```

metaversus/
├── .next/
│    └── ... 
├── .vscode/
│	└── ...
└── src/
│   ├── app/
│   │   │  ├── api/
│   │   │  └── ...
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   │   ├── CustomTexts.tsx
│   │   ├── ExploreCard.tsx
│   │   ├── Footer.tsx
│   │   ├── InsightCard.tsx
│   │   ├── NavBar.tsx
│   │   ├── NewFeatures.tsx
│   │   ├── StartSteps.tsx
│   ├── data/
│   │   ├── index.tsx
│   ├── models/
│   │   ├── models.ts
│   ├── public/
│   │   ├── arrow-down.svg
│   │   ├── map.png
│   │   └── ... (other images)
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Explore.tsx
│   │   ├── Footer.tsx
│   │   ├── Feedback.tsx
│   │   ├── GetStarted.tsx
│   │   ├── Hero.tsx
│   │   ├── Insights.tsx
│   │   ├── WhatsNew.tsx
│   │   ├── World.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── index.js
│   ├── utils/
│   │   ├── motion.ts
│	└──
├──.eslintrc.json
├──.gitignore
├──.prettierrc
├──next-env.d.ts
├──next.config.js
├──package.json
├──pnpm-lock.yaml
├──postcss.config.js
├──README.md
├──tailwind.config.js
├──tsconfig.json
```



## 🔑Descrição de alguns diretórios importantes:



- `.next/`: Onde contém todos os recursos compilados e otimizados, como as páginas HTML, pacotes JavaScript, imagens e outros arquivos estáticos necessários para executar o aplicativo no modo de produção.
- `src/`: Diretório usado para armazenar o código-fonte. Contém todos os arquivos Typescript, componentes React e outros recursos usados para criar a interface do usuário e implementar a lógica de negócios do aplicativo.
- `src/app/`: Novo diretório introduzido para fornecer um local centralizado para configurar e inicializar o aplicativo. Responsável por configurar o layout e os estilos globais do aplicativo, manipular a renderização do lado do cliente e fornecer outras opções de personalização.
- `src/components/`: Contém componentes React individuais que compõem a interface do usuário do aplicativo.
- `src/data/`: Onde contém alguns dados estáticos para o site Metaverse, usado para preencher elementos da interface do usuário, como cartões, listas e ícones.
- `src/models/`: Onde contém a definição de interfaces TypeScript para as props de diferentes componentes usados na estrutura Next.js.
- `src/public`: Contém arquivos estáticos como imagens, fontes etc.
- `src/public`: Contém os componentes que compõem as diferentes seções do aplicativo. Cada componente representa uma seção do aplicativo.
- `src/styles`: Arquivos CSS e relacionados ao estilo do projeto. 
- `src/utils`: Funções utilitárias usadas em todo o aplicativo.





## 🧰Detalhes e funções de alguns arquivos:



- `src/componentes/CustomTexts.tsx`: Dois componentes que usam a biblioteca framer Motion para animar elementos de texto. `TypingText` é um componente que usa uma string de título como um suporte e cria um efeito de animação no estilo de máquina de escrever iterando cada letra na string e animando sua aparência. Ele também permite que um prop textStyles opcional adicione estilos CSS adicionais ao texto. `TitleText` é um componente que recebe uma propriedade de título, que pode ser um ReactNode ou um objeto Framer Motion MotionValue, e cria um efeito de animação fade-in para o texto. Ele também permite que um prop textStyles opcional adicione estilos CSS adicionais ao texto.
- `src/components/ExploreCard.tsx`: componente que renderiza um cartão de exploração, ele recebe vários adereços, incluindo o mundo a ser exibido, o índice do mundo na lista de mundos, o mundo ativo (se houver) e uma função para manipular o clique no cartão. O componente usa o componente de movimento da biblioteca Framer Motion para adicionar efeitos de animação ao cartão, como um efeito de fade-in e um efeito de mola. Ele também usa uma imagem SVG de um fone de ouvido e uma classe CSS para glassmorphism para adicionar efeitos visuais ao cartão.
- `src/componentes/Footer.tsx`: Esse componente renderiza o Footer(rodapé) do aplicativo web.
- `src/componentes/InsightCard.tsx`: Este é um componente que exibe um cartão de entendimento. É preciso um objeto insight como suporte, que deve conter as seguintes propriedades: id (número): um identificador exclusivo para o cartão de insights, imgUrl (string): a URL da imagem a ser exibida no cartão, title (string): o título do insight, subtítulo (string): o subtítulo ou a descrição do insight.
  O componente usa o componente de movimento da biblioteca de movimento do framer para adicionar efeitos de animação.
- `src/componentes/Navbar.tsx`:Esse componente renderiza o Menu de navegação do aplicativo web.
- `src/component/NewFeature.tsx`: O componente renderiza um cartão que exibe informações sobre um novo recurso, incluindo um ícone, título e subtítulo.
- `src/utils/motion.ts`: Este é um módulo TypeScript que exporta várias constantes e funções reutilizáveis que podem ser usadas para criar movimentos suaves e consistentes usando a biblioteca Framer Motion.
- `tailwind.config.js`: Arquivo de configuração para o Tailwind CSS.













