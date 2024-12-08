//Donation and history Button functions

const donationSection = document.getElementById("donation-section")
const historySection = document.getElementById("history-section")

const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");

const activeButton = "btn bg-[#B4F461] text-black text-xl font-semibold hover:bg-[#B4F461] px-8 border-none";
const nonActiveButton = "btn bg-white text-black text-xl font-semibold hover:text-[#B4F461] px-8 border";

donateBtn.addEventListener("click", function () {
    donateBtn.classList = activeButton;

    historyBtn.classList = nonActiveButton;

    donationSection.style.display = "block"; // Show Donation Section

    historySection.style.display = "none"
})

historyBtn.addEventListener("click", function () {
    historyBtn.classList = activeButton;

    donateBtn.classList = nonActiveButton;

    historySection.style.display = "block"

    donationSection.style.display = "none"; // Show the div

})




// Donation calculations function
function donationCalculation(coinID, inputID, title) {
    const myTotalAmount = parseInt(document.getElementById("my-initial-coins").innerText)
    const coin = parseInt(document.getElementById(coinID).innerText);
    const inputAmount = document.getElementById(inputID).value;

    console.log(coin, inputAmount);

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // Validating input field (only take positive number)
    for (const char of inputAmount) {
        if (!numbers.includes(char)) {
            alert('Please enter a valid "Positive Number"')
            return
        }
    }
    // End validation check

    // Convert string to Int (Input Amount)
    const imputedAmountNumber = parseInt(inputAmount);


    // adding To total donation coin
    const latestCoin = coin + imputedAmountNumber;
    document.getElementById(coinID).innerText = latestCoin;

    // Reducing from my total amount
    const myNewAmount = myTotalAmount - imputedAmountNumber;
    document.getElementById("my-initial-coins").innerText = myNewAmount;

    // Clearing input field
    document.getElementById(inputID).value = '';




    // History section functions Starts
    const historySection = document.getElementById("history-section");

    const titleText = document.getElementById(title).innerText;
    // console.log(titleText);

    // Date
    const date =updateDateTime();

    // Create a new div element
    const newDiv = document.createElement("div");

    // Add classes to the new div
    newDiv.className = "p-8 border rounded-lg mb-6";

    // Set the inner HTML of the div
    newDiv.innerHTML = `
    <h1 class="text-xl font-bold text-black mb-4">
        ${imputedAmountNumber} Taka is Donated ${titleText}
    </h1>
    <p class="text-[#111111B3]">
        Date : <span id="dateTimeDisplay">${date}</span>
    </p>
    `;

    // Append the new div to the history section
    historySection.appendChild(newDiv);



    // Show the modal at the end
    const modal = document.getElementById("my_modal_1");
    modal.showModal();  // This will show the modal




}



// Date and time setup
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
    };

    // Format date and time
    const dateTimeString = now.toLocaleString('en-US', options);
    return dateTimeString
}
