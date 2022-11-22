export const loadvideo = (path) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.addEventListener('loadeddata', () => {
            video.addEventListener('loadeddata', () => {
                resolve(video);
            })
            video.src = path;
        });
    });
}