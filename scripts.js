/*jshint esversion: 6 */

function showLoki() {


  // let verb1 = $("#loki-verb1").val();

  let verb1 = document.getElementById("loki-verb1").value;
  let verb2 = document.getElementById("loki-verb2").value;
  let verb3 = document.getElementById("loki-verb3").value;
  let verb4 = document.getElementById("loki-verb4").value;
  let food1 = document.getElementById("loki-food1").value;
  let food2 = document.getElementById("loki-food2").value;
  let adjective1 = document.getElementById("loki-adjective1").value;
  let adjective2 = document.getElementById("loki-adjective2").value;
  let adjective3 = document.getElementById("loki-adjective3").value;

  let adverb = document.getElementById("loki-adverb").value;

  // verb2
  // verb3
  // verb4
  //
  // food1
  // food2
  //
  // adjective1
  // adjective2
  //
  // adverb

let p1 = `Today I'm going to ${verb1} in the morning, eat ${food1} for lunch, and ${verb2} in the forest this afternoon.`;

let p2 = `The kids like it when I make a big pot of ${adjective1} ${food2} for dinner, so I'll do that tonight. Sigyn likes it when we ${verb3} so we'll do that before going ${adverb} to sleep. Damn, I already need a nap. Sounds like a ${adjective2} day!`;

let p3 = `Note to self: sharpen your scissors. Thor's ego is getting way too ${adjective3} and Sif's hair is getting way too long. Something must be done about this!`;

let p4 = `PS That damn giant is getting far too close to finishing that wall. I really hope I don't end up having to ${verb4} his horse!`;

$("#loki-form").hide();
// $("#loki-result").append(lokiResultText);
$("#loki-p1").append(p1);
$("#loki-p2").append(p2);
$("#loki-p3").append(p3);
$("#loki-p4").append(p4);
$("#loki-result").show();

}

// function showLokiForm() {
//   $("#loki-result").hide();
//   $("#loki-form").show();
// }


var thorResultText = `Dear diary,

Today I feel like punching (name1) and kissing (name2.) (Name3) says I should do neither of these things. (Name4) says that I should do both

Im feeling indecisive, so I might fuck around and (verb1) (ad1) instead.

Tonight I shall seek out giants to (verb2) obviously, and then drink as much (beverage) as I can swallow. I will eat more (food) than should be allowed, and then pass out with a full belly and a full heart, next to my beautiful, flaxen-haired wife.

PS I sure hope Sif doesn't wake up bald tomorrow!
`;

// var odinResultText =

// function showLokiResult() {
//   $("#loki-result").append(lokiResultText);
//   $("#loki-result").show();
// }
//
// function showThorResult() {
//   $("#thor-result").append(thorResultText);
//   $("#thor-result").show();
// }
//
// function showOdinResult() {
//   $("#odin-result").append(odinResultText);
//   $("#odin-result").show();
// }

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


  });
});
