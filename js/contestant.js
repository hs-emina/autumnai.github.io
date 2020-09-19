var alldata = JSON.parse(contestant);


// For Islington Leaderboard
var islington = alldata[3].slice(0, 101);


if (islington.length == 0) {
    document.getElementById("islington_board").innerHTML = '<tr><h3 id = "NoSubmission">No one has submitted yet. Be the first one to submit out of ' + alldata[4] + ' players ! <br> \\( * o * )/</h3></tr>';

} else {
    document.getElementById("islington_remaining").innerHTML = "And " + alldata[4] + " more players who haven't submitted yet . . .";

    var counter = 0;
    var runner = setInterval(islingtonBoard, 0);

    function islingtonBoard() {
        var finaloutput = '<tr><th></th><th style="text-align: left;padding-left:2%">&nbsp;Username&nbsp;</th><th>&nbsp;Rank&nbsp;</th><th>&nbsp;CG&nbsp;Rank&nbsp;</th></th><th>&nbsp;Progress&nbsp;</th><th>League</th><th>Prog.&nbsp;Lang.</th></tr></br>';
        for (var i = 0; i < islington.length; i++) {
            var output = "";
            var tempava = "image/default.png";
            if (islington[i].avatar != "default") {
                output += '<td style="text-align: right"><img id="avatar" src="https://static.codingame.com/servlet/fileservlet?id=' + islington[i].avatar + '&amp;format=navigation_avatar" loading="lazy" alt="' + islington[i].pseudo + '"></td>';
                tempava = 'https://static.codingame.com/servlet/fileservlet?id=' + islington[i].avatar + '';
            } else {
                output += '<td style="text-align: right"><img id="avatar" src="image/default.png" loading="lazy" alt="' + islington[i].pseudo + '"></td>';
            }


            if (i == 0) {
                document.getElementById('ifirstAvatar').src = tempava;
            } else if (i == 1) {
                document.getElementById('isecondAvatar').src = tempava;
            } else if (i == 2) {
                document.getElementById('ithirdAvatar').src = tempava;
            }

            output += '<td style="text-align: left; padding-left:3%"><a id = "profile" href = "profile.html?pseudo=' + islington[i].pseudo + '">' + islington[i].pseudo + '</a></td>';
            output += '<td>' + (i + 1) + '</td>';
            output += '<td>' + islington[i].globalRank + '</td>';


            if (islington[i].progress > 0) {
                output += '<td style="color:#39F28C"> +' + islington[i].progress + ' </td>';
            } else if (islington[i].progress < 0) {
                output += '<td style="color:#FC9393"> ' + islington[i].progress + ' </td>';
            } else {
                output += '<td style="color:#CFCFCF"> ' + islington[i].progress + ' </td>';
            }

            output += '<td><img id="league" src="image/league/' + islington[i].league + '.png"/></td>';
            output += '<td>' + islington[i].language + '</td>';
            finaloutput += '<tr>' + output + '</tr>';
        }
        document.getElementById("islington_board").innerHTML = finaloutput;

        if (counter == 0) {
            changeInterval();
            counter = counter + 1;
        }

    }

    function changeInterval() {
        clearInterval(runner);
        runner = setInterval(islingtonBoard, 100000);
    }
}






// For General Leaderboard

var general = alldata[1].slice(0, 300);

document.getElementById("general_remaining").innerHTML = "And " + alldata[2] + " more players who haven't submitted yet . . .";



var gcounter = 0;
var curChoice = "cgrank";
var grunner = setInterval(generalBoard(curChoice), 0);

function changeGeneralBoard(choice) {
    if (choice != curChoice) {
        curChoice = choice;
        generalBoard(curChoice);
        console.log(choice);
    }
}

