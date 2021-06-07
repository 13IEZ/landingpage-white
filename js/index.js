'use strict';

class VideoPlayer {
	constructor() {
		this.video = document.querySelector('#video');
		this.btnPlay = document.querySelector('.video__play-btn');
		this.title = document.querySelector('.video__title');
		this.btnSub = document.querySelector('.video__btn.video__btn--primary');
		this.classBlur = 'video--blur';
		this.classHide = 'hide';
	}

	playVideo() {
		this.video.play();
		this.btnPlay.classList.add(this.classHide);
		this.title.classList.add(this.classHide);
		this.btnSub.classList.add(this.classHide);
		this.video.classList.remove(this.classBlur);
	}

	stopVideo() {
		this.video.pause();
		this.btnPlay.classList.remove(this.classHide);
		this.title.classList.remove(this.classHide);
		this.btnSub.classList.remove(this.classHide);
		this.video.classList.add(this.classBlur);
	}
}

const videoPlayer = new VideoPlayer();

videoPlayer.btnPlay.addEventListener('click', () => {
	videoPlayer.playVideo();
}, false);

videoPlayer.video.addEventListener('ended', () => {
	videoPlayer.stopVideo();
}, false);

