function sum(a,b){
    return a+b;
}

function sumWithMsg(clbk,msg){

    const result = clbk(40,50);
    const fresult = "Hi" + msg + "Your Score Is: "+ result;
    console.log(fresult);

}

sumWithMsg(sum," Mr. Rupam!, ");