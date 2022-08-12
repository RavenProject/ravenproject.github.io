---
layout: page-w-banner
title: Assets
bannerTitle: A Guide to Ravencoin Assets
bannerImage: /assets/img/pages/about/about-banner.jpg
permalink: /assets/
---

<div class="wrapper mt-16 pb-20">
  <h2>All About Assets</h2>

  <p>This page is a work in progress. While almost all of the information is correct, there may be some nuance that is 
overlooked. If you come across any problems or believe information needs to be corrected or added, please make a pull request on
<a href="https://github.com/RavenProject/ravenproject.github.io">this website's github source</a> or visit us at our
<a href="https://discord.com/invite/jn6uhur">discord server</a>.</p>

  <br>
  <p>This webpage will attempt to cover all aspects of Ravencoin assets from what they are to their on-chain encodings.
 As you read on, this document will become increasingly technical.</p>
  <br>

  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#what_is_an_asset">What is an asset?</a></li>
    <li><a href="#where_can_i_trade_assets">Where can I trade assets?</a></li>
    <li><a href="#privacy">Privacy and Access</a></li>
    <li><a href="#the_jargon">The Jargon</a></li>
    <li><a href="#creating_assets">Creating Assets</a>
    <ul>
    <li><a href="#the_big_three">The Big Three</a></li>
    <li><a href="#broadcasts_and_messages">Broadcasts and Messages</a></li>
    <li><a href="#qualifiers_restricted_tags">Qualifiers, Restricted Assets, and More</a></li>
    </ul>
    </li>
    <li><a href="#what_is_on_chain">What is on the chain?</a></li>
    <li><a href="#burn_addresses">Burn Addresses</a></li>
    <li><a href="#scripts">Standard Asset Scripts</a>
    <ul>
    <li><a href="#chain_parsing_note">A note on chain parsing</a></li>
    </ul>
    </li>
    <li><a href="#create_transactions">Building Asset Transactions</a></li>
  </ul>

  <br><br>
  <h3 id="what_is_an_asset">What is an asset?</h3>

  <p>A Ravencoin asset (also less commonly referred to as a token) is an on-chain way of creating, storing, and transfering
 custom end-user generated information. Assets come with a unique, user-chosen name which can allow for assets to be verified by name only and metadata (which we will look into later). Ravencoin users have created assets to make their own 'coin', sell digital art, real estate, gem stones, security tokens, wine futures, and even incorporated it as an in-video game currency.</p>

  <br>
  <h3 id ="where_can_i_trade_assets">Where can I trade assets?</h3>
  <p><a href="https://raventrader.net/">Raven Trader</a> is a on-chain peer to peer market which utilises <a href="https://github.com/RavenProject/rips/blob/master/rip-0015.mediawiki">RIP-15</a> for users to post half-signed atomic swaps. There are also asset markets such as <a href="https://www.rvnft.art/">RVNFT</a> and <a href="https://rvnbay.com/">RVNBay</a>. In addition, one can pay for a listing at <a href="https://cryptosx.io/">Cryptosx</a> for security tokens or <a href="https://www.okex.com"> OKEX</a> for regular tokens.</p>
  <br>

  <h3 id="privacy">Privacy and Access</h3>
  <p>A common question about assets is who can see whats on an asset and is there any way to limit viewership of the asset to a recipient.
   The simple answer is that anyone is able to see the data associated with an asset, however there are protocols (see <a href="https://github.com/RavenProject/rips/blob/master/rip-0010.mediawiki">RIP-10</a>, <a href="https://github.com/RavenProject/rips/blob/master/rip-0011.mediawiki">RIP-11</a>, and <a href="https://github.com/RavenProject/rips/blob/master/rip-0014.mediawiki">RIP-14</a>) that allow for the encryption of IPFS data such that only a recipient of an asset may view it.</p>
  <br>

  <h3 id="the_jargon">The jargon...</h3>
  <p>When dealing with assets, it is inevitable that you will eventually come across some strange words denoting strange concepts. Before we move on, you should familiarize yourself with these concepts.</p>
  <ul>
    <li>
      <h4>Reissuability</h4>
      <p>This is a metadata flag that denotes whether or not an asset can be reissued. Once this flag is set to false it CANNOT be changed back! If you want (or have even a sliver of belief) that you want to change your asset's information in the future, ensure that you asset is reissuable when you create it!</p>
    </li>
    <li>
      <h4>Divisibility (Units)</h4>
      <p>Units is a metadata value from zero to eight that denotes how much an asset can be broken up. Specifically this number is how many digits past the decimal this asset can be divided into (a minimum size of 10<sup>-d</sup> where d is the divisibility).</p>. Units=0 means the tokens are not divisible at all -- whole tokens only can be transferred.  Units=2 would be two decimal places like cents on a dollar it would be possible to transfer 0.01.   Units=8 is the most divisible and allows tokens to be tranferred in increments of 0.00000001.
    </li>
    <li>
      <h4>Reissuing</h4>
      <p>Reissuing an asset is an act that does one or both of the following:</p>
      <ul>
        <li>Changing the metadata associated with an asset.</li>
        <li>Creating more of an asset.</li>
      </ul>
      <br>
      <p>In order to reissue an asset, the asset must be reissuable and you must have the associated ownership asset.</p>
      <br>
      <p>When changing divisibility during a reissuance, the divisibility can only go up. (What would happen if you changed divisibility to zero when users had fractions of an asset?)</p>
      <br>
      <p>When increasing divisibility, you cannot use the new lowest asset amount when creating more of the asset; the asset still has the old divisibility amount until the reissue transaction exits the mempool.</p>
    </li>
    <li>
      <h4>Ownership Assets</h4>
      <p>When creating certain types of assets, you will also receive an ownership asset. Ownship assets allow a user to reissue an asset and create "child assets" which we will explore in the next section. Ownership assets always come in the form of an exclamation point (!) coming after whatever you named your asset. For instance, say we create an asset named "ASSET". The associated ownership asset would be "ASSET!". If an asset A requires the ownership asset of asset B to be created, asset B is said to be asset A's "parent" and asset A is said to be asset B's "child".</p>
    </li>
    <li>
      <h4>Associated Data</h4>
      <p>Or IPFS hash or associated TXID. 32 bytes of user-decided information. Generally this is used with an IPFS hash or a TXID, but it can be anything.</p>
    </li>
    <li>
      <h4>Message Broadcasts</h4>
      <p>Any owner of any asset can broadcast a 32 byte message associated with that asset. We will go more in-depth with broadcasts later.</p>
    </li>
    <li>
      <h4>Null Asset Tags</h4>
      <p>These are special <a href="https://en.bitcoin.it/wiki/Script">scripts</a> used by holders of qualifier assets and restricted ownership assets to define behavior between restricted assets and addresses. The relationship between qualifiers, restricted assets, tags, and addresses is fairly complicated. We will go more in-depth further down the page.</p>
    </li>
  </ul>

  <br>

  <h3 id="creating_assets">Creating Assets</h3>
  <p>When creating an asset, you need to know what type of asset you want, the name of the asset, the amount of an asset, how much it costs to create an asset, and the metadata associated with an asset.</p>
  <p>Assets cannot be differentiated against one another except through their names. This means that all asset names must be unique; an asset creation will not be accepted by the chain if the name is not unique.</p>
  <p>Asset names are encoded via the ascii scheme. This means that asset names can currently only be in the latin alphabet.</p>
  <p>The cost of creating an asset can also be see more of as cost to "reserve the name"; this cost is static no matter how much of an asset you create (However, do note that it costs 100 RVN to reissue an asset).</p>
  <p>When creating a child asset the parent asset and parent ownership asset have no control over it. If you wish to have more control over assets, see <a href="#qualifiers_restricted_tags">restricted assets</a></p>
  <p>To put this information in a more readable format, all of the upcoming asset types will contain the following chart:</p>
   <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>Name specifications</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Ownership specifications</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>Prerequisite specifications</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>Amount specifications</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Cost specifications</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>Reissuability specifications</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility specifications</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>Associated data specifications</td>
    </tr>
  </table> 
  
  <p>This table denotes the fields avaliable and their limitations.</p>
  <p>For instance, an ownership asset table looks like this:</p>
  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>Base asset name + '!'</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>No associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>Created with another asset</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>There can only be 1 of some ownership asset</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Comes with the base asset</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>Cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Has 0 divisibility</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>No data can be associated</td>
    </tr>
  </table>
  <br>
  <h3 id="the_big_three">The big three</h3>
  <p>When working with Ravencoin assets you will most likely be using one of these three. They are by far the most used types of assets. It can help to think of these assets as pieces of some abstract on-chain website.</p>
  <br>
  <h4>Main assets</h4>
  <p>Running on our website analogy, a main asset is like the domain name.</p>
  
  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>3-30 capital letters. '.' and '_' are also allowed, but they cannot be at the beginning or end of the asset name. More than one of these special characters also cannot be next to one another. The names RVN, RAVEN, and RAVENCOIN are reserved.</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Main assets have an associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 - 21,000,000,000 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>500 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset can be set to be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility can be set from 0-8</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data</td>
    </tr>
  </table> 
  <p>The ownership asset of a main asset is required to create the following two assets.</p>

  <br>

  <h4>Sub-assets</h4>
  <p>A sub-asset can be likened to a website's path. Creating a sub asset requires a main asset ownership token.</p>

  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The sub-portion of the name must be at least 1 capital letter. '.' and '_' are also allowed, but they cannot be at the beginning or end of the sub-portion. More than one of these special characters also cannot be next to one another.</p>
      <p>The full sub-asset name takes the form [main asset name]/[sub-portion]. This full name must be 30 or less characters.</p></td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Sub-assets have an associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>A main asset's ownership asset</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 - 21,000,000,000 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset can be set to be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility can be set from 0-8</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data</td>
    </tr>
  </table> 

  <br>

  <h4>Unique assets</h4>
  <p>A unique asset can be likened to a file on a website. Creating a unique asset requires a main asset ownership token or a sub-asset ownership token. There can only be 1 of a unique asset.</p>

  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>The unique portion of the name must be at least 1 character. The full unique asset name takes the form [main or sub asset name]#[unique portion]. This full name must be 30 or less characters.</td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Unique assets have no associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>A main asset or sub-asset's ownership asset</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>5 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility is 0</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data</td>
    </tr>
  </table>
  <br>
  <h3 id="broadcasts_and_messages">Broadcasts and Message Channels</h3>
  <p>Our next asset type is a message channel, and we cannot talk about message channels without first talking about broadcasts, and we can't talk about broadcasts without talking about messages. It is important to note that asset broadcasts and message channels are rarely used and their use-case has not been solidified by the community.</p>
  <h4>Asset Messages</h4>
  <p>Any user can send an asset message on any asset that they own. An asset message is 34 bytes long and is seen as directed to the asset recipient.</p>
  <h4>Asset Broadcasts</h4>
  <p>In an asset transaction, if the sending address is the same as the receiving address, this is seen as a broadcast. Only message channels can broadcast messages. It is important to note that the user interface for message broadcasts do not seem to be fully implemented in the core wallet yet.</p>
  <h4>Message Channels</h4>
  <p>A message channel requires a main or sub-asset's ownership asset. A message channel is an asset specifically made for broadcasting messages. Their purpose is to add more control to whoever
  might be subscribed to the message channel's parent.</p>
  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The message channel portion of the name must at most 12 characters. It can contain letters, numbers, and '_'. '_' cannot be at the beginning or end of the message channel portion and two or more '_''s cannot be next to each other.</p>
      <p>The message channel asset name takes the form [main or sub asset name]~[message channel portion]. This full name must be 30 or less characters.</p></td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Message channel assets have no associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>A main asset or sub-asset's ownership asset</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility is 0</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset cannot have associated data</td>
    </tr>
  </table>
  <br>
  <h3 id="qualifiers_restricted_tags">Qualifiers, restricted assets, addresses, and tags</h3>
  <p>This is where things really start to get complicated. First you should know that qualifier assets, or simply qualifiers, dictate what addresses can hold a restricted asset by "qualifying" them with a null asset tag. A restricted asset can be associated with 0 or more qualifiers. The main factor in deciding whether or not an address can recieve a restricted asset is whether that address has been qualifier by all of the qualifiers associated with the said restricted asset.</p>
  <p>This means you DO NOT WANT TO SEND QUALIFIERS to addresses you do not trust! Qualifiers are an administrative asset much like ownership assets.</p>
  <p>*phew*</p>
  <p>Lets start out with some definitions.</p>
  <ul>
    <li>
    <h4>Asset Tags</h4>
    <p>An asset tag determines whether or not an address is able to receive a restricted asset. It costs 0.1 RVN to create an asset tag. There are three types of asset tags:</p>
    <ul>
    <li><h5>Null Asset Tag</h5>
    <p>A null asset tag has two sub-types:</p>
    <ul>
    <li>Qualifying Null Asset Tag: This type of null asset tag can be created with a qualifier asset. It qualifies or unqualifies some address.</li>
    <li>Restricted Null Asset Tag: This type of null asset tag can be created with a restricted asset's ownership asset. It can add or remove an address from being blacklisted from receiving this restricted asset
     no matter the address's qualifications.</li>
    </ul>
    </li>
    <li>
    <h5>Verifier Asset Tag</h5>
    <p>A verifier asset tag can be created with a restricted asset's ownership asset. It associates this restricted asset with one or more qualifiers. (This
   means that to recieve this restricted asset, an address must be qualified by all of the qualifiers defined in this tag).</p>
    </li>
    <li>
    <h5>Restricted Asset Tag</h5>
    <p>Also known as a global freeze tag, a restricted asset tag can be created with a restricted asset's ownership asset. This tag
     can freeze or unfreeze all movements across all addresses of this restricted asset.</p>
    </li>
    </ul>
    </li>
    <li>
    <h4>Qualifier Asset</h4>
    <p>Qualifier assets are administrative assets (in the same group as ownership assets) used to determine what addresses can receive restricted assets. Simply owning a qualifier asset gives a user this power.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The qualifier portion of the name has the same naming rules as a main asset.</p>
      <p>The qualifier asset name takes the form #[qualifier portion]. Note how this is differentiated from unique assets with the fact that a qualifier has no parent. This full name must be less than 30 characters.</p></td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Qualifier assets have no associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 - 10 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>1000 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility is 0</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data. Note: because qualifiers cannot be reissued, if you choose to have associated data, it cannot be changed in the future.</td>
    </tr>
    </table>
    </li>
    <li>
    <h4>Sub-qualifier Asset</h4>
    <p>Currently, sub-qualifiers have exactly the same powers as their parents. Sub-qualifiers use a parent qualifier asset in lieu of a parent ownership asset in its creation.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The sub-qualifier portion of the name has the same naming rules as a sub-asset.</p>
      <p>The sub-qualifier asset name takes the form #[qualifier portion]/#[sub-qualifier]. Note how this is differentiated from unique assets with the fact the the intermediary characters are '/#' This full name must be less than 30 characters.</p></td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Qualifier assets have no associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>A qualifier</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 - 10 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset cannot be reissued</td>
    </tr>
    <tr>
      <td>Divisibility</td>
      <td>Divisibility is 0</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data. Note: because qualifiers cannot be reissued, if you choose to have associated data, it cannot be changed in the future.</td>
    </tr>
    </table>
    </li>
    <li>
    <h4>Restricted Asset</h4>
    <p>Restricted assets are comparable to main assets except for the fact that they are, well, restricted. Currently restricted assets can only be associated with main qualifiers (not sub-qualifiers). If a restricted asset is not associated with any qualifier, it cannot be transfered. 
    Restricted assets are also somewhat unique in the fact that if they can be reissued, they are able to change what qualifiers they are associated with.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The restricted portion of the name has the same naming rules as a main asset.</p>
      <p>The restricted asset name takes the form $[restricted protion]. This full name must be less than 30 characters.</p></td>
    </tr>
    <tr>
      <td>Ownership Asset</td>
      <td>Restricted assets have an associated ownership asset</td>
    </tr>
    <tr>
      <td>Prerequisites</td>
      <td>A qualifier</td>
    </tr>
    <tr>
      <td>Asset Amount</td>
      <td>1 - 21,000,000,000 of this asset can be created</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>1500 RVN</td>
    </tr>
    <tr>
      <td>Reissuability</td>
      <td>This asset can be reissued</td>
    </tr>
    <tr>
      <td>Divisibility (Units)</td>
      <td>Divisibility (Units) can be 0 - 8</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data.</td>
    </tr>
    </table>
    </li>
  </ul>

  <br>
  <h3 id="what_is_on_chain">What is stored on the chain?</h3>
  <p>All asset creations, reissues, transfers, and tags are special scripts and are part of normal transactions.
  </p>
  <p>When an asset is created, nodes store the asset name, reissuability, divisions, associated data, and respective VOUT information in a database. This is how nodes easily access metadata. During a reissuance, the ownership asset must be sent to prove ownership on-chain and the node will save the new metadata. These asset creation and reissuance transactions are the only places where the metadata is stored on the chain.</p>
  <p>This means that, say, a 3rd party wallet sends you asset information. Whatever protocol they are using will need to send the client the VOUT of asset creations or reissues so that the client may verify the integrity of the metadata.</p>
  <p>The same is true for asset tags. They only exist on the chain in one singular transaction. The node then keeps track of where that transaction is in a database for verification later.</p>
  <p>You may have been surprised earlier when learning that the associated data of an asset is only 32 bytes. You are correct in believing that is not a lot of information. This is an intentional decision to keep clutter off of the chain. Typically, users will use this field for an <a href="https://ipfs.io/#how">IPFS hash</a> allowing for websites and files to be stored and hosted off chain whether it be on personal hardware or <a href="https://ravencoinipfs.com/">cloud file management hosts</a>. IPFS hashs are unique (literally a SHA256 hash of the data) and therefore a user can be confident that an IPFS hash on an asset will always point to the correct data.</p>

  <br>
  <h3 id="burn_addresses">Burn Addresses</h3>
  <p>In order to create an asset, a certain amount of RVN must be sent to a burn address.</p>
  <p>The first two characters are due to Ravencoin's P2PKH address type of 0x3C and the seeming random characters at the end of each address are the <a href="https://en.bitcoin.it/wiki/File:Address_map.jpg">public key's checksum</a>.</p>
  <table style="width:100%">
    <tr>
      <th></th>
      <th>Mainnet Address</th>
      <th>Testnet Address</th>
      <th>Amount</th>
    </tr>
    <tr>
      <td>Issue Asset</td>
      <td>RXissueAssetXXXXXXXXXXXXXXXXXhhZGt</td>
      <td>n1issueAssetXXXXXXXXXXXXXXXXWdnemQ</td>
      <td>500 RVN</td>
    </tr>
    <tr>
      <td>Reissue Asset</td>
      <td>RXReissueAssetXXXXXXXXXXXXXXVEFAWu</td>
      <td>n1ReissueAssetXXXXXXXXXXXXXXWG9NLd</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Issue Sub-Asset</td>
      <td>RXissueSubAssetXXXXXXXXXXXXXWcwhwL</td>
      <td>n1issueSubAssetXXXXXXXXXXXXXbNiH6v</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Issue Unique Asset</td>
      <td>RXissueUniqueAssetXXXXXXXXXXWEAe58</td>
      <td>n1issueUniqueAssetXXXXXXXXXXS4695i</td>
      <td>5 RVN</td>
    </tr>
    <tr>
      <td>Issue Message Channel</td>
      <td>RXissueMsgChanneLAssetXXXXXXSjHvAY</td>
      <td>n1issueMsgChanneLAssetXXXXXXT2PBdD</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Issue Qualifier</td>
      <td>RXissueQuaLifierXXXXXXXXXXXXUgEDbC</td>
      <td>n1issueQuaLifierXXXXXXXXXXXXUysLTj</td>
      <td>1000 RVN</td>
    </tr>
    <tr>
      <td>Issue Sub-Qualifier</td>
      <td>RXissueSubQuaLifierXXXXXXXXXVTzvv5</td>
      <td>n1issueSubQuaLifierXXXXXXXXXYffPLh</td>
      <td>100 RVN</td>
    </tr>
    <tr>
      <td>Issue Restricted Asset</td>
      <td>RXissueRestrictedXXXXXXXXXXXXzJZ1q</td>
      <td>n1issueRestrictedXXXXXXXXXXXXZVT9V</td>
      <td>1500 RVN</td>
    </tr>
    <tr>
      <td>Add Asset Tag</td>
      <td>RXaddTagBurnXXXXXXXXXXXXXXXXZQm5ya</td>
      <td>n1addTagBurnXXXXXXXXXXXXXXXXX5oLMH</td>
      <td>0.1 RVN</td>
    </tr>
    <tr>
      <td>General Burn</td>
      <td>RXBurnXXXXXXXXXXXXXXXXXXXXXXWUo9FV</td>
      <td>n1BurnXXXXXXXXXXXXXXXXXXXXXXU1qejP</td>
      <td>N/A</td>
    </tr>
  </table>
  <br>
  <h3 id="scripts">Asset Scripts</h3>
  <p>Here is where the technical protocol-ly stuff starts.</p>
  <p>The following sections assume that you are familiar with <a href="https://en.bitcoin.it/wiki/Script">script</a> and
   <a href="https://en.bitcoin.it/wiki/Transaction">transactions</a>.</p>
  <p>We do not endorse any of the assets shown in examples.</p>
  <p>There are 4 types of asset transfer scripts and 3 types of asset tag scripts. All asset scripts must be in a VOUT with a RVN value of 0.</p>
  <p>If you are looking to use this as a guide to parse the ravencoin chain, please see a note at the end of this section.</p>
  <h4>New asset script</h4>
  <p>New asset scripts are used to transfer an amount of an asset into and address during an asset create as well as associate metadata
   with the created asset.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>Standard vout script (P2PKH)</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset data (OP_PUSH) (Not including OP_DROP)</td>
      <td>1 or 2 bytes</td>
    </tr>
    <tr>
      <td>'rvn' in ascii (72766E)</td>
      <td>3 bytes</td>
    </tr>
    <tr>
      <td>Asset script type 'q' (71)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Asset name in ascii</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>Amount in sats (little endian)</td>
      <td>8 bytes</td>
    </tr>
    <tr>
      <td>Divisions (00-08)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Reissuability (00-01)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Has associated data (00-01)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Associated data (Optional; only if previous byte is 01)</td>
      <td>0x12 and 0x20 if IPFS data in which case API will encode/decode as IPFS content identifier
      <td>32 bytes of user defined data</td>
    </tr>
    <tr>
      <td>OP_DROP (75)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96&decode=1">8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96</a> VOUT 3</p>
  
  <h4>Ownership asset script</h4>
  <p>Ownership asset scripts are used in tandem with a new asset script if the new asset has an associated ownership asset.
   Notice how ownership assets have no extra information, not even an amount.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>Standard vout script (P2PKH)</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset data (OP_PUSH) (Not including OP_DROP)</td>
      <td>1 or 2 bytes</td>
    </tr>
    <tr>
      <td>'rvn' in ascii (72766E)</td>
      <td>3 bytes</td>
    </tr>
    <tr>
      <td>Asset script type 'o' (6F)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Asset name in ascii</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>OP_DROP (75)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96&decode=1">8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96</a> VOUT 2</p>
  <h4>Reissue asset script</h4>
  <p>Reissue asset scripts are used to change an asset's metadata. If the amount is not zero, that amount of the asset is created for the pubkey in the standard script.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>Standard vout script (P2PKH)</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset data (OP_PUSH) (Not including OP_DROP)</td>
      <td>1 or 2 bytes</td>
    </tr>
    <tr>
      <td>'rvn' in ascii (72766E)</td>
      <td>3 bytes</td>
    </tr>
    <tr>
      <td>Asset script type 'r' (72)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Asset name in ascii</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>Amount in sats (little endian) (Amount to add into circulation)</td>
      <td>8 bytes</td>
    </tr>
    <tr>
      <td>Divisions (00-08) (FF for unchanged; can only increase)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Reissuability (00-01)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Associated data (Optional; only if associating new data)</td>
      <td>1 type byte, 1 length byte, 32 bytes user data</td>
    </tr>
    <tr>
      <td>OP_DROP (75)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=b9d3ba355acbf58e44e893dccbcad06a10af88727adc340eeacd10d11b026f52&decode=1">b9d3ba355acbf58e44e893dccbcad06a10af88727adc340eeacd10d11b026f52</a> VOUT 3</p>
  
  <h4>Transfer asset script</h4>
  <p>Transfer asset scripts are used to transfer an amount of an asset to another address. If transfering an ownership asset, use 100,000,000 (00:E1:F5:05:00:00:00:00) for the sat value.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>Standard vout script (P2PKH)</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset data (OP_PUSH) (Not including OP_DROP)</td>
      <td>1 or 2 bytes</td>
    </tr>
    <tr>
      <td>'rvn' in ascii (72766E)</td>
      <td>3 bytes</td>
    </tr>
    <tr>
      <td>Asset script type 't' (74)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Asset name in ascii</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>Amount in sats (little endian)</td>
      <td>8 bytes</td>
    </tr>
    <tr>
      <td>Associated data (Optional; only if a broadcast)</td>
      <td>1 type byte, 1 length byte, 32 bytes user data</td>
    </tr>
    <tr>
      <td>OP_DROP (75)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=bae95f349f15effe42e75134ee7f4560f53462ddc19c47efdd03f85ef4ab8f40&decode=1">bae95f349f15effe42e75134ee7f4560f53462ddc19c47efdd03f85ef4ab8f40</a> VOUT 0</p>
  
  <h4>Null asset tag script</h4>
  <p>Dictates if an address is qualified for a restricted asset.</p>
  <p>If the asset is a qualifier, a flag of 1 denotes a qualification. A flag of 0 denotes a revocation.</p>
  <p>If the asset is a restricted asset, a flag of 1 denotes blacklisting the address. A flag of 0 denotes unblacklisting the address.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the pubkey h160 (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Pubkey h160</td>
      <td>20 bytes</td>
    </tr>
    <tr>
      <td>Length of the asset portion (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Qualifier or restricted asset name</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>Flag (00-01)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=4ea3369ef6fb57fc26e176ad5903d4684a8c64f641aa0e1f02e5c7428609e060&decode=1">4ea3369ef6fb57fc26e176ad5903d4684a8c64f641aa0e1f02e5c7428609e060</a> VOUT 1</p>
  
  <h4>Verifier asset tag script</h4>
  <p>This script must be sent with a new asset script or a reissue asset script for a restricted asset. It associates qualifiers with the restricted asset.</p>
  <p>An asset name portion of 'true' in ascii is the default to denote no associated qualifiers.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>OP_RESERVED (50)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset portion (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the qualifier name(s) (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Qualifier name(s) (joined with & in ascii)</td>
      <td>Var bytes</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=477a0b2214475d11e316524b500e29837c6763fec256594c2ca7aa369b15888b&decode=1">477a0b2214475d11e316524b500e29837c6763fec256594c2ca7aa369b15888b</a> VOUT 2</p>
  
  <h4>Global restriction asset tag script</h4>
  <p>If the flag is 1, this stops all movement of the restricted asset. A flag of 0 re-enables movement.</p>
  <table style="width:100%">
    <tr>
      <th>Script portion</th>
      <th>Number of bytes</th>
    </tr>
    <tr>
      <td>OP_RVN_ASSET (C0)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>OP_RESERVED (50)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>OP_RESERVED (50)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset portion (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Length of the asset name (OP_PUSH)</td>
      <td>1 byte</td>
    </tr>
    <tr>
      <td>Restricted asset name</td>
      <td>Var bytes</td>
    </tr>
    <tr>
      <td>Flag (00-01)</td>
      <td>1 byte</td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=2fc0bb7e3a33d12ca08f72add0effc3d059cf63382bebcad96e8923e91c3c537&decode=1">2fc0bb7e3a33d12ca08f72add0effc3d059cf63382bebcad96e8923e91c3c537</a> VOUT 2</p>

  <br>

  <p id="chain_parsing_note">**Chain parsing note**</p>
  <p>Just like the pirate by-laws, the OP_PUSH after OP_RVN_ASSET can be seen more as a suggestion rather than a rule-of-thumb. Currently nodes accept assets based on whether or not the ‘rvn’ is within 1 or 2 bytes after OP_RVN_ASSET instead of actually reading the OP_PUSH after OP_RVN_ASSET. Because of this, there are some transactions on the chain that have non-standard bytes after OP_RVN_ASSET. (Including lengths that are greater or less than the asset data or bytes that are greater than OP_PUSHDATA4).</p>
  <p>If you only want to track ‘good’ transactions you can ignore these, as the vast majority of transactions follow proper serialization protocols. However, these malformed transactions are in fact ‘valid’ outpoints (for now) and if you want an all-encompassing tracking of the chain, you will need to check for these edge cases.</p>
  <p>See <a href="https://github.com/Electrum-RVN-SIG/electrumx-ravencoin/blob/0dbe9496196c529ed2a92c202d6b6bc45e917a73/electrumx/server/block_processor.py#L673">here</a> for an example of a full chain parsing or <a href="https://github.com/Electrum-RVN-SIG/electrumx-ravencoin/blob/9acf5dd1d9af7ca038a895b674bad39f0d612807/electrumx/server/mempool.py#L320">here</a> for a best-effort parsing.</p>
  <br>

  <h3 id="create_transactions">Asset transaction structures</h3>
  <p>Similar to normal Ravencoin (and bitcoin) transactions, the amount of an asset from the VINS must equal the amount in the VOUTS (Not including created assets).</p>
  <p>A RVN fee must be paid for asset-only transactions just like any other.</p>
  <p>All of the protocols pertaining to transactions are the same. The only thing that changes is the scripts.</p>
  <p>The order of the VOUTS <i>does</i> matter when creating and reissuing assets.</p>
  <p>When creating transactions the created ownership asset (if there is one) must be sent to the same address as the created asset.</p>
  <h4>Transfer asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee</p>
      <p>Asset outpoint(s) for transfer</p>
      </td>
      <td>
      <p>RVN change address(s)</p>
      <p>Asset transfer script(s)</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=bae95f349f15effe42e75134ee7f4560f53462ddc19c47efdd03f85ef4ab8f40&decode=1">bae95f349f15effe42e75134ee7f4560f53462ddc19c47efdd03f85ef4ab8f40</a></p>
  
  <h4>Creating a main asset transaction</h4>
  Note that when creating assets, you get to freely determine what address to send the assets and ownership asset to.
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      </td>
      <td>
      <p>Issue asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Ownership asset script</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96&decode=1">8eefce8d264d723b6b8f3cf87bcb400a009d01c2771f94e5cc07af252851aa96</a></p>

  <h4>Creating a sub-asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Parent ownership asset outpoint</p>
      </td>
      <td>
      <p>Issue sub-asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For parent ownership asset)</p>
      <p>Ownership asset script</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=15127b9ea4c21c323dde1f2dd64b24b12efef2adec43b0b5f2e2377ad4aea369&decode=1">15127b9ea4c21c323dde1f2dd64b24b12efef2adec43b0b5f2e2377ad4aea369</a></p>

  <h4>Creating a unique asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Parent ownership asset outpoint</p>
      </td>
      <td>
      <p>Issue unique asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For parent ownership asset)</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=12f39ab78609e312e80c86d1ed3f25937120cbdeee6fc81b1068c400eb1c8518&decode=1">12f39ab78609e312e80c86d1ed3f25937120cbdeee6fc81b1068c400eb1c8518</a></p>

  <h4>Creating a reissue asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Ownership asset outpoint</p>
      </td>
      <td>
      <p>Reissue asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For ownership asset)</p>
      <p>Reissue asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=1370040248ba64a2676f125e645a83421adb2859c8c2aacc74017d738309ebda&decode=1">1370040248ba64a2676f125e645a83421adb2859c8c2aacc74017d738309ebda</a></p>

  <h4>Creating a message channel asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Parent ownership asset outpoint</p>
      </td>
      <td>
      <p>Issue message channel asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For parent ownership asset)</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=d5a13003bff69513b1bb172164ba015afd9bd5afc0a2d654cf10daf1ae470a8c&decode=1">d5a13003bff69513b1bb172164ba015afd9bd5afc0a2d654cf10daf1ae470a8c</a></p>

  
  <h4>Creating a qualifier asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      </td>
      <td>
      <p>Issue qualifier asset burn address</p>
      <p>RVN change address(s)</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/tx/?txid=748c7e0996e0a4f599c51635c8fce8ddd6ae0e625be640fa4074f51f2574d7a1">748c7e0996e0a4f599c51635c8fce8ddd6ae0e625be640fa4074f51f2574d7a1</a></p>

  <h4>Creating a sub-qualifier asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Parent asset outpoint</p>
      </td>
      <td>
      <p>Issue sub-qualifier asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For parent asset)</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/tx/?txid=748c7e0996e0a4f599c51635c8fce8ddd6ae0e625be640fa4074f51f2574d7a1">748c7e0996e0a4f599c51635c8fce8ddd6ae0e625be640fa4074f51f2574d7a1</a></p>

  <h4>Creating a restricted asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      </td>
      <td>
      <p>Issue restricted asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Verifier asset tag script</p>
      <p>Ownership asset script</p>
      <p>New asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=c1e61a69bfb3a02f15c44b530a76fee8d69c8b54b0cc69c0fab81a583e3e5c33&decode=1">c1e61a69bfb3a02f15c44b530a76fee8d69c8b54b0cc69c0fab81a583e3e5c33</a></p>

  
  <h4>Creating a reissue restricted asset with new qualifiers transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Ownership asset outpoint</p>
      </td>
      <td>
      <p>Reissue asset burn address</p>
      <p>RVN change address(s)</p>
      <p>Verifier asset tag script</p>
      <p>Transfer asset script (For ownership asset)</p>
      <p>Reissue asset script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvnt.cryptoscope.io/api/getrawtransaction/?txid=a2b634e160974348647484302501a64bc80a841d4a9ea833498a47e72e987628&decode=1">a2b634e160974348647484302501a64bc80a841d4a9ea833498a47e72e987628 (testnet)</a></p>

  <h4>Creating a null asset script transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Qualifier or restricted ownership asset outpoint</p>
      </td>
      <td>
      <p>Tag burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For qualifier or restricted ownership asset)</p>
      <p>Null asset tag script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=0332beef9c76cf300b166cf5f56e8acd83788201eae1fc93f05364c28cd882f2&decode=1">0332beef9c76cf300b166cf5f56e8acd83788201eae1fc93f05364c28cd882f2</a></p>

  <h4>Creating a freeze restricted asset transaction</h4>
  <table>
  <tr>
      <th>VINS</th>
      <th>VOUTS</th>
    </tr>
    <tr>
      <td>
      <p>RVN outpoint(s) for fee and burn</p>
      <p>Restricted ownership asset outpoint</p>
      </td>
      <td>
      <p>Tag burn address</p>
      <p>RVN change address(s)</p>
      <p>Transfer asset script (For restricted ownership asset)</p>
      <p>Global restriction asset tag script</p>
      </td>
    </tr>
  </table>
  <p>On chain example: <a href="https://rvn.cryptoscope.io/api/getrawtransaction/?txid=cb6f7a7cf7d65d532101a259ef37cebff77ccb1e9f86823910537d6580071668&decode=1">cb6f7a7cf7d65d532101a259ef37cebff77ccb1e9f86823910537d6580071668</a></p>
