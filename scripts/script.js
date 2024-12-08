//Donation and history Button functions

const donateBtn = document.getElementById("donate-btn");
const historyBtn = document.getElementById("history-btn");

const activeButton = "btn bg-[#B4F461] text-black text-xl font-semibold hover:bg-[#B4F461] px-8 border-none";
const nonActiveButton = "btn bg-white text-black text-xl font-semibold hover:text-[#B4F461] px-8 border";

donateBtn.addEventListener("click", function(){
    donateBtn.classList = activeButton ;

    historyBtn.classList = nonActiveButton ;
})

historyBtn.addEventListener("click" , function(){
    historyBtn.classList = activeButton;

    donateBtn.classList = nonActiveButton;
})




// Donation calculations function


function donationCalculation ( coinID , inputID){
    const myTotalAmount = parseInt(document.getElementById("my-initial-coins").innerText)
    const coin = parseInt(document.getElementById(coinID).innerText);
    const inputAmount = document.getElementById(inputID).value;

    console.log(coin , inputAmount);

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // Validating input field (only take positive number)
    for(const char of inputAmount){
        if(!numbers.includes(char)){
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
}