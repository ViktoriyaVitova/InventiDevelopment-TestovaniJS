function plus () {
/// plus two numbers    
    var num1, num2, result;
   //change  
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result = num1 + num2;
    document.getElementById("out").innerHTML = result;
}

function minus (){
/// minus 2 numbers
    var num1, num2, result;
   
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById("out").innerHTML = result;

}

function multiply (){
    /// multiply 2 numbers
        var num1, num2, result;
       
        num1 = document.getElementById('n1').value;
        num1 = parseInt(num1);
    
        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
    
        result = num1 * num2;
    
        document.getElementById("out").innerHTML = result;
    
    }

    function divide (){
        /// devide 2 numbers
            var num1, num2, result;
           
            num1 = document.getElementById('n1').value;
            num1 = parseInt(num1);
        
            num2 = document.getElementById('n2').value;
            num2 = parseInt(num2);
        
            result = num1/num2;
        
            document.getElementById("out").innerHTML = result;
        
        }
