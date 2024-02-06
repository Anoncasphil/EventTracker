const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode");
});

const selectFileBtn = document.getElementById("select-file-btn");
const inputImage = document.getElementById("profile-picture");
const selectedImage = document.getElementById('selected-image');

selectFileBtn.addEventListener("click", () => {
  browseImagesInFolder();
});

inputImage.addEventListener("change", function (e) {
  displayImage(this);
});

function displayImage(input) {
  const fileInput = input;

  selectedImage.src = '';
  selectedImage.style.display = 'none';

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      selectedImage.src = e.target.result;
      selectedImage.style.display = 'block';
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
}

function browseImagesInFolder() {
  const folderInput = document.getElementById("profile-picture");

  selectedImage.src = '';
  selectedImage.style.display = 'none';

  folderInput.value = null;
  folderInput.addEventListener("click", function () {
    this.value = null;
  });

  folderInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        selectedImage.src = e.target.result;
        selectedImage.style.display = 'block';
      };

      reader.readAsDataURL(file);
    }
  });

  folderInput.click();
}
