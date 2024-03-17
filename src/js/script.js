// I have added the same 9 images 3 times due to not changing the purpose of this assignment
const images = [
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

// Function to add images to the row div
function addImgDivs() {
  images.forEach((img, index) => {
    const imgDiv = $("<div>").addClass("img-div ");

    const checkbox = $("<input>")
      .attr("type", "checkbox")
      .attr("id", index + 1); // Unique ID for each checkbox

    const label = $("<label>")
      .attr("for", index + 1) // Match the ID of the checkbox
      .attr("data-bgimage", `${img}`); // Set data for lazy loading

    imgDiv.append(checkbox, label);

    $(`.row`).append(imgDiv); // Append the image box to the row
  });
}

document.addEventListener("DOMContentLoaded", addImgDivs);

// Check for IntersectionObserver support with html5 has
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
      rootMargin: "100px", // rootMargin was added to have the img ready by the time we scroll to it
    });
    labels.forEach((imgBox) => observer.observe(imgBox));
  });
} else {
  // No interaction support? Use implemented js lazy loader
  let lazyloadThrottleTimeout;
  const lazyloadImages = document.querySelectorAll(".img-div > label");
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.scrollY;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop + 100) {
          img.style.backgroundImage = "url('" + img.dataset.bgimage + "')";
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("DOMContentLoaded", lazyload);
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
}
