document.getElementById("search-btn").addEventListener("click", () => {
    const val = document.getElementById("search-bar").value.trim().toLowerCase();
    matching_display_food(val);
    const productcontainer = document.getElementById("food-list");
    productcontainer.innerHTML = ''; // Clear previous results
});

const matching_display_food = (food_name) => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(products => {
            console.log(products);
            displayproductdata(products.categories, food_name); // Pass the categories array
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};

const displayproductdata = (categories, food_name) => {
    const productcontainer = document.getElementById("food-list");
    let flag = true;

    categories.forEach(category => {
        const store_food = category.strCategory.toLowerCase();
        if (store_food.includes(food_name)) {
            const div = document.createElement("div");
            div.classList.add("product-box");
            div.innerHTML = `
                <img class="product-img" src="${category.strCategoryThumb}" alt="${category.strCategory}">
                <h4 class="product-name">${category.strCategory}</h4>
             
                <p>${category.strCategoryDescription.slice(0, 40)}...</p>
            `;
            productcontainer.appendChild(div);
            flag = false;
        }
    });

    if (flag) {
        const div = document.createElement("div");
        div.innerHTML = `<p class="not-founded">This ${food_name} name is not found</p>`;
        productcontainer.appendChild(div);
    } else {
        const allproductdisplay = document.getElementsByClassName("product-box");
        for (const element of allproductdisplay) {
            element.addEventListener("click", () => {
              
                displaydetailsproduct(element);
            });
        }
    }
};

const displaydetailsproduct = (element) => {
    
          
            const values = Array.from(element.querySelectorAll('*'))
            .map(el => el.textContent.trim())
            .filter(val => val); // Remove empty strings

        // Populate the modal with all values
        const modalBody = document.getElementById("modal-body-content");
        modalBody.innerHTML = `
            <ul>
                ${values.map(value => `<li>${value}</li>`).join('')}
            </ul>
        `;

        // Show the modal
        const detailsModal = new bootstrap.Modal(document.getElementById("detailsModal"));
        detailsModal.show();

        
      
};
