//doonate

let inputRes = document.querySelector('.donate__area__subscription__window'),
    nameRadio = document.getElementsByName('nameradio'),
    rezultatRadio = '',
    valuesRadio = '';

inputRes.oninput = function() {
    this.value = this.value.substr(0, 4)
}

window.onclick = function onclickRadio() {
    for (var i = 0; i < nameRadio.length; i++) {
        if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
            rezultatRadio = +nameRadio[i].value;      
            inputRes.value = +rezultatRadio;  
        }
    }  
}

inputRes.addEventListener('input', () => {

    valueWindow = inputRes.value;
    console.log(valueWindow);

    for (var i = 0; i < nameRadio.length; i++) {

        valuesRadio = (nameRadio[i].value)

        if(valuesRadio === valueWindow) {
            nameRadio[i].checked = true;
        } else {
            nameRadio[i].checked = false;
        }
    }  
});













