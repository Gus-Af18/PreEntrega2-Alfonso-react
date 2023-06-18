const products = [
    {
        id:'1',
        name:'Torta Festiva',
        price:'90000',
        category:'tortas',
        img:'https://chi01pap001files.storage.live.com/y4m8TG_9cXw2OrRMuySkK6JK_Zxs5itWJq9FjkYSaSAfMPkzPib5M26AnYnIfzfa1ThDgFNJTJc_-Fgpdstj8alRSDlOvrcSe69dQc3jabVM3-0bik0mBGnL--XPGD3aVZGMapdk-NRdAHS54aFENetkVJ99nWEWJ9UIU-r-ndgGOKMSoON7DHQmFliPj0YQEuw7DLvk22zV581mxO4TKHX-8nX5CKB-UaLkfCJKa8V1kM?encodeFailures=1&width=304&height=403',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'2',
        name:'Torta primavera',
        price:'90000',
        category:'tortas',
        img:'https://chi01pap001files.storage.live.com/y4m-N7ogF-x4s1vzvw4CvNFrkpuSR8IX1DoPFCti8js4tsVv9oGukddbs2QQWYY02QsHXKobMzZ6rNSHTMBTbkLXyvxoOr2RlOLE88X2wX9nuaHf7mUfu8U6T27JfsTFEvoouDzNkcABd7XLcc1U75HCdEzyizD45KCrlv9QyBduBFssCIoKd9JVlaJiJ9fQS-l892IuJ3Px5uC-7YM0n7Z-_mMxUPHsmYJD9mjF_a8V7Y?encodeFailures=1&width=395&height=488',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'3',
        name:'Achiras',
        price:'8000',
        category:'antojos',
        img:'https://chi01pap001files.storage.live.com/y4mE3FWuhwH-rMdWGUJss2-LNSwvwwSsrVJppfHSzJMIJOSzGtPDs3Y-fEvPAIsVv17Anu3KRfbZVjXp0M8FQhKCfbqCS3o7qRLsUKNGHyivph8YW51V8fS28DDcawzgO4m-4Gg_1qiyWF4mLnu2h-R-YfnR9u-nPMzazPdm1JDluSDDuviDENhpI1PJdEK8u_w_bll5Q39EaWKnKESm6zryD4eQgwBfyx66HIaBgwA4WA?encodeFailures=1&width=753&height=939',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'4',
        name:'Biscochos',
        price:'8000',
        category:'antojos',
        img:'https://chi01pap001files.storage.live.com/y4mUHd1f95X1oromffFy0S1wGELGzpS2273ukGq8h9eoGGXeD43RuL5aeQP8U5-8gXGSQi25G1f36F3InXYV5aKQDovLTiwtShZQA7k-YfgF2YqTnSGxEhGMgfNO6Wcog9yLC--WChxn2QKklj4wPedBza-lR6MmY3ZwNHd6zbQySYUmVj5pIUzc4unWrCxWgu0o_By0eFx8YJDVJxfYA0iKHLLGpZ_6xmSGBi3AeC_KaM?encodeFailures=1&width=753&height=943',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'5',
        name:'Red wine',
        price:'15000',
        category:'gustos',
        img:'https://chi01pap001files.storage.live.com/y4mPY9gMUP-120rvKMyg6BWyQnzr60v5HhcCxci4eFlemTHAquREp0RsHUjigEKSyi_z_E7-D6pwFVHdYx9O2fVQWdJVuO1bCZoACLFQSWxl_KqBXaP9EwPMnXtjezN9xFrrxWCiL54OgvqERQnFIaZwzehi8QSqKApZLsjNhROfrnjxQswuadgiPODKIZ3oQNoUPbO6Hp1H7dkeGMloIIfftJfC8VYQLYC_MMeBz8qhtY?encodeFailures=1&width=372&height=296',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'6',
        name:'yellowgpeanut',
        price:'15000',
        category:'gustos',
        img:'https://chi01pap001files.storage.live.com/y4mrKE6twd_B0xOWWrTLCzKK12IbqDmYufG_D9B0BrE_DLYcyC_QFPFK_iXjDmYVPuzuA0XwHTtJQeKqhQOZ5Hr_2Qihp7vu6lDkR2gGBcvD-KmEVXwFuf5KEUYXaYfMFtbMAlNALSsAcpyENFnslUtxlRr1mr9KkWXMqHXqTf32wu5xdi76Bus3xXeTi-JCSVw6ijJTf6R1QLVbLDzEJLofqHU75ICrXAD4EzmPJWpt_o?encodeFailures=1&width=377&height=294',
        stock: 1,
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

