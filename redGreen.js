const getName = ({ name }) => {
  return name;
};


const copyAndPush = (arr, nums) => {
  const newArr = [...arr];
  newArr.push(nums);
  return newArr; 
};
const stringies = ['caramelo', 'beans', 'dope', 'flowers', 'tacos', 'burritos', 'fabuloso'];

const capitalizeAndfilter = (arr) => {
  const newSD = [];
  for(let i = 0; i < arr.length; i++){
    const upCase = arr[i].toUpperCase();
    newSD.push(upCase);
  }
  const result = newSD.filter(word => word[0] === 'F');
  console.log(result);
  return result;
};

capitalizeAndfilter(stringies);
export { getName, copyAndPush, capitalizeAndfilter };

