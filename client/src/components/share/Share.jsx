import React from 'react';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons";
import {Bottom, Button, Container, Hr, Img, Input, Section, Sections, Span, Top, Wrapper} from "./shareStyled";
const Share = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Top>
                        <Img src={"/img/person2.jpg"}/>
                        <Input placeholder={"What is your mind Anna?"}/>
                    </Top>
                    <Hr/>
                    <Bottom>
                        <Sections>
                            <Section>
                                <PermMedia htmlColor={"tomato"}/>
                                <Span>Photo or Video</Span>
                            </Section>
                            <Section>
                                <Label htmlColor={"blue"}/>
                                <Span>Tag</Span>
                            </Section>
                            <Section>
                                <Room htmlColor={"green"}/>
                                <Span>Location</Span>
                            </Section>
                            <Section>
                                <EmojiEmotions htmlColor={"goldenrod"}/>
                                <Span>Feelings</Span>
                            </Section>
                        </Sections>
                        <Button>Share</Button>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Share;