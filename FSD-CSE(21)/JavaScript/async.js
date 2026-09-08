// console.log("Task one:");
// console.log("Task two:");

// setTimeout( ()=>{
//     console.log("Task Three:");
// },20000);

// console.log("Task Four:");
// console.log("Task Five:");

function f1() {
    return new Promise((resolve,reject) => {
      setTimeout( () => {
        console.log("F1 function run successfully");
            resolve(); 
      },4000);
    })
}

function f2() {
    return new Promise((resolve,reject) => {
     setTimeout( () => {
        console.log("F2 function run successfully");
            resolve(); 
      },4000);
    })
}

// function ke aage humesha async and calling k aage humesha await lgta h according to the syntax

async function test(){
    try{
        await f1();
        await f2();
    }
    catch(err){
        console.log("Error:",err);
    }
}

test();