const form = document.getElementById("form_id")
form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
  
    fetch("register_user.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        e.target.reset()
        document.getElementById("response").innerHTML = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  })
  form.reset()