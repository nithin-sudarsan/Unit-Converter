var val=document.getElementById("numberValue");

function convert(){
document.getElementById("calcMeterEl").textContent= val.value+" meters = "+ (val.value*3.28084).toFixed(3)+" feet"
document.getElementById("calcFeetEl").textContent= val.value+" feet = "+ (val.value*0.3048).toFixed(3)+" meters"
document.getElementById("calcLitersEl").textContent= val.value+" liters = "+ (val.value*0.264172).toFixed(3)+" gallons"
document.getElementById("calcGallonsEl").textContent= val.value+" gallons = "+ (val.value*3.78541).toFixed(3)+" liters"
document.getElementById("calcKilosEl").textContent= val.value+" kilos = "+ (val.value*2.20462).toFixed(3)+" pounds"
document.getElementById("calcPoundsEl").textContent= val.value+" pounds = "+ (val.value*0.453592).toFixed(3)+" kilos"
}
function convert2(){
    document.getElementById("calcMeterEl").textContent= val.value*2;
    }