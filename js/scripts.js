$(document).ready(function() {
  $("div.panel-body").click(function() {
    $(".back", this).fadeToggle(".back");
  });
});
