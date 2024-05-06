const car1={
    type:"Tesla",
    model:"model X",
    isQuickest:true,
    sayQuickest:function(){console.log("This is the quickest tesla model")},
}
const car2={
    type:"Tesla",
    model:"model S",
    isQuickest:false,
    sayfastest:function(){console.log("This is the fastest tesla model")},
}
car1.sayQuickest();
car2.sayfastest();

console.log(car1.type);
console.log(car1.model);
console.log(car1.isQuickest);

console.log(car2.type);
console.log(car2.model);
console.log(car2.isQuickest);
