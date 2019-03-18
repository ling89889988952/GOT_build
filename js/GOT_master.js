(() => {
	console.log('fired!');

	// variable stack
	// grab the shields at the bottom of the page
	const    sigils      = document.querySelectorAll('.sigil-container'),
		     lightbox    = document.querySelector('.lightbox'),
			 video       = document.querySelector('video'),
			 lbClose     = document.querySelector('.lightbox-close');

	function openLightbox() {
		// debugger;
		let targetHouse = this.className.split(" ")[1];

		// this gives us a lowercase house name -> the second class on all of the shields ie stark, baratheon
		// flip this to uppercase

		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetHouse}.mp4`;
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}

	function closeLightbox(){
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);

})();