let cartDataList = document.getElementById("display-cart-data");

let data = JSON.parse(localStorage.getItem("cart-product")) || []


displayData(data);

function displayData(data) {
    data.forEach((element) => {
        let list = document.createElement("li");
        list.classList = "list-group-item d-flex justify-content-between lh-sm";

        let listdata = document.createElement("div");

        let productName = document.createElement("h6");
        productName.classList = "my-0";
        productName.textContent = element.name;

        let productPrice = document.createElement("span");
        productPrice.classList = "text-muted";
        productPrice.textContent = `₹ ${element.price}`;
        
        listdata.append(productName)
        list.append(listdata, productPrice);
        cartDataList.append(list);
    });
}
let sum = 0;

let totalCartValue = document.getElementById("total-cart-value");

for (let i = 0; i < data.length; i++) {
    sum += +data[i].price;
}

totalCartValue.textContent = `₹ ${sum}`;

let totalCartSize = document.getElementById("cart-size");

totalCartSize.textContent = data.length;