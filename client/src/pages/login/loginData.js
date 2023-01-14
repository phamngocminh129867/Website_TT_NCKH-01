const nameAdmin = document.getElementById("username");
const passAdmin = document.getElementById("username");
const bt_login = document.getElementById("button");
bt_login.addEventListener("click", async (e) => {
  const obj = {
    name: nameAdmin.value,
    pass: passAdmin.value,
  };
  fetch("http://localhost:3000/getdata_withQuery", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "Successfully") {
        window.location.href = "http://localhost:3001";
        alert("Successfully logged in ");
      }
      if (data === "Error") {
        alert("Failed to log in ");
      }
    });
});
