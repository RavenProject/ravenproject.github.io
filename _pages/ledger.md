---
layout: page-w-banner
title: Ledger
description: "Ledger Guide"
bannerTitle: Ledger Guide
bannerImage: /assets/img/pages/wallet/wallet-banner.jpg
permalink: /ledger/
---
<div class="wrapper mt-16 pb-20">
    
   <h2>How to use the Ledger Nano S and Ledger Nano X with Ravencoin</h2>
    
   <p>The Ledger Nano S and Ledger Nano X are hardware wallets. Hardware wallets are the most secure method of storing the private keys used to spend your coins. Installing the Ravencoin app will allow you to manage your Ravencoin. It does not currently support managing Ravencoin Assets at this time. When that function is available this document will be expanded to include instructions on how to manage Ravencoin assets.</p>
   
   <br>
    
   <h3>Before you begin</h3>
   <ul>
    <li> Make sure that you have initialized your Ledger device</li>
    <li> The latest firmware is installed</li>
    <li> Ledger Live is ready to use</li>
    <li> The bitcoin app is installed on your device</li>
   </ul>
   
   <br>
   
   <h3>Installing the Ravencoin app on the Ledger Device:</h3>
   <ul>
    <li> Open the Ledger Live Manager</li>
    <li> Connect and unlock your device</li>
    <li> If prompted, allow the manager on your device by pressing the right button</li>
    <li> Find the Ravencoin app</li>
    <li> Click the install button</li>
    <li> An Installation window will appear and your device will display processing</li>
    <li> Close the app installation confirmed window</li>
  </ul>
  
  <br>
  
  <h3>Electrum Client Setup</h3>
    
   <p>In order to use your ledger device to manage your Ravencoin you will need to download and install the Electrum-RVN client <a href="https://github.com/traysi/electrum-raven/releases/" target="_blank">which can be found here</a>. Choose the <b>electrum-rvn-3.2.3-rvn4-setup.exe</b> option. For more advanced users, the sha256 sum is also included to verify the integrity of the file before installation. This will work on Windows systems only.</p>
    
   <p>When setting up the Electrum RVN client for the first time follow these steps:</p>
   
   <ol type="1">
    <li> You will want to connect your ledger device to your computer, unlock it and enter the Ravencoin app before proceeding.</li>
    <li> On the first screen, you'll be presented with a text box which has the name of the wallet file that will be created on your computer. It will have a name default_wallet. You can either rename this file or leave it as is.</li>
    <li> Click next </li>
    <li> On the second screen you'll be presented with three options: Standard wallet, Multi-signature wallet and Import Ravencoin addresses or private keys. Choose the Standard Wallet option and click next</li>
    <li> On the third screen you'll see 4 options: Create a new seed, I already have a seed, Use a master key, Use a hardware device. Select Use a hardware device and click next.</li>
    <li> The program will scan to see if a hardware device is available. If so, you should see the option to select an unnamed ledger [ledger, initialized]. Click next.</li>
    <li> You will be asked to choose the type of addresses in your wallet, there is only one option so you can leave that alone. In the text box below, it will show the suggested derivation path. If you don't know what this is don't do anything and click next.</li>
    <li> The next screen will ask if you want to encrypt the wallet file. This file contains metadata and a master public key to watch the address you manage using the application. Private keys are never shared with the application or computer and remain on the device. If you do encrypt the wallet file, you will need to have the device connected and the Ravencoin app open to use the wallet. If you don't encrypt the wallet you'll be able to open it without the device but you won't be able to send coins or verify the receiving address.</li>
    <li> The wallet is now set up.</li>
   </ol> 
   
   <br>
   
   <h3> When using the wallet after initial setup:</h3>
    <ul>
    <li> Connect your ledger device and open the Ravencoin app </li>
    <li> In the electrum raven client select the wallet file you want to open and click next</li>
    <li> If you encrypted your wallet file, you'll need to confirm that your device is connected and detected by the wallet software, click next.</li>
    <li> The wallet will open, and you can send and receive as normal</li>
    </ul>
    
   <br>
    
   <h3>Using the Electrum-RVN client</h3>
    
   <p> When the wallet opens, you will see 5 options across the top: File, Wallet, View, Tools and Help. You will also see 3 tabs labeled History, Send and Receive. When the wallet is open, your account balance will be shown in the bottom left hand corner of the wallet application. This will be visible no matter what tab you have open. The History tab will show the history of transactions using your accounts, the send tab will allow you to broadcast transactions to the Ravencoin blockchain and the receive address will allow you to choose and verify a receiving address for incoming coins. </p>
    
   <h3>Using the Electrum-RVN client to Receive Ravencoin</h3>
   
   <ul>
    <li> Click the Receive tab</li>
    <li> The wallet will choose a receive address automatically which will be displayed in a text box labeled receiving address. You can use a previously used address if you would like but this doesn't offer optimal privacy.</li>
    <li> To verify the receiving address on your device, click the eye icon on the right-hand side of the Receiving address text box.</li>
    <li> A little text box with the words "showing address" will appear</li>
    <li> Verify the receiving address on your ledger device. The address will scroll to show the full address and will allow you to confirm by pressing the right button or deny by pressing the left button.</li>
   </ul>
   
   <br>
   
   <h3>Using the Electrum-RVN client to send Ravencoin</h3>
   
   <ul>
    <li> Click the Send Tab</li>
    <li> Paste the target address into the "Pay to" Text box</li>
    <li> You can leave an optional description</li>
    <li> Put the amount of RVN you want to send into the "Amount" text box</li>
    <li> Click the Preview button to preview the transaction before sending it to the ledger device.</li>
    <li> Click the Send button</li>
    <li> A small text box will appear telling you the amount to be sent and the mining fee for the transaction.</li>
    <li> Click yes to proceed</li>
    <li> <b>Verify the transaction details on your device</b>, you'll have to wait a couple of seconds for it to appear.</li>
    <li> It will show the inputs for the transaction with the amounts and the address that will be receiving the transaction. Click the right button to confirm and the left button to deny.</li>
    <li> If there are multiple inputs and outputs, you'll have to confirm them each individually.</li>
    <li> The transaction will be sent.</li>
   </ul>
   
   <br>
    
   <h3>Support</h3>
    
   <p>If you need any help using your ledger device with Ravencoin, you can contact the community through telegram and Discord specifically the ledger-electrum channel.</p>

</div>
