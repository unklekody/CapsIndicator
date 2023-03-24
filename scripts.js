$(document).ready(function() {
    $("#fartButton").click(function() {
        let randomFart = Math.floor(Math.random() * 3) + 1;
        let fartSound = document.getElementById("cool" + randomFart);
        fartSound.play();
    });
});
