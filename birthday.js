//function to pick the date from input date of birth and map to Akan name
const calendar_dates=()=>
{
//get values from form elements
//gender
const elementGender=document.getElementById('gender');
const gender=String(elementGender.value);
console.log(gender);

//first name
const elementFirstName=document.getElementById('fname');
const fname=String(elementFirstName.value);
console.log(fname);

//second name
const elementLastName=document.getElementById('lname');
const lname=String(elementLastName.value);
console.log(lname);

//Date of birth
const elementDOB=document.getElementById('dobirth');
const dobirth=String(elementDOB.value);
console.log(dobirth);

 //dateofbirth array split based on /
 const dobArray=String(dobirth).split("-");
 //index0 - year
const year_of_birth=dobArray[0];
 //index1 - month
 const month=dobArray[1];
 //index2 - day of month
 const calendar_day=dobArray[2];



//split year of birth to century and year identifier
//const year_det =year_of_birth.split();
const century =Number(year_of_birth.slice(0,2));
const year_digit=Number(year_of_birth.slice(2));
console.log(century);
console.log(year_digit);
//formula for day of week
//guide: Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//d_o_week = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//CC - is the century digits. For example 1989 has CC = 19, YY - is the Year digits (1989 has YY = 89), MM -  is the Month
//DD - is the Day of the month and mod - is the modulus function ( % )
const d_o_week=( ( (century/4) -2*century-1) + ((5*year_digit/4) ) + ((26*(month+1)/10)) + calendar_day )%7;

//to pick the int part only
day_o_week=Math.trunc(d_o_week);


console.log(day_o_week);


//check for day of week from array
const array_day_of_week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const day_of_the_week=array_day_of_week[day_o_week];
console.log(day_of_the_week);

if (gender=="male")
{
//if male
const array_male_names=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const myMaleName=array_male_names[day_o_week];
console.log(myMaleName);
window.alert(`${fname} ${lname}, as you were born on a ${day_of_the_week} your Akan name is ${myMaleName}`);
}
else if(gender=="female")
{
//if female
const array_female_names=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const myFemaleName=array_female_names[day_o_week];
console.log(myFemaleName);
window.alert(`${fname} ${lname}, as you were born on a ${day_of_the_week} your Akan name is ${myFemaleName}`);
}

}
