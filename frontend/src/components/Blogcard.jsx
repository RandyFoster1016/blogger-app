import React from 'react';
import { Link } from 'react-router-dom';
import { IoApps } from "react-icons/io5";

const Blogcard = (props) => {
    let blogdata = props.blogdata;
    return(
       <div className='bg-white shadow-md overflow-hidden rounded-xl'>
            <div className='flex flex-col w-full'>
                <img src={blogdata.image} alt="" />
                <div className='p-2'>
                    <h2 className='mt-1 text-xl text-left'>{blogdata.text}</h2>
                    <p className='text-sm text-left opacity-70'>{blogdata.description}</p>

                </div>
            </div>
        </div>
    );
}

export default Blogcard;