import React from 'react';

import {Button, Container, Hr, Li, List, Span, Wrapper} from "./sideBarStyled.js";
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from "@material-ui/icons";


const SideBar = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <Li>
                        <RssFeed />
                        <Span>Feed</Span>
                    </Li> <Li>
                    <Chat/>
                    <Span>Chats</Span>
                </Li> <Li>
                    <PlayCircleFilledOutlined/>
                    <Span>Videos</Span>
                </Li> <Li>
                    <Group/>
                    <Span>Groups</Span>
                </Li> <Li>
                    <Bookmark/>
                    <Span>Bookmarks</Span>
                </Li> <Li>
                    <HelpOutline/>
                    <Span>Questions</Span>
                </Li> <Li>
                    < WorkOutline/>
                    <Span>Jobs</Span>
                </Li> <Li>
                    <Event/>
                    <Span>Events</Span>
                </Li> <Li>
                    <School/>
                    <Span>Courses</Span>
                </Li>
                </List>
                <Button>Show More </Button>
                <Hr/>
                <List>


                </List>
            </Wrapper>

        </Container>
    );
};

export default SideBar;