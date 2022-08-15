import React from "react";
import {Container, Image, Title} from '@mantine/core';
import aboutPage from "../../img/aboutPage.jpg";

const textf =
    "Teknolojik gelişim, günümüzde tarihte hiç olmadığı kadar hız kazanmış durumda ve yoluna olanca hızıyla devam ediyor. Teknoloji uzmanlarının görüşlerine göre, 2021 yılında da teknolojide büyük değişiklikler oldu. Biz de bu pazarda yerimizi almak istedik";
const texts = "Teknolojiden modaya bir çok ürün bulabileeğiniz sitemizi inceleyebilir, istediğiniz ürünleri uygun fiyata alabilirsiniz."
const About = () => {
    return (
        <>
            <Container>
                <Title order={1}>Biz Kimiz</Title>
                {textf}
                <br/>
                {texts}
                <Image
                    height={550}
                    width={800}
                    src={aboutPage}
                    alt=""
                />
            </Container>


        </>
    );
};

export default About;