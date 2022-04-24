class Category{
  constructor(name,categotyid,imgsrc){
    this.name = name;
    this.categotyid = categotyid;
    this.imgsrc = imgsrc;
  }
}

class Product {
  constructor(price, name, id, categotyid, imgsrc) {
    this.price = price;
    this.name = name;
    this.id = id;
    this.categotyid = categotyid
    this.imgsrc = imgsrc
    this.counter = 0
  }
}

let cat = new Array()
let arr = new Array()

cat.push(new Category('Pizza', 1, 'pngs/1_cat_src.png'))
cat.push(new Category('Burgers', 2, 'pngs/2_cat_src.png'))
cat.push(new Category('Potato', 3, 'pngs/3_cat_src.png'))

arr.push(new Product(1100,'Hawaii', 1, 1, 'pngs/1_src.png'))
arr.push(new Product(1159,'Kansas', 2, 1, 'pngs/2_src.png'))
arr.push(new Product(1199,'Texas', 3, 1, 'pngs/3_src.png'))
arr.push(new Product(1185,'California', 4, 1, 'pngs/4_src.png'))
arr.push(new Product(1159,'Kansas', 5, 1, 'pngs/5_src.png'))
arr.push(new Product(1150,'Idaho', 6, 1, 'pngs/6_src.png'))
arr.push(new Product(140,'CheeseBurger', 7, 2, 'pngs/7_src.png'))
arr.push(new Product(499,'McChicken', 8, 2, 'pngs/8_src.png'))
arr.push(new Product(299,'Backon', 9, 2, 'pngs/9_src.png'))
arr.push(new Product(230,'Classic', 10, 2, 'pngs/10_src.png'))
arr.push(new Product(135,'McMuffin', 11, 2, 'pngs/11_src.png'))
arr.push(new Product(199,'Frie', 12, 3, 'pngs/12_src.png'))
arr.push(new Product(249,'Village', 13, 3, 'pngs/13_src.png'))
// arr.push(new Product(1100,'Hawaii', 7, 1))
// arr.push(new Product(1099,'Wisconsin', 8, 1))
// arr.push(new Product(3.44,'Frie', 3, 2))
// arr.push(new Product(54,'Long', 4, 2))
// arr.push(new Product(20.10,'Short', 5, 3))
// arr.push(new Product(50.25,'Onions', 6, 3))
// arr.push(new Product(30.40,'One', 8, 4))
// arr.push(new Product(1.25,'two', 9, 4))
// arr.push(new Product(40.25,'three', 11, 4))
// arr.push(new Product(50.25,'pesik', 7, 3))
// arr.push(new Product(2,'Sasha', 8, 4))
// arr.push(new Product(300,'Vova', 9, 4))

// for (var i = 0; i < 100; i++){
//   arr.push(new Product(4.99,'Margaritta', i+1, 1))
// }
// for (var i = 100; i < 200; i++){
//   arr.push(new Product(4.99,'Margaritta', i+1, 2))
// }







function reply_click_plus(){
  // arr[5].counter++;
  // // element.GetElementById('counter_12') = counter;
  // console.log(arr[5].counter)
  // var content = document.createElement('div')
  // var photo = document.createElement('div')
  // var label = document.createElement('div')
  // var buttons = document.createElement('div')
  // var product_img = document.createElement('img')
  // var product_name = document.createElement('span')
  // var product_price = document.createElement('span')
  // var addid = document.getElementById('metadata')
  // var add_button = document.createElement('button')
  //
  // content.className = 'cafe-item js-item'
  // photo.className = 'cafe-item-photo'
  // label.className = 'cafe-item-label'
  // buttons.className = 'cafe-item-buttons'
  // product_img.src = './pngs/1.png'
  // content.appendChild(photo)
  // content.appendChild(label)
  // content.appendChild(buttons)
  // add_button.innerText = 'ADD'
  // add_button.className = 'cafe-item-add js-item-add-button'
  // photo.appendChild(product_img)
  // product_name.className = 'cafe-item-title'
  // product_name.innerText = 'BURGER'
  // product_price.className = 'cafe-item-price'
  // product_price.innerText = '4.99$'
  // label.appendChild(product_name)
  // label.appendChild(product_price)
  // buttons.appendChild(add_button)
  // add_button.onclick = function(){
  //   var plus = document.createElement('button')
  //   var minus = document.createElement('button')
  //   var counter = document.createElement('span')
  // }
  // addid.appendChild(content)
}

