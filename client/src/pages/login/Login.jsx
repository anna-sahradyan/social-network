import React from 'react';
import {Button, Container, Form, Input, Link, Text, Title, TitleSocial, Wrapper} from "./loginStyled";
import Header from "../../components/header/Header";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, selectIsAuth} from "../../store/authSlice";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: "",

        },
        mode: "onChange"
    })
    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));
        if(!data.payload){
            return  toast.info("You are not authorized");
        }
        if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);

        }
    }
    if (isAuth) {
        return <Navigate to={"/"}/>
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
                        <Input placeholder={'email'}{...register("email", {required: "Enter Your Email"})}
                               error={Boolean(errors.email?.message)} type={"email"}/>
                        <p style={{color: "#EC5990"}}>{errors.email?.message}</p>
                        <Input placeholder={'password'}{...register("password", {required: "Enter Your Password"})}
                               error={Boolean(errors.password?.message)}/>
                        <p style={{color: "#EC5990"}}>{errors.password?.message}</p>
                        <Button type={"submit"}>LOGIN</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>

                    </Form>


                </Wrapper>
            </Container>
        </>
    );
};

export default Login;