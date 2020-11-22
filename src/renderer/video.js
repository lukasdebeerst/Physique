class video {

    constructor() {
        this.videoDepressief =  document.querySelector(`.video__depressief`);
        this.videoHoopvol = document.querySelector(`.video__hoopvol`);
        this.videoVrolijk = document.querySelector(`.video__vrolijk`);
        this.videoAngst = document.querySelector(`.video__angst`);
        this.videoRomantisch = document.querySelector(`.video__romantisch`);
        this.$videoType = document.querySelector(`.videoType`);
    }

    isPlaying(current) {
        if(current !== this.videoDepressief && this.videoDepressief.currentTime > 0){
            this.videoDepressief.pause();
            this.videoDepressief.style.display = 'none';
        }

        if(current !== this.videoHoopvol && this.videoHoopvol.currentTime > 0){
            this.videoHoopvol.pause();
            this.videoHoopvol.style.display = 'none';
        }

        if(current !== this.videoVrolijk && this.videoVrolijk.currentTime > 0){
            this.videoVrolijk.pause();
            this.videoVrolijk.style.display = 'none';
        }

        if(current !== this.videoAngst && this.videoAngst.currentTime > 0){
            this.videoAngst.pause();
            this.videoAngst.style.display = 'none';
        } 

        if(current !== this.videoRomantisch && this.videoRomantisch.currentTime > 0){
            this.videoRomantisch.pause();
            this.videoRomantisch.style.display = 'none';
        }

        this.startPlaying(current);
    }

    startPlaying (current) {
        current.style.display = 'block';
        current.loop = true;
        current.play();
        this.showVideo(current);
    }

    showVideo (current) {
        this.$videoType.innerText = current.title;
    }


}

export default video;