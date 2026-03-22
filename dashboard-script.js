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

// Modal Selectors
const modal_title = document.getElementById("modal-title");
const modal_subtitle = document.getElementById("modal-subtitle");
const modal_labels = document.getElementById("modal-labels");
const modal_description = document.getElementById("modal-description");
const modal_assignee = document.getElementById("modal-assignee");
const modal_priority = document.getElementById("modal-priority");

let content = "";

// Modal Shower Function Which edits the modal things and then shows modal
const modalShower = async (id) => {
  // console.log(id);

  try {
    const response = await fetch(
      `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
    );
    const data = await response.json();
    const issue = data.data;

    console.log(issue);

    modal_title.textContent = issue.title;
    modal_subtitle.textContent = `${issue.status === "open" ? "Opened" : "Closed"} • ${issue.status === "open" ? "Opened" : "Closed"} by ${issue.author} • ${new Date(issue.createdAt).toLocaleDateString()}`;
    modal_labels.innerHTML = issue.labels
      .map(
        (
          label,
        ) => `<span class="flex gap-1 text-xs px-3 py-1 rounded-full border border-${label === "bug" ? "red" : "yellow"}-300 text-${label === "bug" ? "red" : "yellow"}-500 bg-${label === "bug" ? "red" : "yellow"}-50">
          ${label.toUpperCase()}
        </span>`,
      )
      .join("");

    modal_description.textContent = issue.description;
    modal_assignee.textContent = issue.author
      .split("_")
      .slice(0, 2)
      .map((name) => name.toUpperCase())
      .join(" ");

    // modal_priority.textContent = issue.priority.toUpperCase();
    modal_priority.innerHTML = `<span class='text-sm text-white bg-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-300 px-3 py-1 mt-2 rounded-2xl'> ${issue.priority.toUpperCase()} </span>`;
  } catch (e) {
    console.log(e.message);
  }

  my_modal_1.showModal();
};

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

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500" onclick="modalShower(${issue.id})">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-100 text-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-500">
                  ${issue.priority.toUpperCase()}
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags/Labels -->
              <div class="flex gap-2 mt-4 mb-2">
              ${issue.labels
                .map(
                  (
                    label,
                  ) => `<span class="flex gap-1 text-xs text-nowrap px-3 py-1 rounded-full border border-${label === "bug" ? "red" : "yellow"}-300 text-${label === "bug" ? "red" : "yellow"}-500 bg-${label === "bug" ? "red" : "yellow"}-50">
                    <img src="./images/${label === "bug" ? "BugDroid" : "Lifebuoy"}.png" alt="" /> ${label.toUpperCase()}
                  </span>`,
                )
                .join("")}
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
    console.log(data.data);
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

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500" onclick="modalShower(${issue.id})">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-100 text-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-500">
                  ${issue.priority.toUpperCase()}
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags/Labels -->
              <div class="flex gap-2 mt-4 mb-2">
              ${issue.labels
                .map(
                  (
                    label,
                  ) => `<span class="flex gap-1 text-xs text-nowrap px-3 py-1 rounded-full border border-${label === "bug" ? "red" : "yellow"}-300 text-${label === "bug" ? "red" : "yellow"}-500 bg-${label === "bug" ? "red" : "yellow"}-50">
                    <img src="./images/${label === "bug" ? "BugDroid" : "Lifebuoy"}.png" alt="" /> ${label.toUpperCase()}
                  </span>`,
                )
                .join("")}
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

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500" onclick="modalShower(${issue.id})">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-100 text-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-500">
                  ${issue.priority.toUpperCase()}
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags/Labels -->
              <div class="flex gap-2 mt-4 mb-2">
              ${issue.labels
                .map(
                  (
                    label,
                  ) => `<span class="flex gap-1 text-xs text-nowrap px-3 py-1 rounded-full border border-${label === "bug" ? "red" : "yellow"}-300 text-${label === "bug" ? "red" : "yellow"}-500 bg-${label === "bug" ? "red" : "yellow"}-50">
                    <img src="./images/${label === "bug" ? "BugDroid" : "Lifebuoy"}.png" alt="" /> ${label.toUpperCase()}
                  </span>`,
                )
                .join("")}
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

          <div class="card border-t-4 border-${issue.status === "open" ? "green" : "purple"}-500" onclick="modalShower(${issue.id})">
            <div
              class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm flex flex-col h-full min-h-[260px]"
            >
              <!-- Top Section -->
              <div class="flex items-start justify-between mb-3">
                <img src="./images/${issue.status}-Status.png" alt="" />

                <span class="text-xs font-semibold px-3 py-1 rounded-full bg-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-100 text-${issue.priority === "high" ? "red" : issue.priority === "medium" ? "yellow" : "green"}-500">
                  ${issue.priority.toUpperCase()}     
                </span>
              </div>

              <h2 class="text-lg font-semibold text-gray-800">
                ${issue.title}
              </h2>

              <p class="text-sm text-gray-500 mt-2">
                ${issue.description}
              </p>

              <!-- Tags/Labels -->
              <div class="flex gap-2 mt-4 mb-2">
              ${issue.labels
                .map(
                  (
                    label,
                  ) => `<span class="flex gap-1 text-xs text-nowrap px-3 py-1 rounded-full border border-${label === "bug" ? "red" : "yellow"}-300 text-${label === "bug" ? "red" : "yellow"}-500 bg-${label === "bug" ? "red" : "yellow"}-50">
                    <img src="./images/${label === "bug" ? "BugDroid" : "Lifebuoy"}.png" alt="" /> ${label.toUpperCase()}
                  </span>`,
                )
                .join("")}
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
  // console.log("lol");
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
