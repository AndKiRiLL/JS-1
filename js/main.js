// Страница которая отобразит "Я JavaScript!"
//alert('Я JavaScript!')

// Простая страница
/*
let name = prompt('Введите ваше имя')
console.log(name)
*/

// Постфиксная и префиксная формы
/*
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

console.log(c)
console.log(d)
*/

// Результат присваивания
/*
let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

console.log(a)
console.log(x) 
*/

// Преобразование типов
/*
console.log("" + 1 + 0) // 10
console.log("" - 1 + 0) // -1
console.log(true + false) // 1
console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log("  -9  " + 5) // "  -9  5"
console.log("  -9  " - 5) // -14
console.log(null + 1) // 1
console.log(" \t \n" - 2) // -2
*/

// Исправьте сложение
/*
let a = prompt('Первое число?', 1);
let b = prompt("Второе число?", 2);

alert(Number(a) + Number(b));
*/

// Работа с переменными
// # 1
/*
let num;
num = 3;
alert(num)
*/

// # 2
/*
let a = 10, b = 2;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
*/

// # 3
/*
let c = 15, d = 2;
let result = 15 + 2;
console.log(result)
*/

// # 4
/*
let a = 10, b = 2, c = 5;
console.log(a + b + c)
*/

// # 5
/*
let a = 17, b = 10, c, d, result;
c = a - b;
d = 7
result = c + d
console.log(result)
*/

// Работа со строками
// # 1
/*
let str;
str = 'Привет, Мир!'
console.log(str)
*/

// # 2
/*
let str1 = 'Привет, ', str2 = 'Мир!';
console.log(str1 + str2)
*/

// # 3
/*
let name;
name = 'Кирилл'
console.log(`Привет, ${name}`)
*/

// # 4
/*
let age;
age = 17
console.log(`Мне ${age} лет!`)
*/

// Функция prompt
// # 1
/*
name = prompt('Ваше имя?')
alert(`Ваше имя ${name}`)
*/

// # 2
/*
num = prompt('Введите число')
alert(`Квадрат этого числа ${num ** 2}`)
*/

// Обращение к символам строки
// # 1
/*
let str;
str = 'abcde'
console.log(str[0] + str[2] + str[4])
*/
// # 2
/*
let num, sum;
num = '12345'
sum = Number(num[1])
for (let i = 0; i < 3; i++)
{
    sum += sum * Number(num[i+1])
}
console.log(sum)
*/

// Практика
// # 1
/*
let seconds_hour, seconds_day, seconds_month;
seconds_hour = 60 * 60
seconds_day = seconds_hour * 24
seconds_month = seconds_day * 30

console.log(`Секунд в часе: ${seconds_hour}`)
console.log(`Секунд в сутках: ${seconds_day}`)
console.log(`Секунд в месяце: ${seconds_month}`)
*/

// # 2
/*
let currentDate = new Date();
let hour, minutes, seconds;
hour = currentDate.getHours()
minutes = currentDate.getMinutes()
seconds = currentDate.getSeconds()
console.log(`${hour}:${minutes}:${seconds}`)
*/

// # 3
/*
let num;
num = 5
console.log(5 ** 2)
*/

// Работа с присваиванием и декрементами
// # 1
/*
var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num)
*/

// # 2
/*
var num = 10;
num++;
num++;
num--;
alert(num);
*/

