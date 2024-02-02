let playBtn = document.getElementById('play-btn');
let video   = document.querySelector(".video");
let progressBar =document.querySelector(".progress-bar");
let progressRange =document.querySelector('.progress-range');

//volume
let volumeIcon = document.querySelector('.volume-icon i');
let volumeRange = document.querySelector('.volume-range');




let isVideoPlaying =false;


 // Let's play or pause the video//
 function playOrPauseVideo(){
    
    
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying =true;
        playBtn.classList.replace("fa-play","fa-pause")
    } else{
        video.pause();
        isVideoPlaying =false;
        playBtn.classList.replace("fa-pause","fa-play")
    }

 }

 // update Progress bar
 function updateProgressbar(event){
    
    const currentTime =event.target.currentTime;
    const duration = event.target.duration;
    // console.log(currentTime,duration);

     // Calculate the percentage of video played
    
    progressBar.style.cssText = ` width:${(currentTime/duration)*100}%`
     

    
 }

 //update volume
 function updateVolume() {
    const volume = video.volume;

    // Update the visual representation of the volume (volume-bar)
    const volumeBar = document.querySelector(".volume-bar");
    volumeBar.style.width = `${volume * 100}%`;

    // Update the volume icon based on the volume level
    const volumeIcon = document.getElementById('volume-icon');
    if (volume === 0) {
        volumeIcon.classList.replace("fa-volume-up", "fa-volume-mute");
    } else {
        volumeIcon.classList.replace("fa-volume-mute", "fa-volume-up");
    }
}

// Toggle mute function
function toggleMute() {
    if (video.volume === 0) {
        // If volume is already muted, unmute it
        video.volume = 1;
    } else {
        // If not muted, mute it
        video.volume = 0;
    }

    // Update the volume icon and bar
    updateVolume();
}



 function updateSeekbar(event){
    let calculateWidth = progressRange.getBoundingClientRect();
       console.log(calculateWidth);

     console.log(event.target);
    console.log(event.offsetX,event.target.clientWidth);
    let currentPoint =event.offsetX;
    let progressBarWidth =this.clientWidth;            //this meen full window//
    let currentRange =(currentPoint/progressBarWidth)*video.duration;
    // console.log(currentRange);
    video.currentTime =currentRange;


 }
 

 
//Add event Listners ......//
playBtn.addEventListener('click',playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo );
video.addEventListener("timeupdate",updateProgressbar);
progressRange.addEventListener('click',updateSeekbar);

// Volume Control
// let volumeIcon = document.querySelector('.volume-icon i');
// let volumeRange = document.querySelector('.volume-range');

volumeIcon.addEventListener("click", () => {
    console.log("volume icon clicked");
    volumeRange.classList.toggle("show");

    // Add this line to manually trigger the input event when the volume icon is clicked
    volumeRange.dispatchEvent(new Event('input'));
});

// Volume Icon

video.addEventListener('volumechange', updateVolume);
volumeIcon.addEventListener("click",toggleMute)

volumeRange.addEventListener("input",updateVolume);
volumeRange.addEventListener('change',()=>{
    console.log("volume range changed");
    volumeRange.classList.remove('show');
})

//add tabindex for element focusable
video.setAttribute("tabindex",0)
// Add event listener for keyboard events on the video element
video.addEventListener("keydown",function(event){
   
     // Check if the pressed key is the space bar
    if(event.key === " "){
     // Prevent the default behavior of the space bar (e.g., scrolling the page)
    event.preventDefault()
    // Toggle play/pause state of the video
    playOrPauseVideo();
    }else if(event.key === "Enter"){
        playOrPauseVideo()
    }else if(event.key === "ArrowRight"){
        //skip forward 10 second
        video.currentTime +=5;
    }else if(event.key === "ArrowLeft"){
        //skip backward 10 second
        video.currentTime -=5;
    }

});

