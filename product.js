const loading = document.getElementById("loading");
const container = document.getElementById("container");
const cartCount = document.getElementById("cartCount");
const cart_items = [];

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let skip = 0;
const limit = 30;

// container.style.display = "block";
function loadProducts() {
    const product = fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);

    product.then((res)=>{
        return res.json();
  }).then((arr)=>{
    
    container.innerHTML = "";

    const pro = arr.products;
    console.log(pro);

    for(let i = 0; i < pro.length; i++){


   console.log(pro[i]);

   // container.style.display = "flex";


   const div = document.createElement("div");
   div.classList.add("card");
   
   const img = document.createElement("img");
   img.src = pro[i].images[0];
   img.classList.add("img");
   img.addEventListener("mouseover",()=> {
      img.src = pro[i].images[1] ? pro[i].images[1] : pro[i].images[0];
   });

   img.addEventListener("mouseleave", () => {
    img.src = pro[i].images[0];
   });

   const title = document.createElement("h2");
   title.innerHTML = pro[i].title;
   title.classList.add("title");

   const brand = document.createElement("h3");
   brand.innerHTML = pro[i].brand;
   if(pro[i].brand== undefined){
      brand.innerHTML =  pro[i].title;
   }
   brand.classList.add("brand");
  
//    const desc = document.createElement("p");
//    desc.innerHTML = pro[i].description.slice(0,100);
  
   const pr = document.createElement("p");

   const disPrice = pro[i].price * (1 - pro[i].discountPercentage / 100);
   const price = document.createElement("h3");
   price.innerHTML="<b><s>$" + pro[i].price + "</s>  $" + disPrice.toFixed(2) + "</b>";
   price.classList.add("price");

   const rating = document.createElement("h3");
   rating.innerHTML=pro[i].rating + ' ' + '<i class="fa-solid fa-star"></i>';
   rating.classList.add("rating");
   
   const buttons = document.createElement("div");
   buttons.classList.add('buttons')
   
   const btn = document.createElement("button");
   btn.innerHTML = "Add to Cart " + " " + " " +'<i class="fa-solid fa-cart-shopping"></i>';
   btn.classList.add("btn");

   const qtyWrapper = document.createElement("div");
   qtyWrapper.classList.add("qtyWrapper");

   const dec = document.createElement('span');
   dec.innerHTML = '-';
   dec.classList.add("dec");

   const qty = document.createElement('span');
   qty.innerHTML = '1';
   qty.classList.add("qty");

   const inc = document.createElement('span');
   inc.innerHTML = '+';
   inc.classList.add("inc");

   qtyWrapper.appendChild(dec);
   qtyWrapper.appendChild(qty);
   qtyWrapper.appendChild(inc);

   qtyWrapper.style.display = "none";
   buttons.appendChild(qtyWrapper);

   btn.addEventListener("click",function(){
      cart_items.push(
         {
            ...pro[i],qty:1         
         }
      );
      qty.innerHTML = 1;
      btn.style.display = "none";
      qtyWrapper.style.display = "flex";
      cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
    
    })

    inc.addEventListener("click",() => {
      qty.innerHTML = Number(qty.innerHTML) + 1;
    })

    dec.addEventListener("click",() =>{
      qty.innerHTML = Number(qty.innerHTML) - 1;
         if(qty.innerHTML == 0){
             qtyWrapper.style.display = "none";
             btn.style.display = "";
             cartCount.innerHTML = Number(cartCount.innerHTML) - 1;
      }

    })



   const btn2 = document.createElement("button");
   btn2.innerHTML = "Buy Now" + " " + " " + '<i class="fa-solid fa-bag-shopping"></i>' ;
   btn2.classList.add("btn2");
   
   pr.appendChild(price);
   pr.appendChild(rating);
   pr.classList.add("pr");

   buttons.appendChild(btn); 
   buttons.appendChild(btn2);

   div.appendChild(img);
   div.appendChild(brand);
   div.appendChild(title);
//    div.appendChild(desc);
   div.appendChild(pr);
   div.appendChild(buttons);
   // div.appendChild(btn2)
   
   
   container.appendChild(div);
 
   } 
     loading.style.display = "none";
   //   container.style.display = "grid";

   // next.addEventListener("click",()=>{
   //    skip += 30;
      
   // })
}).catch((err)=>{
    console.log(err);
});
}


// Load first 30 products
loadProducts();


// NEXT
next.addEventListener("click",()=>{

    skip += 30;

    loadProducts();

});


// PREVIOUS
prev.addEventListener("click",()=>{

    if(skip > 0){

        skip -= 30;

        loadProducts();

    }
});
