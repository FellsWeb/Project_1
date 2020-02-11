(function ($) {
    $(function () {
        $('.sidenav').sidenav();
    });
})(jQuery);

$(document).ready(function () {
    $('select').formSelect();
});

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

        $("#results-dump").append(userIssue + "<br>" + userZipCode);
    })
});



let userInput = {
    eventName: "",
    socialCause: "",
    eventTime: 0,
    eventDate: 0,
    locationName: "",
    address: "",
    hostName: "",
    guestsAttending: 0,
}


$("#submit").on("click", function (event) {
    event.preventDefault();
    userInput = {
        eventName: $("#eventName-input").val().trim(),
        socialCause: $('#socialcause-input :selected').text(),
        eventTime: $("#time-input").val().trim(),
        eventDate: $("#date-input").val().trim(),
        locationName: $("#location-input").val().trim(),
        address: $("#address-input").val().trim(),
        hostName: $("#host-input").val().trim(),
        guestsAttending: ("#attend-event").val().trim(),

    }

    console.log($('#socialcause-input :selected').text())

    //Validate date input
    var dateEntered = $('#date-input').val();
    if (moment(dateEntered, 'MM-DD-YYYY').isValid()) {
        console.log("Date is valid");
    } else {
        $(".popup-content, #alert").addClass("active");
        $("#alert").append("<p>" + "Please use MM-DD-YYYY format" + "<p>");
    }

    database.ref().push({
        userInput
    });

    $("#eventName-input").val("");
    $('#socialcause-input :selected').text(""),
        $("#time-input").val("");
    $("#date-input").val("");
    $("#location-input").val("");
    $("#address-input").val("");
    $("#host-input").val("");
});


database.ref().on("child_added", function (childSnapshot) {
    //display events on table
    var newRow = $("<tr>").append(
        $("<td>").attr("id", childSnapshot.key)
            .append(
                $("<tr>").text("Event Name : " + childSnapshot.val().userInput.eventName),
                $("<tr>").text("Hosted by : " + childSnapshot.val().userInput.hostName),
            ));


    var eventId = childSnapshot.key;

    var eventInfo = childSnapshot.val().userInput;

    $("#eventsTable > tbody").append(newRow);

    //display event info in modal when event clicked
    $("#" + eventId).on("click", function () {
        $("#event-info p").empty();
        console.log(eventInfo);
        console.log(eventId);
        $(".popup, .popup-content").addClass("active");
        $("#event-info").append("<p>" + "Event Name: " + childSnapshot.val().userInput.eventName + "<p>");
        $("#event-info").append("<p>" + "Social Cause: " + childSnapshot.val().userInput.socialCause + "<p>");
        $("#event-info").append("<p>" + "Time: " + childSnapshot.val().userInput.eventTime + "<p>");
        $("#event-info").append("<p>" + "Date: " + childSnapshot.val().userInput.eventDate + "<p>");
        $("#event-info").append("<p>" + "Location: " + childSnapshot.val().userInput.locationName + "<p>");
        $("#event-info").append("<p>" + "Address: " + childSnapshot.val().userInput.address + "<p>");
        $("#event-info").append("<p>" + "Hosted By: " + childSnapshot.val().userInput.hostName + "<p>");
        console.log(childSnapshot.val().userInput.address);
        console.log(childSnapshot.val().userInput.locationName);
    });

    //close modal when button clicked
    $(".close, .popup").on("click", function () {
        $(".popup, .popup-content").removeClass("active");
    });

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);

});


$("#attend-event").on("click", function () {
    guestsAttending++;
    database.ref().push({
        guestsAttending
    })
    $("#event-info").append("<p>" + "Number of Guests Attending; " + guestsAttending);
    console.log(guestsAttending);
})

