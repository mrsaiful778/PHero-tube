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

    data.data.forEach((news) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src=${news?.thumbnail} /></figure>
        <div class="card-body">
          <h2 class="card-title">
            <div>
                <div class="avatar online">
                  <div class="w-14 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
                  </div>
                </div>
              </div>
            ${news?.title}
        
          </h2>
          <p>Awlad hossain</p>
          <p>91k view</p>
        </div>
      </div>



        `;
        cardContainer.appendChild(div);


    });



    console.log(data.data);

};


handleCatagory();