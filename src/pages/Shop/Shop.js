import React from "react";
import {Container, Title, Image} from '@mantine/core';
import car from "../../img/car.jpeg";

const text =
    "Bu yazıda otomobilin tarihçesi; ilk arabanın ortaya çıkışı ve dönemin etkenleri hakkında konuşacağız. Araçlarla ilgilenmeyen birini nadiren bulabilirsiniz, iki tekerlekli, üç tekerlekli veya dört tekerlekli. " +
    "Aile üyelerinize veya arkadaşlarınıza sorabilirsiniz ve büyük olasılıkla otomobillerin tarihini öğrenmek için meraklı olduğunu söyleyeceklerdir. Öyleyse geçici olarak fren yapalım veya geri vitese geçmek için duralım: " +
    "Otomobilin tarihçesi. Unutmayın, bir otomobil her zaman, bir içten yanmalı motorla tahrik edilen dört tekerlekli bir motorlu taşıtı ifade eder. Bildiğiniz gibi, çoğu insan dört tekerlekli araçlara veya yeni ve farklı otomobil " +
    "modellerine büyük ilgi gösteriyor. Bu noktada ilk ve önemli soru, ilk dört tekerleği kimin yarattığını bulmak. Sonraki sorgu, ilk arabanın nerede yapıldığı veya üretildiği ile ilgili olacaktır. Ve en önemlisi, ilk dört tekerlekli aracın hangi ülkede geliştirildiğini bilmek? " +
    "Bu üç sorunun cevabı, geri vitese geçmeyi kolaylaştıracaktır. Eh, bu üç temel sorunun yanıtları, araştırıldığı kadar kolay değil. Bunun nedeni basitçe, bir aracı tasarlama veya planlama ve ardından o dönemde mevcut araç veya ekipmanlarla yapma sürecinin çok uzun bir " +
    "zaman ve para gerektirmesidir. Daha önce hiç kimse dört tekerlekli bir araç görmediğinden, yıllarca, hatta yüzyıllardır daha çok bir deneydi.\n" +
    "\n" +
    "Her hakkı arabam.com’da saklıdır. Kaynak gösterilerek dahi alıntı yapılamaz."
const HomePage = () => {
    return (
        <>
            <Container>
                <Title order={1}>Otomobilin Tarihçesi; İlk Arabanın Ortaya Çıkışı Ve Etkenler</Title>
                <br/>
                <Image
                    height={500}
                    width={900}
                    src={car}
                    alt=""
                />
                {text}
            </Container>


        </>
    );
};

export default HomePage;