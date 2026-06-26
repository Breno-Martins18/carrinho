const c = (el) => document.querySelector(el);
let car = [];
let lista = c('.lista');

c('.btnAdd').addEventListener('click', () => {
    let item = c('#item').value;
    let preco = c('#preco').value;

    let li = document.createElement('li');
    li.textContent = `${item} - R$ ${preco}`;
    lista.appendChild(li);
    c('#item').value = '';
    c('#preco').value = '';
    let teste = car.push({ item, preco });
    console.log(teste);
})