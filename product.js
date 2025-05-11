document.addEventListener("DOMContentLoaded", () => {
  fetch("product.php")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((product) => {
      const list = document.getElementById("product_list");
      list.innerHTML = "";
      product.forEach(prod => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const img = document.createElement("img");
        const p = document.createElement("p");
        const button = document.createElement("button");

        span.classList.add("list-info")
        p.classList.add("price")
        img.classList.add()
        img.style.width = "250px"
        img.style.height = "190px"
        img.src = prod.image
        span.textContent = prod.name
        p.textContent = "£" + prod.price

        button.onclick = function () {
          const id = prod.id
          window.location.href = `order.html?id=${id}`;
        };

        // const a = document.createElement("a")
        button.textContent = "Buy Now"
        // a.href = "order.html"
        // button.appendChild(a)

        li.appendChild(span);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(button);
        list.appendChild(li);


      });
    })
    .catch((err) => {
      document.getElementById("all_product").innerHTML =
        "<li style='color:red;'>Failed to load users.</li>";
      console.error(err);
    });
});