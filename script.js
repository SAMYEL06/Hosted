if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            cors: 'true',
            url: 'ws://82.234.91.118:2222/live/essai.flv'
			<!--Changer par http ou ws, รงa marche-->
        });
        flvPlayer.attachMediaElement(videoElement);
		flvPlayer.on('error',function(err){
                console.log(err)
            });
        flvPlayer.load();
        flvPlayer.play();
}