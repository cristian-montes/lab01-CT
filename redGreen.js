const getName = ({ name}) => {
  return name;
};


const copyAndPush = (arr, nums) => {
  arr.push(nums);
  return arr; 
};

export { getName, copyAndPush };

