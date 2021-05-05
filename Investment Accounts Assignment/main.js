// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
let maxAmount = 5000; // account values should be b/t 0 and max

// Random Values for the Array
for (let i = 0; i < 200; i++) {
  accounts.push(Math.floor(Math.random(1, 10) * 5000));
}

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let betweenTwoandFour = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 2000 && accounts[i] <= 4000) {
      betweenTwoandFour ++;
    }
  }
  outputEl.innerHTML = "Count Range: " + betweenTwoandFour;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  let amountDonated = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] <= 2000) {
      amountDonated += 500;
      accounts[i] += 500;
    }
  }
  outputEl.innerHTML = "Generous Donor: " + amountDonated;
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  let amountStolen = 0;
  for (let i = 0; i < accounts.length; i++) {
    amountStolen += accounts[i] * .05;
    accounts[i] *= .95;
  }
  outputEl.innerHTML = "Hacker Attack: " + amountStolen;
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  let max = Math.max(...accounts);
  let min = Math.min(...accounts);
  let ave = 0;
  for (let i = 0; i < accounts.length; i++) {
    ave += accounts[i] / accounts.length;
  }
  outputEl.innerHTML = "Investment Stats: " + max + "max, " + min + "min, " + ave + "ave.";
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  let addAccountInput = prompt("Want to create a new account? please input the amount you wish to have");
  accounts.push(addAccountInput);
  outputEl.innerHTML = "Add Account";
}

function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  let amountRemoved = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] <= 500) {
      amountRemoved ++;
      accounts.splice(i, 1, 0);
    }
  }
  outputEl.innerHTML = "Remove Low Accounts: " + amountRemoved;
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  let total = 0;
  let howManyTakenFrom = 0;
  let howManyReceived = 0;
  let howMuchReceived = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] >= 4000) {
      howManyTakenFrom ++;
      total += 400;
      accounts[i] -= 400
    }
    if (accounts[i] <= 1000) {
      howManyReceived ++;
      accounts[i] += total / howManyReceived
      howMuchReceived = accounts[i] += total / howManyReceived;
    }
  }
  outputEl.innerHTML = "Robin Hood: " + howManyReceived + " how many received, " + howMuchReceived + " how much received.";
}