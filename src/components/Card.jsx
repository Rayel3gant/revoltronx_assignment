import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import React from 'react'
gsap.registerPlugin(TextPlugin)
const Card = ({data , lastItem}) => {

    useGSAP(()=>{
        gsap.to('.card',{
            opacity:1,
            ease:'power2.inOut',
            stagger:{
                amount:5,
                from:"start"
            }
        })        
    },[])

  // Convert the string to a Date object
  const dateObj = new Date(data.publishedAt);

  // Format the date to dd-mm-yyyy
  const formattedDate = dateObj.toLocaleDateString('en-GB'); // 'en-GB' gives the format dd/mm/yyyy

  // If you need dd-mm-yyyy instead of dd/mm/yyyy
  const formattedDateWithHyphens = formattedDate.replace(/\//g, '-');

  return (
    <div className='w-full py-4 card opacity-0'>
        <p className='text-xl font-semibold title '>
            {data?.title}
        </p>

        

        {
            (data?.description===null) ? (
                <p className='mt-2'>
                No description found
                </p>
            ) : (
                <p className='mt-2 leading-tight'>
                    {data.description}
                </p>
            )

        }

        {
            (data.author===null) ? (
                <p className='mt-2'>By - NA</p>
            ) : (
                <p className='mt-2'>
                   By - {data?.author}
                </p>
            )
        }


        <div className='w-full flex items-start xs:items-center gap-x-20 mt-4 flex-col xs:flex-row gap-y-1 '>
            <p>
                Published at : {formattedDateWithHyphens}
            </p>
            
            

            <a target='_blank' href={data.url} className='hover:underline-offset-2 hover:underline transition-all duration-300 hover:text-blue-400'>
                know more
            </a>
        </div>


        {
            (lastItem=== false) && <div className='w-full h-[0.1rem] bg-black mt-6'/>
        }

        
    </div>
  )
}

export default Card