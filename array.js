const numbers=[10,11,31,40,70];
numbers.forEach(consoleItem)
function consoleItem(item ,index,arr){
 console.log('a['+ index +']='+ item);
}
numbers.reverse();
console.log(numbers);
numbers.pop();
console.log(numbers);
