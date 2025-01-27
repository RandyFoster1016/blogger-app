import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/Api';
import { useSearchParams } from "react-router-dom";

const Home = () => {

    const data = [
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/201/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/202/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/203/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/204/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/205/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/206/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/207/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/208/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:"https://picsum.photos/209/300",
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'7 Jan, 2025',
            comments:'0'
        },
    ]
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {data.map(x => {
                    return <Blogcard blogdata={x} />
                })}

                
            </div>
        </div>
    );
}

export default Home;