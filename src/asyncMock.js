const products = [
    {
        id:'1',
        name:'Torta Festiva',
        price:'90000',
        category:'tortas',
        img:'https://chi01pap001files.storage.live.com/y4mnfromH8VsjICAC8JkGb_4denlhq5xkLfl5gAFturK8Y8-kkhR4WFsS1FNsKmlNdzbi9-yZcV62I1jbnaS-D1Oxm7BcpXZygps-klfQDlto7YIS8qTGKwANNqzTaS5x9UV-KlINt-u6BRy3tryZ6L9b5JEQtMHR8FPYiNYZDZV9BzbQQ0-PoI_N-qVkj2Sg3NXfbZB85BBDFJ0AVBy2fnKmBNft0zgyHSrFSX6ZQw0Rw?encodeFailures=1&width=304&height=403',
        stock: 4,
        description:'torta rica y dulce'
    },
    {
        id:'2',
        name:'Torta primavera',
        price:'90000',
        category:'tortas',
        img:'https://chi01pap001files.storage.live.com/y4mDSFMTeRI9w5r3ytmYX2D5PrJVzT0Iopj2mA0NDgMeDitiB-TIB66Plejm8By7LCaJG7Hvk2CUFUm4NvWjUIcs8LEYhg3WwRv4TSV-YYcHBEAmLarsGC8MP10JoGD3nDHaPXWVinN4W1VB_NZCbVOkycW6xwZ7T7ccZ1IgU60U5KUQXThpDr71JINfbU482oMQgQVQaI_Ci4S1TR2mlbaXGiPU_3huCxs8eVGhOCQ2kQ?encodeFailures=1&width=362&height=496',
        stock: 3,
        description:'torta rica y dulce'
    },
    {
        id:'3',
        name:'Achiras',
        price:'8000',
        category:'antojos',
        img:'https://public.ch.files.1drv.com/y4mS13GwwO41Kmx5u_jUSPOG2jajEyP0P_HwmQ3XfU8h32MxbTGtteUevTV7J18lgDHRmzb_V9t3KWH4JurdR0zCX_07Hsfn1gH4Sf68PqPfX_OVkYPhnvCNDEioCODHBZjDlFdIkojTJqdPS4v9cEaP4xIW1qJt5Ae18SWs8hQj5k2d4BoCL93_6baMziInsLx4UViJP4QNdyfbL2d1Wg2hu1ZACBDpwpb37bQJokSrJo?encodeFailures=1&width=1848&height=944',
        stock: 4,
        description:'torta rica y dulce'
    },
    {
        id:'4',
        name:'Biscochos',
        price:'8000',
        category:'antojos',
        img:'https://public.ch.files.1drv.com/y4mz7UpV9tRh-_Mk_is_5HDl0XgMe9BHkT9aNGu13WyNUQJLUFK-PkM5CuaJbo_FnyF-8bQpjux9N8BGtWuWjaNatU3QXOahlAbl-WgCiCSC2CDakB4-XNhNP2qOMvGMT0_iXB9RfoblEmzEMLF73EwE4cGVwx_rBhoF5xFuDrLEOVXczDzBkx_2hThYPGamTUMXZbb1x6upfPcs8EUED9XLPELzX2mLwZ3oE3LVkfn7x4?encodeFailures=1&width=1848&height=944',
        stock: 5,
        description:'torta rica y dulce'
    },
    {
        id:'5',
        name:'Red wine',
        price:'15000',
        category:'gustos',
        img:'https://chi01pap001files.storage.live.com/y4mWZQ-fIivYLsd5b3gaBJ890VZuR2tWhhR3MGsHdiHvcLWK2b2N1_pWDIS3IZK-bds-zrhLWKKPnGvUOWe1wabbvPQEu0HBePWq5PyZau00LFR5U9kBpLO8Bq5o6eiseQf6ashFmHPNW20rolScQ9e6B0WvuQpKGsOp9pQlqkNiSsQ03rYyRptwEJtmyjvpSvYmDPR3HxlLv2lt0DZkD3E7LZRO6arnF8THqbN96B6Cbs?encodeFailures=1&width=372&height=296',
        stock: 6,
        description:'torta rica y dulce'
    },
    {
        id:'6',
        name:'yellowgpeanut',
        price:'15000',
        category:'gustos',
        img:'https://chi01pap001files.storage.live.com/y4mVhUXs2biudBZqi3HjEiaJS02blslvmmmnciuN-3w2U6kzWbuXFGNjWfNq-XqgGykBj8YlRgqZfurGGZrbTfZuRI7LXj07cZH6pRFH5ijISF-XtEFNkA3Bww0nfpv3GijRaNmFk7pFykC13jwhazFG4pCX6K47uIUjBQ98QlW9DKvd5NLbXMwHj3KYePz9JAqQf1ZJK_8YILWEO5FrM2X0eIY9vehprvYYssrP3nPd-Q?encodeFailures=1&width=377&height=294',
        stock: 4,
        description:'torta rica y dulce'
    },
];



export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(products)
        }, 500 )
    } )
}

export const getproductsById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout (() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

