function togglemenu() {
  let bar = document.getElementById("open");
  let close = document.getElementById("close");
  let headerlist = document.querySelector(".header-list");
  headerlist.classList.toggle("active");
  bar.style.display = bar.style.display === "none" ? "block" : "none";
  close.style.display = close.style.display === "none" ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("close").style.display = "none";
});
window.addEventListener("resize", function () {
  let bar = document.getElementById("open");
  let close = document.getElementById("close");
  let headerlist = document.querySelector(".header-list");

  if (window.innerWidth > 768) {
    headerlist.classList.remove("active");
    bar.style.display = "none";
    close.style.display = "none";
  }
  if (window.innerWidth < 768) {
    headerlist.classList.remove("active");
    bar.style.display = "block";
    close.style.display = "none";
  }
});

fetch("./data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("network");
    }
    return res.json();
  })
  .then((products) => {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.items.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
   <img src="${element.image}" alt="${element.title}" />
    <h3>${element.title}</h3>
    <p>${element.price}</p>
   
  `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching the products:", error);
  });