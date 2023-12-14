document.addEventListener("DOMContentLoaded", function () {
  const phoneForm = document.getElementById("phoneForm");
  const welcomeMessage = document.getElementById("welcomeMessage");

  phoneForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phoneNumber").value;

    const apiUrl = "https://chimpu.xyz/api/post.php";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        phonenumber: phoneNumber,
      }),
    })
      .then((response) => {
        if (response.ok) {
          welcomeMessage.innerText ="Welcome to Indoreators Web Creations Network Private Limited😊";
          welcomeMessage.style.display = "block";

          document.getElementById("phoneNumber").value = "";
        } else {
          console.error("Error:", response.statusText);
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});
