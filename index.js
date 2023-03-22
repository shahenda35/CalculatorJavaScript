
window.onload = function(){

let valuetext = document.getElementsByClassName("textbox")[0];
let dtbtns = document.querySelectorAll(".data");

let signs = document.getElementsByClassName("operator");

let first=0;
let second=0;
let bol = false;
let OP = 0;

for(let i=0 ; i<dtbtns.length ; i++){
    dtbtns[i].addEventListener("click" , function(){
        if(i == 9){
            valuetext.innerText  += 0; 
        }
        else{
            valuetext.innerText  += i+1; 
        }
    });
}

signs[6].addEventListener("click" , function(){

    switch(OP){
        case 0:
            if(bol == true){
                bol = false;
                if(valuetext.innerText != "")
                second = parseFloat(valuetext.innerText);
                valuetext.innerText = first + second ;
                console.log("okay")
            }
            else{
                valuetext.innerText = "" ;
                console.log("okay-k")
            }
        break;
        case 1:
            if(bol == true){
                bol = false;
                if(valuetext.innerText != "")
                second = parseFloat(valuetext.innerText);
                valuetext.innerText = first - second ;
                console.log("noo")
            }
            else{
                valuetext.innerText = "" ;
                console.log("noo-")
            }
        break;
        case 2:
            if(bol == true){
                bol = false;
                if(valuetext.innerText != "")
                second = parseFloat(valuetext.innerText);
                valuetext.innerText = first * second ;
                console.log("noo")
            }
            else{
                valuetext.innerText = "" ;
                console.log("noo-")
            }
        break;
        case 5:
            if(bol == true){
                bol = false;
                if(valuetext.innerText != "")
                second = parseFloat(valuetext.innerText);
                valuetext.innerText = first / second ;
                console.log("noo")
            }
            else{
                valuetext.innerText = "" ;
                console.log("noo-")
            }
        break;
    }

})
    

for(let j = 0 ; j<signs.length ; j++){
    switch(j){
        case 0:
            signs[j].addEventListener("click" , function(){
                if(bol == false){
                    first=parseFloat(valuetext.innerText) ;
                    bol = true;
                    valuetext.innerText = "";
                }
                else{
                    first += parseFloat(valuetext.innerText) ;
                    valuetext.innerText = "";
                }
                OP = j;
            })
        break;
        case 1:
            signs[j].addEventListener("click" , function(){
                if(bol == false){
                    first=parseFloat(valuetext.innerText) ;
                    bol = true;
                    valuetext.innerText = "";
                }
                else{
                    first -= parseFloat(valuetext.innerText) ;
                    valuetext.innerText = "";
                }
                OP=j;
            })
        break;
        case 2:
            signs[j].addEventListener("click" , function(){
                if(bol == false){
                    first=parseFloat(valuetext.innerText) ;
                    bol = true;
                    valuetext.innerText = "";
                }
                else{
                    first *= parseFloat(valuetext.innerText) ;
                    valuetext.innerText = "";
                }
                OP=j;
            })
        break;
        case 3:
            signs[j].addEventListener("click" , function(){
                valuetext.innerText =  valuetext.innerText.slice(0, -1) ;
            })
        break;
        case 4:
            signs[j].addEventListener("click" , function(){
             first=0;
             second=0;
             bol = false;
             OP = 0;
             valuetext.innerText = "";
            })
        break;
        case 5:
            signs[j].addEventListener("click" , function(){
                if(bol == false){
                    first=parseFloat(valuetext.innerText) ;
                    bol = true;
                    valuetext.innerText = "";
                }
                else{
                    first /= parseFloat(valuetext.innerText) ;
                    valuetext.innerText = "";
                }
                OP=j;
            })
        break;


    }
    
}


}