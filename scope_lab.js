function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
}
show();

function fibb(){
    let a = 0 ; 
    let b = 1 ; 
    let limit = 50; 

    for(i=0;i<limit;i++){
        console.log(a) ; 
        temp = a + b ; 
        a = b ; 
        b = temp; 
    }
}
show();
fibb();
