import React, {useEffect, useState} from "react";
import {AcceptButtonContainer, BasketItemContainer, Container, SummaryContainer} from "./styles";
import {useMantineTheme} from "@mantine/core";
import {ChevronRight} from "tabler-icons-react";
import Button from "src/components/Button/Button";
import BasketItem from "./BasketItem";
import BasketSummary from "./BasketSummary";

const Basket = () => {
    const theme = useMantineTheme();
    const products = JSON.parse(localStorage.getItem('basketItems') ?? "[]");
    const [updatedProduct, setUpdatedProduct] = useState(products);

    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
            const setProducts = () => {
                const products = JSON.parse(localStorage.getItem('basketItems') ?? "[]");
                setUpdatedProduct(products);
                calculateTotalPrice(products);
            }
            const calculateTotalPrice = (products: any) => {
                let total = 0;
                for (let i = 0; i < products.length; i++) {
                    total = products[i].price + total;
                }
                setTotalPrice(total);
            }
            calculateTotalPrice(products);
            window.addEventListener('storage', setProducts);
            return () => {
                window.removeEventListener('storage', setProducts);
            }
        },
        [products]);
    return (
        <Container>
            <BasketItemContainer>
                {updatedProduct?.map((basketItem: { image: string; title: string; rating: number; description: string; price: number; id: number; },
                                      index: any) => {
                    return (
                        <BasketItem
                            key={index}
                            image={basketItem?.image}
                            title={basketItem?.title}
                            rating={basketItem?.rating}
                            description={basketItem?.description}
                            price={basketItem?.price}
                            id={basketItem?.id}
                        />
                    );
                })}

                <AcceptButtonContainer>
                    <Button color={theme.primaryColor} rightIcon={<ChevronRight size={20}/>} fullWidth={false}>
                        Sepeti Onayla
                    </Button>
                </AcceptButtonContainer>
            </BasketItemContainer>
            <SummaryContainer>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <div style={{height: "40px", marginBottom: "1rem"}}/>
                </div>
                <BasketSummary totalPrice={totalPrice}/>
            </SummaryContainer>
        </Container>
    );
};

export default Basket;
