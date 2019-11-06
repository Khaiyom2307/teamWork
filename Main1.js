<script>
        function getLast(){
            return document.getElementById("last-value").innerText;

        }
        function printLast(num){
            document.getEelementById("last-value").innerText=num;
        }
        function getOutput(){
            return document.getElementById("output-value").innerText=getFormattedNumber(num);

        }
        function printOutput(num){
            if(num==""){
            document.getElementById("output-value").innerText=num;
            }
            else{
                documen.getElementById("output-value").innerText=gerFormattedNumber(num);
            }
        }
        function getFormattedNumber(num){
            if(num="-"){
                return "";
            }
            var n= Number(num);
            var value = n.toLocaleString("en");
            return value;
        }
        function reverseNumberFormat(num){
            return Number(num.replace(/,/g,''));
        }
        var operator = document.getElementByClassName("operator");
        for(var i=0; i<operator.length;i++){
            operator[i].addEventListener('click',function(){
                if(this.id=="clear"){
                    printLast("");
                    printOutput("");
                }
                else if(this.id=="backspace"){
                    var output=reverseNumberFormat(getOutput()).toString();
                    if(output){
                        output=output.substr(0, output.length-1);
                        printOutput(output);
                    }
                }
                else{
                    var output = getOutput();
                    var last = getLast();
                    if(output==""&&last!=""){
                        output=output==?output:reverseNumberFormat(output);
                        last=last+output;
                        if(this.id="="){
                            var result = eval(last);
                            printOutput(result);
                            printLast("");
                        }
                        else{
                            last = last+this.id;
                            printLast(last);
                            printOutput("");
                        }
                    }
                       
                    }
                }
            }

        }

        
    </script>