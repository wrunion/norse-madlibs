/*jshint esversion: 6 */

var lokiResultText =`Dear diary,

Today I'm going to (verb1) in the morning, eat (food1) for lunch, and then fuck around and (verb2) in the afternoon.

The kids like it when I make (adj1) (food2) for dinner, so I'll do that tonight.

Sigyn likes it when I (verb4) so I'll do that before going (adverb) to sleep.

Damn, I already need a nap. Sounds like a fucking (adjective) day!

PS That damn giant is getting far too close to finishing that wall. I really hope I don't end up having to (verb) his horse!

PPS Note to self: sharpen your scissors. Thor's ego is getting way too (adjectiva) and Sif's hair is getting way too long. Something must be done about this!`;

function showLokiResult() {
  $("p#loki-result").append(lokiResultText);
  $("p#loki-result").show();
}
