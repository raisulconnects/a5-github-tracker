console.log("Github Issues Tracker Script: ");
console.log("For Dashboard Page");
console.log("---------------------------------------------");
// -----------------------------------------------------------------------

// This Portion of the Script is for Dashboard Page -------------------------------------------------------------

// Selectors
const cardBox = document.getElementById("card-box");
const issuesNumber = document.getElementById("issuesNumber");

const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closedBtn = document.getElementById("closedBtn");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let content = "";

// All Tab Fetch Function
const githubFetcher = async () => {
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
    content = data.data
      .map((issue) => {
        return `

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500">
                  HIGH
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags -->
              <div class="flex gap-2 mt-4 mb-2">
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 bg-red-50">
                  <img src="./images/BugDroid.png" alt="" /> BUG
                </span>
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50 whitespace-nowrap">
                  <img src="./images/Lifebuoy.png" alt="" /> HELP WANTED
                </span>
              </div>

              <!-- Footer (pushed to bottom) -->
              <div class="mt-auto pt-2 border-t text-xs text-gray-400">
                <p>#${issue.id} by ${issue.author}</p>
                <p class="pt-1">
                  ${new Date(issue.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

`;
      })
      .join("");

    cardBox.innerHTML = "";
    cardBox.innerHTML = content;
    issuesNumber.textContent = `${data.data.length} Issues`;
  } catch (e) {
    console.log(e.message);
  }
};

// Open Tab Fetch Function
const githubFetcherOpen = async () => {
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
    content = data.data
      .filter((issue) => issue.status === "open")
      .map((issue) => {
        return `

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500">
                  HIGH
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags -->
              <div class="flex gap-2 mt-4 mb-2">
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 bg-red-50">
                  <img src="./images/BugDroid.png" alt="" /> BUG
                </span>
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50 whitespace-nowrap">
                  <img src="./images/Lifebuoy.png" alt="" /> HELP WANTED
                </span>
              </div>

              <!-- Footer (pushed to bottom) -->
              <div class="mt-auto pt-2 border-t text-xs text-gray-400">
                <p>#${issue.id} by ${issue.author}</p>
                <p class="pt-1">
                  ${new Date(issue.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

`;
      })
      .join("");

    cardBox.innerHTML = "";
    cardBox.innerHTML = content;
    issuesNumber.textContent = `${data.data.filter((issue) => issue.status === "open").length} Issues`;
  } catch (e) {
    console.log(e.message);
  }
};

// Close Tab Fetch Function
const githubFetcherClosed = async () => {
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
    content = data.data
      .filter((issue) => issue.status === "closed")
      .map((issue) => {
        return `

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500">
                  HIGH
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags -->
              <div class="flex gap-2 mt-4 mb-2">
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 bg-red-50">
                  <img src="./images/BugDroid.png" alt="" /> BUG
                </span>
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50 whitespace-nowrap">
                  <img src="./images/Lifebuoy.png" alt="" /> HELP WANTED
                </span>
              </div>

              <!-- Footer (pushed to bottom) -->
              <div class="mt-auto pt-2 border-t text-xs text-gray-400">
                <p>#${issue.id} by ${issue.author}</p>
                <p class="pt-1">
                  ${new Date(issue.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

`;
      })
      .join("");

    cardBox.innerHTML = "";
    cardBox.innerHTML = content;
    issuesNumber.textContent = `${data.data.filter((issue) => issue.status === "closed").length} Issues`;
  } catch (e) {
    console.log(e.message);
  }
};

// Search Fetch Function
const githubFetcherSearch = async (searchText) => {
  try {
    const response = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
    );
    const data = await response.json();

    content = data.data
      .map((issue) => {
        return `

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500">
                  HIGH
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags -->
              <div class="flex gap-2 mt-4 mb-2">
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 bg-red-50">
                  <img src="./images/BugDroid.png" alt="" /> BUG
                </span>
                <span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50 whitespace-nowrap">
                  <img src="./images/Lifebuoy.png" alt="" /> HELP WANTED
                </span>
              </div>

              <!-- Footer (pushed to bottom) -->
              <div class="mt-auto pt-2 border-t text-xs text-gray-400">
                <p>#${issue.id} by ${issue.author}</p>
                <p class="pt-1">
                  ${new Date(issue.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

`;
      })
      .join("");

    cardBox.innerHTML = "";
    cardBox.innerHTML = content;
    issuesNumber.textContent = `${data.data.length} Issues`;
  } catch (e) {
    console.log(e.message);
  }
};

cardBox.addEventListener("click", function (e) {
  console.log("lol");
});

// Initially All Tab will be active and show all the issues
githubFetcher();

// Add Event Listeners to the buttons & Loading Spinner while fetching data
allBtn.addEventListener("click", function () {
  cardBox.innerHTML =
    '<div class="flex justify-center items-center"> <span class="loading loading-spinner text-error"></span> </div>';

  githubFetcher();

  allBtn.classList.add("bg-[#4A00FF]", "text-white");
  allBtn.classList.remove("bg-white");

  openBtn.classList.remove("bg-[#4A00FF]", "text-white");
  openBtn.classList.add("bg-white");

  closedBtn.classList.remove("bg-[#4A00FF]", "text-white");
  closedBtn.classList.add("bg-white");

  console.log("All Github Fetcher Clicked!");
});

openBtn.addEventListener("click", function () {
  cardBox.innerHTML =
    '<div class="flex justify-center items-center"> <span class="loading loading-spinner text-error"></span> </div>';

  githubFetcherOpen();

  openBtn.classList.add("bg-[#4A00FF]", "text-white");
  openBtn.classList.remove("bg-white");

  allBtn.classList.remove("bg-[#4A00FF]", "text-white");
  allBtn.classList.add("bg-white");

  closedBtn.classList.remove("bg-[#4A00FF]", "text-white");
  closedBtn.classList.add("bg-white");

  console.log("Open Github Fetcher Clicked!");
});

closedBtn.addEventListener("click", function () {
  cardBox.innerHTML =
    '<div class="flex justify-center items-center"> <span class="loading loading-spinner text-error"></span> </div>';

  githubFetcherClosed();

  closedBtn.classList.add("bg-[#4A00FF]", "text-white");
  closedBtn.classList.remove("bg-white");

  allBtn.classList.remove("bg-[#4A00FF]", "text-white");
  allBtn.classList.add("bg-white");

  openBtn.classList.remove("bg-[#4A00FF]", "text-white");
  openBtn.classList.add("bg-white");

  console.log("Closed Github Fetcher Clicked!");
});

searchBtn.addEventListener("click", function () {
  cardBox.innerHTML =
    '<div class="flex justify-center items-center"> <span class="loading loading-spinner text-error"></span> </div>';

  const searchText = searchInput.value.trim();
  githubFetcherSearch(searchText);
  console.log("Search Github Fetcher Clicked!");
});
