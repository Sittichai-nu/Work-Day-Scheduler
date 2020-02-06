

$( document ).ready(function() {
    $(".lead").text(moment().format("dddd, MMMM Do YYYY, h:mm A"));
    for (var i = 9; i < 22; i++ ) {
        var row =$(`<div data-time=${i} id="${i}" class="row">`);
        var time =$('<div class="col-md-1"><p class=" time">' + timing(i) + '<p/>');
        var text = $(`<div class="col-md-9"><textarea class="text" id=antothertext"${i} class="input" placeholder="Add Event"></textarea>`);
        var save =$(`<div class="col-md-2" id"btn"><button class="save-btn" id=${i}><i class="fa fa-save"></i></button>`);
        console.log(save)

        row.append(time);
        row.append(text);
        row.append(save);
        console.log(row)

        $("#scheduler").append(row)
       
        getLocalStorage(i);
    }
    function getLocalStorage(x) {
        let value = localStorage.getItem(x);
        if (value){
            $(`${x}`).text(value);
        }
    }
    
    function timing(hours) {
        var hour = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + hour;
    }
  
    time.setAttribute("class", "time");
    text.setAttribute("class", "text");
    });