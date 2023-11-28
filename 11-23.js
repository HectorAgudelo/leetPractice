// two sum problem - given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. 
// const nums = [2, 7, 11, 15]
// const target = 18
// const twoSum = function(nums, target) {
//   for(let i = 0; i< nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(nums[i]+nums[j]==target){
//         console.log([i,j])
//         return [i,j]
//       }
//     }
//   }
// };

// twoSum(nums, target)

//---------------------------------------------------------------------------------------------
// a More efficient solution using hash map (object) to store the index of the number as key and the number as value. time complexity is O(n).
// const nums = [2, 7, 11, 15];
// const target = 18;
// const twoSum = function(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // 16, 11, 7, 3
//     if (map.has(complement)) {  // false, false, true
//       console.log([map.get(complement), i]); // [1, 2]
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i); // {2:0, 7:1, 11:2}
//   }
// };

// twoSum(nums, target);

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

//Add two numbers - You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// const addTwoNumbers = function(l1, l2) {
//   let sum = 0; // 7, 0, 8
//   let carry = 0; // 0, 1, 0
//   let result = new ListNode(0); // 7, 0, 8
//   let head = result;      // 7, 0, 8
//   while (l1 || l2 || sum > 0) {   // true, true, true
//     if (l1) {   // true, true, false
//       sum = sum + l1.val; // 7, 10, 8
//       l1 = l1.next;   // 4, 3, null
//     }
//     if (l2) {  // true, true, false
//       sum = sum + l2.val; // 12, 16, 8
//       l2 = l2.next; // 6, 4, null
//     }
//     if (sum >= 10) {  // false, true, false
//       carry = 1;      // 1
//       sum = sum - 10;   // 6
//     }
//     head.next = new ListNode(sum);  // 7, 0, 8
//     head = head.next; // 7, 0, 8
//     sum = carry;  // 1, 1, 0
//     carry = 0;    // 0, 0, 0
//   }
//   return result.next; // 7, 0, 8
// }

// addTwoNumbers(l1, l2);

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Problem Statement:

// You are given an array of objects, each object represents a person with a name and age property. Write a JavaScript function that:

// Filters out the people who are under 18 years old.
// Sorts the remaining people by age in descending order.
// Returns an array of strings, where each string is in the format "Name is Age years old".
// Here's the initial array:

// const people = [
//   { name: 'Alice', age: 20 },
//   { name: 'Bob', age: 15 },
//   { name: 'Charlie', age: 25 },
//   { name: 'Dave', age: 16 },
//   { name: 'Eve', age: 30 }
// ];

// Your function should return:

// [
//   'Eve is 30 years old',
//   'Charlie is 25 years old',
//   'Alice is 20 years old'
// ]

// This problem tests your knowledge of array methods in JavaScript, including filter, sort, and map, which are commonly used in frontend development.

// const peopleArray = (people) => {
//   const filtered = people.filter(person=>person.age>=18)
//   filtered.sort((a,b)=>b.age-a.age)
//   const result = filtered.map(person=>`${person.name} is ${person.age} years old`)
//   console.log(result)
// }

// peopleArray(people)

//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Problem Statement:

// You are given an array of strings. Write a JavaScript function that:

// Filters out the strings that do not contain the letter 'a'.
// Converts the remaining strings to uppercase.
// Returns the transformed array.
// Here's the initial array:
const words = ['Apple', 'Banana', 'Sky', 'Hello', 'Why', 'Monitor', 'Algorithm'];
// Your function should return:
// [
//   'APPLE', 
//   'BANANA', 
//   'ALGORITHM'
// ]
// This problem tests your knowledge of array methods in JavaScript, including filter, and map, which are commonly used in frontend development.

const filterAndMap = (words) => {
  const mapped = words.map(word=>word.toLowerCase())  
  const filtered = mapped.filter(word=>word.includes('a'))
  const result = filtered.map(word=>word.toUpperCase())
  console.log(result)
}

filterAndMap(words)