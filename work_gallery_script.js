$(document).ready(function () {
    $.ajax({
        dataType: "json",
        url: 'assets/workData.json',
        success: function (data) {
            var apps = data;

            var j = 0;
            var appStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg";
            var playStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";
            //var githubIconSvg = "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
            var githubIconSvg = "assets/images/github.png";
            var appStoreStyle = "";
            var playStoreStyle = "";
            var githubStyle = "";

            for (var i in apps) {
                // Hide play store icon if no relevant link
                if (apps[i].playStoreLink === "") {
                    playStoreStyle = "display: none;";
                } else {
                    playStoreStyle = "";
                }

                // Hide app store icon if no relevant link
                if (apps[i].appStoreLink === "") {
                    appStoreStyle = "display: none;";
                } else {
                    appStoreStyle = "";
                }

                // Hide github icon if no relevant link
                if (apps[i].githubLink === "") {
                    githubStyle = "display: none;";
                } else {
                    githubStyle = "";
                }

                // Create a row
                if (i % 3 === 0) {
                    $("#apps").append("<div class='row pb-3' id='row" + i + "'></div>");
                    j = i;
                }
                // Add up to 3 items to a row
                $("#row" + j).append("<div class='col-sm-4 pb-3'><div class='card px-2 py-2 bg-dark border-light'><div class='card-body'><h3 class='card-title text-white'>" +
                    apps[i].appName + "</h3><a href='" + apps[i].appStoreLink + "'><img width='32px' style='" + appStoreStyle + "'src='" + appStoreIconSvg + "'></a> <a href='" + apps[i].githubLink + "'><img width='32px' style='" + githubStyle + "'src='" + githubIconSvg + "'></a> <a href='" + apps[i].playStoreLink + "'><img width='32px' style='" + playStoreStyle + "'src='" + playStoreIconSvg + "'></a><p class='card-text text-white'>" + "Year: " + apps[i].year + "<br >" + apps[i].technologies + "</p></div><img src='" + apps[i].image + "' class='card-img-top px-4 pt-2 pb-4' alt='...'></div></div>");
            }
        }
    });
});