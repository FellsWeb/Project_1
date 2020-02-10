(function ($) {
    $(function () {

        $('.sidenav').sidenav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

let configAPI = config;
firebase.initializeApp(configAPI);
let database = firebase.database();



$(document).ready(function () {
    var userIssue = ""
    var userZipCode = ""

    $("#add-button").on("click", function (event) {
        event.preventDefault();

        userIssue = $("#user-issue-input").val().trim();
        userZipCode = $("#user-zip").val().trim();

        $("#results-dump").append(userIssue + "<br>" + userZipCode)
    })
});



let userInput = {
    eventName: "",
    socialCause: "",
    eventTime: 0,
    eventDate: 0,
    locationName: "",
    hostName: "",
}


$("#submit").on("click", function (event) {
    event.preventDefault();
    userInput = {
        eventName: $("#eventName-input").val().trim(),
        socialCause: $("#socialcause-input").val().trim(),
        eventTime: $("#time-input").val().trim(),
        eventDate: $("#date-input").val().trim(),
        locationName: $("#location-input").val().trim(),
        hostName: $("#host-input").val().trim(),
    }


    database.ref().push({
        userInput
    });

    $("#eventName-input").val("");
    $("#socialcause-input").val("");
    $("#time-input").val("");
    $("#date-input").val("");
    $("#location-input").val("");
    $("#host-input").val().trim();
});


database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    let newRow = $("<tr>").append(
        $("<card-body>").append(
            $("<td>").append(
                $("<tr>").text("Event Name : " + childSnapshot.val().userInput.eventName),
                $("<tr>").text("Hosted by : " + childSnapshot.val().userInput.hostName),
            ))

        /*$("<td>").text(childSnapshot.val(). userInput.hostName),
        /*$("<td>").text(childSnapshot.val().userInput.socialCause), 
        $("<td>").text(childSnapshot.val().userInput.eventTime),
        $("<td>").text(childSnapshot.val().userInput.eventDate), 
        $("<td>").text(childSnapshot.val().userInput.locationName),*/
    );

    $("#eventsTable > tbody").append(newRow);

    $("#eventsTable tbody tr").on("click", function (event) {
        console.log("clicked2");
        event.preventDefault();
        
    })


}), function (errorObject) {
    console.log("The read failed: " + errorObject.code);
}








