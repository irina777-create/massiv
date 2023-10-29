//Знайти суму та кількість позитивних елементів.
const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const posArray  = [];
let sumElements = 0;
array.forEach(element){
    if (element > 0) {
        posArray.push(element);
        sumElements += element;
    }
}

const numOfElements = posArray.length;
console.log('кількість позитивних єлементів', numOfElements);
console.log('сума позитивних єлементів', sumElements);

//Відсортувати масив за зростанням.//
const max= Math. max(array);
const index0fMaxNumber = array.index0f(MaxNumber);
console.Log('maximum number', maxNumber);
console.log ('index of maximum',index0fMaxNumber);
// Знайти мінімальний елемент масиву та його порядковий номер.
const min= Math. min(array);
const index0fMinNumber = array.index0f (minNumber);
console.Log('minimum number', minNumber);
console.log ('index of minimum',index0fMinNumber);
//Визначити кількість негативних елементів.
const negativeArray = array.filter(function (item){return item ‹ 0});
console.log('Кількість негативних елементів = ${negativeArray.length}.' );
//Знайти кількість непарних позитивних елементів.
const unpositivetlement = positarray.tiiter(tunction (item) (return item 2 % != 0);
console.log(' Кількість непарних позитивних елементів = ${unpositiveElement.length}. ');
//Знайти кількість парних позитивних елементів.
const positivetlement = positarray.tiiter(tunction (item) (return item 2 % === 0);
console.log(' Кількість непарних позитивних елементів = ${positiveElement.length}. ');
//Знайти суму парних позитивних елементів.
const sumElements = PositiveElements.reduce (sum);
console.log( 'Сума парних елементів масиву = ${sumElements}.' );
//Знайти суму непарних позитивних елементів.
const sumUnElements = unPositiveElement.reduce(sum);
console.log(  'Сума непарних позитивних елементів = ${sumUnElements}');
//Знайти добуток позитивних елементів.
const mulPositiceElements = positArray.reduce(accumulator);
console.log( 'добуток позитивних елементів = >{accumulator' );
//Знайти найбільший серед елементів масиву, остальні обнулити.
array. forEach((element, index){
    if (element!== maxNumber) {
        array[index] = 0;
    }

}
console.log(maxNumber);




