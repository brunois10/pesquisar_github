document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const endpoint = `https://api.github.com/users/${username}`;
        const container = document.querySelector('.container');
        const git = document.querySelector('.form');

        if (username.length == 0) {
            alert('Digite o nome do usuário');
        } else {
            fetch(endpoint)
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(json) {
                const nome = document.getElementById('name');
                const usuario = document.getElementById('user');
                const repositorio = document.getElementById('repository')
                const seguidores = document.getElementById('followers')
                const seguindo = document.getElementById('following')
                const avatar = document.getElementById('avatar');
                const link = document.getElementById('link');

                const uservalid = json.message;
    
                if (uservalid === 'Not Found') {
                    alert('O usuário solicitado não foi encontrado no banco de dados do GitHub, por favor tente novamente!');
                } else {
                    avatar.src = json.avatar_url;
                    nome.innerText = json.name;
                    usuario.innerText = json.login;
                    repositorio.innerText = json.public_repos;
                    seguidores.innerText = json.followers;
                    seguindo.innerText = json.following;
                    link.href = json.html_url;
                
                    container.style.display = '';
                    git.style.display = "none";
                }
            })
            .catch(function(erro) {
                alert('Ocorreu um erro ao buscar o usuário do Github fornecido, tente novamente mais tarde.');
            })
        }
    }) 
})
