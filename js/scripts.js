// Global Variable
var ticketPrice = 15;

//business logic
// Contructor for ticket
function Ticket(name, time, age, price) {
  this.movieName = name;
  this.time = time;
  this.age = age;
  this.price = price;
}

Ticket.prototype.calcPrice = function() {

if (this.time === "11AM (Matinee)") {
return ticketPrice = 8;
}

if (this.age === "Child") {
  return ticketPrice = 5;
}

if (this.age === "Adult") {
  return ticketPrice = 15;
}

if (this.age === "Senior") {
  return ticketPrice = 10;
} else {
  return ticketPrice;
}

}

//UI logic:
$(document).ready(function() {
  $("form#movie-form").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input:radio[name=movie-name]:checked").val();
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();

    var newTicket = new Ticket(inputtedName, inputtedTime, inputtedAge, ticketPrice);

    $(".purchase-details h3").text(newTicket.movieName);
    $(".movie-time").text(newTicket.time);
    $(".ticket-type").text(newTicket.age);
    $(".ticket-price").text(newTicket.calcPrice());

  });
});
