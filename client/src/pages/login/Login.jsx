import React from 'react';
import {Button, Container, Form, Input, Link, Text, Title, TitleSocial, Wrapper} from "./loginStyled";
import Header from "../../components/header/Header";
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: "onChange"
    })
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <>
            <Header/>
            <Container>
                <TitleSocial>Annasocial</TitleSocial>
                <Text>Connect with friends and the world around you on Annasocial.</Text>
                <Wrapper>
                    <Title>SIGN IN </Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder={'email'}{...register("email", {required: "Enter Your Email"})} helperText={errors.email?.message} error={Boolean(errors.email?.message)}/>
                        <Input placeholder={'password'}{...register("password", {required: "Enter Your Password"})} helperText={errors.password?.message} error={Boolean(errors.password?.message)} />
                        <Button>LOGIN</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>

                    </Form>


                </Wrapper>
            </Container>
        </>
    );
};

export default Login;