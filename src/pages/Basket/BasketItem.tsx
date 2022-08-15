import React from "react";
import {BasketItemProductInfoContainer, BasketItemProductPriceContainer} from "./styles";
import {Image, Card as MantineCard, Text, useMantineTheme, ActionIcon} from "@mantine/core";
import {Trash} from "tabler-icons-react";

const BasketItem = ({image, title, price, id, rating}: any) => {
    const theme = useMantineTheme();
    const text="SCORE"

    function deleteItemFromBasket() {
        let items =JSON.parse(localStorage.getItem('basketItems') ?? "[]");
        if (items) {
            items = items.filter(function( basketItem: { id: number; }) {
                return basketItem.id !== id;
            });
            localStorage.setItem('basketItems', JSON.stringify(items));
            window.dispatchEvent(new Event('storage'));
        }
    }


    return (
        <>
            <MantineCard
                shadow="xs"
                p="sm"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                }}
            >
                <BasketItemProductInfoContainer>
                    <MantineCard.Section>
                        <Image src={image} height={100} alt="" width={150} style={{objectFit: "cover"}}/>
                    </MantineCard.Section>

                </BasketItemProductInfoContainer>
                <BasketItemProductPriceContainer>
                    <Text color={theme.black} weight={600}>
                        {title}
                    </Text>
                    <Text color={"blue"} weight={600}>
                        {text} {rating}
                    </Text>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Text color={"red"} weight={600}>
                            {price} $
                        </Text>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <ActionIcon variant="hover"
                                    onClick={deleteItemFromBasket}>
                            <Trash size={24}/>
                        </ActionIcon>
                    </div>
                </BasketItemProductPriceContainer>
            </MantineCard>
        </>
    );
};

export default BasketItem;
