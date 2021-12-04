var xmlhttp = new XMLHttpRequest();
var url = "https://apicovid19indonesia-v2.vercel.app/api/indonesia";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
        //console.log(data);
        var positif = data.map(function(elem) {
            return elem.positif;
        });
        //console.log(all)
        var dirawat = data.map(function(elem) {
            return elem.dirawat;
        });
        console.log(kasus);
        var sembuh = data.map(function(elem) {
            return elem.sembuh;
        });

        var meninggal = data.map(function(elem) {
            return elem.meninggal;
        });
        console.log(data);

        const ctx = document.getElementById('chart-bar').getContext('2d');
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: provinsi,
        datasets: [{
            label: 'positif',
            data: kasus,
            backgroundColor: 'grey',
            borderColor: 'grey',
            borderWidth: 1
        },
        {
            label: 'dirawat',
            data: kematian,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
        },
        {
            label: 'Sembuh',
            data: kematian,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
        },
        {
            label: 'Meninggal',
            data: kematian,
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 1
        }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                elements:{
                    line:{
                        tension:0
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

}