function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;
    if(height >0 && weight>0){
    var result = parseFloat(weight) /(parseFloat(height)/100)**2;
    }
    else{
        document.getElementById("bmi-output").innerHTML = "Invalid Entry";
        document.getElementById("bmi-status").innerHTML = "Invalid Entry";
    }
    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
  
}