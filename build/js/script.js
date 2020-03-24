const personal = document.querySelector("#personal");

document.querySelectorAll('.menu').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        document.querySelector(".header").classList.toggle("activeMenu")
    });
});

if (personal.checked == false) {
    document.querySelector(".request__personal .box").style.borderColor = "#CB0037";
}

personal.onchange = function () {
    if (personal.checked == false) {
        document.querySelector(".request__personal .box").style.borderColor = "#CB0037";
    } else {
        document.querySelector(".request__personal .box").style.borderColor = "#E7E7E7";
    }
}

var picker = new Lightpick({
    field: document.getElementById('demo-2'),
    singleDate: false,
    onSelect: function(start, end){
        var str = '';
        str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
        str += end ? end.format('Do MMMM YYYY') : '...';
    }
});


// document.querySelector(".lightpick").classList.add('heightupdate')

// document.querySelector("input#demo-2").onclick = function() {
//     document.querySelector(".lightpick").classList.toggle("heightupdate")
// }

let takeDate = document.createElement("div")
takeDate.classList.add("takeDate")
takeDate.innerHTML = "Выберите дату не позднее которой хотите вернуться";
document.querySelector(".lightpick").append(takeDate)



let customCountries = document.querySelector(".customInputs-countries")
customCountries.onclick = function (e) {
    e.target.classList.toggle("activeInput")
}

let customTravel = document.querySelector(".customInputs-travel")
customTravel.onclick = function (e) {
    e.target.classList.toggle("activeInput")
}

document.addEventListener('mousedown', function(e){
    if(e.target.closest('.customInputs-countries') === null){
        customCountries.classList.remove("activeInput")
    }
    if(e.target.closest('.customInputs-travel') === null){
        customTravel.classList.remove("activeInput")
    }
});