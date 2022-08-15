import React from "react";
import {Container, Image} from '@mantine/core';
import main from "../../img/main.jpg";
import {HeadContainer} from "./styles";


const head = "TELEFON | LAPTOP | PARFÜM | DEKORASYON | MARKET VE DAHA FAZLASI"

const text =
    "Türkiye'nin online alışveriş sitesi Bazaar, 2022 yılında kurulan e-ticaret sektöründe kullanıcılarına kesintisiz hizmet vermektedir.\n" +

    "Teknoloji Mağazası, yenilikleri ile Türkiye'nin dijital alışveriş sektöründeki yerini koruyor. Online alışveriş deneyimini her geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine uygun gelişmelerle sizlere sunuyor."

const text2=
    "Sektörde 15’nci yılını geride bırakan Teknoloji Mağazası; Tv, görüntü & Ses sistemlerinden, Beyaz Eşya ürünlerine, Elektrikli Ev Aletlerinden, Ev dekorasyon, Ev/Yaşama ve Yapı Market ürünlerine kadar bol çeşit ürünü mağazacılık ve " +
    "online perakendeciliğin sayısız avantajlarını müşterilerimize entegre olarak sunuyoruz.\n" +

    "Teknoloji Mağazası tüm ürünleri ile; Amazon, hepsiburada, trendyol, n11, gittigidiyor, ciceksepeti ve alibaba.com üzerinden satışlarını tek platform/çoklu kanal üzerinden de marka bilinirliliğini sürdürmektedir.\n" +

    "Teknoloji Mağazası, markasına ve çalışanlarına sürekli yatırım yaparak, uzman insan kaynağı yetiştirerek, müşteri memnuniyeti için yenilikçi hizmetlere öncülük ederek, tüketicilerin ihtiyaçlarına göre en uygun kanal yapısı ile ürün karmasını oluşturarak ve cesur adımlar atarak sektördeki deneyimlerini kullanıcılarla buluşturmaktadır."

const HomePage = () => {
    return (
        <>
            <Container>
                <HeadContainer>
                    {head}
                </HeadContainer>
                <br/>
                <br/>
                <Image
                    height={550}
                    width={800}
                    src={main}
                    alt=""
                />
                <br />
                {text}
                <br />
                <br />
                {text2}
            </Container>
        </>


    );
};

export default HomePage;