(() => {
	console.log('fired!');

	// variable stack
	// grab the shields at the bottom of the page
	const    sigils      = document.querySelectorAll('.sigil-container'),
		     lightbox    = document.querySelector('.lightbox'),
		     video       = document.querySelector('video');

	function showLightbox() {
		lightbox.classList.add('show-lightbox');
		video.play();
	}

	function hideLightbox(){
		lightbox.classList.remove('show-lightbox');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	// sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));

	// video.addEventListener('ended', closeLightbox);

})();