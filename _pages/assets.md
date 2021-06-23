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
  <h3>What is an asset?</h3>

  <p>A Ravencoin asset (also less commonly referred to as a token) is an on-chain way of creating, storing, and transfering
 custom end-user generated information. Assets come with a unique, user-chosen name which can
 allow for assets to be verified by name only and metadata (which we will look into later). Ravencoin users have created assets
 to make their own 'coin', sell digital art, and even incorporated it as an in-video game currency.</p>

  <br>
  <h3>The jargon...</h3>
  <p>When dealing with assets, it is inevitable that you will eventually come across some strange words denoting strange
 concepts. Before we move on, you should familiarize yourself with these concepts.</p>
  <ul>
    <li>
      <h4>Reissuability</h4>
      <p>This is a metadata flag that denotes whether or not an asset can be reissued. Once this flag is set to false it
 CANNOT be changed back! If you want (or have even a sliver of belief) that you want to change your asset's information in
 the future, ensure that you asset is reissuable when you create it!</p>
    </li>
    <li>
      <h4>Divisibility</h4>
      <p>This is a metadata value from zero to eight that denotes how much an asset can be broken up. Specifically this
 number is how many digits past the decimal this asset can be divided into (a minimum size of 10<sup>-d</sup> where d is the
 divisibility).</p>
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
      <p>When changing divisibility during a reissuance, the divisibility can only go up. (What would happen if you changed
 divisibility to zero when users had fractions of an asset?)</p>
    </li>
    <li>
      <h4>Ownership Assets</h4>
      <p>When creating certain types of assets, you will also receive an ownership asset. Ownship assets allow a user to
 reissue an asset and create "child assets" which we will explore in the next section. Ownership assets always come in the
 form of an exclamation point (!) coming after whatever you named your asset. For instance, say we create an asset named
 "ASSET". The associated ownership asset would be "ASSET!". If an asset A requires the ownership asset of asset B to be created,
  asset B is said to be asset A's "parent" and asset A is said to be asset B's "child".</p>
    </li>
    <li>
      <h4>Associated Data</h4>
      <p>Or IPFS hash or associated TXID. 34 bytes of user-decided information. Generally this is used with an IPFS hash
 or a TXID, but it can be anything.</p>
    </li>
    <li>
      <h4>Message Broadcasts</h4>
      <p>Any owner of any asset can broadcast a 34 byte message associated with that asset. We will go more in-depth with
 broadcasts later.</p>
    </li>
    <li>
      <h4>Null Asset Tags</h4>
      <p>These are special <a href="https://en.bitcoin.it/wiki/Script">scripts</a> used by holders of qualifier assets and restricted ownership assets
 to define behavior between restricted assets and addresses. The relationship between qualifiers, restricted assets, tags, and
 addresses is fairly complicated. We will go more in-depth further down the page.</p>
    </li>
  </ul>

  <br>

  <h3>Creating Assets</h3>
  <p>When creating an asset, you need to know what type of asset you want, the name of the asset, the amount of an asset,
 how much it costs to create an asset, and the metadata associated with an asset.</p>
  <p>Assets cannot be differentiated against one another except through their names. This means that all asset names must be unique.
   an asset creation will not be accepted by the chain if the name is not unique.</p>
  <p>The cost of creating an asset can also be see more of as cost to "reserve the name"; this cost is static no matter how much of an asset you create (However, do note that it costs 100 RVN to reissue an asset).</p>
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
  <h3>The big three</h3>
  <p>When working with Ravencoin assets you will most likely be using one of these three. They are by far the most used
 types of assets. It can help to think of these assets as pieces of some abstract on-chain website.</p>
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
      <td>3-31 capital letters. '.' and '_' are also allowed, but they cannot be at the beginning or end of the asset name.
 More than one of these special characters also cannot be next to one another. The names RVN, RAVEN, and RAVENCOIN are reserved.</td>
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
      <td><p>The sub-portion of the name must be at least 1 capital letter. '.' and '_' are also allowed, but they cannot be at the beginning or end of the sub-portion.
 More than one of these special characters also cannot be next to one another.</p>
      <p>The full sub-asset name takes the form [main asset name]/[sub-portion]. This full name must be less than 32 characters.</p></td>
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
  <p>A unique asset can be likened to a file on a website. Creating a unique asset requires a main asset ownership token or
 a sub-asset ownership token. There can only be 1 of a unique asset.</p>

  <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td>The unique portion of the name must be at least 1 character. The full unique asset name takes the form
 [main or sub asset name]#[unique portion]. This full name must be less than 32 characters.</td>
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
  <h3>Broadcasts and Message Channels</h3>
  <p>Our next asset type is a message channel, and we cannot talk about message channels without first talking about
   broadcasts. It is important to note that asset broadcasts and message channels are rarely used and their use-case has not been
   solidified by the community.</p>
  <h4>Message Broadcasts</h4>
  <p>Any user can broadcast a message on any asset that they own. A broadcasted message is 34 bytes long. End users can subscribe
   to assets and will be able to see all of the broadcasts made by an asset, that asset's ownership asset, and all <i>message channels</i>
   for that asset and be able to filter their subscriptions by general asset broadcasts, ownership asset broadcasts, and message channels. (This feature is not yet implement in the core wallet).</p>

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
      <td><p>The message channel portion of the name must at most 12 characters. It can contain letters, numbers, and '_'. '_'
   cannot be at the beginning or end of the message channel portion and two or more '_''s cannot be next to each other.</p>
      <p>The message channel asset name takes the form
 [main or sub asset name]~[message channel portion]. This full name must be less than 32 characters.</p></td>
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
  <h3>Qualifiers, restricted assets, addresses, and tags</h3>
  <p>This is where things really start to get complicated. First you should know that qualifier assets, or simply qualifiers, dictate what addresses can hold a restricted asset by "qualifying" them with a null asset tag.
   A restricted asset can be associated with 0 or more qualifiers. The main factor in deciding whether or not an address can recieve a restricted asset is whether that address has been qualifier by all of the qualifiers associated with the said restricted asset.</p>
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
    <p>A verifier asset tag can be created with a restricted asset's ownership asset. It associates this restricted asset with one ore more qualifiers. (This
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
    <p>Qualifier assets are used to determine what addresses can receive restricted assets. Simply owning a qualifier asset gives a user this power.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The qualifier portion of the name has the same naming rules as a main asset.</p>
      <p>The qualifier asset name takes the form
 #[qualifier portion]. Note how this is differentiated from unique assets with the fact that a qualifier has no parent. This full name must be less than 32 characters.</p></td>
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
    <p>Currently, sub-qualifiers have exactly the same powers as their parents.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The sub-qualifier portion of the name has the same naming rules as a sub-asset.</p>
      <p>The sub-qualifier asset name takes the form
 #[qualifier portion]/#[sub-qualifier]. Note how this is differentiated from unique assets with the fact the the intermediary characters are '/#' This full name must be less than 32 characters.</p></td>
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
    <p>Restricted assets are comparable to main assets except for the fact that they are, well, restricted. Currently restricted assets can only be associated with main qualifiers (not sub-qualifiers).
    If a restricted asset is not associated with any qualifier, it cannot be transfered. 
    Restricted assets are also somewhat unique in the fact that if they can be reissued, they are able to change what qualifiers they are associated with.</p>
    <table style="width:100%">
    <tr>
      <th>Metadata</th>
      <th>Information</th>
    </tr>
    <tr>
      <td>Asset Name</td>
      <td><p>The restricted portion of the name has the same naming rules as a main asset.</p>
      <p>The restricted asset name takes the form
 $[restricted protion]. This full name must be less than 32 characters.</p></td>
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
      <td>Divisibility</td>
      <td>Divisibility can be 0 - 8</td>
    </tr>
    <tr>
      <td>Associated Data</td>
      <td>This asset can have associated data.</td>
    </tr>
    </table>
    </li>
  </ul>

  <br>
  <h3>What is stored on the chain?</h3>
  <p>All asset creations, reissues, transfers, and tags are special scripts and are part of normal transactions.
  </p>
  <p>When an asset is created, nodes store the asset name, reissuability, divisions, associated data, and respective VOUT information in a database.
   This is how nodes easily access metadata. During a reissuance, the ownership asset must be sent to prove ownership on-chain and the node
   will save the new metadata. These asset creation and reissuance transactions are the only places where the metadata is stored on the chain.</p>
  <p>This means that, say, a 3rd party wallet sends you asset information. Whatever protocol they are using will need to send the client the VOUT of asset creations or reissues so that the
   client may verify the integrity of the metadata.</p>
  <p>You may have been surprised earlier when learning that the associated data of an asset is only 34 bytes. You are correct in believing that is not
  a lot of information. This is an intentional decision to keep clutter off of the chain. Typically, users will use this field for an
  <a href="https://ipfs.io/#how">IPFS hash</a> allowing for websites and files to be stored and hosted off chain whether it be on personal hardware or <a href="https://ravencoinipfs.com/">cloud file management hosts</a>. IPFS hashs are unique (literally a SHA256 hash of the data) and therefore
   a user can be confident that an IPFS hash on an asset will always point to the correct data.</p>

  <br>
  <h3>Burn Addresses</h3>
  <p>In order to create an asset, a certain amount of RVN must be sent to a burn address.</p>
  <p>The first two characters are due to Ravencoin's <a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#Coin_type">coin type</a> and the seeming random characters at the end of each address are the <a href="https://en.bitcoin.it/wiki/File:Address_map.jpg">public key's checksum</a>.</p>
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
  <h3>Asset Scripts</h3>
  <p>Here is where the technical protocol-ly stuff starts.</p>
  <p>The following sections assume that you are familiar with <a href="https://en.bitcoin.it/wiki/Script">script</a> and
   <a href="https://en.bitcoin.it/wiki/Transaction">transactions</a>.</p>
  <p>There are 4 types of asset transfer scripts and 3 types of asset tag scripts. All asset scripts mush have a RVN value of 0.</p>
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
      <td>34 bytes</td>
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
      <td>34 bytes</td>
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
      <td>34 bytes</td>
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

  

  </div>
