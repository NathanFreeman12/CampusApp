// This file controls button clicks and simple features for the website
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeText = document.getElementById("welcomeText");

if (welcomeBtn) {
  welcomeBtn.addEventListener("click", function () {
    welcomeText.textContent = "Welcome to the Campus Life App!";
  });
}

// Home page student tip button
let tipBtn = document.getElementById("tipBtn");
let tipText = document.getElementById("tipText");

let tips = [
  "Start assignments early.",
  "Check your school email often.",
  "Use a planner to stay organized.",
  "Ask for help when you need it."
];

if (tipBtn) {
  tipBtn.addEventListener("click", function () {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipText.textContent = randomTip;
  });
}

// Weather button
let weatherBtn = document.getElementById("weatherBtn");
let weatherText = document.getElementById("weatherText");

if (weatherBtn) {
  weatherBtn.addEventListener("click", async function () {
    weatherText.textContent = "Loading weather...";

    try {
      let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=39.0997&longitude=-94.5786&current=temperature_2m");
      let data = await response.json();

      weatherText.textContent = "Current temperature: " + data.current.temperature_2m + "°C";
    } catch (error) {
      weatherText.textContent = "Could not load weather.";
    }
  });
}

// Events page API button
let eventsBtn = document.getElementById("eventsBtn");
let eventsText = document.getElementById("eventsText");

if (eventsBtn) {
  eventsBtn.addEventListener("click", async function () {
    eventsText.innerHTML = "Loading announcements...";

    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
      let data = await response.json();

      let output = "";
      for (let i = 0; i < data.length; i++) {
        output += "<div class='card p-3 mb-3'>";
        output += "<h4>" + data[i].title + "</h4>";
        output += "<p>" + data[i].body + "</p>";
        output += "</div>";
      }

      eventsText.innerHTML = output;
    } catch (error) {
      eventsText.innerHTML = "Could not load announcements.";
    }
  });
}

// Dining page food search
let foodBtn = document.getElementById("foodBtn");
let foodInput = document.getElementById("foodInput");
let foodText = document.getElementById("foodText");

let foods = ["pizza", "burger", "coffee", "fries", "salad", "sandwich"];

if (foodBtn) {
  foodBtn.addEventListener("click", function () {
    let userFood = foodInput.value.toLowerCase();
    let found = false;

    for (let i = 0; i < foods.length; i++) {
      if (foods[i].includes(userFood) && userFood !== "") {
        foodText.innerHTML = "<p>Found: " + foods[i] + "</p>";
        found = true;
        break;
      }
    }

    if (!found) {
      foodText.innerHTML = "<p>No food found.</p>";
    }
  });
}