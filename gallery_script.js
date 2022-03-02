$(document).ready(function () {
    $.getJSON('assets/data.json', function (data) {
        print(data);
        var apps = data;
        //here data is your retrived json obj, do further processing with it like i have done below
        var j = 0;
        var appStoreIconSvg = "";
        var playStoreIconSvg = "";

        for (var i in apps) {
            // Hide play store icon if no relevant link
            if (apps[i].playStoreLink === "") {
                playStoreIconSvg = "";
            } else {
                playStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";
            }

            // Hide app store icon if no relevant link
            if (apps[i].appStoreLink === "") {
                appStoreIconSvg = "";
            } else {
                appStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg";
            }
            // Create a row
            if (i % 3 === 0) {
                $("#apps").append("<div class='row pb-3' id='row" + i + "'></div>");
                j = i;
            }
            // Add up to 3 items to a row
            $("#row" + j).append("<div class='col-sm-4 pb-3'><div class='card px-2 py-2'><div class='card-body'><h3 class='card-title'>" +
                apps[i].appName + "</h3><a href='" + apps[i].appStoreLink + "'><img width='32px' src='" + appStoreIconSvg + "'></a> <a href='" + apps[i].playStoreLink + "'><img width='32px' src='" + playStoreIconSvg + "'></a><p class='card-text text-primary'>" + "Year: " + apps[i].year + "<br >" + apps[i].technologies + "</p></div><img src='" + apps[i].image + "' class='card-img-top px-4 pt-2 pb-4' alt='...'></div></div>");
        }
    });
});