let product = JSON.parse(localStorage.getItem("product"));

let imgBody = document.getElementById("img-section");

let descBody = document.getElementById("des-section");

let body = document.getElementById("showcase");

let tab = document.getElementById("display");

let Eligible = document.getElementById("prod-p");

let addBtn = document.getElementById("addtocart");

let pincode = document.getElementById("pincode")

let checkbtn = document.getElementById("check")





window.addEventListener("load", () => {
    display();

})

console.log(product)




function display() {
    imgBody.innerHTML =
        `
<img src=${product.avatar || product.image} alt="" id="image">
`;

    descBody.innerHTML =
        `


                <div id="name-section">
                    <h4>${product.brand}</h4>
                    <h5>${product.name}</h5>
                    <p>${product.rating} <span class="fa fa-star checked"></span></p>
                </div>



                <div id="pricing-section">
                    <h3>	&#8377 ${product.price}</h3>
                    <p style="color:green; font-weight:bold;">includes of all taxes</p>
                    

                    <div id="btns">
                        <button id="addtocart">ADD TO CART</button>
                        <button id="wishlist">WISHLIST</button>
                    </div>
                </div>

                <div id="desc-section">
                    <p>DELIVERY OPTIONS <i class="fa fa-truck"></i> </p>
                    <input type="number" placeholder="Enter pincode"  id="pincode"><button id="check" >Check</button>
                    <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    <p></p>
                    <li>100% Original Products</li>
                    <li>Pay on delivery might be available</li>
                    <li>Easy 14 days returns and exchanges</li>
                    <li>Try & Buy might be available</li>
                    
                    <p style="font-weight: bold; margin-bottom: 20px;">BEST OFFERS</p>
                    <p>Best Price: &#8377 ${product.price - 300}</p>

                    <li>Applicable on: Orders above Rs. 1699 (only on first purchase)</li>
                    <li>Coupon code: FASHMART300</li>
                    <li>Coupon Discount: Rs. 300 off (check cart for final savings)
                    </li>


                    <p style="color: red; font-weight: bold;" id="prod-p">View Eligible Products</p>


                </div>

                <div id="prod-section">
                    <h4>PRODUCT DETAILS </h4>

                    <div>
                        <li>Mustard yellow Tshirt for men</li>
                        <li>Solid self design</li>
                        <li>Regular length</li>
                        <li>Henley neck
                        </li>
                        <li>Long, regular sleeves
                        </li>
                        <li>Knitted cotton fabric
                        </li>
                        <li>Button closure

                        </li>
                    </div>
                    <div id="size-section">
                        <h4>Size & Fit</h4>
                        <li>Slim Fit
                        </li>
                        <li>The model (height 6') is wearing a size M

                        </li>
                    </div>
                    <div id="material-section">
                        <h4>Material & Care
                        </h4>
                        <li>100% Cotton
                        </li>
                        <li>Machine Wash

                        </li>
                    </div>



                </div>


            
`;

    tab.innerText = `Home / ${product.category} / ${product.category} Clothes / ${product.name}`

    // addBtn.addEventListener("click", () => {
    //     alert("fjedbf")
    // })


}