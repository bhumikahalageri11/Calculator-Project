function appendValue(value){
    document.getElementById('result').value+=value;
    playClickSound();
    changeButtonColors();
}
function clearResult(){
    document.getElementById('result').value='';
    playClickSound();
    changeButtonColors();
}
function calculateResult(){
    let resultBox=document.getElementById('result');
    let expression=resultBox.value;
    try{
        resultBox.value=eval(expression);
        flashDisplay();
    } catch{
        resultBox.value="Error";
        flashDisplay();
    }
    playClickSound();
    changeButtonColors();

}
function playClickSound(){
    const sound=document.getElementById("clickSound");
    sound.currentTime=0;
    sound.play();
}
function changeButtonColors(){
    let buttons=document.querySelectorAll("button");
     buttons.forEach(button => {
        button.style.backgroundColor=getRandomColor();
    });
}
function getRandomColor(){
    return "#"+Math.floor(Math.random()* 16777215).toString(16);
}
function flashDisplay(){
    let resultBox=document.getElementById('result');
    resultBox.classList.add('flash');
    setTimeout(()=> resultBox.classList.remove('flash'),200);
}