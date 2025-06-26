import React from 'react';
import Banner from '../Components/Banner';
import Calculate from '../Components/Calculate';
import Subscription from '../Components/Subscription';
import FeaturedRoommates from '../Components/FeaturedRoommates';
import TopRoomate from '../Components/TopRoomate';
import Category from '../Components/Category';
import Blogs from '../Components/Blogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoommates></FeaturedRoommates>
            <TopRoomate></TopRoomate>
            <Category></Category>
            <Blogs></Blogs>
            <Calculate></Calculate>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;