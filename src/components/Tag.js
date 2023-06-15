
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const[gif,setGif] = useState('');

  const[loading,setLoading] = useState(false);

  const[tag, setTag] = useState('car')


  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const {data} = await axios.get(url);
    console.log(data)
    const setImage = data.data.images.downsized_large.url;
    setGif(setImage)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function clickHandler(){
    fetchData();
  }
 
  return (
    <div className='w-1/2 bg-blue-600 rounded-lg
    border-black flex flex-col items-center gap-5 mt-[25px]'>
      
      <h1 className='text-2xl uppercase underline'>Only random gif</h1>

      {
        loading ? (<Spinner />) : ( <img src={gif} width="450" />)
      }

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
      onChange={(event) => {
        setTag(event.target.value)
      }}
      value={tag}
       />

      <button className='w-10/12 bg-orange-400 text-lg py-2 rounded-lg mb-[20px]' onClick={clickHandler}>generate</button>

    </div>
  )
}

export default Tag