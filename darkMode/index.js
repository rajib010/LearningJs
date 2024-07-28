const toggleBtn = document.querySelector("#toggleBtn");
const body = document.body;


toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','white')
    }
})

window.addEventListener("load",()=>{
    const theme= localStorage.getItem("theme");
    if(theme==="dark"){
        body.classList.add("dark-mode");
    }
})