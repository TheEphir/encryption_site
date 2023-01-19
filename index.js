function scriptFunction(){
    let scr = new Script1();
    scr.script();
}

function deScriptFunction(){
    let deSrc = new Script1();
    deSrc.deScript();
}

function clearFunction(){
    let cls = new Script1();
    cls.clear();
}

class Script1{
    constructor(){
        this.txt = document.getElementById('content').value;
        this.arr = [];
    }

    clear(){
        document.getElementById('content').value = "";
        document.getElementById('content1').value = "";
    }

    script(){
         document.getElementById('content1').value = ""; //clear bottTextArea

         for (let i = 0; i < this.txt.length; i++) {
            let change = this.txt.charCodeAt(i)*2;//script value of textArea
            this.arr.push(change); //push changed value to main array
        }

        for (let i = 1; i in this.arr; i+=2) {
            let spac = ' ';
            this.arr.splice(i, 0, spac); //add spaces to each second index
        }

        for (let i = 0; i in this.arr; i++) {
            document.getElementById('content1').value += this.arr[i]; //print array of changed values to bottom textArea
        }
    }

    deScript(){
        document.getElementById('content1').value = "";

        let arrayToDescript = [];
        let triger = ' ';

        let num1 = '';
        let num2 = '';
        let num3 = '';
        let num4 = '';
        
        for (let i = 0; i < this.txt.length; i++) {
            arrayToDescript.push(this.txt[i]);  //push values from textArea to main array
        }

        let clearArr = [];
        let sum;
        let count;

        for(let i = 0; i < arrayToDescript.length+4; i++){
            count = arrayToDescript.indexOf(triger);

            if(count == -1){
                count = arrayToDescript.length; //WORKS!!!!!!
            }

            console.log('count =' + count);

            switch (count) {
                case 2:
                num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                num2 = arrayToDescript[1].toString();
                sum = num1+num2;  
                clearArr.push(sum);
                break;
                case 3:
                num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                num2 = arrayToDescript[1].toString();
                num3 = arrayToDescript[2].toString();
                sum = num1+num2+num3;
                clearArr.push(sum);  
                break;
                case 4:
                num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                num2 = arrayToDescript[1].toString();
                num3 = arrayToDescript[2].toString();
                num4 = arrayToDescript[3].toString();  
                sum = num1+num2+num3+num4;
                clearArr.push(sum); 
                break;
                case -1:
                if (arrayToDescript.length == 2) {
                    num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                    num2 = arrayToDescript[1].toString();
                    sum = num1+num2;  
                    clearArr.push(sum);
                }
                if (arrayToDescript.length == 3) {
                    num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                    num2 = arrayToDescript[1].toString();
                    num3 = arrayToDescript[2].toString();
                }
                if (arrayToDescript.length == 4) {
                    num1 = arrayToDescript[0].toString(); //convet value of mainArray to string
                    num2 = arrayToDescript[1].toString();
                    num3 = arrayToDescript[2].toString();
                    num4 = arrayToDescript[3].toString();  
                    sum = num1+num2+num3+num4;
                    clearArr.push(sum); 
                }
                break;
            }
            
            arrayToDescript.splice(0,count+1);

            if (arrayToDescript[i] == ' ') {
                i = 0;
            }
        }

        for (let j = 0; j < clearArr.length; j++) {
            let change = String.fromCharCode(clearArr[j]/2); //decsript value of clearArray
            this.arr.push(change);
            console.log(change);
            document.getElementById('content1').value += this.arr[j];
        }
    }
}