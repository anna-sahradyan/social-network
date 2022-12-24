import React from 'react';
import {Container} from "./homeStyled";
import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import SideBar from "../../components/sidebar/SideBar";
import RightBar from "../../components/rightbar/RightBar";

const Home = () => {
    return (
        <>
            <Header/>
            <Container>
                <SideBar/>
                <Feed/>
                <RightBar/>
            </Container>
        </>
    );
};

export default Home;