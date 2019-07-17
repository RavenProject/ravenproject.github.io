---
layout: default
title: Home
permalink: /
modalTitle: "Announcement"
modalContent: 'Wallet version 2.4.0 is now available. <a href="/wallet">Click Here to Upgrade</a>'
modalId: "upgrade-notification"
modalCacheRef: "2.4.0"
---

<link href="/assets/vendors/mediabox/mediabox.css" rel="stylesheet">
<style>
  .banner {
    background: url("/assets/img/home/gplaypattern.png");
    padding: 12em 0 13em;
    animation: animatedBackground 15s linear infinite;
    -moz-animation: animatedBackground 15s linear infinite;
    -webkit-animation: animatedBackground 15s linear infinite;
    -ms-animation: animatedBackground 15s linear infinite;
    -o-animation: animatedBackground 15s linear infinite;
  }
  .banner h1 {
    max-width: 800px;
  }
  .banner .btn {
    min-width: 150px;
  }
  .video-icon .video-icon-button {
    height: 40px;
  }
  .video-icon svg {
    width: 40px;
    height: 40px;
  }
  .section-intro {
    background-color: #2e3e80;
  }
  .section-intro h3 {
    font-family: 'Lato';
  }
  .section-intro hr {
    border-color: #4c60b1;
  }
  .section-cta {
    background: #f15b22;
  }
  .section-cta .btn:hover {
    background: #fff;
    color: #000;
  }
  .section-exchange .wrapper {
    max-width: 800px;
  }

@keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-moz-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-webkit-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
@-ms-keyframes animatedBackground {
0% { background-position: 0 0; }
100% { background-position: -188px 0; }
}
</style>

<div class="banner text-center">
  <div class="wrapper">
    <h1 class="animated fadeInRight mb-3 mb-2 m-auto leading-tight">Ravencoin is a peer-to-peer blockchain, handling the efficient creation and transfer of assets from one party to another.</h1>

    <div class="animated fadeInLeft">
      <a class="btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/wallet/">Get Your Wallet</a>
      <a class="btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/buy-ravencoin/">Buy Ravencoin</a>
    </div>
    <div class="video-icon animated fadeInRight flex content-center justify-center font-semibold mt-4" uk-lightbox>
      <a class="video-icon-button mr-4 mediabox" href="https://www.youtube.com/embed/fbfUvkZaw2w?rel=0&amp;showinfo=0">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80  c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176  c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57  S349.156,266.641,344.48,269.57z" fill="#2e3e80"/>
        </svg>
      </a>
    <span class="mt-2">What is Ravencoin?</span></div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <h1 id="wallet_update" class="animated fadeInLeft mb-3 mb-2 m-auto leading-tight text-orange">New Ravencoin wallet version 2.4.0 is available</h1>
