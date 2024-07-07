      let htmlProducts = "";

      fetch(
         "https://api.myjson.online/v1/records/1160a138-c2b7-4fae-a7ca-0523a3ffcc54"
      )
         .then((res) => res.json())
         .then((response) => {
            console.log("🤔🤔🤔 ~ .then ~ response:", response.data);
            for (let i = 0; i < response.data.length; i++) {
               // for (let i = 0; i < 1; i++) {
               htmlProducts += `
            
           
               
                  <div class="item-product">
                     <div id="bo_ho" class="we_box text_align_left">
                        <i><img src="${response.data[i].picture}" alt="#" /></i>
                        <h3>${response.data[i].name}</h3>
                        <p>${response.data[i].description}
                        </p>
                     <span class="food-price">
                        ${response.data[i].price}
                     </span>
                     <button class="food-but" data-id="${response.data[i].id}" data-Name="${response.data[i].name}" data-img="${response.data[i].picture}" data-price="${response.data[i].price}" >Add to cart</button>
                  </div>
               </div>
                             `; 
    }
            document.getElementById("product").innerHTML = htmlProducts;
            let addToCartBut = document.getElementsByClassName("food-but");
            for (let button of addToCartBut) {
               button.addEventListener('click', addToCart)
            }
            function addToCart(event) {
               let productId = event.target.getAttribute('data-id')
               let productName = event.target.getAttribute('data-Name')
               let productimg = event.target.getAttribute('data-img')
               let productPrice = event.target.getAttribute('data-price')
               let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
               let existingItem = cartItems.find(item => item.id === productId, item => item.name === productName, item => item.img === productimg, item => item.price === productPrice);
               if (existingItem) {
                  existingItem.quantity += 1;

               } else {
                  cartItems.push({ id: productId, quantity: 1, name: productName, img: productimg, price: productPrice })
               }
               localStorage.setItem('cartItems', JSON.stringify(cartItems));
               alert(`Thêm thành công`)
            }
         });
