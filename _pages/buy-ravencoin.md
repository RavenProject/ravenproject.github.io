---
layout: page-w-banner
title: Buy Ravencoin
bannerTitle: Ravencoin Buying Guide
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /buy-ravencoin/
---

<div class="page-content">
  <div class="wrapper mt-8 mb-32 m-auto">
    <h1><b>RVN Spot Exchanges</b></h1><br>
    <p>Venues where RVN can be traded on the spot market. Use the market information links below to compare prices and volumes.</p>
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
            {% if exchange.swap != true %}
                <div class="mb-6 px-2 w-full sm:w-1/2 md:w-1/3 text-center">
                  <div class="bg-grey-lighter w-full max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
                    <a class="block px-6 py-8" href="{{ exchange.url }}" target="_blank">{% if exchange.logo %}<img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/>{% else %}<span class="text-xl font-bold flex items-center justify-center" style="min-height:112px">{{ exchange.name }}</span>{% endif %}</a>
                  </div>
                  {% if exchange.donates_to_project == true %}
                    <span><i class="zmdi zmdi-balance"></i> &nbsp; Donates to foundation</span>
                  {% endif %}
                </div>
            {% endif %}
      {% endfor %}
    </div>

    <h1><b>RVN Swap / Instant Exchange Services</b></h1><br>
    <p>Services that exchange RVN for another coin without an order book. They are useful for a quick swap, but the price is set by the service rather than by a spot market.</p>
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
            {% if exchange.swap == true %}
                <div class="mb-6 px-2 w-full sm:w-1/2 md:w-1/3 text-center">
                  <div class="bg-grey-lighter w-full max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
                    <a class="block px-6 py-8" href="{{ exchange.url }}" target="_blank">{% if exchange.logo %}<img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/>{% else %}<span class="text-xl font-bold flex items-center justify-center" style="min-height:112px">{{ exchange.name }}</span>{% endif %}</a>
                  </div>
                </div>
            {% endif %}
      {% endfor %}
    </div>

    <h1><b>RVN Market Information</b></h1><br>
    <p>Aggregators that track the RVN spot markets, the available trading pairs and the reported trading volume.</p>
    <div class="flex flex-wrap">
      <div class="mb-6 px-2 w-full sm:w-1/2 text-left">
        <a class="text-xl font-bold" href="https://www.coingecko.com/en/coins/ravencoin#markets" target="_blank">CoinGecko</a>
        <p class="mt-2">Compare RVN spot markets, trading pairs, volume, spreads, and liquidity.</p>
      </div>
      <div class="mb-6 px-2 w-full sm:w-1/2 text-left">
        <a class="text-xl font-bold" href="https://coinmarketcap.com/currencies/ravencoin/#Markets" target="_blank">CoinMarketCap</a>
        <p class="mt-2">Explore RVN markets, trading pairs, and reported trading volumes.</p>
      </div>
    </div>
  </div>
</div>
