🎵 Music Finder – Buscador de Músicas

📌 Sobre o Projeto
Music Finder é um aplicativo web que permite pesquisar músicas, álbuns e artistas utilizando a API do iTunes. Basta digitar um nome de música, artista ou álbum para visualizar os resultados com informações detalhadas, incluindo capas de álbuns e um player de áudio para prévia.

🚀 Funcionalidades
✅ Pesquisa Inteligente: Encontre músicas, artistas e álbuns rapidamente.
✅ Visualização Agradável: Exibição com imagem da capa, nome do artista e álbum.
✅ Prévia das Músicas: Ouça um trecho da música antes de buscar em outras plataformas.
✅ Interface Responsiva: Adaptada para desktop e mobile.

🏗 Estrutura do Projeto
📁 index.html → Contém a estrutura básica do site (campo de busca e área de resultados).
📁 styles.css → Define o layout e estilização da página.
📁 script.js → Lida com a requisição à API do iTunes e exibição dos resultados.

🎨 Layout
A interface do Music Finder é simples e intuitiva, garantindo uma experiência agradável ao usuário.

🔹 Campo de busca para inserir o nome da música ou artista.
🔹 Botão de pesquisa para iniciar a busca.
🔹 Lista de resultados com nome da música, álbum, artista, imagem da capa e botão de prévia.

🔧 Tecnologias Utilizadas
🔹 HTML5 – Estrutura da página
🔹 CSS3 – Estilização e responsividade
🔹 JavaScript (ES6+) – Requisição e manipulação da API
🔹 API do iTunes – Fonte dos dados de músicas

🌎 Como Usar
1️⃣ Clone este repositório

sh
Copy
Edit
git clone https://github.com/seu-usuario/music-finder.git
2️⃣ Acesse a pasta do projeto

sh
Copy
Edit
cd music-finder
3️⃣ Abra o arquivo index.html no navegador

📡 Como Funciona?
O Music Finder usa a API pública do iTunes para buscar músicas. A requisição segue este formato:

sh
Copy
Edit
https://itunes.apple.com/search?term={QUERY}&media=music&limit=10
🔹 {QUERY} é substituído pelo termo pesquisado.
🔹 Os resultados são processados pelo JavaScript e exibidos na página.

🖼 Exemplo de Busca
🔎 Pesquisa: "Coldplay"


✅ Mostra as 10 músicas mais relevantes de Coldplay.
✅ Exibe capa do álbum, nome do artista e prévia de áudio.

🛠 Melhorias Futuras
📌 Modo escuro para melhor experiência visual.
📌 Favoritos para salvar músicas e álbuns.
📌 Mais filtros como gênero e ano de lançamento.

