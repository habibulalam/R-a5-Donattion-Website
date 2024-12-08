// Button functions

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