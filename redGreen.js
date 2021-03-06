import fetch from 'node-fetch';

// GETTING NAMES FROM OBJECTS
const getName = ({ name }) => {
  return name;
};


// COPYING AND PUSHING ITMES TO ARRAYS
const copyAndPush = (arr, nums) => {
  const newArr = [...arr];
  newArr.push(nums);
  return newArr; 
};


// CAPITALIZING AND FILTERING WORDS
const capitalizeAndfilter = (arr) => {
  const newSD = arr.map(item => item.toUpperCase());
  return newSD.filter(word => word[0] != 'F');
    
};


// FETCHING QUOTES FROM FUTURAMA
const fetchData = async () => {
  const url = 'https://futuramaapi.herokuapp.com/api/quotes';
  const res = await fetch(url);
  const data  = await res.json();

  return data;
};


const fetchQuotes = async () => {
  const info = await fetchData();
  const numero = Math.floor(Math.random() * info.length);
  const newinfo = info[numero];
  return {
    name: newinfo.character,
    text: newinfo.quote,
    image: newinfo.image
  };
};

export { getName, copyAndPush, capitalizeAndfilter, fetchQuotes };

