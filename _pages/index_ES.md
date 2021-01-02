---
layout: default
title: Home
permalink: /ES
modalTitle: "Anuncio"
modalContent: 'Nuevo versión de la Wallet: Actualiza a la versión 4.3.1 <a href="/wallet">Click aquí para actualizar</a>'
modalId: "upgrade-notification"
modalCacheRef: "4.3.1"
---

<link href="/assets/vendors/mediabox/mediabox.css" rel="stylesheet">
<style>
  .hero-buttons {
    margin: 50px 0;
  }
  .hero-buttons .btn.btn-primary {
    border: 2px solid #f15b22;
  }
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
  .enlarge-on-hover {
    transition: transform .2s;
  }
  .enlarge-on-hover:hover {
    transform: scale(1.05);
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
    <h1 class="animated fadeInRight mb-3 mb-2 m-auto leading-tight">Ravencoin es una blockchain entre pares (peer-to-peer), que permite la creación y transferencia eficiente de activos entre las partes.</h1>
    <div class="animated fadeInLeft hero-buttons">
      <a class="btn btn-primary mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-white hover:text-white" href="/wallet/">Obtén tu Wallet</a>
      <a class="btn btn-ghost mx-2 mt-4 mb-3 px-3 py-3 font-medium text-base rounded text-black hover:text-white" href="/buy-ravencoin/">Comprar Ravecoin</a>
    </div>
    <div class="video-icon animated fadeInRight flex content-center justify-center font-semibold mt-4" uk-lightbox>
      <a class="video-icon-button mr-4 mediabox" href="https://www.youtube.com/embed/fbfUvkZaw2w?rel=0&amp;showinfo=0">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80  c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176  c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57  S349.156,266.641,344.48,269.57z" fill="#2e3e80"/>
        </svg>
      </a>
    <span class="mt-2">¿Qué es Ravencoin?</span>
    </div>
  </div>
  <br>
  <br>
  <br>
  <br>
</div>
<div class="section-intro text-white py-20">
  <div class="wrapper">
    <div class="text-center m-auto" style="max-width: 900px;">
      <h2 class="text-white">Bienvenido a Ravencoin</h2>
      <p style="max-width: 900px;" class="m-auto">Ravencoin es un protocolo basado en un fork del código de Bitcoin que le añade características especificamente enfocadas en permitir la emisión de token en la blockchain de Ravencoin. Estos token pueden tener cualquier característica que el emisor decida - These tokens can have whatever properties the issue of the token decides - por lo que se pueden limitar en cantidad, nombrar y emitir como valores o como objetos de colección.</p>
      <p class="mt-8">Puede crear su propio token de valores en minutos y operar con él en todo el mundo.</p>
      <hr class="border-b pt-6"/>
    </div>
    <hr class="my-8"/>
    <ul class="nav nav-tabs list-reset">
      <li class="active"><a href="#tab-1">Participaciones en Proyectos</a></li>
      <li class="tab-2"><a href="#tab-2">Bienes Virtuales</a></li>
      <li class="tab-3"><a href="#tab-3">Activos Físicos &amp; Digitales</a></li>
      <li class="tab-4"><a href="#tab-4">Créditos</a></li>
    </ul>
    <div class="tab-content">
      <div id="tab-1" class="tab-pane active">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gold" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/gold.svg"}}" alt="oro"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representando una participación de un proyecto</h3>
            <div class="flex flex-wrap">
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Lingote de oro</li>
                <li>Monedas de plata</li>
                <li>Euros físicos</li>
              </ul>
              <ul class="list-reset w-full sm:w-1/2 md:w-1/3">
                <li>Derechos de propiedad de tierras</li>
                <li>Un cómic de colección</li>
                <li>Créditos energéticos (Electricidad, Leña, Gas, Petróleo, Viento)</li>
              </ul>
            </div>
          </div>
        </div>  
      </div>
      <div id="tab-2" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-tickets" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/tickets.svg"}}" alt="entradas"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representando bienes virtuales</h3>
            <ul class="list-reset">
              <li>Entradas para un evento como para un partido de los Baltimore Ravens con la capacidad de reventa sin la preocupación de que se hagan duplicados</li>
              <li>Una licencia que permita una actividad</li>
              <li>Un token de acceso para utilizar algún servicio</li>
              <li>Monedas de juego u objetos, transferibles a otros jugadores fuera de la plataforma de juego</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tab-3" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-token" style="max-width: 150px;margin-top: 15px;" src="{{"/assets/img/svg/token.svg"}}" alt="token"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
           <h3 class="text-white">Representar activos físicos o digitales custodiados en el mundo real</h3>
            <ul class="list-reset">
              <li>Tokens de valores: acciones o participaciones en una compañía representadas por el token en lugar de por un certificado físico</li>
              <li>Valores o participaciones en sociedades con la capacidad incorporada de pagar dividendos en RVN</li>
              <li>Tokens que representan una sociedad cooperativa, sociedad limitada, reparto de royalties o reparto de beneficios</li>
              <li>Un token que representa un artículo financiado por cflexd con la capacidad de transferir o revender el artículo</li>
            </ul>  
          </div>
        </div>  
      </div>
      <div id="tab-4" class="tab-pane">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 lg:w-1/4 text-center">
            <img class="animated mb-4" id="tab-gift-card" style="max-width: 150px;" src="{{"/assets/img/svg/gift-card.svg"}}" alt="tarjeta-regalo"/>
          </div>
          <div class="sm:w-full md:w-2/3 lg:w-3/4">
            <h3 class="text-white">Representando un crédito</h3>
            <ul class="list-reset">
              <li>Tarjetas regalo</li>
              <li>Sistemas de recompensa de millas de aerolíneas</li>
              <li>Puntos de recompensa</li>
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
        <h2>¿Qué Hace Ravencoin Diferente del Bitcoin?</h2>
        <ul class="checkmark">
          <li>Recompensa de bloque de 5,000 RVN en lugar de 50 BTC.</li>
          <li>Block time de 1 minuto en lugar 10.</li>
          <li>Número total de monedas acuñables de 21 billojes en lugar de 21 millones.</li>
          <li>Un nuevo algoritmo de minado, KAWPOW,  que permite un minado mas descentralizado.</li>
          <li>Añade la emisión de Bienes y Sub-bienes, transferencias, bienes únicos y recompensas.</li>
          <li>En el futuro añadirá un sistema de mensajes y votos.</li>
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
      <h2 class="text-white font-medium mb-3">!Involúcrate hoy!</h2>
      <p class="text-white">Forma parte de la comunidad y contribuye la red global descentralizada de mineros, voluntarios, traders y desarrolladores de Ravencoin.</p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/4 text-left sm:text-center">
      <a class="btn btn-primary mx-2 mt-5 mb-3 px-4 py-3 font-normal text-base rounded text-white border-white border-solid border-2 hover:text-black" href="/community">Únete a la Comunidad</a>
    </div>
  </div>

