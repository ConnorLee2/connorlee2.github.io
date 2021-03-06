$(document).ready(function () {
    $.ajax({
        dataType: "json",
        url: 'assets/personalData.json',
        success: function (data) {
            var personalApps = data;

            var y = 0;
            var appStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg";
            var playStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";
            //var githubIconSvg = "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg";
            var githubIconSvg = "assets/images/github.png";
            var appStoreStyle = "";
            var playStoreStyle = "";
            var githubStyle = "";

            for (var z in personalApps) {
                // Hide play store icon if no relevant link
                if (personalApps[z].playStoreLink === "") {
                    playStoreStyle = "display: none;";
                } else {
                    playStoreStyle = "";
                }

                // Hide app store icon if no relevant link
                if (personalApps[z].appStoreLink === "") {
                    appStoreStyle = "display: none;";
                } else {
                    appStoreStyle = "";
                }

                // Hide github icon if no relevant link
                if (personalApps[z].githubLink === "") {
                    githubStyle = "display: none;";
                } else {
                    githubStyle = "";
                }

                // Create a row
                if (z % 3 === 0) {
                    $("#personalapps").append("<div class='row pb-3' id='rowb" + z + "'></div>");
                    y = z;
                }
                // Add up to 3 items to a row
                $("#rowb" + y).append("<div class='col-sm-4 pb-3'><div class='card px-2 py-2 bg-dark border-light'><div class='card-body'><h3 class='card-title text-white'>" +
                    personalApps[z].appName + "</h3><a href='" + personalApps[z].appStoreLink + "'><img width='32px' style='" + appStoreStyle + "'src='" + appStoreIconSvg + "'></a> <a href='" + personalApps[z].githubLink + "'><img width='32px' style='" + githubStyle + "'src='" + githubIconSvg + "'></a> <a href='" + personalApps[z].playStoreLink + "'><img width='32px' style='" + playStoreStyle + "'src='" + playStoreIconSvg + "'></a><p class='card-text text-white'>" + "Year: " + personalApps[z].year + "<br >" + personalApps[z].technologies + "</p></div><img src='" + personalApps[z].image + "' class='card-img-top px-4 pt-2 pb-4' alt='...'></div></div>");
            }
        }
    });
});