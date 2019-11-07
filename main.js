var screen = document.getElementById("screen");
    var cacheNumberBox = document.getElementById("cacheNumber");
    var cacheOperationBox = document.getElementById("cacheOperation");
var inputBox = document.getElementById("inputSpace");

/*
function keyClick(x){    
    inputBox.dispatchEvent(new KeyboardEvent());
} 
*/
screen.addEventListener("click", () => inputBox.focus() );

inputBox.addEventListener("keydown", function(e) {
    if(e.keyCode === 13){
        e.preventDefault();
        calc('=');
    }
    else{
        console.log(e);
        console.log(e.keyCode);
        var c = e.keyCode;

        var bl = false;
        if(inputBox.value == '0'){
            inputBox.value = '';
            bl=true;
        }
        if(inputBox.value == '-0'){
            inputBox.value = '-';
            bl=true;
        }

        if( !( (c >= 48 && c <=57 )   || (c >= 96 && c <=105 )  ) && !( c==8 )
        ) 
        {
            if(c == 110 || c == 190) {
                if( !(inputBox.value.includes('.')) ) {
                    if(inputBox.value == '' || inputBox.value == '-'){
                        inputBox.value += '0';
                    }
                    inputBox.value += '.';
                }
            }
            if(bl){inputBox.value+='0';}

            e.preventDefault();

            
            switch (c) {
                case 107:
                    calc('+');
                    break;
                case 109:
                    calc('-');
                    break;
                case 106:
                    calc('*');
                    break;
                case 111:
                    calc('/');
                    break;
                default:
                    break;
            }
        }
    }
});
function calc (x) {
    var a = cacheNumberBox.innerText*1;
    var b = inputBox.value*1;
        var test = (inputBox.value=='');
    var result = -1;

    console.log(a,x,b);

    var operator = cacheOperationBox.innerText;
    switch (operator) {
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
                if(test){result=a;}
            break;
        case '/':
            result = a/b;
                if(test){result=a;}
            break;
        default:
            result = a;
            break;
    }

    cacheNumberBox.innerText = result;
    inputBox.value = '';
    cacheOperationBox.innerText = x;

    if( x == '=') {
        inputBox.value = result;
    }
}
