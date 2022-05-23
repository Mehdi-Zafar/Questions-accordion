

const button = document.querySelectorAll("button.plus");
const answer = document.querySelectorAll("div.answer");

button.forEach((el) =>{
    el.addEventListener("click",function(){
        const ans = answer[el.id - 1];
        if(ans.style.display === "block"){
            ans.style = "display:none";
        }else{
            ans.style = "display:block";
        }
    })
})