# Deferred Link Items

Items identified by the ravencoin.org link audit (1,214 link instances across 91 files) and by the
exchange verification passes that followed it, which were **not** changed in this work. They are kept
as-is deliberately and are listed here so they can be revisited later.

## 0. Exchange list accounting

The exchange list was checked against the official exchange APIs, the exchange websites, the
CoinGecko RVN ticker list and the CoinMarketCap market pairs endpoint. These are the actual counts,
item by item:

| Stage | Exchanges |
|---|---|
| `af93e6a` (before this work) | 38 |
| `2a7ce6d` (link cleanup) | 36 — removed Bitni and UnicornX, renamed OKEx to OKX |
| `7c6adb9` (exchange verification) | 35 — removed Bitvavo, DEX Trade and Upbit, added MEXC and Pionex |
| `5c08b79` (venue sweep) | 48 — added 13 venues that were confirmed to trade RVN spot |
| `bbb1cdb` (buying guide rework) | **32** — 27 spot exchanges and 5 instant swap services |
| current branch | **31** — 27 spot exchanges and 4 instant swap services |

The last step removed 19 entries from the active list and added 3. None of the removals is a
statement that the venue closed down permanently: 6 were removed because RVN trading could not be
confirmed, and 13 were removed because they could not be verified from the audit host. All 19 are
listed in sections 3 and 4 with the reason and with what would have to change to add them back.

Exolix was removed afterwards. Its complete currency inventory (514 currencies, read through the
paginated `api/v2/currencies` endpoint) contains neither `RVN` nor `RAVEN`, so there is no RVN
market to send visitors to. It is listed in section 3.

## 1. Server errors — service may only be temporarily unavailable

These URLs responded with 5xx / Cloudflare errors during the audit. A transient server error is not
evidence that a service is gone, so the links were left untouched. Re-check before changing.

| # | URL | Observed status | Location |
|---|---|---|---|
| E1 | `https://squawker.app` | 500 | `_data/projects.yml` |
| E2 | `https://rvnbay.com` | 525 (Cloudflare) | `_data/projects.yml`, `_pages/assets.md` |
| E3 | `https://graviex.net/markets/rvnbtc` | 522 | removed from `_data/exchanges.yml`, see section 4 |
| E4 | `https://pool.wallstreetv2.com/` | 522 | `_data/pools.yml` |
| E5 | `https://ravencoin.flypool.org/` | 522 | `_data/pools.yml` |
| E6 | `https://www.crypticwizardry.com/` | 502 | `_data/pools.yml` |
| E7 | `https://rvn-dashboard.com/` | 503 | `_pages/index.md` |
| E8 | `https://safepay.safecoin.org/` | 503 | `_data/wallets.yml` |
| E9 | `https://explorer.ravencoin.org/block/0000000000004a7a699167d242dad3e18271cb9b75fdab9fe749291d9c59305d` | 522 | `_pages/halving.md` |
| E10 | `https://raven-nightly-builds.ravencoin.org` | 522 | `_pages/wcc.md` |
| E11 | `https://api.ravencoin.org` | 522 | `mobilewallet/support/Troubleshooting/Ravencoin-missing.html` |
| E12 | `https://jackdawtoken.com/` | 409 over plain HTTP, no TLS handshake on 443 | `_data/projects.yml` (Jackdaw Cryptocurrency) — the domain still resolves to Cloudflare, so the origin is refusing requests. Both of the project's site links were removed later, see section 8. |

## 2. Working links that were left alone

