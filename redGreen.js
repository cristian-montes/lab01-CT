const getName = ({ name}) => {
  return name;
};


const copyAndPush = (arr, nums) => {
  const newArr = arr.slice();
  newArr.push(nums);
  return newArr; 
};

export { getName, copyAndPush };

