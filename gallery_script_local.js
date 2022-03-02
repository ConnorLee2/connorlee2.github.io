$(document).ready(function () {
    var apps = [
        {
            "appName": "Halo Smart IoT",
            "year": "2021",
            "technologies": "Flutter, Dart, Visual Studio Code",
            "appStoreLink": "https://apps.apple.com/gb/app/ebms-iot/id1565355086",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.tyrrell.ebms_iot",
            "image": "assets/images/halo_smart_iot.webp"
        },
        {
            "appName": "Halo for Niagara 4",
            "year": "2021",
            "technologies": "Flutter, Dart, Visual Studio Code",
            "appStoreLink": "https://apps.apple.com/gb/app/halo-for-niagara-4/id1593878277?platform=iphone",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.tyrrell.halo_for_niagara4",
            "image": "assets/images/halo_for_niagara_4.png"
        },
        {
            "appName": "IHP Install",
            "year": "2021",
            "technologies": "Flutter, Dart, Visual Studio Code",
            "appStoreLink": "https://apps.apple.com/gb/app/ihp-install/id1594394001?platform=iphone",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.tyrrell.ihp_install",
            "image": "assets/images/ihp_install.png"
        },
        {
            "appName": "Simaxx Mobile",
            "year": "2021",
            "technologies": "Flutter, Dart, Visual Studio Code",
            "appStoreLink": "https://apps.apple.com/gb/app/simaxx-mobile/id1595888441?platform=iphone",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.simaxx.simaxx_mobile",
            "image": "assets/images/simaxx_mobile.png"
        },
        {
            "appName": "eBMS / Alarms",
            "year": "2020",
            "technologies": "Java, Android Studio",
            "appStoreLink": "",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.tyrrell.ebmsalarms",
            "image": "assets/images/ebms_alarms.png"
        },
        {
            "appName": "CrossTalk 3 (Mobile)",
            "year": "2020",
            "technologies": "Java, Android Studio",
            "appStoreLink": "",
            "playStoreLink": "https://play.google.com/store/apps/details?id=com.tyrrell.crosstalk3mobile",
            "image": "assets/images/crosstalk_3_mobile.png"
        }
    ];

    var j = 0;
    var appStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg";
    var playStoreIconSvg = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg";
    var appStoreStyle = "";
    var playStoreStyle = "";

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
        // Create a row
        if (i % 3 === 0) {
            $("#apps").append("<div class='row pb-3' id='row" + i + "'></div>");
            j = i;
        }
        // Add up to 3 items to a row
        $("#row" + j).append("<div class='col-sm-4 pb-3'><div class='card px-2 py-2 bg-dark border-light'><div class='card-body'><h3 class='card-title text-white'>" +
            apps[i].appName + "</h3><a href='" + apps[i].appStoreLink + "'><img width='32px' style='" + appStoreStyle + "'src='" + appStoreIconSvg + "'></a> <a href='" + apps[i].playStoreLink + "'><img width='32px' style='" + playStoreStyle + "'src='" + playStoreIconSvg + "'></a><p class='card-text text-white'>" + "Year: " + apps[i].year + "<br >" + apps[i].technologies + "</p></div><img src='" + apps[i].image + "' class='card-img-top px-4 pt-2 pb-4' alt='...'></div></div>");
    }
});