import React from 'react';
import {Container, Details, Img, Span, SpanAdd} from "./userInfoStyled";

const UserInfo = ({avatarUrl,fullName,additionalText}) => {
    return (
        <>
           <Container>
               <Img src={avatarUrl || "/img/person4.jpg"}/>
               <Details>
                   <Span>{fullName}</Span>
                   <SpanAdd>{additionalText}</SpanAdd>
               </Details>
           </Container>
        </>
    );
};

export default UserInfo;