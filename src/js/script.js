// I have added the same 9 images 3 times due to not changing the purpose of this assignment
const urlList = [
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
  "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
  "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg",
  "https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg",
  "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
  "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
  "https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg",
];

let itemsPerRow;
let newItemsPerRow;

// Function to create the rows and images
function create() {
  // The loop is for the creation of rows
  let index = 0;
  itemsPerRow = calculateItemsPerRow();
  for (i = 0; i < urlList.length / itemsPerRow; i++) {
    const rowDiv = $("<div>")
      .addClass("row")
      .attr("id", `row-${i + 1}`);
    $(".container-fluid").append(rowDiv);

    for (j = 0; j < itemsPerRow; j++) {
      const imgDiv = $("<div>")
        .addClass("img-div col-sm-12 col-md-6 col-lg-3 col-xl")
        .appendTo(rowDiv);

      // adjust last row img for 5 columns
      if (itemsPerRow == 5) {
        $(imgDiv).css("width", "20%").css("flex", "0 0 auto");
      }

      const checkbox = $("<input>")
        .attr("type", "checkbox")
        .attr("id", index + 1); // Unique ID for each checkbox

      const label = $("<label>")
        .attr("for", index + 1) // Match the ID of the checkbox
        .attr("data-bgimage", `${urlList[i * itemsPerRow + j]}`); // Set background image

      imgDiv.append(checkbox, label);

      // Append the image box to the container
      $(`#row-${i + 1}`).append(imgDiv);
      index++;
      // Check that there are images left to add
      if (i * itemsPerRow + j + 2 > urlList.length) {
        return;
      }
    }
  }
}

create();

function calculateItemsPerRow() {
  const screenWidth = $(window).width();
  if (screenWidth >= 1400) {
    return 5; // XLarge screens
  } else if (screenWidth >= 1024) {
    return 4; // Large screens
  } else if (screenWidth >= 768) {
    return 2; // Tablet screens
  } else {
    return 1; // Phone screens
  }
}

// Add rule to not overstretch imgs on the last row
function adjustLastRowImg(imgDiv) {
  if (itemsPerRow == 5) {
    $(imgDiv).css("width", "20%").css("flex", "0 0 auto");
  } else {
    $(imgDiv).css("width", "").css("flex", "");
  }
}

// Add an event listener for window resize
window.addEventListener("resize", function (event) {
  newItemsPerRow = calculateItemsPerRow();
  if (itemsPerRow !== newItemsPerRow) {
    organizeDivsIntoRows();
    itemsPerRow = newItemsPerRow; // Update the value
  }
});

function organizeDivsIntoRows() {
  const imgDivs = $(".img-div"); // Select all existing img-divs
  $(".container-fluid").empty();
  let currentRow;
  imgDivs.each(function (index, imgDiv) {
    if (index % newItemsPerRow === 0 || index == 0) {
      // Start a new row
      currentRow = $("<div>").addClass("row").appendTo($(".container-fluid"));
    }
    adjustLastRowImg(imgDiv); // adjust last row img for 5 columns
    if (newItemsPerRow == 5) {
      $(imgDiv).css("width", "20%").css("flex", "0 0 auto");
    } else if (newItemsPerRow == 4 && itemsPerRow == 5) {
      $(imgDiv).css("width", "").css("flex", "");
    }
    $(currentRow).append(imgDiv); // Append the div to the current row
  });
}

// Check for IntersectionObserver support
if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", function () {
    function handleIntersection(entries) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          // Item has crossed our observation threshold - load src from data-src
          entry.target.style.backgroundImage =
            "url('" + entry.target.dataset.bgimage + "')";
          // Job done for this item - no need to watch it!
          observer.unobserve(entry.target);
        }
      });
    }

    const labels = document.querySelectorAll(".img-div > label");
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "100px",
    });
    labels.forEach((imgBox) => observer.observe(imgBox));
  });
} else {
  // No interaction support? Load all background images automatically
  const labels = document.querySelectorAll(".img-div > label");
  labels.forEach((img) => {
    img.style.backgroundImage = "url('" + img.dataset.bgimage + "')";
  });
}
