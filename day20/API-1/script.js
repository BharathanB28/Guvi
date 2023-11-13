const loadStoreAPI = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const createProductElement = (product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imgElement = document.createElement("img");
    imgElement.src = product.image;
    imgElement.alt = product.title;

    const titleElement = document.createElement("h2");
    titleElement.textContent = product.title;

    const categoryElement = document.createElement("p");
    categoryElement.textContent = product.category;

    const priceElement = document.createElement("p");
    priceElement.textContent = `$${product.price.toFixed(2)}`; // Format price

    productElement.appendChild(imgElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(categoryElement);
    productElement.appendChild(priceElement);

    return productElement;
};

const displayProducts = (products) => {
    const container = document.getElementById("products");
    container.innerHTML = ""; // Clear existing content

    products.forEach(product => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
    });
};

loadStoreAPI();
