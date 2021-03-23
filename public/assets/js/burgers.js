// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".devour-btn").on("click", function(event) {
      var id = $(this).data("id");
      // var newBurger = $(this).data("newburger");
  
      var newBurgerStatus = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("changed devoured to", newBurgerStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burger-btn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurgers = {
        burger_name: $("#nb").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurgers
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  