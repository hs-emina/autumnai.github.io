var username = document.location.search.replace(/^.*?\=/, ''); // retrive indicated username
var alldata = JSON.parse(stats); // load stats


let image = ''
if (alldata[username][0] != "default") {
    image = '<img id="avatar" src="https://static.codingame.com/servlet/fileservlet?id=' + alldata[username][0] + '&amp;format=navigation_avatar" loading="lazy" alt="' + username + '">'
} else {
    image = '<img id="avatar" src="image/default.png" loading="lazy" alt="' + username + '"></img>'
}
document.getElementById("profile").innerHTML = '<span style="color:#7c7c7c">User :</span> ' + username + '<br>' + image;


var ctx = document.getElementById('profileChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    axisY: { minimum: 10 },
    data: {
        labels: alldata[username][2],
        datasets: [{
            label: 'CG Rank',
            data: alldata[username][1],
            fill: false,
            borderColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 2,
            lineTension: 0.15,
            pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        }]
    },
    options: {
        tooltips: { body: 'rgba(0, 0, 0, 0.5)' },
        hover: { mode: null },
        scales: {
            yAxes: [{
                ticks: {
                    reverse: true
                }
            }]
        }
    }
});