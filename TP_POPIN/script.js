
document.getElementById("valider").addEventListener("click", function (event) {
    modal.style.display = "none";
    $.ajax({
        url: './email.php',
        type: 'POST',
        data: { 'emailrecup': document.getElementById("email").value },
        success: function () {
            document.querySelector("span").append("Vous etes bien inscrit , vous allez donc recevoir un enfant gratuit par voie postale sous 5 jours ")
        },
        error: function () {
            var span = document.querySelector("span");
            span.innerHTML = "Il y'a eu une erreur dans le traitement(AJAX)";

        },

    });
    event.preventDefault()
});



document.getElementById("email").addEventListener("keyup", function () {
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ((document.getElementById("email").value === "") || (!filter.test(email.value))) {
        document.getElementById('valider').disabled = true;

    } else {
        document.getElementById('valider').disabled = false;


    }
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user press echap , close it
window.onkeydown = function (event) {
    if (event.keyCode == 27) {
        modal.style.display = "none";
    }
};








/*
function showvalid() {
    document.querySelector("span").append("Vous etes bien inscrit , vous allez donc recevoir un enfant gratuit par voie postale sous 5 jours ")
}

function success() {
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if ((document.getElementById("email").value === "") || (!filter.test(email.value))) {
        document.getElementById('valider').disabled = true;

    } else {
        document.getElementById('valider').disabled = false;


    }
}

*/

