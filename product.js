const url = 'https://course-api.com/javascript-store-single-product';
const elProduct = document.querySelector('.product-wrapper');
const loading = document.querySelector('.loading');

const fecthData = async function () {
    loading.innerHTML = '<div class="circle"></div>';
    try {
        const params = new URLSearchParams(window.location.search);
        const id =params.get('id'); 
        console.log(id);
        const data = await fetch(`${url}?id=${id}`).then(res => res.json());
        loading.innerHTML = '';
        return data;

    } catch (error) {

    }
}
function renderProduct(product) {
    console.log(product);
    const { id } = product;
    const { name: title, price,company,description } = product.fields;
    const { url: img } = product.fields.image[0];
    const formatPrice = price / 100;
    const productList = `
            <div class="img">
            <img src="${img}"
                alt="high-back bench">
            </div>
            <div class="product-info">
                <h3>${title}</h3>
                <h5>${company}</h5>
                <span>9.99</span>
                <div class="colors">
                    <span class="product-color" style="background: #f15025"></span>
                    <span class="product-color"
                        style="background: #222"></span>

                </div>
                <p>
                    ${description}
                </p>
                <button class="btn">add to cart</button>
            </div>
        `;
    
    
    elProduct.innerHTML = productList;

}
const form = document.querySelector('.input-form')
const start = async () => {
    const data = await fecthData();
    renderProduct(data);
}

start();