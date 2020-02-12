let configAPI = config;
firebase.initializeApp(configAPI);
let database = firebase.database();



$(document).ready(function() {
    var userName= ""
    var userEmail = ""
    var userIssue = ""

    $("#add-button").on("click", function(event) {
        event.preventDefault();

        userName = $("#user-issue-name").val().trim();
        userEmail = $("user-email-input")
        userIssue = $("#user-issue").val().trim();
    

        $("#results-dump").append(userIssue + "<br>" + userZipCode)
    })
});




let userName = "";
let userEmail = "";
let userName = 0;

$("#submit").on("click", function (event) {
    event.preventDefault();
    userName = $("#name-input").val().trim();
    userEmail = $("#email-input").val().trim();
    userIssue = $("#issue-input").val().trim();
    

    database.ref().push({
        userName: userName,
        userEmail: userEmail,
        userEmail: userEmail,
    
    });

});


database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().userName);
    console.log(childSnapshot.val().userEmail);
    console.log(childSnapshot.val().userIssue);

})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });