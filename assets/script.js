
let itensJason = [
    {id: 1, item: "boné", img: "img/boné.png", price: 22.33},
    {id: 2, item: "calça", img: "img/calça.png", price: 88.99},
    {id: 3, item: "camisa", img: "img/camisa.png", price: 66},
    {id: 4, item: "sapato", img: "img/sapato.png", price: 244.99}
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
        cart.push(item);
        c('.item-car').innerHTML = cart.map(i => i.item).join(', ');
    });





    
    c('.compra').append(itensShop);
})
c('.shop').remove();
