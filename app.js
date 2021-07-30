let hero_slide = document.querySelector("#hero-slide")

let hero_slide_items = document.querySelectorAll(".slide")

let hero_slide_index = 0 

let hero_slide_play = true;
let hero_slide_control_item = hero_slide.querySelectorAll('.slide-control-item')
let slide_next = hero_slide.querySelector('.slide-next')
let slide_prev = hero_slide.querySelector('.slide-prev')
let header = document.querySelector('.header')
let products = [
    {
        name: 'xtrada hardtail',
        image1: './img/6489548.png',
        old_price: '$3,900.00',
    },
    {
        name: 'polygon cascade',
        image1: './img/Polygon Cascade.png',
        old_price: '$3,900.00',
    },
    {
        name: 'noro youth bicycle',
        image1: './img/b1.png',
        old_price: '$3,900.00',
    },
    {
        name: 'mt bromo n7',
        image1: './img/MTBROMO_N7_2022.png',
        old_price: '$3,900.00',
    },
    {
        name: 'haibike xduro rx',
        image1: './img/b2.png',
        old_price: '$3,900.00',
    },
    {
        name: 'polygon siskiu',
        image1: './img/531352.png',
        old_price: '$3,900.00',
    },
    {
        name: 'norco youth bicycle',
        image1: './img/b2.png',
        old_price: '$3,900.00',
    },
    {
        name: 'xtra hardtail',
        image1: './img/6489548.png',
        old_price: '$3,900.00',
    },
]
showSlide = (index)=>{
    hero_slide.querySelector('.slide.active').classList.remove('active')
    hero_slide.querySelector('.slide-control-item.active').classList.remove('active')
    hero_slide_items[index].classList.add('active')
    hero_slide_control_item[index].classList.add('active')
}

nextSlide = ()=>{
    hero_slide_index = hero_slide_index+1 === hero_slide_items.length ? 0 : hero_slide_index+1;
    showSlide(hero_slide_index);
}
prevSlide = ()=>{
    hero_slide_index = hero_slide_index-1 < 0 ? 2 : hero_slide_index-1;
    showSlide(hero_slide_index);
}

setTimeout(()=>{
    hero_slide_items[0].classList.add('active')
    hero_slide_control_item[0].classList.add('active')
},200)


slide_next.onclick = function() {
    nextSlide();
}
slide_prev.onclick =function() {
    prevSlide();
}
hero_slide_control_item.forEach((item,index)=>{
    item.onclick = function() {
        showSlide(index);
    }
})

//change header style when scroll
// làm header khi cuộn 
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink')
    } else {
        header.classList.remove('shrink')
    }
})

let product_list= document.querySelector('#latest-products');
products.forEach(e=>{
    let prod=`
        <div class="col-3 col-md-6 col-sm-12">
            <div class="to-top show-on-scroll">
                <div class="product-cart">
                    <a href="#">
                        <div class="product-cart-img">
                            <img src="${e.image1}" alt="">
                        </div>
                        <h3 class="product-cart-name">
                            ${e.name}
                        </h3>
                        <span class="product-cart-price">
                            ${e.old_price}
                        </span>
                    </a>
                    <button class="btn">add to cart</button>
                </div>
            </div>
        </div>
    `
    product_list.insertAdjacentHTML('beforeend',prod)  
})
//element show on scroll

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback,1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll')

isElInViewPort = (el)=>{
    let rect = el.getBoundingClientRect();

    let distance = 200

    return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance)
}

loop = ()=>{
    el_to_show.forEach(el => {
        if(isElInViewPort(el)){
            el.classList.add('show')
        }
    })
    scroll(loop)
}
loop();

//responsive
document.querySelector('#mb-menu-toggle').onclick = function(){
    document.querySelector('#header').classList.add('active')
}
document.querySelector('#mb-menu-close').onclick = function(){
    document.querySelector('#header').classList.remove('active')
}