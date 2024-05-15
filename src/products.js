const products=[
    {
        name:"Siamese Hybrid Chicken",
        price:250,
        discount:20,
        image:"https://s3-alpha-sig.figma.com/img/d5be/3ccb/799ab5951f6bb10757a9aceb62b22853?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEUzMb-R5jLKqR0ft1sha5kQFq~BPvC0E4VaQ-6dWUHD7U7wYRqjNLjQrC4K3EW18HjWWxIguDDAYIhwrk-AO29JvlXlx8jo4NCjadL88YXv8bUi35a9qfZwKOmakPhFhiGzoXD6XxoYbScG7jvR5~93FBTsNjwi4BVegWthK8Y1ITQ3CLiztyb1LphH5ekyFKLhTOSdSgxvvGBz9FLYUb2ZqtRZWfOFSJT~YRndyOVrkCVJYUCbzXuQr8PwUjkHwKfbQnYlQO8XKAQtY2~CWPHNyGde-vjnrosdWovTgp72ZT25xjUhpzRMD2B9quIn~BKhkcOo7~yedYzM~GlYSA__",
        category:"meat",
        id:1
    },
    {
        name:"Vietnamese Turkey",
        price:250,
        discount:15,
        image:"https://s3-alpha-sig.figma.com/img/0b95/2049/31fdcab3e6da0741228e163778d50c8d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9CoCi~b3Gts11BBbnPkiJ6C4ZjglosG4DZiUvv52gpvhLP~X3Q2uAjFNk7OF9GA9A8zhZghWJDD9RJt0N~9ylfeqF7bCUHaB37TuCr9R1dQeKYwjq~A2UN6xrWCFZ2E~IUwXso668Bxad9L6H9jKVZ1CTuNWrLn647KXjnUOH4Q4T3Iz~vnesstzNagqWI1Q3cBRw2r0afOATYux4A9ermgEJrxcN9iDLXukakSupkj7qNW-XQ1psXBBaJYJIqtaTCSqbrUUqoREMsQRKbaO7R4kSMyvlataJmxvnBv4cylMveSBFT83Fc5M3Syab2fjjty5zu4~A5pn75tOM1CaQ__",
        category:"meat",
        id:2
    },
    {
        name:"Indian Chicken",
        price:250,
        discount:10,
        image:"https://img.freepik.com/free-photo/raw-chicken-meat_1203-6759.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715385600&semt=ais_user",
        category:"meat",
        id:3
    },
    {
        name:"Srilankan Chicken",
        price:250,
        discount:20,
        image:"https://i0.wp.com/www.freshmeat.lk/php_content/uploads/2020/06/whole_chicken.png?fit=500%2C333&ssl=1",
        category:"meat",
        id:4
    },
    {
        name:"Matta Rice",
        price:100,
        discount:20,
        image:"https://5.imimg.com/data5/XA/QO/MY-66816351/matta-rice.png",
        category:"rice",
        id:5
    },
    {
        name:"Kuruva Rice",
        price:150,
        discount:20,
        image:"https://rukminim2.flixcart.com/image/850/1000/ktuewsw0/rice/t/p/f/2-yellow-kerala-white-kuruva-rice-2-kg-polished-plain-rice-pouch-original-imag73w7fmc7tqsq.jpeg?q=90&crop=false",
        category:"rice",
        id:6
    },
    {
        name:"Black Tea",
        price:15,
        discount:5,
        image:"https://uphaartea.in/cdn/shop/articles/Difference_Between_Green_Tea_And_Normal_Tea.jpg?v=1694780883",
        category:"tea",
        id:7
    },
    {
        name:"Normal Tea",
        price:20,
        discount:5,
        image:"https://t4.ftcdn.net/jpg/04/00/52/13/360_F_400521390_uWn8KdMCXK9V5Gkp3dVGOAyKsqQok03V.jpg",
        category:"tea",
        id:8
    },
    {
        name:"Pepsi",
        price:50,
        discount:5,
        image:"https://t4.ftcdn.net/jpg/02/96/15/67/360_F_296156723_tw7WRQTa80yfT3B2LL1fcOKP9jtHRr4B.jpg",
        category:"drink",
        id:9
    },
    {
        name:"Coca Cola",
        price:50,
        discount:5,
        image:"https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-spiced/spiced-product-category-card.png",
        category:"drink",
        id:10
    },
    {
        name:"Apple",
        price:100,
        discount:5,
        image:"https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg",
        category:"fruits",
        id:11
    },
    {
        name:"Cherry",
        price:90,
        discount:5,
        image:"https://www.shutterstock.com/image-photo/cherry-isolated-on-white-background-260nw-1046992834.jpg",
        category:"fruits",
        id:12
    },
    {
        name:"Kiwi",
        price:190,
        discount:5,
        image:"https://s3-alpha-sig.figma.com/img/23fb/9d48/87bac1f7e7eacc7414730a703354c106?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OhAyTXzcVspI-Sfr7GQ7bLwsalzgsQXlektFpSWpr7aRnuIF6l5dqwoF8iuiZUSkBCM03Vv~yAdlmq~AZTjTPrv40tJkSHgXPltM1mpbJH3JlZVnTKAvnqMBp-s4xAfx6HeFL~ifAxmSlFACsKcK-n84t8soLuZkCFfR6jeBCU4YhhVccqNszCT8BrrMjtpgFfY0BPa2iAFnZv6eET1gNO2Qz5wozbTVq2JfxtDM1cD8P9RO8PStPhtS6DNV8fNV27cVyKynLP6jIqtQYOpBChmlbTwouEVyNFqiRpYm9z2Mo54M3npe29vAVNnqHpup1dhRHbKFtlSQz4etaOdPMw__",
        category:"fruits",
        id:13
    },
    {
        name:"Cabage",
        price:90,
        discount:5,
        image:"https://www.shutterstock.com/image-photo/cabbage-isolated-on-white-background-600nw-1556699831.jpg",
        category:"vegetables",
        id:14
    },
    {
        name:"Tomato",
        price:40,
        discount:5,
        image:"https://t4.ftcdn.net/jpg/03/27/96/23/360_F_327962332_6mb5jQLnTOjhYeXML7v45Hc5eED2GYOD.jpg",
        category:"vegetables",
        id:15
    },

]
export default products
