// Select all tab links and tabs

const tabLinks = document.querySelectorAll(".tab-link");
const tabs = document.querySelectorAll(".tab");
const underline = document.querySelector(".underline");

// Add click event listener to each tab link
tabLinks.forEach((links, index) => {
  links.addEventListener("click", () => {
    // Remove active class from all tabs and links
    tabLinks.forEach((tabLink) => tabLink.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active class to the clicked tab link and corresponding tab
    links.classList.add("active");
    tabs[index].classList.add("active");

    // Move underline to the clicked tab link
    underline.style.left = `${index * 25}%`; // Adjust based on the tab index
  });
});
