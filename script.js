let cardumber = document.querySelector('.card-number');
let name = document.querySelector('.name');
let mm = document.querySelector('.exp-date .mm');
let yy = document.querySelector('.exp-date .yy');

let cvc = document.querySelector('.cvc');


let inputNum = document.querySelector('input[name="cardNum"]');
let inputName = document.querySelector('input[name="name"]');
let inputMM = document.querySelector('input[name="mm"]');
let inputYY = document.querySelector('input[name="yy"]');
let inputCVC = document.querySelector('input[name="cvc"]');

let form = document.querySelector('form');

let err = document.querySelectorAll('.error');

let [validName ,validNum, validmm,validyy,validCvc] = [false,false , false,false ,false]



inputName.addEventListener('input',(event)=> {
    let re = /\W|\d/gi;
    if (event.target.value.replaceAll(' ','').match(re) == null) {
        name.innerText = event.target.value;
        err[0].innerHTML=''
        event.target.style.borderColor='hsl(278, 94%, 30%)'
        validName = true;
      
    }
    else {
        err[0].innerHTML='only letters'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validName = false;
    }
    if (event.target.value == 0) {
        err[0].innerHTML = 'cant be blank'
        event.target.style.borderColor='hsl(0, 100%, 66%)';
        validName =false;
    }

    
})



inputNum.addEventListener('input',(event)=> {
   if (event.target.value == 0) {
        err[1].innerHTML = 'cant be blank'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validNum = false;
   }
    else {

        if (event.target.value.match(/\D/ig) == null ) {
            cardumber.innerText = event.target.value;
            if (event.target.value.length < event.target.maxLength) {
                err[1].innerHTML = 'must be 16 number'
                event.target.style.borderColor='hsl(0, 100%, 66%)'
                validNum = false;

            }
            else {
                err[1].innerHTML='';
                event.target.style.borderColor='hsl(278, 94%, 30%)'
                validNum = true;
      

                
            }
    
        }else {
            err[1].innerHTML='wrong format'
            event.target.style.borderColor='hsl(0, 100%, 66%)'
            validNum = false;

        }
    }

})

function expDate(target) {
    if (target.value.trim().match(/\D/ig)== null  ) {
        err[2].innerHTML='';
        target.style.borderColor='hsl(278, 94%, 30%)'
    }else {
        err[2].innerHTML='wrong format'
        target.style.borderColor='hsl(0, 100%, 66%)'
    }
}

inputMM.addEventListener('input',(event)=>{
    if (event.target.value > 12) {
        err[2].innerHTML='wrong format'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validmm = false;
    }else {
        expDate(event.target) 
        validmm = true;
        mm.innerText = event.target.value
     

    }
    if (event.target.value.length == 0) {
        err[2].innerHTML='Cant be blank'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validmm = false;

    }
}) 
inputYY.addEventListener('input',(event)=>{
    if (event.target.value < 23) {
        err[2].innerHTML='wrong format'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validyy =false;
    }else {expDate(event.target)
        validyy =true;
        yy.innerText = event.target.value
        


    }
    if (event.target.value.length == 0) {
        err[2].innerHTML='Cant be blank'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validyy =false;

    }
}) 

inputCVC.addEventListener('input',(event) => {
    if (event.target.value.match(/\d{3}/ig) != null) {
        err[3].innerHTML='';
        event.target.style.borderColor='hsl(278, 94%, 30%)'
        cvc.innerText = event.target.value;
        validCvc=true
      

    }
    else {
        err[3].innerHTML='wrong format'
        event.target.style.borderColor='hsl(0, 100%, 66%)'
        validCvc=false

    }
})

form.addEventListener('click',(e)=> {
    if (!validName || !validName || !validmm || !validyy || !validCvc) {
        e.preventDefault()
    }else{
        form.style.display='none'
        document.querySelector('.completed').style.display='flex'
    }
})
