---
layout: page-w-banner
title: Pools
bannerTitle: Mining Pools
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /pools/
---

<div class="page-content">
  <div class="wrapper mb-32 m-auto">
    <h2>How can I mine Ravencoin?</h2>
    <p>Designed to be mined on readily available consumer-grade hardware, Ravencoin uses a new algorithm known as KAWPOW. It’s designed to be Application Specific Integrated Circuit (ASIC) resistant and is designed to be efficient on consumer GPU hardware.</p>
    <p>To start mining RVN, you will first need to create a wallet and generate a wallet address that your RVN can be paid into. Next, choose a mining pool.</p>
    <p>To learn how to mine, visit: <a href="https://raven.wiki/wiki/Mining" target="_blank" rel="noopener">https://raven.wiki/wiki/Mining</a></p>
    <p class="mb-8">Ravencoin (RVN) is supported by the following mining pools:</p>
    <div class="flex flex-wrap">
      {% assign n = site.data.pools | size %}
      {% assign random_sorted_pools = site.data.pools | sample: n %}
      {% for pool in random_sorted_pools %}
      <div class="mb-2 px-2 sm:w-1/2 md:w-1/3 text-center">
        <div class="bg-gray-100 max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <span class="mb-0"><a class="block p-4" href="{{ pool.url }}" target="_blank">{{ pool.name }}</a></span>
        </div>
      </div>
      {% endfor %}
    </div>

    <h3>Other options</h3>
    <p>While these are not mining pools in the traditional sense, you can also mine Ravencoin with following platforms.</p>
    <p>Most of the time you don't have to create a wallet or generate a wallet address. You also don't have to download and update a miner yourself, most platforms include a mining software in their client application.</p>

    <p class="mb-8">Ravencoin (RVN) is supported on:</p>
    <div class="flex flex-wrap">
      {% assign n = site.data.platforms | size %}
      {% assign random_sorted_pools = site.data.platforms | sample: n %}
      {% for pool in random_sorted_pools %}
      <div class="mb-2 px-2 sm:w-1/2 md:w-1/3 text-center">
        <div class="bg-gray-100 max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
          <span class="mb-0"><a class="block p-4" href="{{ pool.url }}" target="_blank">{{ pool.name }}</a></span>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
