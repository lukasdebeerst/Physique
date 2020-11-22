class play {

    constructor(){
        this.audioDepressief =  document.querySelector(`.audio__depressief`);
        this.audioHoopvol = document.querySelector(`.audio__hoopvol`);
        this.audioVrolijk = document.querySelector(`.audio__vrolijk`);
        this.audioAngst = document.querySelector(`.audio__angst`);
        this.audioRomantisch = document.querySelector(`.audio__romantisch`);
        this.$musicType = document.querySelector(`.musicType`)
    }

    isPlaying(current) {
        if(current !== this.audioDepressief && this.audioDepressief.currentTime > 0){
            this.audioDepressief.pause();
        }

        if(current !== this.audioHoopvol && this.audioHoopvol.currentTime > 0){
            this.audioHoopvol.pause();
        }

        if(current !== this.audioVrolijk && this.audioVrolijk.currentTime > 0){
            this.audioVrolijk.pause();
        }

        if(current !== this.audioAngst && this.audioAngst.currentTime > 0){
            this.audioAngst.pause();
        } 

        if(current !== this.audioRomantisch && this.audioRomantisch.currentTime > 0){
            this.audioRomantisch.pause();
        }

        this.startPlaying(current);
    }

    startPlaying (current){
        current.loop = true;
        current.play();
        this.showMusic(current);
    }

    showMusic (current) {
        this.$musicType.innerText = current.title;
    }


}

export default play;