(function () {
  $(".devour-button").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newBurgerState = {
      devoured: true
    };

    // PUT Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    )
  })

  $(".add-burger-button").on("click", function (event) {
    event.preventDefault();
    var newBurgers = {
      burger_name: $("#nb").val().trim(),
      devoured: 0
    };

    // POST Request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    )
  })

})();