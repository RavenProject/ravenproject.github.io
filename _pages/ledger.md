---
layout: page-w-banner
title: Ledger
bannerTitle: Using Ledger Nano
bannerImage: /assets/img/pages/wallet/wallet-banner.jpg
permalink: /ledger/
---

<div class="wrapper mt-16 pb-20">
  <h2>How to use the Ledger Nano S and Ledger Nano X</h2>

  <p>The Ledger Nano S and Ledger Nano X are hardware wallets. Hardware wallets are a very secure way of storing the private keys used to spend your coins. Installing the Ravencoin app will allow you to manage your Ravencoin. However, it does not currently support managing Ravencoin assets at this time. When that function is available this document will be expanded to include instructions on how to manage Ravencoin assets.</p>

  <br>
  <h3>Before you begin</h3>

  <ul>
    <li>Download and install <a href="https://support.ledger.com/hc/en-us/articles/360006395553">Ledger Live</a>.</li>
    <li><a href="https://support.ledger.com/hc/en-us/articles/360006395233">Set up</a> your Ledger device.</li>
    <li><a href="https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware">Update</a> to the latest Ledger firmware if needed.</li>
    <li>Install the latest <a href="https://support.ledger.com/hc/en-us/articles/115005195945">Bitcoin app</a> on your device, as the Ravencoin app requires it.</li>
  </ul>

  <br>
  <h3>Installing the Ravencoin app on the Ledger device</h3>

  <ul>
    <li>Connect and unlock your device.</li>
    <li>Open Ledger Live and select Manager from the menu.</li>
    <li>If prompted, allow the manager on your device.</li>
    <li>Find the Ravencoin app in the app catalog.</li>
    <li>Click the install button for the Ravencoin app.</li>
    <li>An installation window will appear. If you receive a dialog stating "app required", it means you need to install or upgrade to the latest Bitcoin app first.</li>
    <li>Close the installation window after the installation is confirmed.</li>
  </ul>

  <br>
  <h3>Installing the Electrum-RVN wallet</h3>

  <p>In order to use your ledger device to manage your Ravencoin you will need to download and install the Electrum-RVN wallet which can be found here: <a href="https://github.com/kralverde/electrum-raven/releases">https://github.com/kralverde/electrum-raven/releases</a>. This project, originally by standard-error, as been updated in a fork. Choose the most recent version and download the appropriate choice for your operating system. Unfortunately, OSX is not currently supported in this new fork. If you are an OSX user, you may try running the raw python as outlined in the README of <a href="https://github.com/kralverde/electrum-raven">https://github.com/kralverde/electrum-raven</a> or use wine to run the .exe binary.</p> 
  <p>A better electrum client is currently being worked on. If you would like more detail about the current electrum client, see <a href="https://docs.google.com/document/d/1w0jRCX9fJg3c3BXCGHEIpE_VkJnoxIAG83QwBE-iONI/edit?usp=sharing">HERE</a>. You can track work on the new electrum client at our discord <a href="https://discord.gg/VuubYncHz4">HERE</a>. 
  </p>

  <p>When setting up the Electrum-RVN wallet for the first time follow these steps:</p>

  <ul>
    <li>You will need to connect your ledger device to your computer, unlock it and enter the Ravencoin app before proceeding.</li>
    <li>On the first screen you'll be presented with a text box which has the name of the wallet file that will be created on your computer. It will have a name of default_wallet. You can either rename this or leave it as is and click next.</li>
    <li>On the second screen you'll be presented with three options: Standard wallet, Multi-signature wallet and Import Ravencoin addresses or private keys. Choose the Standard Wallet option and click next.</li>
    <li>On the third screen you'll see four options: Create a new seed, I already have a seed, Use a master key and Use a hardware device. Select Use a hardware device and click next.</li>
    <li>The program will scan to see if a hardware device is available. If so, you should see the option to select an unnamed ledger [ledger, initialized]. Click next.</li>
    <li>You will be asked to choose the type of addresses in your wallet, there is only one option so you can leave that alone. In the text box below it will show the correct derivation path. Click next.</li>
    <li>The next screen will ask if you want to encrypt the wallet file. This file contains metadata and a master public key to watch the addresses you manage using the application. Private keys are never shared with the application or computer and remain on the device. If you do encrypt the wallet file, you will need to have the device connected and the Ravencoin app open to use the wallet. If you don't encrypt the wallet file, you'll be able to open it without the device but the device will still be required when you send coins or verify a receiving address.</li>
    <li>The wallet is now set up.</li>
  </ul>

  <p>When using the Electrum-RVN wallet after initial setup:</p>

  <ul>
    <li>If you encrypted your wallet file, you'll need to connect your Ledger device and open the Ravencoin app.</li>
    <li>In the Electrum-RVN wallet select the wallet file you want to open and click next.</li>
    <li>The wallet will open and you can send and receive RVN.</li>
  </ul>

  <br>
  <h3>Using the Electrum-RVN wallet</h3>

  <p>When the wallet opens you will see five options across the top: File, Wallet, View, Tools and Help. You will also see three tabs labeled History, Send and Receive. When the wallet is open your account balance will be shown in the bottom left hand corner of the wallet application. This will be visible no matter what tab you have open. The History tab will show the History of transactions using your accounts, the Send tab will allow you to create and broadcast transactions to the Ravencoin blockchain and the Receive tab will allow you to choose and verify a receiving address for incoming RVN.</p>

  <br>
  <h3>Using the Electrum-RVN wallet to receive RVN</h3>

  <ul>
    <li>Click the Receive tab.</li>
    <li>The wallet will choose a receiving address automatically which will be displayed in a text box labeled "Receiving address". You can use a previously used address if you would like but this doesn't offer optimal privacy.</li>
    <li>To verify the receiving address on your device, click the eye icon on the right-hand side of the "Receiving address" text box.</li>
    <li>A little text box with the words "showing address" will appear.</li>
    <li>Verify the receiving address on your Ledger device by clicking the right button a few times to verify the full address and then select to approve or reject the address.</li>
    <li>Enter the requested amount of RVN to receive and click Save.</li>
    <li>Provide the receiving address to the person who will be sending you RVN.</li>
  </ul>

  <br>
  <h3>Using the Electrum-RVN wallet to send RVN</h3>

  <ul>
    <li>Click the Send Tab.</li>
    <li>Paste the recipient address into the "Pay to" text box.</li>
    <li>Enter an optional description for your own records.</li>
    <li>Enter the amount of RVN you wish to send into the "Amount" text box.</li>
    <li>Click the Preview button to preview the transaction before sending it to the Ledger device.</li>
    <li>Click the Send button.</li>
    <li>A small window will appear telling you the amount to be sent and the mining fee for the transaction.</li>
    <li>Click Yes to proceed.</li>
    <li>Review and confirm the transaction details on your device. You may have to wait a few seconds for the details to appear.</li>
    <li>Click the right button a few times to verify the amount and recipient address and then select to approve or reject the transaction.</li>
  </ul>

  <br>
  <h3>Support</h3>

  <p>If you need any help using your Ledger device with Ravencoin, you can contact the community through Telegram and Discord.</p>
</div>