| Item | Reason |
|---|---|
| `https://twitter.com/...` (all occurrences) | Works via redirect to `x.com`. The report treats this as normal operation, not a defect. |
| `https://www.digifinex.com/en-ww/trade/BTC/RVN` | Returns 451 (geo-blocked) from every location tested, so the current locale prefix could not be confirmed. The exchange itself still lists an RVN/USDT market and stays listed. |
| `https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware` | Returns 200. Documents the older Ledger Nano S; keep until the current device doc is known. |
| `plus.google.com/...` (`_includes/social.html`) | Google+ is shut down, but the block is conditional on `site.googleplus_username`, which is not set in `_config.yml`, so it is never rendered. |
| Trailing-slash differences (`/halving`, `/wallet`, `/community`, `/devupdates`) | GitHub Pages redirects these automatically; they resolve. |
| `https://travis-ci.org/RavenProject/Ravencoin.svg?branch=master` (`README.md`) | Travis CI is shut down, but `RavenProject/Ravencoin` has only one workflow (`build-raven.yml`), which triggers on `release*` pushes and PRs and has a single historical run with an `action_required` conclusion. Its badge renders "no status" permanently, so it is not a valid replacement yet. Keep the badge until the Ravencoin repository has a workflow that runs on `master`. |
| `https://www.kisspng.com/png-watercolor-crow-6713/` (`_pages/attribution.md`) | The line is inside an HTML comment and is not rendered; the crow image is not used anywhere in the repository, and no valid replacement image page exists on the new host (cleanpng.com). Left as-is. |
| Vercel-hosted links (`https://raventag.com`, `https://ravencoin-node-monitor.vercel.app`) | Both answer 403 to a browser user agent and 200 to a plain request from the audit host. This is not a fault of the deployments: from the same machine `vercel.com`, `nextjs.org` and `react.dev` all answer 403 the same way, so Vercel blocks the auditing IP for browser-like requests. `raventag.com` serves its real site ("RavenTag: Trustless NFC Authentication on Ravencoin") over a plain request, so it works for real visitors and was left alone. |

Note on verification: `https://www.ravennodes.com/` and `https://www.rvnft.art/` both responded normally
during the audit (302 -> 200 and 200 respectively), but stopped answering HTTPS requests from the
verification host afterwards — TCP on port 443 still succeeds, so this looks like server-side
throttling of the auditing IP rather than a broken link. Both URLs are the canonical addresses of
their services and were kept.