</div>
<div class="section-intro text-white py-20">
  <div class="wrapper">
    <div class="text-center m-auto" style="max-width: 900px;">
      <h2 class="text-white">Welcome to Ravencoin</h2>
      <p style="max-width: 900px;" class="m-auto">Ravencoin is a protocol based on a fork of the Bitcoin code which adds features specifically focused on allowing tokens to be issued on the Ravencoin blockchain. These tokens can have whatever properties the issue of the token decides - so they can be limited in quantity, named and be issued as securities or as collectibles.</p>
      <p class="mt-8">You can make your own security token within minutes and have it trade worldwide.</p>
      <hr class="border-b pt-6"/>
    </div>
    <hr class="my-8"/>
    <ul class="nav nav-tabs list-reset">
      <li class="active"><a href="#tab-1">Project Shares</a></li>
      <li class="tab-2"><a href="#tab-2">Virtual Goods</a></li>
      <li class="tab-3"><a href="#tab-3">Physical &amp; Digital Assets</a></li>
      <li class="tab-4"><a href="#tab-4">Credit</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-1" class="tab-pane active">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-token" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/token.svg"}}" alt="token"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
           <h3 class="text-white">Representing real world custodied physical or digital asset</h3>
            <ul class="list-reset">
              <li>Securities tokens: stock or shares of a company where the shares are represented by a token rather than a physical stock certificate</li>
              <li>Securities or partnership interests with the built-in ability to pay dividends in RVN</li>
              <li>Tokens which represent a coop, limited partnership, royalty sharing or profit sharing platform</li>
              <li>A token which represents a cflexd-funded item with the ability to transfer or resell the item</li>
            </ul>  
          </div>
        </div>    
      </div>
      <div id="tab-2" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-tickets" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/tickets.svg"}}" alt="tickets"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing virtual goods</h3>
            <ul class="list-reset">
              <li>Tickets to an event such as a Baltimore Ravens game with the ability to resell without worry of duplicates being made</li>
              <li>A license to allow an activity</li>
              <li>An access token to use a service</li>
              <li>In-game currency and items, transferable to other gamers outside of the game platform</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tab-3" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gold" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/gold.svg"}}" alt="gold"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing a share of a project</h3>
            <div class="flex flex-wrap">
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Gold bar</li>
                <li>Silver coins</li>
                <li>Physical Euros</li>
              </ul>
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Land Deeds</li>
                <li>DC Comics Presents #26</li>
                <li>Energy credits (Electricity, Wood, Gas, Oil, Wind)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="tab-4" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gift-card" style="max-width: 150px;" src="{{"/assets/img/svg/gift-card.svg"}}" alt="gift-card"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representing a credit</h3>
            <ul class="list-reset">
              <li>Gift cards</li>
              <li>Airline miles</li>
              <li>Reward points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="section-why bg-grey-lighter py-24">
  <div class="wrapper">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-full md:w-3/4">
        <h2>What Makes Ravencoin Different from Bitcoin?</h2>
        <p>The X16R algorithm intends to solve the centralization of mining seen on the Bitcoin blockchain caused by the introduction of expensive and highly efficient Application Specific Integrated Circuit (ASIC) hardware. By randomizing the order of 16 different hashing algorithms, Raven makes ASICs difficult to develop, allowing room for anyone to be able to mine the Raven network without the disadvantage of competing with ASIC hardware. The Raven team has also committed to change the hashing algorithms if a Raven ASIC miner is ever developed.</p>
        <ul class="checkmark">
          <li>Block reward of 5,000 RVN instead of 50 BTC.</li>
          <li>Block time of 1 minute instead of 10.</li>
          <li>Total coin supply of 21 Billion instead of 21 million.</li>
          <li>A new mining algorithm, X16R which allows for more decentralized mining.</li>
          <li>Addition of Asset issuance, and transfer.</li>
          <li>Future addition of unique assets, sub-assets, rewards, messaging, and voting.</li>
        </ul>
      </div>
      <div class="w-full sm:w-full md:w-1/4 text-center hidden md:block">
        <img id="logo-why" class="animated" style="margin-top: 30px;" src="{{"/assets/img/home/raven-flock.png"}}" alt="ravencoin logo">
      </div>
    </div>
  </div>
</div>
<div class="section-cta py-10">
  <div class="flex flex-wrap wrapper">
    <div class="w-full sm:w-1/2 md:w-3/4">
      <h2 class="text-white font-medium mb-3">Get Involved Today!</h2>
      <p class="text-white">Become a part of the community and contribute to RAVENCOIN’s global decentralized network of miners, contributes, traders, and developers.</p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 text-left sm:text-center">
      <a class="btn btn-primary mx-2 mt-5 mb-3 px-4 py-3 font-normal text-base rounded text-white border-white border-solid border-2 hover:text-black" href="/community">Join the Community</a>
    </div>
  </div>

</div>
<div class="section-exchange pt-20 pb-24 bg-grey-lighter text-center">
  <h2 class="font-medium">Exchanges</h2>
  <div class="wrapper mt-8 m-auto">
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
      <div class="mb-6 px-2 sm:w-1/2 md:w-1/3">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <a class="block px-6 py-4" href="{{ exchange.url }}" target="_blank" rel="nofollow"><img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/></a>
        </div>
      </div>
      {% endfor %}
    </div>
      <div class="text-center">
        <a class="btn btn-primary d-block mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/buy-ravencoin/">See All Exchanges</a>
      </div>
  </div>
</div>

<script src="/assets/vendors/mediabox/mediabox.js"></script>
<script>
  MediaBox('.mediabox');
</script>
<script type="text/javascript">

setInterval(function() {
  // Display the result in the element with id="wallet_update"
  let temp = document.getElementById("wallet_update");

  if (temp.style.color === 'orange') {
    temp.style.color = 'purple';
  } else {
    temp.style.color = 'orange';
  }
  }, 1000);

  window.addEventListener("load", function() {

    /* Tabs */

    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    function myTabClicks(tabClickEvent) {
      for (var i = 0; i < myTabs.length; i++) {
        myTabs[i].classList.remove("active");
      }
      var clickedTab = tabClickEvent.currentTarget;
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var myContentPanes = document.querySelectorAll(".tab-pane");
      for (i = 0; i < myContentPanes.length; i++) {
        myContentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = document.querySelector(activePaneId);
      activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
      myTabs[i].addEventListener("click", myTabClicks)
    }

    /* Waypoints */

    const targets = ['tab-token', 'tab-tickets', 'tab-gold', 'tab-gift-card', 'logo-why'];
    targets.forEach(function(target) {
      var el = document.getElementById(target);
      var waypoint = new Waypoint({
        element: el,
        handler: function(direction) {
          if(target === 'logo-why') {
            el.classList.add('fadeInRight')
          } else {
            el.classList.add('fadeInLeft')
          }
        },
        offset: '100%'
      })
    })
  });
</script>
