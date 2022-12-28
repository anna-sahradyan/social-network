import React from 'react';
import { Container, Left, Right, Logo, Link, Button} from "./headerStyle";


const Header = () => {
    const isAuth = true;
    return (
        <>
            <Container>
                <Left>
                    <Link href={"/"}> <Logo>ANNASOCIAL</Logo></Link>

                </Left>

                <Right>
                    {!isAuth?(<>
                        <Link href={"/posts/create"}>
                            <Button>Create Post</Button>
                        </Link>
                        <Link>
                            <Button>Log out</Button>
                        </Link>
                    </>):(<>
                        <Link href={"/login"}>
                            <Button>Create an account</Button>
                        </Link>
                        <Link href={"/register"}>
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