var contestants = JSON.parse(islington);

var textTable = document.getElementById("board");
document.getElementById("islington").innerHTML = contestants.length + " players";

var output = '<tr><th></th><th style="text-align: left;padding-left:2%">&nbsp;Username&nbsp;</th><th>&nbsp;Rank&nbsp;</th><th>&nbsp;CG&nbsp;Rank&nbsp;</th><th>League</th><th>Prog.&nbsp;Lang.</th></tr></br>';
for (var i = 0; i < contestants.length; i++) {
    if (contestants[i].avatar != "default") {
        output += '<td style="text-align: right"><img id="avatar" src="https://static.codingame.com/servlet/fileservlet?id=' + contestants[i].avatar + '&amp;format=navigation_avatar" loading="lazy" alt="' + contestants[i].pseudo + '"></td>';
    } else {
        output += '<td style="text-align: right"><img id="avatar" src="image/default.png" loading="lazy" alt="' + contestants[i].pseudo + '"></td>';
    }
    output += '<td style="text-align: left; padding-left:3%">' + contestants[i].pseudo + '</td>';
    output += '<td>' + (i + 1) + '</td>';
    output += '<td>' + contestants[i].globalRank + '</td>';
    output += '<td><img id="league" src="image/league/' + contestants[i].league + '.png"/></td>';
    output += '<td>' + contestants[i].language + '</td>';
    output = '<tr>' + output + '</tr>';
}
textTable.innerHTML = output;