function reply_click_add(){
  var plus = document.createElement('button')
  var minus = document.createElement('button')
  var counter = document.createElement('span')

  var main = document.getElementById('pizda')
  pizda.className = 'cafe-item-buttons-pm'
  pizda.appendChild(minus)
  pizda.appendChild(counter)
  pizda.appendChild(plus)
  minus.className = 'cafe-item-add-pm minus js-item-add-button'
  counter.className = 'cafe-add-counter'

  plus.className = 'cafe-item-add-pm plus js-item-add-button'
  counter.innerText = '4'
  plus.innerText = '+'
  minus.innerText = '-'
  var piska = document.getElementById('o4ko')
  piska.remove()
}

function reply_click_plus_pizda(price, name, id, counter, imgsrc){

  // arr[5].counter++;
  // // element.GetElementById('counter_12') = counter;
  // console.log(arr[5].counter)
  var content = document.createElement('div')
  var photo = document.createElement('div')
  var label = document.createElement('div')
  var buttons = document.createElement('div')
  var product_img = document.createElement('img')
  var product_name = document.createElement('span')
  var product_price = document.createElement('span')
  var addid = document.getElementById('metadata')


  content.className = 'cafe-item js-item'
  content.id = 'pizda_' + id
  photo.className = 'cafe-item-photo'
  label.className = 'cafe-item-label'
  buttons.className = 'cafe-item-buttons'
  product_img.src = imgsrc
  content.appendChild(photo)
  content.appendChild(label)
  content.appendChild(buttons)

  photo.appendChild(product_img)
  product_name.className = 'cafe-item-title'
  product_name.innerText = name
  product_price.className = 'cafe-item-price'
  product_price.innerText = '$' + number_cre(price)
  label.appendChild(product_name)
  label.appendChild(product_price)

  addid.appendChild(content)

  if (counter == 0){
    var add_button = document.createElement('button')
    add_button.innerText = 'ADD'
    add_button.className = 'cafe-item-add js-item-add-button'
    add_button.id = arr[id-1].id
    add_button.onclick = function(){
      var check = this.id
      reply_click_add(id)
    }
    buttons.appendChild(add_button)
  }
  else{
    buttons.className = 'cafe-item-buttons-pm'
    var plus = document.createElement('button')
    var minus = document.createElement('button')
    var counter = document.createElement('span')
    plus.id = id
    minus.id = id
    counter.id = id
    plus.onclick = function(){
      var check = this.id
      plus_button_pm(id)
    }
    minus.onclick = function(){
      var check = this.id
      minus_button_pm(id)
    }
    buttons.appendChild(minus)
    buttons.appendChild(counter)
    buttons.appendChild(plus)
    minus.className = 'cafe-item-add-pm minus js-item-add-button'
    counter.className = 'cafe-add-counter'
    plus.className = 'cafe-item-add-pm plus js-item-add-button'
    counter.innerText = arr[id-1].counter
    plus.innerText = '+'
    minus.innerText = '-'
  }
}

function reply_click_add(id){
  var piska = document.getElementById(id)
  piska.remove()
  var negr = document.querySelectorAll(('#pizda_' + id + '.js-item'))
  var pizda_two = negr[0].querySelectorAll('div.cafe-item-buttons')
  var pizda = pizda_two[0]
  var plus = document.createElement('button')
  var minus = document.createElement('button')
  var counter = document.createElement('span')
  plus.id = id
  minus.id = id
  counter.id = id
  plus.onclick = function(){
    plus_button_pm(id)
  }
  minus.onclick = function(){
    minus_button_pm(id)
  }

  var main = document.getElementById('pizda')
  pizda.className = 'cafe-item-buttons-pm'
  pizda.appendChild(minus)
  pizda.appendChild(counter)
  pizda.appendChild(plus)
  minus.className = 'cafe-item-add-pm minus js-item-add-button'
  counter.className = 'cafe-add-counter'
  plus.className = 'cafe-item-add-pm plus js-item-add-button'
  arr[id-1].counter ++
  counter.innerText = arr[id-1].counter
  plus.innerText = '+'
  minus.innerText = '-'
  // var chmo = arr[id-1].counter
  // console.log(chmo)
  status_order()
}

