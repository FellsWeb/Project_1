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