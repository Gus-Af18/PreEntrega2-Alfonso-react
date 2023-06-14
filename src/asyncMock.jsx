const asyncMock = [
    {
        id:'1',
        name:'Torta Festiva',
        prince:'90000',
        category:'tortas',
        img:'./img/tortas/torta-uno.png',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'2',
        name:'Torta primavera',
        prince:'90000',
        category:'tortas',
        img:'./img/tortas/torta-dos.png',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'3',
        name:'Achiras',
        prince:'8000',
        category:'antojos',
        img:'./img/antojos/achiras-uno.png',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'4',
        name:'Biscochos',
        prince:'8000',
        category:'antojos',
        img:'./img/antojos/biscochos-dos.png',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'5',
        name:'Red wine',
        prince:'15000',
        category:'gustos',
        img:'./img/gustos/img1-proceso.png',
        stock: 1,
        description:'torta rica y dulce'
    },
    {
        id:'6',
        name:'yellowgpeanut',
        prince:'15000',
        category:'gustos',
        img:'./img/gustos/img2-proceso.png',
        stock: 1,
        description:'torta rica y dulce'
    },
]

export default asyncMock

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
            resolve(productId.find(prod => prod.id === productId))
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

