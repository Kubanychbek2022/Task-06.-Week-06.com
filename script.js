// 1 Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. - 10 баллов

const populationOfTheBishkek = 2000000;
const populationOfTheBalykchy = 1000;

console.log(populationOfTheBishkek - populationOfTheBalykchy);  // 1999000


// function populationTwoCities () {
//   let city1 = Number(prompt("Enter the name of the city!"));
//   let city2 = Number(prompt("Enter the name of the second city"));

//   let result = city1 - city2;

//   return result;
// }

// alert(populationTwoCities());





// 2. В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет. - 10


// const yardWidth = 50;
// const yardLength = 30;

// const houseWidth = 20;
// const houseLength = 10;

// const yardLengthWidtcount = yardWidth * yardLength;
// const houseWidthLengthCount = houseWidth * houseLength;
// const yardHouse = yardLengthWidtcount - houseWidthLengthCount;
// const lengthFence = ((yardWidth + yardLength) * 2) - (houseWidth + houseLength);

// console.log(houseWidthLengthCount);
// console.log(yardHouse);
// console.log(lengthFence);

// Площадь дома 200
 // Свободная площадь двора 1300
 // Длина забора 130

 

function widthLengthCount () {
  const askYardWidth = Number(prompt("Введите ширину двора"));   // Функция для решение этой задачи
  const askYardLength = Number(prompt("Введите длину двора"));
  
  const askHouseWidth = Number(prompt("Введите ширину дома"));
  const askHouseLength = Number(prompt("Введите длину дома"));
  
  const yardCount = askYardWidth * askYardLength;
  const houseCount = askHouseWidth * askHouseLength;
  const houseYardCount = yardCount - houseCount;
  const fenceLength = ((askYardWidth + askYardLength) * 2) - (askHouseWidth + askHouseLength);
  
  
  document.write(`Площадь дома ${houseCount}`);
  document.write(`Свободная площадь двора ${houseYardCount}`);
 document.write(`Длина забора ${fenceLength}`);
}

widthLengthCount();







// /3. В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести **`alert ЗАДАЧА РЕШЕНА`**. - 10

function twoNumerics () {
  let num1 = Number(prompt("Enter the first number"));
  let num2 = Number(prompt("Enter the second number"));

  if (num1 > num2) {
   return  alert(`Задача решена ${num1 + num2}`);
  } else {
    return alert(`Задача решена ${num1 * num2}`);
  }
}

twoNumerics();




// 4. Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? - 10


function headsOfDragon () {
  let ageOfDragon = Number(prompt("Enter dragon age"));

  if (ageOfDragon <= 100) {
  return  alert(ageOfDragon *= 3);
  }else if (ageOfDragon > 100) {
    return alert(ageOfDragon * 2 + 100);
  }
}

headsOfDragon();





// 5. Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!". - 10


const talkingWithUser = () => {
  let askAge = Number(prompt("Hello my friend, how old are you"));

  if (askAge > 17) {
    prompt("What institute do you study?");
    alert("Good institute");
  }else if (askAge <= 17) {
      prompt("What school do you study?");
      alert("Very good");
  }

   return alert("Ok my friend i wish you goodluck. See you soon.")
}

talkingWithUser();
