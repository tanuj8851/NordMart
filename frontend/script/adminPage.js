let tbody=document.querySelector("table");
let men=document.getElementById("men");
let women=document.getElementById("women");
let kid=document.getElementById("kid");
let divbox=document.createElement("divbox")

men.addEventListener("click",()=>{
    fetchData("https://63c7a5645c0760f69abb1675.mockapi.io/MensFashion")
})

women.addEventListener("click",()=>{
    fetchData("https://63f4878855677ef68bbdf624.mockapi.io/women")
})
kid.addEventListener("click",()=>{
    fetchData("https://carters-com-data-base.onrender.com/baby-girl")
})
fetchData("https://63c7a5645c0760f69abb1675.mockapi.io/MensFashion")

function fetchData(data){
    tbody.innerHTML=""
    fetch(data)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res)
        displayData(res)
    })
}
function displayData(data){
    tbody.innerHTML=null;
    data.forEach((element) => {

        let tr=document.createElement("tr");
        
        let name=document.createElement("td");
        name.innerText=element.name;
        let desc=document.createElement("td");
        desc.innerText=element.description?element.description.substr(0,20):"Description is not available"
        let brand=document.createElement("td");
        brand.innerText=element.brand;
        let rupees=document.createElement("td");
        rupees.innerText=element.price
        let rating=document.createElement("td");
        rating.innerText=element.rating;

        tr.append(name,desc,brand,rupees,rating)
        divbox.append(tr)
        tbody.append(tr)

    });
}