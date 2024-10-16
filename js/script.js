// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
//only appears when the guest list is full
const assignButton = document.querySelector(".assign");
// list with the guest’s name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", (e) => {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    clearInput();
  }
  updateGuestCount();
});

//Clears the input box
const clearInput = function () {
  guestInput.value = "";
};

//Adds guest to the list
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "antipasto",
    "crudite",
    "green salad",
    "bread",
    "chicken entree",
    "hot entree",
    "vegan entree",
    "potato",
    "pasta",
    "cookies",
    "fruit salad",
    "ice cream"
  ];
  //Selects all the guests(li) inside the guest list(unordered list)
  const allGuests = document.querySelectorAll(".guest-list li");

  //Loops through all the guest and assigns a random dish
  for (let guest of allGuests) {
    //Generates a number between 0 and the length of potluckItems to select a random dish
    const randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);

    //Updates potluckItems each time a dish is assigned
    const randomPotluckItem = potluckItems[randomPotluckIndex];

    const listItem = document.createElement("li");
    //Lists the guest name and item the person is bringing
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", (e) => {
  assignItems();
  //Disables the button once the loop completes: fixes the duplicate dish assignment
  assignButton.disabled = true;
});
