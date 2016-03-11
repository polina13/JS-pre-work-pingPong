

$(document).redady(fucntion() {
  $('#ping-pong').submit(fucntion(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(fucntion(element) {
      $('#solution').append("<li>" + element + "<li");
    });
  });
});
