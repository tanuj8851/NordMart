let productCount = document.getElementById("product-count");

let cardContainer = document.getElementById("product-card-container");

let filterByPrice = document.getElementById("sortby")

let searchByBrand = document.querySelector(".brands>form");

let searchByProduct = document.getElementById("inp");

let card = document.getElementsByClassName("card");



displayProduct();

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    displayProduct(1);
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    displayProduct(2);
})

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
    displayProduct(3);
})
let btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
    displayProduct(4);
})
let btn5 = document.getElementById("btn5");
btn5.addEventListener("click", () => {
    displayProduct(5);
})
let btn6 = document.getElementById("btn6");
btn6.addEventListener("click", () => {
    displayProduct(6);
})
let btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    displayProduct(7);
})
let btn8 = document.getElementById("btn8");
btn8.addEventListener("click", () => {
    displayProduct(8);
})


function displayProduct(pageNumber = 1) {
    let API = new URL('https://63f4878855677ef68bbdf624.mockapi.io/women');
    API.searchParams.append('completed', false);
    API.searchParams.append('page', pageNumber);
    API.searchParams.append('limit', 9);



    fetch(API, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((data) => {
            // console.log(data);
            displayData(data);
            productCount.textContent = data.length + " items";

            searchByBrand.addEventListener("submit", (e) => {
                e.preventDefault();
                let searchParams = searchByBrand.brandSearch.value;

                let searchedData = data.filter((ele) => {
                    if (ele.brand.toUpperCase().includes(searchParams.toUpperCase()) == true) {
                        return true;
                    } else {
                        return false;
                    }
                });
                productCount.textContent = searchedData.length + " items";
                displayData(searchedData);
            })

            filterByPrice.addEventListener("change", () => {
                if (filterByPrice.value == "asc") {
                    sortedData = data.sort((a, b) => {
                        return a.price - b.price;
                    })
                    displayData(sortedData);
                } else if (filterByPrice.value == "desc") {
                    sortedData = data.sort((a, b) => {
                        return b.price - a.price;
                    })
                    displayData(sortedData);
                }
            })

            searchByProduct.addEventListener("keypress", (e) => {
                let searchParams = searchByProduct.value;
                if (e.key === "Enter") {
                    e.preventDefault();
                    let searchedData = data.filter((ele) => {
                        if (ele.brand.toUpperCase().includes(searchParams.toUpperCase()) == true || ele.name.toUpperCase().includes(searchParams.toUpperCase()) == true || ele.category.toUpperCase().includes(searchParams.toUpperCase()) == true) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                    productCount.textContent = searchedData.length + " items";
                    displayData(searchedData);
                }
            })
        })
        .catch((error) => {
            console.log(error);
        })

}






let cartProduct = JSON.parse(localStorage.getItem("cart-product")) || [];


function displayData(data) {

    cardContainer.innerHTML = null;

    data.forEach((element) => {
        let card = document.createElement("div");
        card.classList = "card";



        let cardImageContainer = document.createElement("div");
        cardImageContainer.style.width = "150px";
        cardImageContainer.style.height = "300px";
        cardImageContainer.style.display = "flex";
        cardImageContainer.style.margin = "auto";

        let productImage = document.createElement("img");
        productImage.src = element.avatar;
        productImage.src = element.avatar;
        productImage.style.width = "100%";
        productImage.style.height = "100%";

        productImage.addEventListener("click", () => {
            localStorage.setItem("product", JSON.stringify(element));
            window.open("prodDescription.html")
        })


        let productName = document.createElement("p");
        productName.textContent = "Name: " + element.name;

        let brandName = document.createElement("p");
        brandName.textContent = "Brand: " + element.brand;

        let category = document.createElement("p");
        category.textContent = "Category: " + element.category;

        let rating = document.createElement("p");
        rating.textContent = "Rating: " + element.rating

        let price = document.createElement("p");
        price.textContent = `Price: ${element.price} ₹`;

        let buttonContainer = document.createElement("div");
        buttonContainer.classList = "order-btn";

        let addToCart = document.createElement("button");
        addToCart.textContent = "Add to Cart";
        addToCart.classList = "add-to-cart";

        addToCart.addEventListener("click", () => {
            if (checkDuplicate(element)) {
                alert("Item already in cart");
            } else {
                cartProduct.push(element);
                localStorage.setItem("cart-product", JSON.stringify(cartProduct));
                addToCart.textContent = "Added to Cart";
                alert("Item Added to Cart");
            }
        });

        let buyNow = document.createElement("button");
        buyNow.textContent = "Buy Now";
        buyNow.classList = "buy-now";



        buttonContainer.append(addToCart, buyNow)
        cardImageContainer.append(productImage);
        card.append(cardImageContainer, productName, brandName, category, rating, price, buttonContainer);
        cardContainer.append(card);
    });


}





function checkDuplicate(element) {
    for (let i = 0; i < cartProduct.length; i++) {
        if (cartProduct[i].id == element.id) {
            return true;
        }
    }
    return false;
}