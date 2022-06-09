//lets take a hole over html attribute
const dog_btn=document.getElementById("dog_btn")
const dog_result=document.getElementById("dog_result")



dog_btn.addEventListener("click",async function(){
    try {
        const res=await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        dog_result.innerHTML=`<img src="${data.message}" alt="dog">`
    } catch (error) {
        console.log(error)
    }
})