onEvent("start-deck", "click", function(event) {
  setScreen("lion1");
});
onEvent("end-button", "click", function(event) {
  setScreen("lion1");
});
onEvent("bean-image", "click", function(event) {
  setScreen("bean-back");
});
onEvent("bean-text", "click", function(event) {
  setScreen("lion1");
});
onEvent("stone-image", "click", function(event) {
  setScreen("stone-back");
});
onEvent("stone-text", "click", function(event) {
  setScreen("stone-front");
});
onEvent("towers-image", "click", function(event) {
  setScreen("towers-back");
});
onEvent("towers-text", "click", function(event) {
  setScreen("towers-front");
});
onEvent("bean-front-next", "click", function(event) {
  setScreen("stone-front");
});
onEvent("bean-back-next", "click", function(event) {
  setScreen("stone-front");
});
onEvent("stone-front-next", "click", function(event) {
  setScreen("towers-front");
});
onEvent("stone-back-next", "click", function(event) {
  setScreen("towers-front");
});
onEvent("towers-front-next", "click", function(event) {
  setScreen("end");
});
onEvent("towers-back-next", "click", function(event) {
  setScreen("end");
});
