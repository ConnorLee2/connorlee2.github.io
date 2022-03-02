$(document).ready(function () {
    $.getJSON('assets/data2.json', function (data) {
        var products = data;

        var j = 0;
        var content = "";
        for (var i in products) {
            if (i % 3 === 0) {
                $("#products").append("<tr id='row" + i + "'></tr>");
                j = i;
            }
            $("#row" + j).append("<td><div><img src='" + products[i].image + "' style='width:130px;height:200px;'></div><div class='text-center'>" + products[i].name + " </br><div>" + products[i].price + "</div></div></td>");
        }
    });

});