
//an array function to reverse all elements in a string in ascending order and specfied elements in descending
function reverseArrayElements(array, descendingIndices) {
    const sortedArray = array.sort();

    const modifiedArray = sortedArray.map((element, index) => {
      if (descendingIndices.includes(index)) {
        return element.split("").reverse().join("");
      }
      return element; 
    });
  
    return modifiedArray;
  }
  
  const array = ["apple", "banana", "tomato", "avocado"];
  const descendingIndices = [1, 2]; 
  const result = reverseArrayElements(array, descendingIndices);
  console.log(result);

//An array function to check if there is eithe positive or negative numbers
  function checkingNumbers(arr){
    if(arr.length===0){
        return 'zero'
    }
    else if(arr.some (num => num > 0 )){
        return "positive"
    }
    else if (arr.some (num => num < 0)){
        return "negative"
    }else{
        return 0
    }
  }

  const numbers =  [1,2,3,4,5,6];
  console.log(checkingNumbers(numbers));

  //a function to sort workers in terms of their salaries 
  function sortBySalary(intern){
    const sortedIntern = [...intern].sort((a,b) =>a.salary - b.salary)

    return sortedIntern
  }

  const paidInterns = [
    { id: 1, name: "Jennifer", salary: 50000 },
    { id: 2, name: "Marion", salary: 40000 },
    { id: 3, name: "Emily", salary: 64000 }
  ];

  console.log(sortBySalary(paidInterns));


   // a function to multiply numbers in an array by 2
  function doubledArrayNumbers(array){
    const result = []
  
   array.forEach(num => {
    result.push(num * 2)
   });


   return result 
}

  const numbersArray = [1,2,3,4,5]
  console.log(doubledArrayNumbers(numbersArray));


  //a function to multiply the firt four numbers with eightand add tthe last two with 5
  function modifyArr(array){
if (array.length===0){
    return 'zero'
}
    for (let i = 0; i< 4; i++){
        array[i] *= 8
    }
  for (let i = array.length -2;i < array.length;  i++){
        array[i] +=5
  }
return array
  
  }
  const numbersToModify= [10,9,8,7,6,5]
  console.log(modifyArr(numbersToModify));
  
  

  


  
  