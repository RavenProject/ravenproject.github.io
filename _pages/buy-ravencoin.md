---
layout: page-w-banner
title: Buy Ravencoin
bannerTitle: Ravencoin Buying Guide
bannerImage: /assets/img/pages/exchanges/exchange-banner.jpg
permalink: /buy-ravencoin/
---

<div class="page-content">
  <div class="wrapper mt-8 mb-32 m-auto">
    <h1><b>Non-Custodial exchanges</b></h1><br>
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
            {% if exchange.kyc == false %}
                <div class="mb-6 px-2 sm:w-1/2 md:w-1/3 text-center">
                  <div class="bg-gray-100 max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
                    <a class="block px-6 py-8" href="{{ exchange.url }}" target="_blank"><img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/></a>
                  </div>
                  {% if exchange.donates_to_project == true %}
                    <span><i class="zmdi zmdi-balance"></i> &nbsp; Donates to foundation</span>
                  {% endif %}
                </div>
            {% endif %}
      {% endfor %}
    </div>

    <h1><b>Custodial exchanges</b></h1><br>
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
        {% if exchange.kyc %}
          <div class="mb-6 px-2 sm:w-1/2 md:w-1/3 text-center">
            <div class="bg-gray-100 max-w-sm rounded overflow-hidden shadow-md hover:by-grey">
              <a class="block px-6 py-8" href="{{ exchange.url }}" target="_blank"><img src="{{ exchange.logo }}" alt="{{ exchange.name }} exchange"/></a>
            </div>
                  {% if exchange.donates_to_project == true %}
                    <span><i class="zmdi zmdi-balance"></i> &nbsp; Donates to foundation</span>
                  {% endif %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</div>
