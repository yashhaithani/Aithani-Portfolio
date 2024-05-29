document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const previewVideo = document.getElementById('preview-video');

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function() {
            const videoSrc = tab.getAttribute('data-video');
            previewVideo.src = videoSrc;
            previewVideo.play();
        });

        tab.addEventListener('click', function() {
            const videoSrc = tab.getAttribute('data-video');
            previewVideo.src = '';
            const videoElement = document.createElement('video');
            videoElement.src = videoSrc;
            videoElement.controls = true;
            videoElement.style.position = 'fixed';
            videoElement.style.top = 0;
            videoElement.style.left = 0;
            videoElement.style.width = '100%';
            videoElement.style.height = '100%';
            videoElement.style.zIndex = 1000;
            document.body.appendChild(videoElement);
            videoElement.play();

            videoElement.addEventListener('ended', function() {
                document.body.removeChild(videoElement);
            });
        });
    });
});
