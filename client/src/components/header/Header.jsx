import React from 'react';
import {Container, Left, Right, Logo, Link, Button} from "./headerStyle";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../../store/authSlice";


const Header = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const onClickLogout = () => {
        if(window.confirm("Are you sure you want to log")){
            dispatch(logout());
            window.localStorage.removeItem("token");
        }

    }
    return (
        <>
            <Container>
                <Left>
                    <Link href={"/"}> <Logo>ANNASOCIAL</Logo></Link>

                </Left>

                <Right>
                    {isAuth ? (<>
                        <Link href={"/addPost"}>
                            <Button>Create Post</Button>
                        </Link>
                            <Button type="filled" onClick={onClickLogout}>Log out</Button>
                    </>) : (<>
                        <Link href={"/register"}>
                            <Button>Create an account</Button>
                        </Link>
                        <Link href={"/login"}>
                            <Button>Log in</Button>
                        </Link>
                    </>)

                    }

                </Right>

            </Container>
        </>
    );
};

export default Header;