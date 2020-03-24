document.querySelectorAll('.menu').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});

if (document.querySelector("#personal").checked == false) {
    document.querySelector(".request__personal .box").style.borderColor = "#CB0037";
}

document.querySelector("#personal").onchange = function () {
    if (document.querySelector("#personal").checked == false) {
        document.querySelector(".request__personal .box").style.borderColor = "#CB0037";
    } else {
        document.querySelector(".request__personal .box").style.borderColor = "#E7E7E7";
    }
}

// const where = document.querySelector("input#where");

// where.onclick = function(e) {
//     where.classList.add("valid");
//     where.closest(".hidden").style.display="block"
// }

// where.onchange = function () { 
//     if(where.value === "") {
//         where.classList.add("valid")
//         document.querySelector(".hidden").style.display="block";
//     } else {
//         where.classList.remove("valid")
//         document.querySelector(".hidden").style.display = "none";
//     }
// }