$(document).ready(function () {
    $('.loader').remove();
    console.log("Document is ready");
    var video = $('#myVideo')[0];
    console.log("Video element:", video);
    updateVolumeButton();
    function updateVolumeButton() {
        if (video.muted) {
            $('.volumeOff').show();
            $('.volumeOn').hide();
        } else {
            $('.volumeOff').hide();
            $('.volumeOn').show();
        }
    }


    $('.volumeOff').click(function () {
        video.muted = false;
        updateVolumeButton();
    });

    $('.volumeOn').click(function () {
        video.muted = true;
        updateVolumeButton();
    });
})