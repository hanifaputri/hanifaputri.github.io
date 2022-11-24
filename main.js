document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    // const arSystem = sceneEl.systems["mindar-image-system"];

    const video = document.getElementById('ar-video');

    const playBtn = document.getElementById('ar-play-btn');
    
    sceneEl.addEventListener("arReady", (event) => {
        console.log("ar ready");
    });

    video.addEventListener('error', () => {
        console.error(`Error loading: ${videoSrc}`);
    });

    let isClicked = false;
    sceneEl.addEventListener("targetFound", event => {
        // arSystem.unpause(); // unpause AR and video
        console.log("target found");

        playBtn.addEventListener("click", () => {
            console.log("Clicked");
            video.play();
            playBtn.setAttribute('visible', false);
            isClicked = true;
        });
        console.log(isClicked);
        if (isClicked){
            video.play();
        }
    });
    // detect target lost
    sceneEl.addEventListener("targetLost", event => {
        video.pause();
        // arSystem.pause(true);
        console.log("target lost");
    });
    
    sceneEl.addEventListener("arError", (event) => {
        console.log("ar error");
    });
});