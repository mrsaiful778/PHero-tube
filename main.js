function switchToBlogsContent() {
  window.location.href = "blog.html";
}

const handleCatagory = async () => {


    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const catagoryContainer = document.getElementById('cetagory_container');

    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="handleLoadNews('${category?.category_id}')"
         class="btn  bg-[#FF1F3D]">${category?.category}</button>
        `;
        catagoryContainer.appendChild(div);
        // console.log(data.data[0].category_id);
    });

};
const handleLoadNews = async (cetagoryID) => {
    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${cetagoryID}`);
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    data.data.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure><img class="h-48" src=${news?.thumbnail} />
        
        </figure>
        <p class="text-amber-600 relative -mt-10 mr-8 text-end text-base">${news.others?.posted_date}</p>
        <div class="card-body">
          <h2 class="card-title">
            <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full">
                    <img
                      src=${news.authors?.[0].profile_picture}
                    />
                  </div>
                </div>
              </div>
            ${news?.title}
        
          </h2>
          <p>${news.authors?.[0].profile_name} <i class="fa-solid fa-badge-check"></i></p>
          <p>views: ${news.others?.views}</p>
        </div>
      </div>



        `;
        cardContainer.appendChild(div);


    });



    console.log(data.data);

};


handleCatagory();
handleLoadNews ("data");