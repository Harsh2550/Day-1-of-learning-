import "./style.css";


// ========================================
// 1. CAMPAIGN DATA
// ========================================

const campaign = {
  title: "Build a Decentralized Community Platform",

  goal: 100000,

  raised: 45000
};


// ========================================
// 2. GET HTML ELEMENTS
// ========================================

const goalElement =
  document.querySelector("#goal");

const raisedElement =
  document.querySelector("#raised");

const progressElement =
  document.querySelector("#progress");

const progressTextElement =
  document.querySelector("#progressText");

const progressDescriptionElement =
  document.querySelector("#progressDescription");

const connectWalletButton =
  document.querySelector("#connectWallet");

const contributeButton =
  document.querySelector("#contributeButton");

const walletStatus =
  document.querySelector("#walletStatus");

const walletInfo =
  document.querySelector("#walletInfo");

const walletAddress =
  document.querySelector("#walletAddress");

const messageBox =
  document.querySelector("#messageBox");


// ========================================
// 3. FORMAT CURRENCY
// ========================================

function formatCurrency(amount) {

  return `₹${amount.toLocaleString("en-IN")}`;

}


// ========================================
// 4. UPDATE CAMPAIGN UI
// ========================================

function updateCampaignUI() {

  const progress =
    Math.min(
      (campaign.raised / campaign.goal) * 100,
      100
    );


  // Goal

  goalElement.textContent =
    formatCurrency(campaign.goal);


  // Raised

  raisedElement.textContent =
    formatCurrency(campaign.raised);


  // Progress bar

  progressElement.style.width =
    `${progress}%`;


  // Progress percentage

  progressTextElement.textContent =
    `${Math.round(progress)}%`;


  // Description

  progressDescriptionElement.textContent =
    `${formatCurrency(campaign.raised)} of ${formatCurrency(campaign.goal)} raised`;

}


// ========================================
// 5. SHOW MESSAGE
// ========================================

function showMessage(message) {

  messageBox.textContent =
    message;

  messageBox.classList.remove("hidden");

}


// ========================================
// 6. CONNECT WALLET DEMO
// ========================================

let walletConnected = false;


connectWalletButton.addEventListener(
  "click",
  () => {

    walletConnected =
      !walletConnected;


    if (walletConnected) {

      // Demo wallet address

      const demoAddress =
        "0x742d35Cc6634C0532925a3b844Bc454e";


      walletStatus.textContent =
        "Wallet Connected";


      walletStatus.classList.remove(
        "disconnected"
      );


      walletStatus.classList.add(
        "connected"
      );


      walletInfo.classList.remove(
        "hidden"
      );


      walletAddress.textContent =
        `${demoAddress.slice(0, 6)}...${demoAddress.slice(-4)}`;


      connectWalletButton.textContent =
        "Wallet Connected";


      connectWalletButton.classList.add(
        "connected-button"
      );


      showMessage(
        "Demo wallet connected successfully. Real blockchain wallet integration will be added later."
      );

    }


    else {

      walletStatus.textContent =
        "Wallet Not Connected";


      walletStatus.classList.remove(
        "connected"
      );


      walletStatus.classList.add(
        "disconnected"
      );


      walletInfo.classList.add(
        "hidden"
      );


      connectWalletButton.textContent =
        "Connect Wallet";


      connectWalletButton.classList.remove(
        "connected-button"
      );


      showMessage(
        "Wallet disconnected from the demo."
      );

    }

  }
);


// ========================================
// 7. CONTRIBUTE
// ========================================

contributeButton.addEventListener(
  "click",
  () => {

    // Require wallet connection

    if (!walletConnected) {

      showMessage(
        "Please connect your demo wallet first."
      );

      return;

    }


    // Ask contribution amount

    const amountInput =
      prompt(
        "Enter contribution amount in ₹:"
      );


    // User cancelled

    if (amountInput === null) {

      return;

    }


    // Convert input to number

    const amount =
      Number(amountInput);


    // Validate number

    if (
      !Number.isFinite(amount) ||
      amount <= 0
    ) {

      showMessage(
        "Please enter a valid contribution amount."
      );

      return;

    }


    // Check campaign goal

    if (
      campaign.raised >= campaign.goal
    ) {

      showMessage(
        "This campaign has already reached its funding goal."
      );

      return;

    }


    // Calculate remaining amount

    const remaining =
      campaign.goal -
      campaign.raised;


    // Prevent exceeding goal

    const acceptedAmount =
      Math.min(
        amount,
        remaining
      );


    // Update raised amount

    campaign.raised +=
      acceptedAmount;


    // Update screen

    updateCampaignUI();


    // Message

    if (
      acceptedAmount < amount
    ) {

      showMessage(
        `Only ${formatCurrency(acceptedAmount)} was accepted because the campaign reached its goal.`
      );

    }

    else {

      showMessage(
        `${formatCurrency(acceptedAmount)} contribution added successfully in demo mode.`
      );

    }

  }
);


// ========================================
// 8. INITIAL UI LOAD
// ========================================

updateCampaignUI();