import React from 'react';
import {
    Agreement,
    Button,
    ButtonAccount,
    Container,
    Form,
    Input,
    Text,
    Title,
    TitleSocial,
    Wrapper
} from "./registerStyled";


const Register = () => {
    return (
        <>
            <Container>
                <TitleSocial>Annasocial</TitleSocial>
                <Text>Connect with friends and the world around you on Annasocial.</Text>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'email'}/>
                        <Input placeholder={'full name'}/>
                        <Input placeholder={'password'}/>
                        {/*<Input placeholder={'confirm password'}/>*/}

                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>
                        <Button>Create</Button>
                        <ButtonAccount>Log into Account</ButtonAccount>

                    </Form>

                </Wrapper>

            </Container>
        </>
    );
};

export default Register;