function generalBoard(option = curChoice) {
    if (option == "cgrank") {
        general = alldata[1].slice(0, 300);
    } else {
        general = alldata[5].slice(0, 300).reverse();
    }

    var finaloutput = '<tr><th></th><th style="text-align: left;padding-left:2%">&nbsp;Username&nbsp;</th><th>&nbsp;Rank&nbsp;</th><th>&nbsp;CG&nbsp;Rank&nbsp;</th></th><th>&nbsp;Progress&nbsp;</th><th>League</th><th>Prog.&nbsp;Lang.</th><th>Country</th></tr></br>';
    for (var i = 0; i < general.length; i++) {
        var output = "";
        var tempava = "image/default.png";
        if (general[i].avatar != "default") {
            output += '<td style="text-align: right"><img id="avatar" src="https://static.codingame.com/servlet/fileservlet?id=' + general[i].avatar + '&amp;format=navigation_avatar" loading="lazy" alt="' + general[i].pseudo + '"></td>';
            tempava = 'https://static.codingame.com/servlet/fileservlet?id=' + general[i].avatar + '';
        } else {
            output += '<td style="text-align: right"><img id="avatar" src="image/default.png" loading="lazy" alt="' + general[i].pseudo + '"></td>';
        }

        if (i == 0) {
            document.getElementById('gfirstAvatar').src = tempava;
        } else if (i == 1) {
            document.getElementById('gsecondAvatar').src = tempava;
        } else if (i == 2) {
            document.getElementById('gthirdAvatar').src = tempava;
        }
        output += '<td style="text-align: left; padding-left:3%"><a id = "profile" href = "profile.html?pseudo=' + general[i].pseudo + '">' + general[i].pseudo + '</a></td>';
        output += '<td>' + (i + 1) + '</td>';
        output += '<td>' + general[i].globalRank + '</td>';


        if (general[i].progress > 0) {
            output += '<td style="color:#39F28C"> +' + general[i].progress + ' </td>';
        } else if (general[i].progress < 0) {
            output += '<td style="color:#FC9393"> ' + general[i].progress + ' </td>';
        } else {
            output += '<td style="color:#CFCFCF"> ' + general[i].progress + ' </td>';
        }

        output += '<td><img id="league" src="image/league/' + general[i].league + '.png"/></td>';
        output += '<td>' + general[i].language + '</td>';
        output += '<td><img src="https://www.countryflags.io/' + general[i].country + '/flat/32.png"></td>';
        finaloutput += '<tr>' + output + '</tr>';
    }
    document.getElementById("general_board").innerHTML = finaloutput;

    if (gcounter == 0) {
        changeGInterval();
        gcounter = gcounter + 1;
    }

}

function changeGInterval() {
    clearInterval(grunner);
    grunner = setInterval(generalBoard, 100000);
}






// var countDownFrom = new Date(alldata[0]).getTime(); // Time of the lastest update that occured 
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// var x = setInterval(function() { // Display the time passed since last update
//     var now = new Date;
//     var timestamp = now.getUTCFullYear().toString() + "-" + (now.getUTCMonth() + 1).toString().padStart(2, '0') + "-" + now.getUTCDate().toString().padStart(2, '0') + " " + now.getUTCHours().toString().padStart(2, '0') + ":" + now.getUTCMinutes().toString().padStart(2, '0') + ":" + now.getUTCSeconds().toString().padStart(2, '0')
//     var utc_timestamp = new Date(timestamp).getTime();

//     var difference = utc_timestamp - countDownFrom;
//     var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((difference % (1000 * 60)) / 1000);

//     if (hours > 0) {
//         document.getElementById("istimer").innerHTML = "-- Last updated " + hours + "h " + minutes + "m " + seconds + "s ago --";
//         document.getElementById("gtimer").innerHTML = "-- Last updated " + hours + "h " + minutes + "m " + seconds + "s ago --";
//     } else if (hours == 0 && minutes > 0) {
//         document.getElementById("istimer").innerHTML = "-- Last updated " + minutes + "m " + seconds + "s ago --";
//         document.getElementById("gtimer").innerHTML = "-- Last updated " + minutes + "m " + seconds + "s ago --";
//     } else {
//         document.getElementById("istimer").innerHTML = "-- Last updated " + seconds + "s ago --";
//         document.getElementById("gtimer").innerHTML = "-- Last updated " + seconds + "s ago --";
//     }

// }, 1000);



// var countDownTo = new Date("Sep 19, 2020 07:00:00").getTime(); // Time of the lastest update that occured 
// var x = setInterval(function() { // Display the time passed since last update
//     var now = new Date;
//     var timestamp = now.getUTCFullYear().toString() + "-" + (now.getUTCMonth() + 1).toString().padStart(2, '0') + "-" + now.getUTCDate().toString().padStart(2, '0') + " " + now.getUTCHours().toString().padStart(2, '0') + ":" + now.getUTCMinutes().toString().padStart(2, '0') + ":" + now.getUTCSeconds().toString().padStart(2, '0')
//     var utc_timestamp = new Date(timestamp).getTime();

//     if (countDownTo >= utc_timestamp) {
//         var difference = countDownTo - utc_timestamp;
//         var days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         if (days > 0) {
//             document.getElementById("countdown").innerHTML = "-- " + days + "d " + hours + "h " + minutes + "m " + seconds + "s left --";
//         } else if (hours > 0) {
//             document.getElementById("countdown").innerHTML = "-- " + hours + "h " + minutes + "m " + seconds + "s left --";
//         } else if (hours == 0 && minutes > 0) {
//             document.getElementById("countdown").innerHTML = "-- " + minutes + "m " + seconds + "s left --";
//         } else {
//             document.getElementById("countdown").innerHTML = "-- " + seconds + "s left --";
//         }
//     }

// }, 1000);