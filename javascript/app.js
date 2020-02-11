
(function ($) {
    $(function () {
        $('.sidenav').sidenav();
    });
})(jQuery);

$(document).ready(function () {
    $('select').formSelect();
});

var configAPI = config;
firebase.initializeApp(configAPI);
var database = firebase.database();
var userZipCode = $("#user-zip").val();


// listening for what radio button is being selected
// if it is the news button then it will hide the zipcode field
$('input:radio').change(function () {
    if ($(this).val() == 'News') {
        $("#zip-holder").hide()
        $('.container-news').show()
    }
    else {
        $("#zip-holder").show()
    }
}
);



$("#bullying").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=bullying' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("bullying").value = '';
            }

        })



}
);


$("#climate-change").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=climate+change' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("climate-change").value = '';
            }

        })


}
);
$("#domestic-violence").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=domestic+violence' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"

    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("domestic-violence").value = '';
            }

        })


}
);

$("#gun-control").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=gun+control' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("gun-control").value = '';
            }

        })



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
);

$("#inequality").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=inequality' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("inequality").value = '';
            }

        })


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

}
);

$("#mental-health").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=mental+health' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("mental-health").value = '';
            }

        })




    $("#eventName-input").val("");
    $('#socialcause-input :selected').text(""),
    $("#time-input").val("");
    $("#date-input").val("");
    $("#location-input").val("");
    $("#address-input").val("");
    $("#host-input").val("");
});

}
);


$("#Women-Rights").on("click", function (event) {
    var queryNews = ' https://newsapi.org/v2/everything?' + 'q=women+rights' + '&' + 'apiKey=' + newsConfig.apiKey
    $.ajax({
        url: queryNews,
        method: "GET"
    })
        .then(function (response) {
            console.log(response.articles);
            for (let i = 0; i < response.articles.length; i++) {
                var title = ("Title: " + response.articles[i].title)
                var description = ("Description: " + response.articles[i].description)
                var url = ("Link: " + response.articles[i].url)
                var dataset = (title + "<br>" + description + "<br>" + url + "<br>")
                addData();
            }
            function addData() {
                var titles = title;
                var newRow = document.createElement("tr");
                var newCell = document.createElement("td");
                newRow.setAttribute('url', "google.com")
                newCell.innerHTML = dataset;
                newRow.append(newCell);
                document.getElementById("news-rows").appendChild(newRow);
                document.getElementById("Women-Rights").value = '';
            }

        })

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


}
);


function openMap() {
    window.open(
        "events-map.html", "_blank")
}


$(document).ready(function () {
    var userZipCode = ""

    $('.container-news').hide()

    $('.dropdown-trigger').dropdown();


    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        userZipCode = $("#user-zip").val();

        var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + userZipCode
            + '&' + 'key=AIzaSyD3jDUDgfzipvUKQxXuGuZeSSBg5zYcaW4'

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
               var coordiantesResponse = (response.results[0].geometry.location);

               locations.push(coordiantesResponse);
            }

        )
        

        database.ref().push({
                ZipCode: userZipCode,

            });

        locations.push(userZipCode);

        $('#user-zip').empty();

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
        locationName = $("#location-input").val().trim();

        database.ref().push({
            eventName: eventName,
            socialCause: socialCause,
            eventTime: eventTime,
            eventDate: eventDate,
            locationName: locationName,

        });

    })
})

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

