let nav = document.querySelector(".navbar-nav")
let links= nav?.querySelectorAll(".nav-item")
links?.forEach((item,ind)=>{
  item.addEventListener("click",()=>{
    // let current = document.querySelector(".active")
    console.log(item);

    // current?.classList.remove("active")
    // item.classList.add("active")
  })
})
