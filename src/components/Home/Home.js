import React from 'react';
import Banner from '../Banner/Banner';
import Collaborate from '../Collaborate/Collaborate';
import File from '../File/File';
import Footer from '../Footer/Footer';
import Join from '../Join/Join';
import NavBar from '../NavBar/NavBar';
import NewFeature from '../NewFeature/NewFeature';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Collaborate></Collaborate>
            <File></File>
            <NewFeature></NewFeature>
            <Join></Join>
            <Footer></Footer>
        </div>
    );
};

export default Home;