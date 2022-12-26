import React from 'react';
import {
    Container,
    Day, Following, Followings,
    H,
    Img,
    ImgBirthday, ImgFollowing, Info, Item,
    List,
    RightWrapper,
    Span, SpanFollowing, SpanKey, SpanUser, SpanValue, Title,


} from "./rightBarStyled";

// import Online from "../online/Online";

const RightBar = ({profile}) => {
    const HomeRightBar = () => {
        return (
            <>
                <Day>
                    <Img src={"/img/gift2.png"} alt={"gift"}/>
                    <Span>
                        <b>Anna Jane</b>and <b>3 other friends </b>have a birthday today.
                    </Span>
                </Day>
                <ImgBirthday src={"/img/birthday.jpg"} alt={"birthday"}/>
                <H>Online Friends</H>
                <List>
                    {/*{Users.map((item, index) => (<Online key={`${item}_${index}`} user={item}/>))}*/}

                </List>
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
                <Title> User information</Title>
                <Info>
                    <Item>
                        <SpanKey>City:</SpanKey>
                        <SpanValue>Yerevan</SpanValue>
                    </Item>
                    <Item>
                        <SpanKey>From:</SpanKey>
                        <SpanValue>Los Angeles</SpanValue>
                    </Item>
                    <Item>
                        <SpanKey>Relationship:</SpanKey>
                        <SpanValue>Married</SpanValue>
                    </Item>
                </Info>
                <Title> User friends </Title>
                <Followings>
                    <Following>
                        <ImgFollowing src={`/img/person1.jpg`} alt={"person"}/>
                        <SpanFollowing>Anna Paruryan</SpanFollowing>
                    </Following>
                    <Following>
                        <ImgFollowing src={"/img/person2.jpg"} alt={"person"}/>
                        <SpanFollowing>Jane Tomline</SpanFollowing>
                    </Following>
                    <Following>
                        <ImgFollowing src={"/img/person3.jpg"} alt={"person"}/>
                        <SpanFollowing>Alex Balduino</SpanFollowing>
                    </Following>
                    <Following>
                        <ImgFollowing src={"http://localhost:3000/img/person4.jpg"} alt={"person"}/>
                        <SpanFollowing>Toma Scot</SpanFollowing>
                    </Following>
                    <Following>
                        <ImgFollowing src={"/img/person5.jpg"} alt={"person"}/>
                        <SpanFollowing>Henry Bocman</SpanFollowing>
                    </Following>
                    <Following>
                        <ImgFollowing src={"/img/person6.jpg"} alt={"person"}/>
                        <SpanFollowing>Tomas Broue</SpanFollowing>
                    </Following>
                </Followings>
            </>
        )
    }
    return (
        <Container>
            <RightWrapper>
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}

            </RightWrapper>
        </Container>
    );
};

export default RightBar;