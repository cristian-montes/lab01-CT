import fetch from 'node-fetch';

const getName = ({ name }) => {
  return name;
};


const copyAndPush = (arr, nums) => {
  const newArr = [...arr];
  newArr.push(nums);
  return newArr; 
};

const capitalizeAndfilter = (arr) => {
  const newSD = arr.map(item => item.toUpperCase());
  return newSD.filter(word => word[0] === 'F');
    
};


const fetchData = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes';
  const res = await fetch(url);
  const data  = await res.json();

  return data;
};

const fetchQuotes = async () => {
  const info = await fetchData();
  const newInfo = info[0];
  return  {
    name: newInfo.character,
    text: newInfo.quote,
    image: newInfo.image
    
  };
};




export { getName, copyAndPush, capitalizeAndfilter, fetchQuotes };

