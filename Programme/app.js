function onLoad() {
    alert("Wilkommen!")
}



function buttonClick() {
    alert('Schau dir den Button an!');
    button2 = document.getElementById('testButton');
    button2.innerHTML = 'Deine Mama';
    button2.style.marginLeft = "40em";
}

document.getElementById("testTest").addEventListener("click",
    function () {
        alert("Hello World!");
    }
);

function changeText() {
    text = document.getElementById('text1');
    button = document.getElementById('testTest2');
    if (text.innerHTML == 'HTML ist toll') {
        text.innerHTML = 'JavaScript rockt!';
        button.innerHTML = 'Reset';
        // text.style.paddingLeft = '200px';
    } else {
        text.innerHTML = 'HTML ist toll';
        button.innerHTML = 'JS Aktion NEU';
    }
}

function apiCall(){
fetch('https://api.zippopotam.us/us/10001')
.then((response) => response.json())
.then((data) => document.getElementById('text1').innerHTML = JSON.stringify(data));
}
