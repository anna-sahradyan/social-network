import React from 'react';
import {
    Container,
    HomePart,
    ImgUser, Info, Item,
    RightWrapper,
    SpanKey, SpanUser, SpanValue, Text, Title, Users, UsersBox,


} from "./rightBarStyled";

// import Online from "../online/Online";

const RightBar = ({profile}) => {
    const HomeRightBar = () => {
        return (
            <>
                <HomePart>
                <Title>Tags</Title>
                <Info>
                    <Item>
                        <SpanKey>#</SpanKey>
                        <SpanValue>City</SpanValue>
                    </Item>
                    <Item>
                        <SpanKey>#</SpanKey>
                        <SpanValue>From</SpanValue>
                    </Item>
                    <Item>
                        <SpanKey>#</SpanKey>
                        <SpanValue>Posts</SpanValue>
                    </Item>
                </Info>
                </HomePart>

                <Title> Comments </Title>
                <Users>
                    <UsersBox>
                        <ImgUser src={`/img/person1.jpg`} alt={"person"}/>
                        <SpanUser>Anna Paruryan</SpanUser>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere illum minima. Aperiam architecto aspernatur, cum, eos eveniet harum labore magni, nesciunt officiis quaerat tempore vel voluptas! Commodi culpa, soluta.</Text>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person2.jpg"} alt={"person"}/>
                        <SpanUser>Jane Tomline</SpanUser>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur cumque cupiditate ducimus earum eos, esse facere facilis fugit itaque iusto modi natus nemo nesciunt odit placeat provident unde ut?
                    </Text>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person3.jpg"} alt={"person"}/>
                        <SpanUser>Alex Balduino</SpanUser>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius enim excepturi laborum perspiciatis provident veniam! Culpa cumque eum illo omnis perferendis perspiciatis possimus quia quo temporibus ullam! Dolores, omnis!lorem

                        </Text>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"http://localhost:3000/img/person4.jpg"} alt={"person"}/>
                        <SpanUser>Toma Scot</SpanUser>
                        <Text >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis eos est excepturi exercitationem illo numquam odio perspiciatis, porro praesentium quaerat quis, quod similique, vel velit. Doloribus eveniet explicabo harum!
                    </Text>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person5.jpg"} alt={"person"}/>
                        <SpanUser>Henry Bocman</SpanUser>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur eligendi quam? Accusantium consectetur deleniti deserunt error iure vel. Accusantium asperiores blanditiis consequatur est hic incidunt magnam molestias porro vitae.
                    </Text>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person6.jpg"} alt={"person"}/>
                        <SpanUser>Tomas Broue</SpanUser>
                        <Text >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate explicabo facilis libero necessitatibus perspiciatis placeat quae? A ab cumque
                    </Text>
                    </UsersBox>
                </Users>
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
                <Users>
                    <UsersBox>
                        <ImgUser src={`/img/person1.jpg`} alt={"person"}/>
                        <SpanUser>Anna Paruryan</SpanUser>

                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person2.jpg"} alt={"person"}/>
                        <SpanUser>Jane Tomline</SpanUser>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person3.jpg"} alt={"person"}/>
                        <SpanUser>Alex Balduino</SpanUser>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"http://localhost:3000/img/person4.jpg"} alt={"person"}/>
                        <SpanUser>Toma Scot</SpanUser>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person5.jpg"} alt={"person"}/>
                        <SpanUser>Henry Bocman</SpanUser>
                    </UsersBox>
                    <UsersBox>
                        <ImgUser src={"/img/person6.jpg"} alt={"person"}/>
                        <SpanUser>Tomas Broue</SpanUser>
                    </UsersBox>
                </Users>
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