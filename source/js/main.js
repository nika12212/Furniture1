

const loadMoreBtns=document.querySelectorAll(".shopall a")

const click1=document.getElementById("e4")
const click2=document.getElementById("e8")




  
loadMoreBtns.forEach((btn) =>
    {
        btn.addEventListener("click", (e)=>
        {
       e.preventDefault()
       const target=e.target;

       const parent=e.target.closest("section")
       let count=target.getAttribute("data-count")
    
       loadMore(count ,parent ,target)
        
       
    }
)
  })


    function loadMore(count,parentElement,targetElem)
    {   
       const products=parentElement.querySelectorAll("ul li.is-hidden")
       const showItems=Array.from(products).slice(0, count);
       showItems.forEach((item) =>
       {
           item.classList.remove("is-hidden")
       });
       const hiddenItems=parentElement.querySelectorAll("ul li.is-hidden")
       if(hiddenItems.length == 0)
       {
        targetElem.parentElement.classList.add("is-hide");
       }
       else{

       }
    }

    
    loadMore(4,document.querySelector("section.our-products"));
    loadMore(8,document.querySelector("section.product_list"));
