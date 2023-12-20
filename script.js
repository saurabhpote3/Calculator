let display =document.getElementById('showDisplay')
function addToDisplay(value){
    display.value+=value;
}
function allClearDisplay(){
    display.value="";
}

function deleteLast(){
    display.value=display.value.toString().slice(0,-1);
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}