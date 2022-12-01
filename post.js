const Id=document.querySelector("#Id");
const Title=document.querySelector("#Title");
const Price=document.querySelector("#Price");
const Description=document.querySelector("#Description");
const Category=document.querySelector("#Category");
const Image=document.querySelector("#Image");
const Btn=document.querySelector("#btn");
const id=document.querySelector("#id");
const Delete=document.querySelector("#delete");
const container=document.querySelector("#container");
const category1=document.querySelector("#category");
const search=document.querySelector("#search");


const deleteData=async()=>{
    const response = await fetch(`http://localhost:3000/details/${id.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    GetData()
    return response.json()
}

container.style.display="grid"
container.style.gridTemplateColumns="repeat(4,1fr)"
container.style.border="2px solid black"
container.style.marginTop="10px"

const DisplayData = (result) => {
    container.innerHTML = ""
    result.map((item, index) => {
        container.innerHTML += `<div id="grid">
        <h2>${item.id}</h2>
        <h1>${item.title}</h1>
        <img src=${item.image} alt="">
        <p>${item.description}</p>
        <h2>${item.category}</h2>
        <button id="price">$${item.price}</button>
        <button id="price">${item.rating.rate}</button>
        </div>`
    })
    // console.log(data)
}



const GetData=async(Result)=>{
    const Response=await fetch("http://localhost:3000/details")
    Result=await Response.json()
    // console.log(Result)
    DisplayData(Result)
}
GetData()
const PostData=async ()=>{
    const data={id:Id.value,title:Title.value,price:Price.value,description:Description.value,category:Category.value,image:Image.value}
    const response = await fetch(`http://localhost:3000/details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    GetData()
    return response.json()
}
const searchData=async ()=>{
    const Response=await fetch("http://localhost:3000/details")
    Result=await Response.json()
    var arr=[]
    for (var key of Result){
        if(category1.value==key.category){
            console.log(key)
            arr.push(key)
        }
    }
    DisplayData(arr)
}

Btn.addEventListener('click',PostData)
Delete.addEventListener('click',deleteData)
search.addEventListener('click',searchData)



