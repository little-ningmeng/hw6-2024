let video = document.querySelector("#player1");
let volume = document.querySelector("#slider");
let span = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	// page load
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
	video.muted = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	span.textContent = volume.value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("The speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = 10 / 9 * video.playbackRate;
	console.log("The speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime > (video.duration-10)) {
		video.currentTime = 0;
	} else {
		video.currentTime = 10 + video.currentTime;
	}
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === true) {
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	} else if (video.muted === false) {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	span.textContent = e.target.value +"%";
	video.volume = e.target.value / 100;
	console.log("Video current volumn is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school utilized");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Old school removed");
	video.classList.remove("oldSchool");
});