var cache = document.getElementById("cacheSpace");
    var cacheNumberBox = document.getElementById("cacheNumber");
    var cacheOperationBox = document.getElementById("cacheOperation");
var inputBox = document.getElementById("inputSpace");

cache.addEventListener("click", () => inputBox.focus() );

inputBox.addEventListener("keydown", function(e) {
    if(e.key == 10 || e.key == 13){
        e.preventDefault();
        calcResult('=');
    }
    else{
        var numArr = '0123456789';
        if( !(numArr.includes(e.key)) &&
            !(e.key == '-' && inputBox.textContent == "") )
        {
            e.preventDefault();

            var arr = "+-*/";
            if ( arr.includes(e.key) ) { calcResult(e.key); }
        }
    }
});

function changeUI (result, x) {
    cacheNumberBox.textContent = result;
    cacheOperationBox.textContent = x;
    if(x == '=') {
        inputBox.textContent = result;
        inputBox.classList.toggle('active');
    }
    else{
        inputBox.textContent = '';
    }


}

function calcResult (x) {

    var a = cacheNumberBox.textContent*1;
    var b = inputBox.textContent*1;
    var result;

    if(x == '='){
        switch (cacheOperationBox.textContent) {
            case '+':
                result = a+b;
                break;
            case '-':
                result = a-b;
                break;
            case 'x':
                result = a*b;
                break;
            case '*':
                result = a*b;
                break;
            case '/':
                result = a/b;
                break;
            case '^':
                result = a**b;
                break;
            case '%':
                result = a%b;
                break;
            default:
                break;
        }
        changeUI(result, x);
    }
    else{
        calcResult('=');
        changeUI()
    }

}