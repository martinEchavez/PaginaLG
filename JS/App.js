$('#collapseExample').collapse({
    toggle: false
})

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);

if (isIOS) {
    var canvasVideo = new CanvasVideoPlayer({
        videoSelector: '.video',
        canvasSelector: '.canvas',
        timelineSelector: false,
        autoplay: true,
        makeLoop: true,
        pauseOnClick: false,
        audio: false
    });
    document.querySelectorAll('.header-video')[0].style.position('absolute').top('0').left('0').width('100%').height('100%').overflow('hidden');
    document.querySelectorAll('.header-video video')[0].style.minWidth('100%').maxHeight('100%');
} else {
    // Use HTML5 video
    document.querySelectorAll('.canvas')[0].style.display = 'none';
}