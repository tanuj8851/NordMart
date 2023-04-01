let cart_pro=JSON.parse(localStorage.getItem("cart-product")) || []

    let container=document.getElementById("product")
    const url=`https://carters-com-data-base.onrender.com/baby-girl`
    fetch(url)

    .then((res)=>{
        return res.json()
    })
    .then((actualData)=>{
        cloths(actualData)
    })
    .catch((err)=>{
        console.log(err)
    })

    function cloths(data){
        container.innerHTML=null;
        data.forEach((element)=>{

            let box=document.createElement("div")

            let image=document.createElement("img")
            image.setAttribute("src",element.image)

            let name=document.createElement("h2")
            name.innerText=element.name

            let cate=document.createElement("p")
            cate.innerText=element.ProdCategory

            let brand=document.createElement("p")
            brand.innerText=element.brand

            let price=document.createElement("h3")
            price.innerText=`$${element.price}`;

            let buy=document.createElement("button")
            buy.innerText="Add To Cart"

            buy.onclick=function(){
                addTocart(element)
            };

            let cart=document.createElement("button")
            cart.innerText="Buy Now"

            cart.onclick=function(){
                toCart(element)
            };

            box.append(image,name,cate,brand,price,buy,cart)
            container.append(box)
        })
    }


    function addTocart(pro){
        cart_pro.push(pro)
        localStorage.setItem("cart-product",JSON.stringify(cart_pro))
    
        alert("Added to cart")
    }

    function toCart(pro){
        cart_pro.push(pro)
        localStorage.setItem("cart-product",JSON.stringify(cart_pro))
    
        alert("Thank You!")
    }
