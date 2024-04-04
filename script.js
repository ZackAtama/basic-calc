
function calc(){
    let opType = document.getElementById("opType").value;
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let result = document.getElementById("result");
    
    //   Conditional statements
    if(opType == "+"){
      result.textContent = add(value1, value2)
    } else if(opType == "-"){
      result.textContent = sub(value1, value2) 
    } else if(opType == "*"){
      result.textContent = mult(value1, value2)
    }else if(opType == "/"){
      result.textContent = div(value1, value2)
    }else {
      result.textContent = "Sorry! Operation Not found!"
    }
    
    result.style.fontWeight = "Bold";
    result.style.color = "red";
    
  }
  
  function add(value1, value2){
    let result = parseInt(value1) + parseInt(value2);
    return result;
  }
  
  function sub(value1, value2){
    let result = parseInt(value1) - parseInt(value2);
    return result;
  }
  
  function mult(value1, value2){
    let result = parseInt(value1) * parseInt(value2);
    return result;
  }
  
  function div(value1, value2){
    let result = parseInt(value1) / parseInt(value2);
    return result;
  }
  