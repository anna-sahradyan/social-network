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
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchRegister, selectIsAuth} from "../../store/authSlice";
import {toast} from "react-toastify";
import {Navigate} from "react-router-dom";


const Register = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: "",
            password: "",
            fullName:""
        },
        mode: "onChange"
    })
    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
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
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder={'email'}{...register("email", {required: "Enter Your Email"})}
                               error={Boolean(errors.email?.message)} type={"email"}/>
                        <p style={{color: "#EC5990",margin:"4px 5px 0"}}>{errors.email?.message}</p>
                        <Input placeholder={'password'}{...register("password", {required: "Enter Your Password"})}
                               error={Boolean(errors.password?.message)}/>
                        <p style={{color: "#EC5990",margin:"4px 5px 0"}}>{errors.password?.message}</p>
                        <Input placeholder={'FullName'}{...register("fullName", {required: "Enter Your FullName"})}
                               error={Boolean(errors.fullName?.message)}/>
                        <p style={{color: "#EC5990",margin:"4px 5px 0"}}>{errors.fullName?.message}</p>
                        <Button type={"submit"} >SIGN Up</Button>

                        <Agreement>
                            By creating an account , I consent to the processing of my data in accordance with the <b>PRIVACY
                            POLICY</b>
                        </Agreement>


                    </Form>


                </Wrapper>

            </Container>
        </>
    );
};

export default Register;