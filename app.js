function setnumber(num){
    var input = document.getElementById("number")
    input.value += num
}

function ans(){
    var inputvalue = document.getElementById("number")
    var output = eval(inputvalue.value)
    inputvalue.value = output
}

function clearBtn(){
    var inputvalue = document.getElementById("number")
    inputvalue.value = " ";    
}

function dlt(){
    var inputvalue = document.getElementById("number");
    inputvalue.value = inputvalue.value.slice(0 ,-1)
}