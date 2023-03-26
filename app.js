function setnumber(num){
    var input = document.getElementById("number")
    input.value += num
}

function ans(){
    var inputvalue = document.getElementById("number")
    var output = eval(inputvalue.value)
    inputvalue.value = output
}

// function clear(){
//     var resetValue = document.getElementById("number")
//     input.value = '';
// }