import music from './music.js';
import video from './video.js';

const five = require('johnny-five');
const $loading = document.querySelector(`.loading`);
const $explain = document.querySelector(`.explain`);
const board = new five.Board({
  repl: false
});
const Music = new music();
const Video = new video();

board.on("ready", () => {
    $loading.innerText = "Druk op start om te beginnen";
  const proximity_music = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  const proximity_video = new five.Proximity({
      controller: "HCSR04",
      pin: 8
  });

  const buttonStart = document.querySelector(`.button--start`);
  buttonStart.addEventListener('click', function(){
      start();
  });  


  const start = () => {
    $explain.innerText = ' ';
    proximity_music.on("change", () => {
        const {centimeters, inches} = proximity_music;
    
        if(centimeters < 10 && centimeters > 0){
            const current = document.querySelector(`.audio__depressief`);
            Music.isPlaying(current);
        }
    
        if(centimeters < 20 && centimeters > 10){
            const current = document.querySelector(`.audio__angst`);
            Music.isPlaying(current);
        }
    
        if(centimeters < 30 && centimeters > 20){
            const current = document.querySelector(`.audio__hoopvol`);
            Music.isPlaying(current);
        }
        
        if(centimeters < 40 && centimeters > 30){
            const current = document.querySelector(`.audio__romantisch`);
            Music.isPlaying(current);
        } 
        
        if(centimeters < 50 && centimeters > 40){
            const current = document.querySelector(`.audio__vrolijk`);
            Music.isPlaying(current);
        } 
        
        });
    
    
        proximity_video.on("change", () => {
            const {centimeters, inches} = proximity_video;
    
            
            if(centimeters < 10 && centimeters > 0){
                const current = document.querySelector(`.video__depressief`);
                Video.isPlaying(current);
            }  
        
            if(centimeters < 20 && centimeters > 10){
                const current = document.querySelector(`.video__angst`);
                Video.isPlaying(current);
            }
        
            if(centimeters < 30 && centimeters > 20){
                const current = document.querySelector(`.video__hoopvol`);
                Video.isPlaying(current);
            }
            
            if(centimeters < 40 && centimeters > 30){
                const current = document.querySelector(`.video__romantisch`);
                Video.isPlaying(current);
            } 
            
            if(centimeters < 50 && centimeters > 40){
                const current = document.querySelector(`.video__vrolijk`);
                Video.isPlaying(current);
            } 
        });
  }

  

    

});