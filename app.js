let configAPI = config;
firebase.initializeApp(configAPI);
let database = firebase.database();



$(document).ready(function() {
    var userIssue = ""
    var userZipCode = ""

    $("#add-button").on("click", function(event) {
        event.preventDefault();

        userIssue = $("#user-issue-input").val().trim();
        userZipCode = $("#user-zip").val().trim();

        $("#results-dump").append(userIssue + "<br>" + userZipCode)
    })
});




let eventName = "";
let socialCause = "";
let eventTime = 0;
let eventDate = 0;
let locationName = "";

$("#submit").on("click", function (event) {
    event.preventDefault();
    eventName = $("#eventName-input").val().trim();
    socialCause = $("#socialcause-input").val().trim();
    eventTime = $("#time-input").val().trim();
    eventDate = $("#date-input").val().trim();
    locationName =$("#location-input").val().trim();

    database.ref().push({
        eventName: eventName,
        socialCause: socialCause,
        eventTime: eventTime,
        eventDate: eventDate,
        locationName: locationName,

    });

});


database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    console.log(childSnapshot.val().eventName);
    console.log(childSnapshot.val().socialCause);
    console.log(childSnapshot.val().eventTime);
    console.log(childSnapshot.val().eventDate);
    console.log(childSnapshot.val().locationName);

})

