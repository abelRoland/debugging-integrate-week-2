'use strict';
// write the logic

console.log('--- loading: evens or odds');

function evensOrOddsHandler() {
  debugger;
  console.log('\n--- action: sum numbers in range ---');
  console.log('range:', typeof range, '\n', range);

  // read user input
  const displayEvens = confirm('would you like to see even numbers?');
  console.log('displayEvens:', typeof displayEvens, '\n', displayEvens);

  // perform core logic
  /* create a comma-separated list if all the evens or odds in the range
    if range is 5 and the user asks for evens:
      "2, 4, "
    if range is 5 and the user asks for odds:
      "1, 3, 5, "
    if range is 8 and the user asks for evens:
      "2, 4, 6, 8, "
    ...
  */ 
  let listedNumbers = '';
  let evenOrOdd;

  if (displayEvens) {
    evenOrOdd = 2;
  } else {
    evenOrOdd = 1;
  }

  for (let i = evenOrOdd; i <= range; i += 2) {
        listedNumbers += `${i}, `;    
      }
  console.log('listedNumbers:', typeof listedNumbers, '\n', listedNumbers);

  // alert result for the user
  alert(listedNumbers);
}
