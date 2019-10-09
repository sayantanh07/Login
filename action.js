$(document).ready(function () {
  $("#save").click(() => {
    let username = $("#username").val();
    let password = $("#password").val();
    let req = {
      username: username,
      password: password
    };
    console.log("ajax req = " + JSON.stringify(req));
    let signup = request_server("/signup", req);
    console.log(JSON.stringify(signup));
    // $("#addbookdiv").hide();
  });

  $("#booksave").click(() => {
    let bookname = $("#addbooks").val();
    let req = {
      bookname: bookname
    };
    console.log("ajax req = " + JSON.stringify(req));
    let bookadd = request_server("/savebook", req);
    console.log(JSON.stringify(bookadd));
  });

  $("#login").click(() => {
    let username = $("#validate").val();
    let password = $("#password").val();
    let req = {
      usesrname: username,
      password: password
    };
    let signin = request_server("/signin", req);
    console.log(JSON.stringify(signup));
  });


});

function request_server(url, data) {
  return new Promise((resolve, reject) => {
    // console.log("request server" + url);
    console.log("Request server called.....");
    $.ajax({
      url: url,
      type: "post",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify(data),
      //data: "data",
      success: resp => {
        console.log("Request server resolved.....");
        return resolve(resp);
      },
      error: err => {
        console.log("Error");
        return resolve({
          status: "error",
          data: err
        });
      }
    });
  });
}