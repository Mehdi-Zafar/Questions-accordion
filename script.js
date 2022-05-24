const button = document.querySelectorAll("button.plus");
const answer = document.querySelectorAll("div.answer");
const question = document.querySelectorAll("div.question");

button.forEach((el) =>{
    el.addEventListener("click",function(){
        const ans = answer[el.id - 1];
        const ques = question[el.id -1];
        if(ans.style.display === "block"){
            ans.style = "display:none";
            ques.style = "font-weight: light";
            button[el.id - 1].innerHTML = `+`;
        }else{
            answer.forEach((e) =>{
                e.style = "display:none";
            })
            question.forEach((e) =>{
                e.style = "font-weight: light;";
            })
            button.forEach((e)=>{
                e.innerHTML = `+`;
            })
            ans.style = "display:block";  
            ques.style = "font-weight: 900";  
            button[el.id - 1].innerHTML = `-`;
        }
    })
})