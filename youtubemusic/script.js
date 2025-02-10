var arr = [
    { songName:"Squid Game OP", url:"./songs/Pink Soldiers Squid Game.mp3", img:"./images/Squid Game.jpg" },
    { songName:"Arjan Vailley Ne", url:"./songs/Arjan Vailly Ne.mp3", img:"./images/animal.jpg" },
    { songName:"Ram Siya Ram", url:"./songs/Ram Siya Ram.mp3", img:"./images/ram.jpg" },
    { songName:"Pehle Bhi Main", url:"./songs/Pehle Bhi Main.mp3", img:"./images/animal.jpg" },
]

var allSongs =document.querySelector('#all-songs');

var poster = document.querySelector('#left')
var play = document.querySelector('#play');
var forward = document.querySelector('#forward');
var backward = document.querySelector('#backward');

var audio =  new Audio();

var selectedSong = 0;

function mainFunction() {
    var clutter="";
arr.forEach(function(elem, index){
    clutter += `<div class="song-card" id="${index}">
                    <div class="part1">
                        <img src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>3:56</h6>
                </div>`;

})
audio.src = arr[selectedSong].url;
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

allSongs.innerHTML = clutter;
}
mainFunction();


allSongs.addEventListener('click', function(details){
    // console.log(arr[details.target.id].url);
    selectedSong = details.target.id
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    flag = 1;
    mainFunction();
    audio.play();
})

var flag = 0;
play.addEventListener('click', function(details){   
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        mainFunction();
        audio.play();
        flag = 1;
    }else{
        play.innerHTML = `<i class="ri-play-line"></i>`;
        mainFunction();
        audio.pause();
        flag = 0;
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length){
        selectedSong++;
        mainFunction();
        audio.play();
    }else{
        forward.style.opacity = 0.4;
    }

})

backward.addEventListener("click", function(){
    if(selectedSong >= 0){
        selectedSong--;
        mainFunction();
        audio.play();
    }else{
        backward.style.opacity = 0.4;
    }

})