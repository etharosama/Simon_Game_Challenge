var audio;
var elemnt;
var n = 0;
var open_game = false;
var random_num;
var buttonColours = ["green", "red", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var randomChosenColour;
var level =0 ;

function nextSequence() {
    random_num = Math.random();
    random_num = (random_num * 4) ;
    random_num = Math.floor(random_num);
    randomChosenColour = buttonColours[random_num];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    play_sound_1(randomChosenColour);
      level++;
      $("h1").text("the game is on ,level " +level );
}

$(".btn").on('click', handler);


$("body").keypress(function() {
  if (n == 0) {

    open_game = true;
    nextSequence();

  }
});

function handler() {
  var userChosenColour =(this).id;
  userClickedPattern.push(userChosenColour);
  play_sound_1(userChosenColour);

  checkAnswer(userClickedPattern.indexOf(userChosenColour));
}

function play_sound_1(color_selected) {
  audio = new Audio('sounds/' + color_selected + ".mp3");
  audio.play();
  $("#" + color_selected).addClass('pressed');
  setTimeout(function() {
    $("#" + color_selected).removeClass('pressed');
  }, 50);
  console.log(elemnt);
}
function checkAnswer(currentLevel) {
  setTimeout(function() {
    if (userClickedPattern[userClickedPattern.length-1]===gamePattern[gamePattern.length-1] && userClickedPattern.length===gamePattern.length ) {
    console.log("success");
    setTimeout(function() {
      nextSequence();
      userClickedPattern=[];
    }, 1000);
    }else {
      audio = new Audio('sounds/wrong.mp3');
      audio.play();
      $("body").addClass('game-over');
      setTimeout(function() {
        $("body").removeClass('game-over');
      }, 200);
$("h1").text("game over ");
startOver()
    }
  }, 1000+(level*100));

}
function startOver() {
  gamePattern = [];
  userClickedPattern =[];
n = 0;
  level =0
}
