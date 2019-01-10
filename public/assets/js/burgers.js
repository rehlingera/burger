// Have the page load before executing the following code
$(function() {
    // Function to change a burger's devoured column to true when the devour button is clicked
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var justDevoured = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: justDevoured
        }).then(function() {
            console.log ("Burger " + id + " has been devoured");
            location.reload();
        });
    });

    // Function to submit a new burger when the fields are filled out and the submit button is clicked
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerText").val().trim()
        };

        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log ("Burger has been created");
            location.reload();
        });
    });
});

