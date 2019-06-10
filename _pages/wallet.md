---
layout: page-w-banner
title: Wallet
bannerTitle: Ravencoin Wallets
bannerImage: /assets/img/pages/wallet/wallet-banner.jpg
permalink: /wallet/
---

<div class="page-content">
  <div class="wrapper text-center pt-8 pb-20" style="max-width: 700px;">
    <h2 class="mb-16">App Downloads With Asset Support</h2>
    <div class="flex flex-wrap align-center justify-center pb-4">
      <div class="px-3 w-full sm:w-1/2 text-center sm:text-right mb-5">
          <a href="https://itunes.apple.com/us/app/rvn-wallet/id1371751946?mt=8" target="_blank" class="block"><img style="width:100%;width: 200px;" src="/assets/img/pages/wallet/app-store-badge.svg" alt="app store"/></a>
      </div>
      <div class="px-3 w-full sm:w-1/2 text-center sm:text-left">
        <a href="https://play.google.com/store/apps/details?id=com.ravenwallet" target="_blank" class="block"><img style="width:100%;width: 200px;" src="/assets/img/pages/wallet/google-play-badge.svg" alt="google play"/></a>
      </div>
    </div>
    <h2 class="mt-10 mb-16">Desktop Downloads</h2>
    <div class="flex flex-wrap align-center justify-center">
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-12">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <a class="block px-6 py-4" href="https://github.com/RavenProject/Ravencoin/releases" target="_blank"><img style="max-height: 125px;" src="/assets/img/pages/wallet/windows.svg" align="middle" alt=" Windows wallet"/></a>
        </div>
        <a class="block mt-8 text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white" href="https://github.com/RavenProject/Ravencoin/releases" download><i class="zmdi zmdi-download"></i><span class="inline-block ml-3">Windows</span></a>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-12">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <a class="block px-6 py-4" href="https://github.com/RavenProject/Ravencoin/releases" target="_blank"><img style="max-height: 125px;" src="/assets/img/pages/wallet/mac.svg" align="middle" alt=" Mac wallet"/></a>
        </div>
        <a class="block mt-8 text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white" href="https://github.com/RavenProject/Ravencoin/releases" download><i class="zmdi zmdi-download"></i><span class="inline-block ml-3">Mac</span></a>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 px-4 mb-12">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <a class="block px-6 py-4" href="https://github.com/RavenProject/Ravencoin/releases" target="_blank"><img style="max-height: 125px;" src="/assets/img/pages/wallet/linux.svg" align="middle" alt="Linux wallet"/></a>
        </div>
        <a class="block mt-8 text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white" href="https://github.com/RavenProject/Ravencoin/releases" download><i class="zmdi zmdi-download"></i><span class="inline-block ml-3">Linux</span></a>
      </div>
    </div>
    <h2>3rd Party Wallets</h2>
    <div class="flex flex-wrap">
      {% for wallet in site.data.wallets %}
      <div class="mb-6 px-2 sm:w-1/2 text-center">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <a class="block px-6 py-4" href="{{ wallet.url }}" target="_blank"><img src="{{ wallet.logo }}" align="middle" alt="{{ wallet.name }} wallet"/>
          {% if wallet.asset-support %}
            <div style="width:125px;height:20px;background:orange;text-align:center;line-height:20px;border-radius:10px;margin-bottom:4px; margin-left:4px">Asset Support</div></a>
          {% else %}
            <div style="width:125px;height:20px;background:none;text-align:center;line-height:20px;border-radius:10px;margin-bottom:4px; margin-left:4px"></div></a>
          {% endif %}
        </div>
        <div class="flex flex-wrap">
          {% for platform in wallet.platforms %}
            <img style="height: 25px; length: 16px; padding-right: 15px; padding-top: 4px;" src="/assets/img/pages/wallet/{{platform}}.svg"/>
          {% endfor %}
        </div>
        <a class="block mt-4 mb-8 text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white" href="{{ wallet.url }}"><i class="zmdi zmdi-download"></i><span class="inline-block ml-3">{{wallet.name}} Wallet</span></a>
      </div>
      {% endfor %}
    </div>
    <h2 class="mt-16 mb-8">Paper Wallet</h2>
    <div class="pt-8 mb-8 pb-8">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <a class="inline-block text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white px-8" href="https://github.com/todd1251/WalletGenerator.net/tree/ravencoin" target="_blank"><span class="inline-block ml-3">Paper Wallet | Contributed by Penfold</span></a>
        </div>
        <div class="w-full sm:w-1/2 px-2 mb-4">
          <a class="inline-block text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white px-8" href="//paperwallet.ravencoin.online" target="_blank"><span class="inline-block ml-3">Paper Wallet | Contributed by MSFTserver</span></a>
        </div>
      </div>
    </div>
    <h2 class="mt-16 mb-8">All Releases</h2>
    <div class="pt-8 mb-8">
      <a class="inline-block text-lg bg-blue hover:bg-blue-dark rounded p-2 text-white px-8" href="https://github.com/MSFTserver/RavenCoin-Wallet-With-Miners/releases" download><i class="zmdi zmdi-link"></i><span class="inline-block ml-3">View All</span></a>
    </div>
  </div>
</div>

<style>
  .page-content a {
    color: #fff !important;
  }
</style>
