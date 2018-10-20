function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

$("#submit").click(function () {
  var name = $("#name").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  console.log(name, subject, message);

  var mailTo = `mailto:aj@ajjordan.co?subject=${subject}&body=${message}

  from: ${name}`

  $("#submit").attr("href", mailTo);

  console.log(mailTo);
})