This turned out to be wrong on a later, independent check. `ravennodes.com` no longer serves the
node map and `rvnft.art` is a parked domain (a `*.name.tools` certificate serving a "Server Test
Page"), so both were replaced. See section 7.

The same applies to `https://rvnbay.com`, which is listed in `_data/projects.yml` and in
`_pages/assets.md`: it answers 525 (Cloudflare, origin unreachable) on every attempt, including
through `www.rvnbay.com`. The domain still resolves in DNS to Cloudflare addresses, so this is an
origin-side outage rather than a dead domain. The links were kept, because the address is the
project's own and there is no alternative to point them at.

## 3. Services that were removed because RVN trading could not be confirmed

These were removed from the buying guide. That is not a statement that the venue closed down, it
means RVN could not be traded there any more, or could not be verified at all.

| Service | What was removed | Note |
|---|---|---|
| Testnet faucet (`https://testnet.ravencoin.network/`) | The "Testnet Faucet" entry in the WCC reference list and the "How to use the faucet?" section in `_pages/wcc.md` | The faucet host no longer resolves in DNS and no live replacement faucet was found (`faucet.ravencoin.org` and `testnet.ravencoin.org` do not resolve either). The remaining testnet links (API and block explorer at `testnet-api.ravencoin.org`) still work. If a current faucet exists, its URL can be added back here. |
| Raven Trader (`https://raventrader.net/`) | The "Find RVNFT NFTs on Raven Trader" social link in `_data/projects.yml` and the Raven Trader sentence in `_pages/assets.md` | DNS NXDOMAIN — service shut down. The RIP-15 standard reference was kept and now describes the process directly. |
| Bitvavo | `_data/exchanges.yml` entry | Officially delisted RVN on 18 September 2026 (deposits and withdrawals closed, balances converted to EUR). Their own API reports the asset with `depositStatus: DELISTED` and `withdrawalStatus: DELISTED`. |
| Upbit | `_data/exchanges.yml` entry | Officially delisted all RVN pairs (RVN/KRW, RVN/BTC, RVN/USDT) on 12 October 2026. Their market list no longer contains any RVN market and `api.upbit.com/v1/orderbook?markets=RVN-KRW` returns 404. |
| DEX Trade | `_data/exchanges.yml` entry | Their public symbol list contains 33 active pairs and none of them is RVN, so there is no RVN market to link to. |
| ATAIX | `_data/exchanges.yml` entry | Their own price feed (`api.ataix.com/api/prices/`) still lists RVN/BTC, RVN/ETH and RVN/USDT, but every one of them has volume 0, a zero last price and no ask, and neither CoinGecko nor CoinMarketCap lists the venue for RVN. Add it back only if the RVN markets start trading again. |
| Qortal | `_data/exchanges.yml` entry | Qortal runs its own chain and its own token. No RVN market was found on its market page and neither aggregator lists RVN for it. |
| tZero | `_data/exchanges.yml` entry | No RVN mention anywhere on the site, the market page returns 404, and neither aggregator lists RVN for it. |
| FLASHIFT | `_data/exchanges.yml` entry | No RVN mention anywhere on the site, the market page returns 404, and neither aggregator lists RVN for it. |
| NOWPayments | `_data/exchanges.yml` entry | This is a payment gateway rather than an exchange, and no RVN market was found for it. |
| ChangeAngel | `_data/exchanges.yml` entry | The site answers with a "Coming Back" placeholder, so the exchange is currently paused and cannot be presented as an active venue. Add it back if the service is relaunched with RVN support. |
| Exolix | `_data/exchanges.yml` entry | The complete currency inventory was read through the paginated `api/v2/currencies` endpoint: 514 currencies, and neither `RVN` nor `RAVEN` is among them. The service itself is healthy, it simply does not trade RVN any more. Add it back if RVN reappears in that list. |

## 4. Exchanges removed from the active list because they could not be verified

RVN support could not be decided either way from the audit host, so these venues are no longer
presented as places to trade RVN. None of them is known to be closed down. They should be re-checked
from an unblocked network, and each one goes back into the buying guide as soon as an RVN market is
confirmed on the venue's own site or API.

| Exchange | Why it could not be verified | What would confirm it |
|---|---|---|
| BC Bitcoin (now BCXPro Malta) | `bcbitcoin.co.uk` redirects to `bcxpro.io`, whose market pages are client side rendered; no RVN market could be confirmed. | An RVN market on `bcxpro.io` |
| Bitladon | Every request is answered with a Cloudflare challenge (403). | An RVN rate on the Bitladon API |
| Bittrex | `api.bittrex.com` does not resolve from the verification host and no RVN market appears in either aggregator. | `BTC-RVN` in the Bittrex market list |
| ChangeHero | Every request is answered with a Cloudflare challenge (403). | RVN in the ChangeHero currency list |
| CoinSwitch | The coin list is only available through an API that could not be reached, and the pages are client side rendered. | RVN in the CoinSwitch currency list |
| CoinoSwap | The coin list is only available through an API that could not be reached, and the pages are client side rendered. | RVN in the CoinoSwap currency list |
| Evorese | The market pages are client side rendered and no public API is exposed; the old `exchange.evorese.com/market/...` path returns 404. | An RVN market on `evorese.com` |
| Graviex | The site returns 522 (also listed in section 1) and the API returns 403. | An RVN market on `graviex.net` |
| ProBit | Every API request is answered with a Cloudflare challenge (403); no RVN market appears in either aggregator. | RVNUSDT in the ProBit market list |
| SimpleSwap | The coin list is only available through an API that could not be reached, and the pages are client side rendered. | RVN in the SimpleSwap currency list |
| StealthEX | The coin list is only available through an API that could not be reached, and the pages are client side rendered. | RVN in the StealthEX currency list |
| SwapSpace | Every request is answered with a Cloudflare challenge (403). | RVN in the SwapSpace currency list |
| SwapSwop | Every request is answered with a Cloudflare challenge (403). | RVN in the SwapSwop currency list |

## 5. RVN venues found during the venue sweep

The CoinGecko RVN ticker list and the CoinMarketCap market pairs endpoint together cover a much
wider set of venues than the buying guide listed. Each candidate was checked on the venue's own
site or public API before it was added.

| Venue | RVN market | Evidence | Result |
|---|---|---|---|
| Binance US | `https://www.binance.us/trade/pro/RVN_USDT` | `api.binance.us/api/v3/exchangeInfo?symbol=RVNUSDT` returns the symbol | listed |
| Bittime | `https://www.bittime.com/en/trade/rvn-idr` | market page returns the RVN/IDR pair | listed |
| BYDFi | `https://www.bydfi.com/exchange/RVN_USDT` | market page title "Trade RVN/USDT RavenCoin on BYDFi Exchange" | listed |
| Bybit | `https://www.bybit.com/trade/spot/RVN/USDT` | `api.bybit.com/v5/market/instruments-info` returns RVNUSDT | listed |
| Crypto.com Exchange | `https://crypto.com/exchange/trade/spot/RVN_USD` | `api.crypto.com/v2/public/get-ticker?instrument_name=RVN_USD` returns the ticker | listed |
| Gate | `https://www.gate.com/trade/RVN_USDT` | `api.gateio.ws/api/v4/spot/currency_pairs` lists RVN_USDT | listed |
| LATOKEN | `https://latoken.com/exchange/USDT-RVN` | `api.latoken.com/v2/ticker?symbol=RVN/USDT` returns the ticker | listed |
| LBank | `https://www.lbank.com/trade/rvn_usdt` | `api.lbkex.com/v2/currencyPairs.do` lists rvn_usdt | listed |
| TokoCrypto | `https://www.tokocrypto.com/trade/RVNUSDT` | market page returns the RVNUSDT pair | listed |
| WEEX | `https://www.weex.com/spot/RVN-USDT` | market page title "Trade RVN/USDT spot" | listed |
| WhiteBIT | `https://whitebit.com/trade/RVN_USDT` | `whitebit.com/api/v4/public/ticker` lists RVN_USDT | listed |
| XT.COM | `https://www.xt.com/en/trade/rvn_usdt` | market page title "RVN USDT | RVNUSDT Charts & Trade Info" | listed |
| ZebPay | `https://www.zebpay.com/exchange/RVN-INR` | market page returns the RVN-INR pair | listed |
| XXKK | `https://www.xxkk.com/en/spot/RVN_USDT` | market page returns the RVN_USDT pair, CoinMarketCap volume about 66k USD | listed |
| Binance TR | `https://www.binance.tr/en/trade/RVN_TRY` | market page payload carries `"symbol":"RVNTRY"` with base asset Ravencoin quoted in Turkish lira, CoinMarketCap volume about 426k USD | listed |
| CoinDCX | `https://coindcx.com/trade/RVNUSDT` | `api.coindcx.com/exchange/ticker` returns RVNUSDT and RVNINR with a fresh volume | listed |
| CoinUp.io | `https://www.coinup.io/en_US/trade/RVN_USDT` | Every request to the site and to `api.coinup.io` is answered with a Cloudflare challenge (403). CoinGecko and CoinMarketCap both list RVN/USDT there, with CoinMarketCap reporting about 1.78M USD of volume. | on hold |
| CoinW | `https://www.coinw.com/spot/rvnusdt` | `www.coinw.com` does not respond from the verification host. Both aggregators list RVN/USDT there, with CoinMarketCap reporting about 308k USD of volume. | on hold |
| Mudrex | `https://mudrex.com/` | The site and `api.mudrex.com` are not reachable from the verification host. CoinGecko lists RVN/USDT with about 53k USD of volume. | on hold |
| SafeTrade | `https://safetrade.com/exchange/RVN-BTC` | The site and `api.safetrade.com` are answered with a Cloudflare challenge (403). CoinGecko lists RVN/BTC with about 20k USD of volume and flags it as an anomaly. | on hold |
| Nonkyc.io | `https://nonkyc.io/market/RVN_USDT` | The site and the public API are not reachable from the verification host. Both aggregators list RVN/USDT, with a very small reported volume. | on hold |

Venues that were checked and deliberately not added:

| Venue | Why it is not listed |
|---|---|
| BingX | The official symbol list contains RVN-USDT, but the entry has `status: 0` and both the 24 hour ticker and the order book answer "symbol is not found", so the market is not active. CoinMarketCap only lists the perpetual contract. |
| Bitget | The official spot API has 3,601 symbols and none of them is a plain RVN pair — only RVN derived tokens such as RVNT and RVNO. CoinMarketCap only lists the perpetual contract. |
| KuCoin | The official symbol list has 968 spot symbols and no RVN. CoinMarketCap only lists the perpetual contract. |
| HitBTC | The official ticker for RVNUSDT answers with `volume: 0` and a stale price, and CoinMarketCap reports zero volume. |
| Giottus | The market page carries an RVN/USDT pair, but CoinMarketCap reports zero volume. |
| StakeCube, KTX, Dzengi, CRMClick, CriptoSwaps, Picol | Either report zero or negligible volume, or no RVN market could be found on the venue. |

Binance delisted RVN for residents of Brazil from 27 October 2026. The global Binance markets are
still live and were kept.

## 6. Unused image assets

Removing a listing leaves its logo file behind. These files are no longer referenced by any data
file or page and can be deleted whenever convenient:

- `assets/img/pages/exchanges/UnicornX.png`
- `assets/img/pages/exchanges/ataix.png`
- `assets/img/pages/exchanges/bcbitcoin.png`
- `assets/img/pages/exchanges/bitladon.png`
- `assets/img/pages/exchanges/bitni.png`
- `assets/img/pages/exchanges/bittrex.png`
- `assets/img/pages/exchanges/bitvavo.png`
- `assets/img/pages/exchanges/changeangel.png`
- `assets/img/pages/exchanges/changehero.png`
- `assets/img/pages/exchanges/coinoswap.png`
- `assets/img/pages/exchanges/coinswitch.png`
- `assets/img/pages/exchanges/dextrade.png`
- `assets/img/pages/exchanges/evorese.png`
- `assets/img/pages/exchanges/flashift.png`
- `assets/img/pages/exchanges/graviex.png`
- `assets/img/pages/exchanges/nowpayments.png`
- `assets/img/pages/exchanges/probit.png`
- `assets/img/pages/exchanges/qortal.png`
- `assets/img/pages/exchanges/simpleswap.png`
- `assets/img/pages/exchanges/stealthex.png`
- `assets/img/pages/exchanges/swapspace.png`
- `assets/img/pages/exchanges/swapswop.png`
- `assets/img/pages/exchanges/tzero.png`
- `assets/img/pages/exchanges/upbit.png`
- `assets/img/pages/wallet/CoinUs.png`
- `assets/img/pages/wallet/simplehold.png`
- `assets/img/pages/wallet/stibits.png`

The following three were already unused before this work and are only listed for completeness:
`assets/img/pages/exchanges/coinexchange.png`, `assets/img/pages/wallet/flare.png`,
`assets/img/pages/wallet/spend.png`.

## 7. Links replaced or removed in the follow-up review

These four items were raised after the audit above was finished and have now been dealt with. They
are recorded here so the reasoning stays with the rest of the link history.

| Item | What was done | Evidence |
|---|---|---|
| Exolix in the buying guide | The `_data/exchanges.yml` entry and the `exolix.png` logo were removed. The exchange is listed in section 3 instead. | The complete currency inventory, read page by page through `api/v2/currencies?limit=25&page=N`, contains 514 currencies and neither `RVN` nor `RAVEN`. There is no RVN market on the venue. |
| `ravennodes.com` | Every link to `https://www.ravennodes.com/` was replaced with `https://rusiper1000.github.io/Ravencoin-Nodes/`. This affects `_includes/footer.html` and `_pages/community.md`. The three `Raven Network Nodes` links in `_data/projects.yml` were changed to the same host. | `www.ravennodes.com` no longer serves the node map. The replacement serves the same dashboard and the same live measurement data (`data/latest.json`, `data/history.json`). |
| RVNFT | The whole `_data/projects.yml` entry was removed, together with the RVNFT link in `_pages/assets.md`. | `rvnft.art` is a parked domain: the certificate is issued for `*.name.tools` and the page is a "Server Test Page". The Discord invite `ZSqqS5Gr` answers `Unknown Invite`, and `rvnft.com` redirects to a parked lander. No trustworthy active replacement was found, so the entry was removed rather than pointed at an unverified service. RVNBay is still listed as an asset market in `_pages/assets.md`. |
| `simpleSwap.png` | The file name in the unused-asset list was corrected to `simpleswap.png`. | The tracked file is `assets/img/pages/exchanges/simpleswap.png`; a case-sensitive comparison of every referenced `/assets/...` path against the tracked files now reports no mismatches. On a case-insensitive file system the wrong casing would not have been noticed. |

Note on the node map host: `ravencoin-nodes.vercel.app` serves the same dashboard and the same
JSON data, but it answers **403 Forbidden** to a normal Chrome browser user agent while answering
200 to curl. That is not a fault of the deployment: from the same machine `vercel.com`,
`nextjs.org` and `react.dev` all answer 403 the same way, so Vercel blocks this host's IP for
browser-like requests. The GitHub Pages host was used instead because it answers 200 to every
request, and because it is the canonical address the project declares — the `og:url` meta tag of
the dashboard reads `https://rusiper1000.github.io/Ravencoin-Nodes/` on both hosts.

The same rule was applied to the "Ravencoin Node Monitor" entry, whose public demo is a Vercel
deployment (`ravencoin-node-monitor.vercel.app`) and has no GitHub Pages alternative — the
repository `ALENOC/ravencoin-node-monitor` has Pages disabled. That link was left as it is, because
it is not broken for real visitors.

## 8. External link check

Every external link that is displayed on the public pages was fetched once with certificate
verification enabled (`curl` without `--insecure`), a 5 second timeout and at most one retry. The
253 unique URLs of the pages as published were checked; the two documentation pages
(`LINK_HOLDS.html` and `PR_HANDOFF.html`) were left out because they intentionally list removed and
held venues.

### Removed because the host fails the TLS handshake

Four hosts accept the connection and then abort the TLS handshake, so a visitor gets a browser
security error instead of the page. The failure was reproduced with two independent TLS stacks
(LibreSSL 3.3.6 and OpenSSL 3.6.3), and `ssl_verify_result` was 1 in every case, so it is not a
problem with the checking client.

| Removed | Where it was | What the server does | Note |
|---|---|---|---|
| `https://autogamegold.com/` | `_data/platforms.yml`, the "Auto Game Gold" mining platform | Cloudflare answers the Client Hello with `tlsv1 alert internal error`; over plain HTTP it answers 503. | No working https address exists for this host. |
| `https://jackdawtoken.com/` and `https://jackdawtoken.com/jackdaw-whitepaper` | `_data/projects.yml`, the two project sites of "Jackdaw Cryptocurrency" | The handshake fails with `SSLV3_ALERT_HANDSHAKE_FAILURE`; over plain HTTP it answers 409. | Both sites of that project were removed. The project itself is still listed through its social channels, which all answer 200. |
| `https://www.coinus.io/` | `_data/wallets.yml`, the "CoinUs" wallet | `SSL_ERROR_SYSCALL` while reading the handshake. The host resolves and answers 200 over plain HTTP, but there is no working https address. | The wallet entry was removed. The plain HTTP address still serves the site, so it can be restored if the operator fixes TLS or if an http link is acceptable. |
| `https://www.stibits.com/` | `_data/wallets.yml`, the "Stibits" wallet | `SSL_ERROR_SYSCALL` while reading the handshake. The host resolves and answers 200 over plain HTTP, but there is no working https address. | Same situation as CoinUs. |

### Checked but not changed

These answered with a status that the checking host can produce on its own, so they are recorded
here instead of being changed or removed:

| Status | URLs | Why it is not treated as a defect |
|---|---|---|
| 403 | `blockchain.info`, `coindcx.com`, the four `medium.com` posts, `whitebit.com`, `coingecko.com`, `exodus.com`, `gate.com`, `mexc.com`, `paribu.com` | Bot protection. The same hosts answer normally from a browser. |
| 429 | the two `github.com/bitcoin/bips` pages | Rate limited by the parallel burst of requests. |
| 451 | `www.digifinex.com` | Geo block, already recorded in section 2. |
| 500 / 502 / 503 / 525 | `squawker.app`, `www.crypticwizardry.com`, `rvn-dashboard.com`, `safepay.safecoin.org`, `rvnbay.com` | Server side errors, already recorded in section 1. |
| 999 | the three `linkedin.com` profile links | LinkedIn refuses automated requests. |
| 400 | `www.facebook.com/groups/RavenCoinNest` | Facebook refuses automated requests. |
| timeout | `binarylongevity.com`, `explorer.ravencoin.org`, `pool.wallstreetv2.com`, `ravencoin.flypool.org`, `rvn.bsmith.io`, `rvn.cryptoscope.io` and its transaction links | No answer within 5 seconds from the checking host. Most of them are already listed in sections 1 and 4. |
| DNS failure | `raven-nightly-builds.ravencoin.org` | Did not resolve during the check but resolves again on a second attempt, so it is a transient resolver problem. Already listed in section 1. |

The two Discord invite links timed out during the parallel pass but answered 200 on a single
follow-up request, so they were left unchanged.
