import React from "react";
import {ShopCard} from "../../components/Card/ShopCard";
import {useState, useEffect} from 'react';
import {Pagination, SimpleGrid, LoadingOverlay} from '@mantine/core';
import {SearchBox} from "../../components/Search-Box/searchBox";


const Shop = () => {

    const [activePage] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    const [query, setQuery] = useState("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkCharacterLength = (searchInput) => {
        if (searchInput.length >= 3) {
            loadData(1);
        }
    };

    useEffect(() => {
        checkCharacterLength(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    useEffect(() => {
        loadData(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadData = (pageNumber) => {
        setLoading(true);
        const skip = pageNumber * 12 - 12;
        const limit = 12;
        fetch(`https://dummyjson.com/products/search?q=${query}&skip=${skip}&limit=${limit}`)
            .then((data) => data.json())
            .then((response) => {
                setProducts(response.products);
                setLoading(false)
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const onChange = (pageNumber) => {
        loadData(pageNumber);
    }


    return (

        <div style={{width: "100%", position: 'relative'}}>

            <SearchBox onChange={(e) => setQuery(e.target.value)}/>

            <LoadingOverlay visible={loading} overlayBlur={2}/>


            <SimpleGrid cols={3} spacing={50} style={{marginTop: '30px'}}>
                {products?.map((product) => {
                        return (
                            <ShopCard image={product.thumbnail} title={product.title} id={product.id}
                                      rating={product.rating} description={product.description} price={product.price}
                                      category={product.category}/>
                        );
                    }
                )
                }

            </SimpleGrid>

            <Pagination position={"center"} align={"center"} page={activePage} onChange={onChange} total={9}
                        size={"lg"} spacing={"md"} style={{margin: "3rem"}}/>

        </div>

    );
};

export default Shop;