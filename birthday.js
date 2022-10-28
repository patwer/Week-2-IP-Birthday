const empty_string = (input) => {
    console.log('Input field')
    return input;
}





const day_of_week = (dateofbirth)=>{
    //pick dob from input
    const dob=dateofbirth;
    //dateofbirth array split based on /
    const dobArray=String(dob).split("/");
    //index0
    const calendar_day_o_week=dobArray[0];
    //index1
    const day_of_month=dobArray[1];
   //index2
   const year_of_birth=dobArray[2];
}

//const array_day_of_week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//const array_male_names=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
//const array_female_names=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

const akan_name = (calendar_day_o_week)=>{
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