var configAPI = config;
firebase.initializeApp(configAPI);
var database = firebase.database();
var userZipCode = $("#user-zip").val();


// Here we are building the URL we need to query the database




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

// var buttons = document.getElementsByClassName('dropdownchoice');
//             for (var i=0 ; i < buttons.length ; i++){
//               (function(index){
//                 buttons[index].onclick = function(){
//                   alert("I am button " + index);
//                 };
//               })(i)
//             }



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


}
);


function openMap() {
    window.open(
        "events-map.html", "_blank")
}


$(document).ready(function () {
    var userIssue = ""
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

        $(document).ready(function () {
            $('.sidenav').sidenav();
        });


    })
})






