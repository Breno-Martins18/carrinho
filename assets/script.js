
let itensJason = [
    {id: 1, item: "boné", img: "img/boné.png", price: 22.33, quantity: 1},
    {id: 2, item: "calça", img: "img/calça.png", price: 88.99, quantity: 1},
    {id: 3, item: "camisa", img: "img/camisa.png", price: 66, quantity: 1},
    {id: 4, item: "sapato", img: "img/sapato.png", price: 244.99, quantity: 1}
]


const c = (el) => document.querySelector(el)
let cart = [];  

itensJason.map((item, index) => {
    let itensShop = c('.shop').cloneNode(true);

    itensShop.setAttribute('data-key', index);

    itensShop.querySelector('.shop-img').style.backgroundImage = `url('${item.img}')`;
    itensShop.querySelector('.item-name').innerText = item.item;
    itensShop.querySelector('.item-price').innerText = `R$ ${item.price.toFixed(2)}`;

    

    // FUNÇÃO PARA O BOTÃO ADICIONAR
    itensShop.querySelector('.btnAdd').addEventListener('click', () => {
        //cart.push(item);
        let existente = cart.find(p => p.id === item.id);

        if (existente) {
            existente.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        updatecart();
    });
    
    c('.compra').append(itensShop);
})
c('.shop').remove();

function updatecart() {

    //car.innerHTML = cart.map(i => i.item).join(', ');
    let areaCarrinho = c('.item-car');
    areaCarrinho.innerHTML = '';
    
    
    let total = 0;
    
    for(let produto of cart) {
        total += produto.price * produto.quantity;

        areaCarrinho.innerHTML += `
            <div class="shop-item-car" style="display:flex">
                <div
                    class="shop-img-car" style="background-image:url('${produto.img}')">
                </div>

                <span>${produto.item}</span>

                <div class="adicionar">
                    <span>${produto.quantity}</span>
                </div>
            </div>

        `;
        
        c('#total-price').innerText = `${total.toFixed(2)}`
    };

}