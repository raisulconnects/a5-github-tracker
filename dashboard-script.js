console.log("Github Issues Tracker Script: ");
console.log("For Dashboard Page");
console.log("---------------------------------------------");
// -----------------------------------------------------------------------

// This Portion of the Script is for Dashboard Page -------------------------------------------------------------

// Selectors
const cardBox = document.getElementById("card-box");
const issuesNumber = document.getElementById("issuesNumber");

let content = "";

const githubFetcher = async () => {
  try {
    const response = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/issues",
    );
    const data = await response.json();
    content = data.data
      .map((issue) => {
        return `
        
        <div class="card">
          <div
            class="w-full max-w-sm border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
          >
            <!-- Top Section -->
            <div class="flex items-start justify-between mb-3">
              <!-- Icon -->
              <img src="./images/${issue.status}-Status.png" alt="" />

              <!-- Priority Badge -->
              <span
                class="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-500"
              >
                HIGH
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-lg font-semibold text-gray-800 leading-snug">
              ${issue.title}
            </h2>

            <!-- Description -->
            <p class="text-sm text-gray-500 mt-2">
              ${issue.description}
            </p>

            <!-- Tags -->
            <div class="flex gap-2 mt-4">
              <span
                class="flex gap-1 text-xs px-3 py-1 rounded-full border border-red-300 text-red-500 bg-red-50"
              >
                <img src="./images/BugDroid.png" alt="" /> BUG
              </span>
              <span
                class="flex gap-1 text-xs px-3 py-1 rounded-full border border-yellow-300 text-yellow-600 bg-yellow-50 text-nowrap"
              >
                <img src="./images/Lifebuoy.png" alt="" /> HELP WANTED
              </span>
            </div>

            <!-- Footer -->
            <div class="mt-4 pt-3 border-t text-xs text-gray-400">
              <p> #${issue.id} by ${issue.author}</p>
              <p class="pt-1">${new Date(issue.createdAt).toLocaleString().split(",")[0]}</p>
            </div>
          </div>
        </div>
        `;
      })
      .join("");

    cardBox.innerHTML = content;
    issuesNumber.textContent = `${data.data.length} Issues`;

    console.log(data.data);
  } catch (e) {
    console.log(e.message);
  }
};

cardBox.addEventListener("click", function (e) {
  console.log("lol");
});

githubFetcher();
