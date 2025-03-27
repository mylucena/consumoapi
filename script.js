document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const musicList = document.getElementById('musicList');

    function fetchMusic(query) {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                musicList.innerHTML = ''; 

                data.results.forEach(track => {
                    const musicDiv = document.createElement('div');
                    musicDiv.className = 'music';

                    musicDiv.innerHTML = `
                        <img src="${track.artworkUrl100}" alt="${track.trackName}">
                        <div>
                            <h2>${track.trackName}</h2>
                            <p><strong>Artista:</strong> ${track.artistName}</p>
                            <p><strong>Álbum:</strong> ${track.collectionName}</p>
                        </div>
                    `;

                    musicList.appendChild(musicDiv);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar músicas:', error);
                musicList.innerHTML = '<p>Erro ao carregar músicas.</p>';
            });
    }

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query) {
            fetchMusic(query);
        } else {
            alert('Por favor, digite o nome de um artista ou música.');
        }
    });
});