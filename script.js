
function openImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modal.hidden = false;
}

function closeImage() {
  document.getElementById("imageModal").hidden = true;
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function showMessage() {
  alert("JavaScriptが正常に動いています！");
}
