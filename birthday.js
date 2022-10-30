const empty_string = (input) => {
    console.log('Input field')
    return input;
}


const calendar_dates=()=>
{
//get values from form elements
const elementFirstName=document.getElementById('fname');
const fname=String(elementFirstName.value);
console.log(fname);

const elementLastName=document.getElementById('lname');
const lname=String(elementLastName.value);
console.log(lname);

const elementTitle=document.getElementById('title');
const title=String(elementTitle.value);
console.log(title);

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
//const d_o_week=( ( (century/4) -2*century-1) + ((5*year_digit/4) ) + ((26*(month+1)/10)) + calendar_day );
//const modnum=16%7;
//to pick the first digit only
//const rem_int=Number(d_o_week.slice(0,1));
//console.log(rem_int);
console.log(d_o_week);
//instantiate array

//response from function
//return(
    //window.alert(dobirth);
   // window.alert(`As you were born on a${dobirth}`);
   window.alert(`As you were born on a ${dobirth} your Akan name is ${lname}`);
//window.alert("As you were born on a"+dobirth+"your Akan name is" lname);

}



const day_of_week = (dateofbirth)=>{
  
    //ask user for date of birth, pick dob from input
   // const dateofbirth=prompt('Please enter your dob');
   // const dateofbirth=document.getElementById(dobirth);
    console.log(dateofbirth);
    //dateofbirth array split based on /
    const dobArray=String(dateofbirth).split("/");
    //index0
    const calendar_day_o_week=dobArray[0];
    //index1
    const day_of_month=dobArray[1];
   //index2
   const year_of_birth=dobArray[2];
}

//day_of_week(dateofbirth)

//const array_day_of_week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//const array_male_names=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
//const array_female_names=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

const akan_name = (calendar_day_o_week)=>{
// const akan_name = (calendar_day_o_week)=>{
    const array_day_of_week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const array_male_names=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const array_female_names=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    
    const day_name=array_day_of_week[calendar_day_o_week];

    const myAkanNameM=array_male_names[calendar_day_o_week];
    const myAkanNameF=array_female_names[calendar_day_o_week];
    console.log("my akan name", myAkanNameF);
    console.log("my akan name", myAkanNameM);
    return myAkanNameF;
    return myAkanNameM;
}

akan_name(2)