// // function sayHello(nameOfPerson, age){
// //     console.log("Hello my name is " + nameOfPerson "And I am " + age + " years old");
// // }

// // sayHello("Hyojin", 20);
// // sayHello("Dal", 35);
// // sayHello("Lynn", 56);

// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber)
// }
// function divide(firstNumber, secondNumber){
//     console.log(firstNumber / secondNumber)
// }

// plus(8, 20);
// divide(8, 20);

// //function 안의 변수는 그 블럭 안에서만 존재. ex) function 밖에서 console.log(firstNumber) 불가능

// const player = {
//     name : "Hyojin",
//     sayHello : function(otherPersonName){ //const 안에서의 function은 모양이 다름
//         console.log("Hello " + otherPersonName)
//     },
// };

// console.log(player.name)
// player.name = ("Donggyu")
// console.log(player.name)

// function plus(opotato, salad) {
//     console.log(opotato + salad)
// }

// plus(12345, 12345) //수를 많이 보내도 값을 받을 준비는 2개만 되어있기 때문에 가장 앞 2개만 사용됨



const caculator = {
    add : function(a, b) {
        return (a + b);
    },
    sub : function(a, b) {
        return (a - b);
        //return 후에는 function이 끝나버리기 때문에 여기에 다른 코드를 적어도 작동을 안함
    },
    divide : function(a, b) {
        return (a / b);
    },
    square : function(a, b) {
        return (a ** b);
    },
};

const plusResult = caculator.add(3, 3);
const subResult = caculator.sub(plusResult, 10);
const divideResult = caculator.divide(10, subResult);
const squareResult = caculator.square(plusResult, divideResult);

console.log(squareResult)


// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     ageOfForeigner + 2;
//     return "Hello"
// }


// const krAge = calculateKrAge(age); //이 값은 Hello가 됨

// console.log(krAge);


// const age1 = prompt("How old are you");

// console.log(typeof age1);
// console.log(age1, parseInt(age1))

const age2 = parseInt(prompt("How old are you?"));

if(isNaN(age2)){ //숫자가 아닌거는 여기서 걸러짐
    console.log("Please write right number")
} else if(age2 < 18) {
    console.log("You're too young to drink")
} else if(age2 >= 18 && age2 <= 50) {
    console.log('You can drink')
} else if(age2 > 50 && age2 <= 80){
    console.log('You should exercise')
} else if(age2 >= 80){
    console.log("You can do whatever you want");
}

document.title = ("Hello from JS")