function reverse(str) {
  let arrOfStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arrOfStr.push(str[i]);
  }
  return arrOfStr.join("");
}

//console.log(reverse("manzana verde"));

function findTheBigger(arr) {
  let bigger = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigger) {
      bigger = arr[i];
    }
  }
  return bigger;
}

//console.log(findTheBigger([1, 4, 7, 9, 0, 10, 200, 2456]));

function deleteDupes(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

//console.log(deleteDupes([1, 4, 7, 9, 0, 10, 200, 2456, 1, 1, 3, 4, 6, 7, 9]));

function countEachNumber(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!counter.hasOwnProperty(num)) {
      counter[num] = 1;
    } else counter[num] += 1;
  }
  return counter;
}

//console.log(countEachNumber([1, 3, 5, 6, 7, 9, 20, 1, 3, 5, 6, 9, 9, 9, 9, 20]));

function secondLargest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

//console.log(secondLargest([1, 5, 7, 8, 9, 8, 7, 66, 5, 50]));

function countElements(arr) {
  const counter = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!counter[num]) {
      counter[num] = [num];
    } else {
      counter[num].push(num);
    }
  }
  return counter;
}

//console.log(countElements([1, 4, 4, 7, 8, 8, 8, 8, 8, 9, 9, 1, 3, 5, 4, 5]));

/* Time Complexity:
O(n)
recorremos el array una sola vez.
las operaciones sobre objetos (if (!result[num]), result[num].push(...)) son promedio O(1)

Space Complexity:
O(n)
porque en el peor caso almaceno todos los elementos del array dentro de arrays en el objeto
*/

function countElementsReducer(arr) {
  return arr.reduce((acc, num) => {
    if (!acc[num]) {
      acc[num] = [num];
    } else {
      acc[num].push(num);
    }
    return acc;
  }, {});
}

//console.log(countElementsReducer([1, 4, 4, 7, 8, 8, 8, 8, 8, 9, 9, 1, 3, 5, 4, 5]));