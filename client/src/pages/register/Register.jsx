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
import Header from "../../components/header/Header";
import {Link} from "../login/loginStyled";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchAuth} from "../../store/authSlice";


const Register = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "anna@gmail.com",
            password: "12345678910",
            fullName:"Anna"
        },
        mode: "onChange"
    })
    const onSubmit = (values) => {
        dispatch(fetchAuth(values));
    }

    return (
        <>
            <Header/>
            <Container>
                <TitleSocial>Annasocial</TitleSocial>
                <Text>Connect with friends and the world around you on Annasocial.</Text>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder={'email'}{...register("email", {required: "Enter Your Email"})}
                               error={Boolean(errors.email?.message)} type={"email"}/>
                        <p style={{color: "#EC5990"}}>{errors.email?.message}</p>
                        <Input placeholder={'password'}{...register("password", {required: "Enter Your Password"})}
                               error={Boolean(errors.password?.message)}/>
                        <p style={{color: "#EC5990"}}>{errors.password?.message}</p>
                        <Input placeholder={'FullName'}{...register("fullName", {required: "Enter Your FullName"})}
                               error={Boolean(errors.fullName?.message)}/>
                        <p style={{color: "#EC5990"}}>{errors.password?.message}</p>
                        <Button type={"submit"}>SIGN Up</Button>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
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