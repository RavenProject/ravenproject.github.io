---
layout: page-w-banner
title: Pools
bannerTitle: Mining Pools
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
---

<div class="page-content">
  <div class="wrapper mt-8 mb-32 m-auto">
    <h2>How can I mine Ravencoin?</h2>
    <p>Designed to be mined on readily available consumer-grade hardware, Ravencoin uses a new algorithm known as X16R. It’s designed to be Apppcation Specific Integrated Circuit (ASIC) resistant and constantly switches between 16 different algorithms.</p>
    <p>To start mining RVN, you will first need to create a wallet and generate a wallet address that your RVN can be paid into. Next, choose a mining pool.</p>
    <p>To learn how to mine, visit: <a href="https://raven.wiki/wiki/Mining" target="_blank" rel="noopener">https://raven.wiki/wiki/Mining</a></p>
    <p class="mb-8">Ravencoin (RVN) is supported by the following mining pools:</p>
    <div class="flex flex-wrap">
      {% for exchange in site.data.pools %}
      <div class="mb-6 px-2 sm:w-1/2 md:w-1/3 text-center">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <!-- <a class="block px-6 py-8" href="{{ exchange.url }}" target="_blank"><img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/></a> -->
          <h3 class="px-2 py-6 mb-0"><a class="block p-4" href="{{ exchange.url }}" target="_blank">{{ exchange.name }}</a></h3>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>