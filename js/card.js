var nam = document.querySelector('#name');
var cargo = document.querySelector('#cargo');
var description = document.querySelector('#description');
var locat = document.querySelector('#location');
var followers = document.querySelector('#followers');
var following = document.querySelector('#following');
var repo = document.querySelector('#repo');

function pegar(nome,bio,local,seg,sego,repositories,img,url ){
    nam.innerHTML = nome;
    description.innerHTML = bio;
    locat.innerHTML = local+ "!";
    followers.innerHTML = seg;
    following.innerHTML = sego;
    repo.innerHTML = repositories;
    removeImg();
    criarImg(img);
    src(url);

}


function criarImg(url){
    var image = document.querySelector('.img-profile');
    var img = document.createElement('img');
    img.src = url;
    image.appendChild(img);
    console.log(img)
}

function src(url){
    var src = document.querySelector('.github');
    src.href = url;
}
function removeImg(){
    var image = document.querySelector('.img-profile');
    image.removeChild(image.lastChild);
}