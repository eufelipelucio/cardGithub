const input = document.querySelector('input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const username = input.value
    const erroApi = document.querySelector('#msg');
    const api =  new XMLHttpRequest();
    const card = document.querySelector('.card');

    api.open("GET",`https://api.github.com/users/${username}`);
    api.addEventListener("load", function() {
        if(api.status == 200){
            const response = api.responseText;
            const user = JSON.parse(response);
            var location = user.location;
            var name = user.name;
            var bio = user.bio;
            var img = user.avatar_url;
            var followers = user.followers;
            var following = user.following;
            var repo = user.public_repos;
            var url = user.html_url;
            
            pegar(name,bio,location,followers,following,repo,img,url);
            
            erroApi.classList.add('invisivel');
            input.value = '';
            card.classList.remove('invisivel');    
        }else {
            erroApi.classList.remove('invisivel');
            card.classList.add('invisivel');
            
        }
    });
    api.send();
    
});