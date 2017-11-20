//note that the script makes an (unnecessary?) ajax call to retrieve information if the stream is offline. This will be fixed later, since the code still functions correctly despite not being dome in the most 'efficient' way.

//also, the ajax call for the stream info will sometimes not work. Most likely this is a server issue rather than a code issue, however, since rerunning the code a few times will eventually get it to work. Either that or my internet connection is just bad.
$(document).ready(function() {
var apiChannelsFCC = 'https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?';

var apiStreamsFCC = 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?';

var apiChannelsESL = 'https://wind-bow.gomix.me/twitch-api/channels/ESL_SC2?callback=?';

var apiStreamsESL = 'https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?';

var statusESL = "";
$.ajax(apiStreamsESL, {
  dataType: "json",
  type: "GET",
  success: function(data) {
    //console.log(data);
    if (data.stream == null) {
      var onOff = $("<p></p>").attr({
        class: "onOffESL",
        id: "eslIsOffline"}).text("offline");
      $("#eslOnOff").append(onOff);
      statusESL = "offline";
    } else {
      var onOff = $("<p></p>").attr({
        class: "onOffESL",
        id: "eslIsOnline"}).text("online");
      $("#eslOnOff").append(onOff);
      statusESL = "online";
    }
  }
});


var statusFCC = "";
$.ajax(apiStreamsFCC, {
  dataType: "json",
  type: "GET",
  success: function(data) {
    //console.log(data);
    //console.log(data.stream);
    if (data.stream == null) {
      var onOff = $("<p></p>").attr({
        class: "onOffFCC",
        id: "fccIsOffline"}).text("offline");
      $("#fccOnOff").append(onOff);
      statusFCC = "offline";
    } else {
      var onOff = $("<p></p>").attr({
        class: "onOffFCC",
        id: "fccIsOnline"}).text("online");
      $("#fccOnOff").append(onOff);
      statusFCC = "online";
    }
  }
});

$.ajax(apiChannelsESL, {
  dataType: "json",
  type: "GET",
  success: function(data) {
    //console.log(data.game);
    //console.log(data.status);
    if (statusESL == "online") {
    var game = $("<p></p>").attr("class", "game").text(data.game);
    $("#eslInfo").append(game);
    var info = $("<p></p>").attr("class", "info").text(data.status);
    $("#eslInfo").append(info);
    }
  }
});

$.ajax(apiChannelsFCC, {
  dataType: "json",
  type: "GET",
  success: function(data) {
    //console.log(data.game);
    //console.log(data.status);
    if (statusFCC == "online") {
    var game = $("<p></p>").attr("class", "game").text(data.game);
    $("#fccInfo").append(game);
    var info = $("<p></p>").attr("class", "info").text(data.status);
    $("#fccInfo").append(info);
    }
  }
});
});
