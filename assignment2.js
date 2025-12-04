
let studentname=(prompt("Enter your name:".toUpperCase()));
let maths=(prompt("Enter your marks in Maths:"));         
let English=(prompt("Enter your marks in English:"));         
let Urdu=(prompt("Enter your marks in Urdu:"));    
let mathnum=Number(maths);
let Engnum=Number(English);
let Urdunum=Number(Urdu);
let Tmarks=300;
let totalmarks=mathnum+Engnum+Urdunum;
let percentage=((totalmarks/Tmarks)*100).toFixed(2);
let hihestmarks=Math.max(mathnum,Engnum,Urdunum);
let lowestmarks=Math.min(mathnum,Engnum,Urdunum);
let random= Math.floor(Math.random()*(9999-1000)+1000);
let rollnumber = Math.ceil(random);
let date=new Date(prompt("Enter date in format dd/mm/yyyy:"));
let day=date.getDate();
let month=date.getMonth()+1;
let year=date.getFullYear();





console.log('Name',studentname);
console.log('Roll Number:',rollnumber);
console.log('Total Marks:',Tmarks);
console.log('Obtained Marks:',totalmarks);
console.log('Percentage:',percentage + '%');
console.log('Highest Marks:',hihestmarks);
console.log('Lowest Marks:',lowestmarks);
console.log('maths:',maths);
console.log('English:',English);
console.log('Urdu:',Urdu);
console.log("Date:",day+"/"+month+"/"+year);     








