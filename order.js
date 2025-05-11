const params = new URLSearchParams(window.location.search);
const id = params.get("id");
document.addEventListener("DOMContentLoaded", () => {
    fetch(`order.php?id=${id}`)
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then((prod) => {

            const imageDiv = document.getElementById("product_image")
            const img = document.createElement("img");
            const genre = document.getElementById("genre")
            const modes = document.getElementById("modes")
            const developer = document.getElementById("developer")
            const publisher = document.getElementById("publisher")
            const minimum = document.getElementById("minimum")
            const recommended = document.getElementById("recommended")
            const price = document.getElementById("price")
            genre.innerHTML = `<b>Genre:</b> ${prod.genre}`
            price.innerHTML = `<b>Price:£</b> ${prod.price}`
            modes.innerHTML = `<b>Modes:</b> ${prod.mode}`
            developer.innerHTML = `<b>Developer:</b> ${prod.developer}`
            publisher.innerHTML = `<b>Publisher:</b> ${prod.publisher}`
            minimum.innerHTML = `<b>Minimum:</b> ${prod.minimum}`
            recommended.innerHTML = `<b>Recommended:</b> ${prod.recommended}`
            const title = document.getElementById("product_title")
            title.textContent = prod.name

            img.style.display = "flex 2"
            img.style.height = "583px"
            img.style.width = "800px"
            img.src = prod.image

            imageDiv.appendChild(img)

        })
        .catch((err) => {
            document.getElementById("product_info").innerHTML =
                "<li style='color:red;'>Failed to load users.</li>";
            console.error(err);
        });
});