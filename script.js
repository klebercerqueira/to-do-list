document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", function() {
    if (item.style.textDecoration === "none") {
      item.style.textDecoration = "line-through";
    } else {
      item.style.textDecoration = "none";
    }
  })
})
