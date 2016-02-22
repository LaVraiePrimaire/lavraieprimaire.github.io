var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'EjqjboSZV8Y',
    modestbranding: 1,
    origin: 'http://www.lavraieprimaire.fr',
    rel: 0,
    showinfo: 0,
    autoplay: 0,
    enablejsapi: 1,
    hl: 'fr-fr',
  });

  $('#videoModal').on('shown.bs.modal', function() {
    player.playVideo();
  });

  $('#videoModal').on('hidden.bs.modal', function() {
    player.pauseVideo();
  });
}