console.log('Tes');

// import {loadVideo} from "./libs/loader";
const THREE = window.MINDAR.IMAGE.THREE;

// Helper function
const loadVideo = (path) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.addEventListener('loadeddata', () => {
            resolve(video);
            console.log('video resolved');
        });
        video.src = path;
        // reject("reject bro");
    });
}

// Main function
document.addEventListener('DOMContentLoaded', () => {
    const start = async() => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: './assets/anti-hero.mind',
            // uiScanning: "#scanning",
            // uiLoading: "no"
        });
        const {renderer, scene, camera} = mindarThree;
       
        console.log('video sebelum loaded');
        const video = await loadVideo('./assets/anti-hero.mp4');
        console.log('video loaded');

        const texture = new THREE.VideoTexture(video);
 
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({map: texture});
        const plane = new THREE.Mesh(geometry, material);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane); // THREE.Group
        
        anchor.onTargetFound = () => {
            video.play();
            console.log('Target found');
        }
        anchor.onTargetLost = () => {
            video.pause();
            console.log('Target lost');
        }
        video.addEventListener("play", () => {
            // Duration of the video
            // video.currentTime = 6;
            
        });

        // Wait until the engine is ready
        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }
    start();
    console.log('Target found');
});
console.log('end');
