////Refactoring the spinner1.js code to have lesser no of steps that are not repetetive.


const spinner=()=>{
  for (let i=100; i <= 1500; i=i+200) {
    setTimeout(() => {
      process.stdout.write('\r   '); 
    }, i);
    
  }

}
 spinner();