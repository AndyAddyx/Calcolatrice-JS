let display = document.getElementById('testo');
let numero1 = '';
let numero2 = '';
let secondoValore = false;
let op = document.getElementById('op'); //variaible per segni d'operazione


let calcolo =(number)=>{
    if(secondoValore){
        numero2=numero2+number;
        display.value=numero2;
    }else{
        numero1=numero1+number;
        display.value=numero1;
    } ;
}
let operazione =(number)=>{
   secondoValore=true;
    op.value=number;
 
}
function risultato() {
    secondoValore=false;
    
    if(op.value=='+'){
        display.value=Number(numero1)+Number(numero2); //addizione
    }else  if(op.value=='-'){
        display.value=Number(numero1)-Number(numero2); //sottrazione
    }else if(op.value=='/'){
        display.value=Number(numero1)/Number(numero2); //divisione
        if(numero2==0){
            return display.value='Somaro';   //numero / 0 impossibile
        }
    
    }else if(op.value=='*'){
        display.value=Number(numero1)*Number(numero2); //moltiplicazione
    }else if(op.value=='%'){
        display.value=(Number(numero1)*Number(numero2))/100; //percentuale
    }    
    
    else{
        alert('INSERISCI OPERAZIONE')  //se premo senza operazioni uguale da errore
    }

    numero2='';
    numero1=display.value;   //per poter concatenare più operazioni
    op.value=null;
    
    
}




function pulisci() {
    display.value='';
    op.value='';
    numero1 = '';
    numero2 = '';
}




