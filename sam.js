function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// const result = new Promise(async (resolve , reject) => {
//     console.log("starting operation...");
//     // await delay(1000);
//     const success = true; 
//     if (success) {
//         await 
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }
// });

// result
//  .then(v => {
//     console.log(v);
//  })
//  .catch(e => {
//     console.log(e);
//  });

 async function getResult(){
    await delay(1000);
    if (Math.random() < 0.5){
        return "Operation was successful!";
    }else{
        throw "Operation failed.";
    }
  
    
 }

//  getResult().then(v => {
//     console.log(v);
//  }).catch(e => {
//     console.log(e);
//  });

//  const result1 = await getResult()
//  .then(v=> {
//     console.log(`inside then ${v}`);
//  })
//  .catch(e =>{
//     console.log(`inside catch ${e}`);
//  });
//  console.log(result1)


const result1 =  getResult();
 console.log(result1);

result1
.then(v=> {
    console.log(`inside then ${v}`);
 })
 .catch(e =>{
    console.log(`inside catch ${e}`);
 });
