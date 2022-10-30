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
//instantiate array

//response from function


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