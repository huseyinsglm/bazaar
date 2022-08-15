import React from "react";
import {Container, Image} from '@mantine/core';
import note from "../../img/404_not _found.jpeg";

const text="ANA SAYFAYA GİDİN"
const NotFound = () => {
    return (
        <>
            <Container>
                <Image
                    height={500}
                    width={900}
                    src={note}
                    alt=""
                />
                <br/>
                {text}
            </Container>


        </>
    );
};

export default NotFound;