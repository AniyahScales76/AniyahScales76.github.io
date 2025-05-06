var main = function() {
    var state;
    var player = document.getElementById('player');

  
  $('#play').click(function(){
    $('#message').text("Playing track");
    $('#player').trigger("play");
  });

 $('#pause').click(function(){
  $('#message').text("Track paused");
  $('#player').trigger("pause");
 });

 $('#stop').click(function(){
  $('#player').trigger("pause");
  $('#player').prop("currentTime", 0);
  $('#message').text("Track stopped");
 });

 $('#mute').click(function(){
  $('#player').prop("muted", true);
  $('#message').text("Track muted");
 });
 
 $('#unmute').click(function(){
  $('#player').prop("muted", false);
  $('#message').text("Track unmuted");
 });

$('#volUp').click(function(){
  if (player.volume < 1) {
    player.volume = Math.min(1, player.volume + 0.1);
  }
  $('#message').text("Volume increased to " + player.volume.toFixed(1));
  console.log("Volume Up Clicked, Volume: " + player.volume)
});

$('#volDown').click(function(){
  if (player.volume > 0) {
    player.volume = Math.max(0, player.volume - 0.1);
  }
  $('#message').text("Volumed decreased to " + player.volume.toFixed(1));
  console.log("Volume Down Clicked, Volume: " + player.volume);
});
}


$(document).ready(main);
