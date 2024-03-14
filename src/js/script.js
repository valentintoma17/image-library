// I have added the same 6 images 4 times due to not changing the purpose of this assignment
const urlList = [
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
];

// Function to create an image box
function create() {
  // The loop is for the creation of rows
  for (i = 0; i < urlList.length / 4; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.id = `row-${i + 1}`;
    mainContainer = $(".container-fluid")[0];
    mainContainer.appendChild(rowDiv);
    // The loop is for the creation of img
    for (j = 0; j < 4; j++) {
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("img-div", "col-6", "col-sm-3");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `row-${i + 1}-img-${j + 1}`; // Unique ID for each checkbox

      const label = document.createElement("label");
      label.htmlFor = `row-${i + 1}-img-${j + 1}`; // Match the ID of the checkbox
      label.style.backgroundImage = `url('${urlList[i * 4 + j]}')`; // Set background image

      imgDiv.appendChild(checkbox);
      imgDiv.appendChild(label);

      // Append the image box to the container
      document.getElementById(`row-${i + 1}`).appendChild(imgDiv);
      if (i * 4 + j + 2 > urlList.length) {
        return;
      }
    }
  }
}

create();