function createEls(){
  var cre = document.createElement('div')
  cre.className = 'cafe-page cafe-items'
  cre.id = 'metadata'
  prak = document.getElementsByClassName('container')
  prak[0].appendChild(cre)
  for(var i = 0; i < arr.length; i++) {
    reply_click_plus_pizda(arr[i].price, arr[i].name, arr[i].id, arr[i].counter, arr[i].imgsrc);
  }
}

// createEls()

// let element = document.querySelector('div');
// let element2 = element.querySelectorAll('#pizda_' + 6 + '.js-item')
//
// element2[0].appendChild(document.createElement('div'))
// let element3 = element2.querySelectorAll('#piskin_les')
// console.log(element3)



function plus_button_pm(id) {
  var negr = document.querySelectorAll(('#pizda_' + id + '.js-item'))
  var pizda_two = negr[0].querySelectorAll('div.cafe-item-buttons-pm')
  var pizda = pizda_two[0].querySelectorAll('span.cafe-add-counter')
  var raze = pizda[0]
  arr[id-1].counter++
  raze.innerText = arr[id-1].counter
  status_order()
}

function minus_button_pm(id) {
  var negr = document.querySelectorAll(('#pizda_' + id + '.js-item'))
  var pizda_two = negr[0].querySelectorAll('div.cafe-item-buttons-pm')
  var pizda = pizda_two[0].querySelectorAll('span.cafe-add-counter')
  var raze = pizda[0]
  arr[id-1].counter--
  raze.innerText = arr[id-1].counter
  if (arr[id-1].counter<1){
    var zamena = document.querySelectorAll('#pizda_' + id + '.js-item')
    var zamena2 = zamena[0].querySelectorAll('div.cafe-item-buttons-pm')
    var zamena3 = zamena2[0].querySelectorAll('button')
    var zamena4 = zamena2[0].querySelectorAll('span.cafe-add-counter')
    zamena3[0].remove()
    zamena3[1].remove()
    zamena4[0].remove()

    var add_button = document.createElement('button')
    add_button.innerText = 'ADD'
    add_button.className = 'cafe-item-add js-item-add-button'
    add_button.id = arr[id-1].id
    add_button.onclick = function(){
      var check = this.id
      reply_click_add(id)
    }
    pizda_two[0].className = 'cafe-item-buttons'
    pizda_two[0].appendChild(add_button)
  }
  status_order()
}


function pizdik(categotyid){
  clearAll()
  // createEls()
  var cre = document.createElement('div')
  cre.className = 'cafe-page cafe-items'
  cre.id = 'metadata'
  prak = document.getElementsByClassName('container')

  var back_butt = document.createElement('div')
  var back_butt_css = document.createElement('span')
  var title_css = document.createElement('span')
  back_butt.className = 'back_button'
  back_butt_css.className = 'back_button_css'
  title_css.className = 'title_css'
  title_css.innerText = cat[categotyid-1].name
  // back_butt_css.innerText = 'B'
  var back_img = document.createElement('img')
  back_img.src = 'pngs/3.png'
  back_img.className = 'back_img'
  back_butt_css.appendChild(back_img)

  back_butt_css.onclick = function(){
    clearAll()
    createCategoryMenu()
  }

  prak[0].appendChild(back_butt)
  back_butt.appendChild(back_butt_css)
  back_butt.appendChild(title_css)

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].categotyid == categotyid){
      prak[0].appendChild(cre)
      reply_click_plus_pizda(arr[i].price, arr[i].name, arr[i].id, arr[i].counter, arr[i].imgsrc)
    }
  }
}



