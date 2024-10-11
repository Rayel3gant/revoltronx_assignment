import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addHeadlinesData } from '../redux/slice/articleSlice'
import { toast } from 'react-toastify'

const Home = () => {
  const [loading,setLoading]=useState(false)
  const [headlines,setHeadlines]=useState([])
  const apiKey=process.env.REACT_APP_API_KEY;
  const dispatch=useDispatch()
  const { headLinesData } =useSelector((state)=>state.articles)

  const fetchHeadlines=async()=>{
    setLoading(true)
    try{
      const response= await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      const data =await response.json()
      setHeadlines(data.articles)
      console.log(data.articles)
      dispatch(addHeadlinesData(data.articles))
      toast.success("headlines fetched!!")

    } catch(error){
      console.log(error)
      console.log("Error in fetching data from API")
      toast.error("error in fetching headlines")
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(headLinesData.length===0){
      fetchHeadlines()
    } else {
      setHeadlines(headLinesData)
      console.log("found headlindes data from slice")
    }
  },[])


  return (
    <Fragment>
    {
      (loading===true) ? (
        <div className='w-full h-[calc(100vh-6rem)] overflow-y-clip flex justify-center items-center'>
          <Loader/>
        </div>
      ) : (
        <>
        {
          (headlines.length===0)? (
            <div className='w-full h-[calc(100vh-6rem)] overflow-y-clip flex justify-center items-center'>
              No headlines found !!!!
            </div>
          ) : (
            <div className='md:w-3/4 mx-auto w-11/12 md:py-20 py-12 '>
              <p className='underline underline-offset-[6px] mb-8 text-blue-400 hover:text-blue-700 transition-all duration-300'>
                Top Headlines
              </p>
              <>
              {
                headlines.map((data,index)=>(
                  <Card data={data} key={index} lastItem={index===headlines.length-1} />
                ))
              }
              </>
            </div>
          )
        }

        </>

      )
    }

    </Fragment>
  )
}

export default Home