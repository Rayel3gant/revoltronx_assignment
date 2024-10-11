import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../components/Loader';
import { FaSearch } from 'react-icons/fa';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addInputText, addSearchedData } from '../redux/slice/articleSlice';
import { toast } from 'react-toastify';

const Search = () => {
  const [input,setInput]=useState('')
  const [loading,setLoading]=useState(false)
  const [articles,setArticles]=useState([])
  const apiKey=process.env.REACT_APP_API_KEY;
  const { searchedData , inputText } =useSelector((state)=>state.articles)
  const dispatch=useDispatch()

  const fetchArticles=async()=>{
    setLoading(true)
    try{
      const response= await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${apiKey}`)
      const data =await response.json()
      setArticles(data.articles)
      dispatch(addSearchedData(data.articles))
      dispatch(addInputText(input))
      toast.success("articles found!!!")
    } catch(error){
      console.log(error)
      console.log("Error in fetching data from API")
      toast.error("error in getting required articles")
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(searchedData){
      setArticles(searchedData)
    }
  })

 

  const changeHandler=(e)=>{
    e.preventDefault()
    setInput(e.target.value)
    console.log(input)
  }
  return (
    <Fragment>
      {
        (loading===true) ? (
          <div className='w-full h-[calc(100vh-6rem)] overflow-y-clip flex justify-center items-center'>
            <Loader/>
          </div>
        ) : (
          <div className='w-full '>
            <div className='md:w-3/4 mx-auto w-11/12'>
              <div className='w-full py-12 flex items-center'>
                <input type='text' id='input' value={input} onChange={changeHandler} placeholder='Search articles with keywords' className='w-[85%] border-b-2 border-blue-700 px-4 py-2 rounded-md outline-none'  />
                <button className='w-[15%] bg-blue-950 text-white  py-3 flex justify-center items-center' onClick={fetchArticles}>
                  <FaSearch className=''/>
                </button>
              </div>

              <div className='w-full'>
                {
                  (articles?.length===0) ? (
                    <div className='w-full h-[calc(100vh-20rem)] overflow-y-clip flex justify-center items-center'>
                      No articles to show for now
                    </div>
                  ) : (
                    <div className='pb-12 pt-4 '>
                      <p className='underline underline-offset-[6px] mb-8 text-blue-400 hover:text-blue-700 transition-all duration-300'>
                        Articles with keyword  "{inputText}"
                      </p>
                      <>
                      {
                        articles.slice(0,8).map((data,index)=>(
                          <Card data={data} key={index} lastItem={index===7}/>
                        ))
                      }
                      </>
                    </div>
                  )

                }
              </div>
            </div>
          </div>
        )
      }
    </Fragment>
  )
}

export default Search