// =========================
// Part 1: Variables & Conditionals
// =========================

// Example: Ask user for age and check if adult
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:"); // user input
  age = Number(age); // convert string to number

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ✅";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor ❌";
  }
});


// =========================
// Part 2: Functions
// =========================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format string
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Event for calculation
document.getElementById("calcBtn").addEventListener("click", function() {
  let total = calculateTotal(100, 0.15); // Example: $100 with 15% tax
  document.getElementById("calcResult").textContent = 
    `Total with tax: $${total.toFixed(2)}. ${greetUser("Avelar")}`;
});


// =========================
// Part 3: Loops
// =========================

const favoriteFoods = ["Pizza", "Burger", "Pasta", "Ice Cream"];

document.getElementById("listBtn").addEventListener("click", function() {
  const list = document.getElementById("foodList");
  list.innerHTML = ""; // Clear previous list

  // Example with for loop
  for (let i = 0; i < favoriteFoods.length; i++) {
    let li = document.createElement("li");
    li.textContent = favoriteFoods[i];
    list.appendChild(li);
  }

  // Example with forEach loop (could also use while loop)
  console.log("Foods (via forEach):");
  favoriteFoods.forEach(food => console.log(food));
});


// =========================
// Part 4: DOM Manipulation
// =========================

// 1. Toggle dark mode (toggle a CSS class)
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// 2. Change text dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dynamicText").textContent = "Text has been changed ✅";
});

// 3. Create a new element on the fly
let newElement = document.createElement("p");
newElement.textContent = "This paragraph was added dynamically!";
document.body.appendChild(newElement);
