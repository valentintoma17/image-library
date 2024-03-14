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
    const rowDiv = $("<div>")
      .addClass("row")
      .attr("id", `row-${i + 1}`);
    $(".container-fluid").append(rowDiv);

    for (j = 0; j < 4; j++) {
      const imgDiv = $("<div>")
        .addClass("img-div col-6 col-sm-3")
        .appendTo(rowDiv);

      const checkbox = $("<input>")
        .attr("type", "checkbox")
        .attr("id", `row-${i + 1}-img-${j + 1}`); // Unique ID for each checkbox

      const label = $("<label>")
        .attr("for", `row-${i + 1}-img-${j + 1}`) // Match the ID of the checkbox
        .css("background-image", `url('${urlList[i * 4 + j]}')`); // Set background image

      imgDiv.append(checkbox, label);

      // Append the image box to the container
      $(`#row-${i + 1}`).append(imgDiv);

      // Check that there are images left to add
      if (i * 4 + j + 2 > urlList.length) {
        return;
      }
    }
  }
}

create();
