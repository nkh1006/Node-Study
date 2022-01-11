const couresName: string = `Backend web development`;
console.log(couresName);

const printNumbers = (start: number, end: number): void => {
  let temp: string = '';
  if(start < end) {
    for (let i: number = start; i <= end; i++) {
      temp += `${i} `;
    }
    console.log(temp);
  } else {
    console.log('Invalid numbers');
  }
}

printNumbers(5, 10);