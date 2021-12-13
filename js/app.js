fetch('https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=1&year=2022')
  .then(response => response.json())

$(document).on('click', '.btn', function(){

    getdata(
        $("#month").find(":selected").val(),
        $("#year").find(":selected").val()
    )
   async function getdata(month, year){
       $('.loading-menu').fadeIn(function(){
           $('.choose').css("opacity", "0")
       });
        let dataArr = await  fetch(`https://api.aladhan.com/v1/calendar?latitude=40&longitude=49&method=2&month=${month}&year=${year}`)
        .then(res => res.json())
        .then(res =>res.data);
        createPrayTable(dataArr);
        $('.loading-menu').fadeOut(function(){
            $('.choose').css("opacity", "1")    
        });
    }   
    
})

function createPrayTable(PrayTable){

   $('tbody').empty();
   for (let i = 0; i < PrayTable.length; i++) {
       $('tbody').append(`<tr>
       <th scope ="row">${i+1}</th>
       <td>${PrayTable[i].timings.Fajr.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Sunrise.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Dhuhr.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Asr.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Sunset.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Maghrib.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Isha.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Imsak.split(" ")[0]}</td>
       <td>${PrayTable[i].timings.Midnight.split(" ")[0]}</td>
       </tr>`)
   }

}


