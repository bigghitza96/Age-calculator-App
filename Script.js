//Selecting the output elements
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');

//Selecting the input elements
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');
let isValid = false;
//ERROR ELEMENTS
const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month');
const error_day = document.querySelector('.error-day');

//VALIDATION
input_day.addEventListener('input', (e) => {
    if (+input_day.value > 31 ){
        error_day.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_day.textContent ='';
    }
    if(+input_day.value === 0){
        isValid = false;
        error_day.textContent = 'This field is required';
        return;
    } else{
        error_day.textContent ='';
    }
});
input_month.addEventListener('input', (e) => {
    if (+input_month.value > 12 ){
        error_month.textContent = 'Must be a valid date';
        isValid = false;
        return;
    }
    else{
        isValid = true;
        error_month.textContent ='';
    }
    if(+input_month.value === 0){
        isValid = false;
        error_month.textContent = 'This field is required';
        return;
    } else{
        error_month.textContent ='';
    }
});
input_year.addEventListener('input', (e) => {
    if (+input_year.value > 2023 ){
        error_year.textContent = 'Must be a valid date';
        isVarid = false;
        return;
    }
    else{
        isValid = true;
        error_year.textContent ='';
    }
    if(+input_year.value === 0){
        isValid = false;
        error_year.textContent = 'This field is required';
        return;
    } else{
        error_year.textContent ='';
    }
});

//CALCULATE THE RESULT
 submit_btn.addEventListener('click', CalculateAge);

 function CalculateAge(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        /* console.log(ageDate); */
//We need to edit the output result so we cut 1970 in order the result to be right. 
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears; 
    }else{
        alert("Error");
    } 
 }
