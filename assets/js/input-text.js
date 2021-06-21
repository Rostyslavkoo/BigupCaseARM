 let focusP = document.getElementById('focusP');
 let focusInput = document.getElementById('focusInput');

 function getFocus() {

   if (document.hasFocus()) {
     focusP.classList.add('p-focus');
     // console.log(focusInput.value.trim().length);
     focusInput.classList.add('f-input');

     if (focusInput.value.trim().length > 0) {

     }else if(focusInput.value.trim().length === 0){
       focusInput.classList.remove('f-input')
       console.log(focusInput.value.trim().length);

     }

   } else {
console.log('nema');
   }
 }

 if (focusInput.value.trim().length > 0) {
console.log("lox");
 }else if(focusInput.value.trim().length === 0){
   focusInput.classList.remove('f-input')
   console.log(focusInput.value.trim().length);

 }

 // if (focusInput.value.trim().length === 0) {
 //   focusInput.classList.remove('f-input')
 //   console.log(focusInput.value.trim().length);
 // }
