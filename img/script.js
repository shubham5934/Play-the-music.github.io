let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay =0;

let index_no = 0;
let Playing_song = false;

// Create a audio Element 
let track = document.createElement('audio');


// All songs list 
let All_song =[
    {
        name: "first song",
        path: "music/song1.mp3",
        img: "img/img1.jpg",
        singer: "1"
    },
    {
        name: "second song",
        path: "music/song2.mp3",
        img: "img/img2.jpg",
        singer: "2"
    },
    {
        name: "third song",
        path: "music/song3.mp3",
        img: "img/img3.jpg",
        singer: "3"
    },
    {
        name: "fourth song",
        path: "music/song4.mp3",
        img: "img/img4.jpg",
        singer: "4"
    },
    {
        name: "fifth song",
        path: "music/song5.mp3",
        img: "img/img5.jpg",
        singer: "5"
    },
    {
        name: "sixth song",
        path: "music/song6.mp3",
        img: "img/img6.jpg",
        singer: "6"
    },
    {
        name: "seventh song",
        path: "music/song7.mp3",
        img: "img/img7.jpg",
        singer: "7"
    },
    {
        name: "eight song",
        path: "music/song8.mp3",
        img: "img/img8.jpg",
        singer: "8"
    },
    {
        name: "ninth song",
        path: "music/song9.mp3",
        img: "img/img9.jpg",
        singer: "9"
    },
    {
        name: "tenth song",
        path: "music/song10.mp3",
        img: "img/img10.jpg",
        singer: "10"
    }
];

// All function .


// function load the track 
function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
    
    timer = setInterval(range_slider,1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

// Mute sound 
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
}

// Check krra hu song chalra h ya ni 
function justplay(){
    if(Playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}

// Reset song slider 
function reset_slider(){
    slider.value = 0;
}

// Play song 
function playsong(){
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

// Pause song 
function pausesong(){
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// Next song 
function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}

// Previous song 
function previous_song(){
    if(index_no >0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

// Change volume 
function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value /100;
}

// Change slider position 
function change_duration(){
    slider_position = track.duration*(slider.value / 100);
    track.currentTime = slider_position;
}

// Autoplay fun 
function autoplay_switch(){
    if(autoplay==1){
        autoplay = 0;
        auto_play.getElementsByClassName.background = "rgba(255,255,255,0.2)";
    }else{
        autoplay = 1;
        auto_play.style.background = "#FF8A65";
    }
}

function range_slider(){
    let position = 0;


// Update slider position 
if(!isNaN(track.duration)){
    position = track.currentTime * (100 / track.duration);
    slider.value
}
// Function will not run when song is not over 
if(track.ended){
    play.innerHTML = '<i class="fa fa-play"></i>';
    if(autoplay==1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
}


}
