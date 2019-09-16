$(document).ready(function() {
  $("#submit").click(() => {
    $.ajax({
      url: "/loginApi",
      type: "post",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        username: $("#username").val(),
        password: $("#password").val()
      }),
      success: function(data) {
        if (data.status == "success") {
          $(".loginElements").hide();
          $("#loggedinMessage").text("Login successful");
        } else {
          $("#loginMessage").text("Access denied");
        }
      },
      error: function(data) {
        $("#loginMessage").text("Error in login");
      }
    });
  });
});