</div>
<div class="section-exchange pt-20 pb-24 bg-grey-lighter text-center">
  <h2 class="font-medium">Exchanges</h2>
  <div class="wrapper mt-8 m-auto">
    <div class="flex flex-wrap">
      {% for exchange in site.data.exchanges %}
      <div class="mb-6 px-2 sm:w-1/2 md:w-1/3">
        <div class="bg-grey-lighter max-w-sm rounded overflow-hidden shadow-md hover:by-grey enlarge-on-hover">
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
<div class="bg-grey-lighter text-center">
  <h2 class="font-medium">Comunidad</h2>
  <iframe src="https://revain.org/widget-v2/review-carousel?companyType=Project&amp;companySlug=ravencoin&amp;consumer=https%3A%2F%2Fravencoin.org&amp;contentLines=4&amp;elevationLevel=2&amp;writeReviewAt=6&amp;sortBy=recent&amp;perPage=9&amp;bg=neutral.0&amp;reviewLocale=en&amp;ratingProgressFill=%23eb9c35&amp;blockchainLinkColor=%231f89e5&amp;showMoreLinkColor=%231f89e5&amp;dataSource=null&amp;locale=en&amp;theme=default" width="100%" height="450" style="border: none; display: block"></iframe>
</div>
<div class="bg-grey-lighter text-center" style="padding-bottom:50px">
  <h2 class="font-medium">Novedades en Twitter</h2>
  <a class="twitter-timeline" data-width="600" data-height="600" data-dnt="true" data-theme="dark" href="https://twitter.com/Ravencoin?ref_src=twsrc%5Etfw">Tweets de Ravencoin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  <a class="twitter-timeline" data-width="600" data-height="600" data-dnt="true" data-theme="dark" href="https://twitter.com/Ravencoin/likes?ref_src=twsrc%5Etfw">Tweets que le gustan a Ravencoin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<script src="/assets/vendors/mediabox/mediabox.js"></script>
<script>
  MediaBox('.mediabox');
</script>

<script type="text/javascript">
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