function createCategoryMenu(){
  clearAll()
  var main = document.querySelectorAll('.container')
  var pesik = document.createElement('div')
  pesik.className = 'title'
  pesik.innerText = 'Choose category! ^-^'
  var pesik2 = document.createElement('div')
  pesik2.className = 'pizda2'
  var pesik3 = document.createElement('div')
  pesik3.className = 'category-names'





  main[0].appendChild(pesik)
  main[0].appendChild(pesik2)
  main[0].appendChild(pesik3)


  for (var i = 0; i < cat.length; i++) {
    var pesik4 = document.createElement('span')
    pesik4.className = 'category-title'
    var pesik5 = document.createElement('img')
    pesik5.src = cat[i].imgsrc
    var pesik6 = document.createElement('p')
    pesik5.className = 'dalbaeb'
    pesik6.className = 'sobaka'
    pesik6.innerText = cat[i].name
    var pesik7 = document.createElement('div')
    pesik7.className = 'pizda'
    pesik4.id = i + 1
    pesik4.onclick = function(){
      var id = this.id
      pizdik(cat[id - 1].categotyid)
    }
    pesik3.appendChild(pesik4)
    if (i != cat.length-1){
      pesik3.appendChild(pesik7)
    }
    pesik4.appendChild(pesik5)
    pesik4.appendChild(pesik6)

  }
}

function clearAll(){
  var clear = document.getElementsByClassName('container')

  var govno = clear[0]
  while(govno.firstChild){
      govno.removeChild(govno.firstChild);
  }
}


// createCategoryMenu()
// createEls()

function cart(){
  status_payment()
  clearAll()
  var que = document.getElementsByClassName('container')
  var cont = que[0]

  var cart = document.createElement('div')
  cart.className = 'cart'
  cont.appendChild(cart)
  var title = document.createElement('div')
  title.className = 'order-title'
  cart.appendChild(title)

  var titleOrd = document.createElement('span')
  titleOrd.className = 'title2'
  titleOrd.innerText = 'Your order'
  title.appendChild(titleOrd)

  var edButton = document.createElement('span')
  edButton.className = 'edit-button'
  edButton.innerText = 'Edit'
  edButton.onclick = function(){
    createCategoryMenu()
    status_order_choose()
  }
  title.appendChild(edButton)


  var border = document.createElement('div')
  border.className = 'pizda pizda100'
  cart.appendChild(border)
  var cart_items = document.createElement('div')
  cart_items.className = 'cart-item'
  cart.appendChild(cart_items)

  for (var i = 0; i < arr.length; i++){

    if (arr[i].counter > 0){
      var pres = document.createElement('div')
      pres.className = 'cart-item-present'
      pres.id = arr[i].id + '-pres'
      cart_items.appendChild(pres)


      var img = document.createElement('div')
      img.className = 'cart-item-img'
      pres.appendChild(img)

      var imgSrc = document.createElement('img')
      imgSrc.src = arr[i].imgsrc
      img.appendChild(imgSrc)



      var info = document.createElement('div')
      info.className = 'cart-item-info'
      pres.appendChild(info)

      var main = document.createElement('div')
      main.className = 'cart-item-info-main'
      info.appendChild(main)

      var main_name = document.createElement('div')
      main_name.className = 'cart-item-info-main-name'
      main.appendChild(main_name)

      var main_name_text = document.createElement('p')
      main_name_text.innerText = arr[i].name
      main_name.appendChild(main_name_text)

      var main_counter = document.createElement('div')
      main_counter.className = 'cart-item-info-main-counter'
      main.appendChild(main_counter)

      var main_counter_text = document.createElement('p')
      main_counter_text.className = 'cart-item-info-main-counter-text'
      main_counter_text.innerText = arr[i].counter + 'x'
      main_counter.appendChild(main_counter_text)



      var description = document.createElement('div')
      description.className = 'cart-item-info-description'
      info.appendChild(description)

      var descriptionTxt = document.createElement('p')

      for (var num = 0; num < cat.length; num++){
        if (arr[i].categotyid == cat[num].categotyid){
          catName = cat[num].name
        }
      }
      descriptionTxt.innerText = catName
      description.appendChild(descriptionTxt)




      var price = document.createElement('div')
      price.className = 'cart-item-price'
      pres.appendChild(price)

      price_text = document.createElement('p')
      price_text.className = 'cart-item-price-text'
      price_text.innerText = '$' + number_cre((arr[i].price * (arr[i].counter)))
      price.appendChild(price_text)

      var cart_buttons = document.createElement('div')
      cart_buttons.className = 'cart-buttons'
      pres.appendChild(cart_buttons)

      var plus_div = document.createElement('div')
      plus_div.className = 'plus_div'
      cart_buttons.appendChild(plus_div)
      var minus_div = document.createElement('div')
      minus_div.className = 'minus_div'
      cart_buttons.appendChild(minus_div)
      var plus = document.createElement('button')
      var minus = document.createElement('button')
      plus.onclick = function () {
        id = this.id
        cart_plus(id)
      }
      minus.onclick = function () {
        id = this.id
        cart_minus(id)
      }
      plus.id = arr[i].id
      minus.id = arr[i].id
      plus.className = 'cart-buttons-butt cart-plus'
      minus.className = 'cart-buttons-butt cart-minus'
      plus.innerText = '+'
      minus.innerText = '-'
      plus_div.appendChild(plus)
      minus_div.appendChild(minus)

    }
  }

}

