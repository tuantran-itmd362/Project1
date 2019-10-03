function Alert() {
  //var a = document.forms["Form"]["firstname"].value;
  //var b = document.forms["Form"]["lastname"].value;
  //var d = document.forms["Form"]["email_addr"].value;
  //var e = document.forms["Form"]["phoneno"].value;
  //var c = document.forms["Form"]["dob"].value; c == null || c == ""
  //if (a == null || a == "", b == null || b == "", d == null || d == "", e == null || e == "") {
  //  return false;
  //}
  //else{
  //  alert("You've successfully signed up! Ready to adventure into a world of knowledge? We'll be sending confirmation and meetups to "+email+"!");
  //  return false;
  //}
  var email = document.getElementById("user_email").value;
  alert("You've successfully signed up! Ready to adventure into a world of knowledge? We'll be sending confirmation and meetups to "+email+"!");
  return false;
}