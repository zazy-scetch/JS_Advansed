class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
        this._totalCost();
    }

    _fetchData() {
        this.data = [
            {title: 'Notebook', id: 1, price: 2000},
            {title: 'Keyboard', id: 2, price: 200},
            {title: 'Mouse', id: 3, price: 100},
            {title: 'Gamepad', id: 4, price: 87}
        ];
    }

    _render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }

    _totalCost() {
        let result = 0;
        for (let item of this.products) {
            result += item.price;
        }
        return console.log(`Общая стоимость товаров: ${result}р.`);
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x100') {
        ({title: this.title, price: this.price, id: this.id} = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <div class="desc">
                     <img src="${this.img}" alt="${this.title}">
                     <h3>${this.title}</h3>
                     <p>${this.price}р.</p>
                     <div class="btn-cart mt-10">Купить</div>
                 </div>
             </div>`
    }
}


class Cart {
    // id - номер корзины Number
    // products - список продуктов корзины Object

    // totalQuantity() - метод считает общее количество элементов в корзине
    // totalCost() - метод считает общую стоимость корзины
}

class CartItem {
    // title - наименование товара String
    // quantity - количество Number
    // price - стоимость Number

    // totalCost() - метод считает общую стоимость товара в корзине
}

const list = new Products('.products');
