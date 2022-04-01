var cartData = JSON.parse(localStorage.getItem("cart")) || [];
  bikedata.map(function (elem) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.c2;

    var name = document.createElement("p");
    name.textContent = elem.c1;

    var price = document.createElement("p");
    price.innerText = elem.c42;

    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.addEventListener("click", function () {
      addToCart(elem);
    });

    box.append(name, img, price, btn);

    document.querySelector("#container").append(box);
  });

  function addToCart(elem) {
    console.log(elem);
    cartData.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("item added to cart");
  }