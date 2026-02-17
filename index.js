




// category loader
const ProductBtnClick = () => {
  // Disables hero section + enables category section:

  const HeroSectionHolder = document.getElementById("Herosection");

  const CategorySectionHolder = document.getElementById("CategoriesSection");

  const TrendingNowHolder = document.getElementById("TrendingNowSection");



  HeroSectionHolder.classList.add("hidden");
  TrendingNowHolder.classList.add("hidden");
  CategorySectionHolder.classList.remove("hidden");
  

  // loads category

  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => CategoryShower(data));
};

// category types  shower

const CategoryShower = (cat) => {
  const categories = document.getElementById("categories-div");

  categories.innerHTML = "";

  categories.innerHTML = `
   <button onclick="AllCategoryLoader()"  type="submit" class="btn">All</button>
  `;

  cat.forEach((element) => {
    const btndiv = document.createElement("div");

    btndiv.innerHTML = `
    
    <button
    type="button"
    class="btn"
    data-cat="${encodeURIComponent(element)}"
    onclick="PerCategoryLoader(this.dataset.cat)">
    ${element}
    </button>
    
    
    
    `;

     

    categories.append(btndiv);


   
  });
};


const loadTrending = () => {


  const trending = document.getElementById("trendingNow")

  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data =>make3Trending(data))

  



}

const make3Trending = (data) => {


const trendingItems = data.slice(0, 3);

console.log(trendingItems)


const trendingdiv = document.getElementById("trendingNow")

  trendingItems.forEach((d) => {
    const Trendingcards = document.createElement("div");

    Trendingcards.innerHTML = `
    
    
    <div class="card bg-gray-50 w-80 h-[440px] shadow-sm overflow-hidden">
  <figure class="w-full h-52 bg-gray-400 p-3">
  <img src="${d.image}" class="w-full h-full object-contain" />
</figure>


  <div class="card-body text-left flex flex-col h-[calc(440px-13rem)]">
    <!-- top row -->
    <div class="flex justify-between w-full gap-2">
      <div class="p-1 bg-gray-300 rounded-lg font-semibold text-cyan-700 max-w-[55%] truncate">
        <h1 class="truncate">${d.category}</h1>
      </div>

      <div class="p-1 bg-gray-300 rounded-lg flex gap-2 items-center shrink-0">
        <i class="fa-solid fa-star text-yellow-400"></i>
        <p class="text-sm">${d.rating.rate} (${d.rating.count})</p>
      </div>
    </div>

    <!-- title (fixed height + truncate) -->
    <h2 class="card-title text-xl text-gray-500 line-clamp-2 min-h-[3.5rem]">
      ${d.title}
    </h2>

    <!-- price -->
    <h2 class="text-xl text-gray-500">$${d.price}</h2>

    <!-- actions pinned to bottom -->
    <div class="card-actions w-full flex justify-between mt-auto">
      <button Onclick="LoadIndividualProductId(${d.id})" class="btn">
        <i class="fa-regular fa-eye"></i> Details
      </button>
      <button class="btn btn-primary">
        <i class="fa-solid fa-cart-shopping mr-2"></i> Add
      </button>
    </div>
  </div>
</div>

    
    
    
    
    `;

  trendingdiv.append(Trendingcards);
  
});




}




loadTrending()









const HomeBtnClick = () => {
  const HeroSectionHolder = document.getElementById("Herosection");

  const CategorySectionHolder = document.getElementById("CategoriesSection");

   const TrendingNowHolder = document.getElementById("TrendingNowSection");


  HeroSectionHolder.classList.remove("hidden");
  TrendingNowHolder.classList.remove("hidden");
  CategorySectionHolder.classList.add("hidden");
};

// All categories loader

const AllCategoryLoader = () => {
  console.log("All category loader clicked");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => AllCategoryShower(data));
};

const AllCategoryShower = (data) => {
  const cardsdiv = document.getElementById("cardShower");

  cardsdiv.innerHTML = "";

  data.forEach((d) => {
    const cards = document.createElement("div");

    cards.innerHTML = `
    
    
    <div class="card bg-gray-50 w-80 h-[440px] shadow-sm overflow-hidden">
  <figure class="w-full h-52 bg-gray-400 p-3">
  <img src="${d.image}" class="w-full h-full object-contain" />
</figure>


  <div class="card-body text-left flex flex-col h-[calc(440px-13rem)]">
    <!-- top row -->
    <div class="flex justify-between w-full gap-2">
      <div class="p-1 bg-gray-300 rounded-lg font-semibold text-cyan-700 max-w-[55%] truncate">
        <h1 class="truncate">${d.category}</h1>
      </div>

      <div class="p-1 bg-gray-300 rounded-lg flex gap-2 items-center shrink-0">
        <i class="fa-solid fa-star text-yellow-400"></i>
        <p class="text-sm">${d.rating.rate} (${d.rating.count})</p>
      </div>
    </div>

    <!-- title (fixed height + truncate) -->
    <h2 class="card-title text-xl text-gray-500 line-clamp-2 min-h-[3.5rem]">
      ${d.title}
    </h2>

    <!-- price -->
    <h2 class="text-xl text-gray-500">$${d.price}</h2>

    <!-- actions pinned to bottom -->
    <div class="card-actions w-full flex justify-between mt-auto">
      <button Onclick="LoadIndividualProductId(${d.id})" class="btn">
        <i class="fa-regular fa-eye"></i> Details
      </button>
      <button class="btn btn-primary">
        <i class="fa-solid fa-cart-shopping mr-2"></i> Add
      </button>
    </div>
  </div>
</div>

    
    
    
    
    `;

    cardsdiv.append(cards);
  });
};

// load cards according to their categories

const PerCategoryLoader = (data) => {

  const category = decodeURIComponent(data);
  
  const url = `https://fakestoreapi.com/products/category/${category}`;



  fetch(url)
    .then((res) => res.json())
    .then((data) => AllCategoryShower(data));
};



const LoadIndividualProductId = (id) => {



const url = `https://fakestoreapi.com/products/${id}`;

fetch(url)
.then(res => res.json())
.then(data => ShowIndividualProduct(data))


}



const ShowIndividualProduct = (d) => {


const indiePDiv = document.getElementById("modalContainer")

indiePDiv.innerHTML = ""


  const pdiv = document.createElement("div");

  pdiv.innerHTML = `
  
  
          <dialog id="my_modal_5"  class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="text-lg font-bold">${d.title}</h3>
            <p class="py-4">${d.description}</p>

            <div class="flex justify-between my-2">

              <h2 class="text-xl text-gray-500">$${d.price}</h2>

            <div
              class="p-1 bg-gray-300 rounded-lg flex gap-2 items-center shrink-0"
            >
              <i class="fa-solid fa-star text-yellow-400"></i>
              <p class="text-sm">${d.rating.rate} (${d.rating.count})</p>
            </div>

            </div>
            

            <div class="flex justify-between w-full">
              <form method="dialog" class="w-full flex gap-2 justify-between">
                <!-- if there is a button in form, it will close the modal -->
             
                <button class="btn btn-primary">
                  <i class="fa-solid fa-cart-shopping mr-2"></i> Add
                </button>
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
  
  
  
  
  
  
  `

  indiePDiv.append(pdiv);

  document.getElementById("my_modal_5").showModal();



}






















// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