function status_order(){
  var check = 0
  var status = document.getElementById('status')
  for (var i = 0; i < arr.length; i++){
    if (arr[i].counter != 0){
      check = 1
    }
  }

  if (check == 0){
    status.classList.remove("shown")
  }
  else{
    status.classList.add("shown")
  }
  return check
}

function status_payment(){
  var payment = 0
  var status = document.getElementById('status')
  for (var i = 0; i < arr.length; i++){
    payment += arr[i].counter * arr[i].price
  }

  status.innerText = 'Pay $' + number_cre(payment)
  status.onclick = function(){
    payable()
  }
}
function status_order_choose(){
  var status = document.getElementById('status')
  status.innerText = 'View order'
  status.onclick = function(){

  }
}

function cart_plus(id){

  arr[id-1].counter++

  var replace = document.getElementById(id + '-pres')
  var pes = replace.querySelectorAll('.cart-item-info')

  var pizdec = replace.querySelectorAll('.cart-item-price')
  var pizdec_two = pizdec[0].querySelectorAll('.cart-item-price-text')
  pizdec_two[0].innerText = '$' + number_cre(arr[id-1].price * arr[id-1].counter)
  var pes = replace.querySelectorAll('.cart-item-info')
  var pes_two = pes[0].querySelectorAll('.cart-item-info-main')
  var pes_three = pes_two[0].querySelectorAll('.cart-item-info-main-counter')
  var pes_four = pes_three[0].querySelectorAll('.cart-item-info-main-counter-text')
  pes_four[0].innerText = arr[id-1].counter + 'x'

  status_payment()
  status_order()
}
function cart_minus(id){
  var replace = document.getElementById(id + '-pres')
  arr[id-1].counter--
  if (arr[id-1].counter<1){
    replace.remove()
  }
  else{


    var pizdec = replace.querySelectorAll('.cart-item-price')
    var pizdec_two = pizdec[0].querySelectorAll('.cart-item-price-text')
    pizdec_two[0].innerText = '$' + number_cre(arr[id-1].price * arr[id-1].counter)
    var pes = replace.querySelectorAll('.cart-item-info')

    var pes_two = pes[0].querySelectorAll('.cart-item-info-main')
    var pes_three = pes_two[0].querySelectorAll('.cart-item-info-main-counter')
    var pes_four = pes_three[0].querySelectorAll('.cart-item-info-main-counter-text')
    pes_four[0].innerText = arr[id-1].counter + 'x'

  }
  status_payment()
  if (status_order() == 0){
    createCategoryMenu()
    status_order_choose()
    // status_order()
  }
}

// function status_price(){
//   var status = document.getElementById('status')
//   status.innerText = 'pizdes'
// }

status_order()

createCategoryMenu()

function number_cre(num){
  var test = (num - num%100)/100
  var test2 = '00'
  if (num%100 != 0){
    test2 = num%100
  }

  var print = test + '.' + test2
  return print
}

function payable(){
  var summ = 0
  let negr = new Array();
  for (var i = 0; i <arr.length; i++){
    if (arr[i].counter != 0){
      summ += arr[i].counter * arr[i].price
      negr.push ([arr[i].id, arr[i].counter, arr[i].name])
    }
  }

  console.log('Вы заказали:')
  for (var i = 0; i < negr.length; i++){
      console.log(negr[i][2] + ' в кол-ве ' + negr[i][1] + ', #' + negr[i][0] + 'id')
  }
    console.log('На сумму $' + number_cre(summ))
}
