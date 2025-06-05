---
title: "What happened to Heroglyphs?"
excerpt: "The once hyped protocol attempting to fix Validator Centralization with Degeneracy."
date: "2024-09-23"
image: "/images/Heroglyph/Hero.png"
slug: "heroglyph"
colorClass: "article-orange-hero"
---
![Hero.png](/images/Heroglyph/Hero.png)
<span class="comment">A couple weeks ago I opened OpenSea for the first time in... honestly, could not tell you. Don't really know why. There is nothing of value on there. Hasn't been in years.
Well, what do I find? A bunch of Polygon scam NFTs of course. But then - a few scrolls further down - a project I had forgotten about just as quickly as I hit the mint button. Heroglyphs.</span>

So yeah. *Surprise.* This article is about Heroglyphs. More specifically, about the genius idea at the core of the protocol. About the hype - the misconceptions - and finally about why it ultimately ended up as yet another set of weird little png's collecting dust inside my OpenSea. 6 Items. Among 568. Forever reminding me of the good old days... of the money I lost.

### Overview

Did you know that gelatin is won by boiling the skin and bones of pigs? Yeah, a bit of a random intro... stick with me.
You probably did. I remember learning that in elementary school when our teacher showed us a video. You can imagine the disgust that swept the classroom. She went on to explain that this was actually a good thing. Utilizing the entire animal. It's what our forefathers did aswell. This stuck with me. So I continued to eat <span class="highlight">Pig Ears</span>. Haribos. Gladly.

Back to the topic. DeFi is about money. Money needs yield. Fortunately, we had something called the Merge two years ago. Suddenly everyone with 32 ETH and some technical knowledge could access yield.
Not good enough. So we came up with Liquid Staking. Swap your ETH to some LST and start earning. Democratized Yield. Groundbreaking. Imperfect.

Don't get me wrong. Reducing the entry barrier for token staking is a good thing but it means that the actual validation is consolidated within a limited number of specialized node providers. Lido. Rocket Pool. Coinbase. Binance. Centralization Risks are created along multiple vertices.  Consensus. Execution. Geographic.

<figure>
  <img src="/images/Heroglyph/Centralization.png">
  <figcaption> Consensus, Execution and Geographical Validator Diversity, data from <a href="https://clientdiversity.org/">Ethereum.org</a>
  </figcaption>
</figure>

One approach - or delusion, rather - is to trust the efforts put forth by the Ethereum Foundation, Industry Incumbents, or even Staking Services themselves to increase diversity. Another approach, one much more aligned with the ethos of crypto, is to instead push for more Complete Validators. <span class="highlight">Solo Validators</span>.

But why would any sane person prefer to jump through the complexity-hoops of renting/buying expensive hardware and setting up reliable uptime maintenance for a measly 5% APR. Not to mention the 32 ETH and Slashing risks. The answer. <span class="highlight">Pig Ears</span>.

### Monetizing Free Real Estate
Validators are like bouncers. They check if blocks of transactions are valid. If they are, the block is added to the chain. In return for this service they earn ETH. What many don't know - well I didn't - is that those bouncers slap sticky notes on the back of whoever is let into the club (*or rather of whatever block is let onto the chain).

Those sticky notes are called "Graffitis" and usually contain elementary information about the Validator or Staking Service. But anything goes. Anything. As long as its within a 32 byte limitation.

Although they don't have a direct functional impact on block validation or consensus, their information is embroidered into the chain and can be accessed.

<figure>
  <img src="/images/Heroglyph/FreeRealEstate.png">
  <figcaption>No, seriously. It really is.
  </figcaption>
</figure>


This is where we loop back to Heroglyphs. [0xmaki et al.](https://github.com/Finallyt/Heroglyph/blob/main/Heroglyphs%20-%20Unclassified.pdf) had the brilliant idea to make use of this otherwise valueless byproduct of validation operations. The idea is to pack value into those sticky notes. Value that exclusively accrues to Solo/Complete Validators and could create a force counteracting the validator centralization present since the Merge. Finally. A reason for Solo Validators to exist. One surpassing mere ideology. An economical incentive.

Let's take a look at how this works. Roughly.
### Protocol Design
<span class="comment">Actually, feel free to skip this overview. I felt it was mandatory to add but I do a much better job explaining it a bit further down.</span>

At its core, Heroglyph consists of two models - an <span class="highlight">Encoder</span> and <span class="highlight">Translator</span>. In very simple terms, the Encoder writes sticky notes and the Translator reads and acts on them. The information inside the Graffiti can dictate an array of onchain operations such as the creation, emission, transfer and transformation of tokens. <span class="comment">*Sounds familiar? Runes.*</span>

<figure>
  <img src="/images/Heroglyph/TranslatorEncoder.png">
</figure>

Complete Validators seeking to take part in the Heroglyph ecosystem need four things.
1. <span class="highlight">Heroglyph ID</span> - Used for Validator Identification. Since they have to be part of the Graffiti, Validators opt for a short one to leave as much space as possible for tickers. <span class="comment">*More on this later.*</span> IDs cost 0.1 ETH and are Soul Bound.
3. <span class="highlight">Validator Index</span>
4. <span class="highlight">Genesis Key</span> - These are the NFTs you might be familiar with. They are required if Validators want to farm the underlying token. <span class="comment">*Again, more on this in a bit.*</span>
5. <span class="highlight">Graffiti</span> - Finally, using the IDs and Tickers a Graffiti can be generated on the official Heroglyph website. Validators then inject it according to the process specified by the validation client.

<span class="highlight">*Et voila.*</span> The Validator is successfully farming. Every time it attests a block, it earns 1 Medal. After approximately 15 days of uninterrupted, consistent validating, the received Medals add up to 1 $BADGES. These in turn can be redeemed into any of the tokens included in the Graffiti.

#### Let's break that down
<span class="comment">*Seems complex right. Believe me the actual docs and resources available are even more so. I remember that this information wasn't even public at launch which only accelerated the protocols ultimate demise into irrelevance - at least in my mind. Wait. Before we get into its fate, let's try to understand the magic first.*</span>

Hello, I'm a Validator. Staking 32 ETH and running a server. Earning 5% APR.

Im looking for a way to increase my earnings through Heroglyph. So I pick up an ID for 0.1 ETH and look through the available assets. There are 16 <span class="comment">*immutable*</span> Genesis Tokens and about 50 custom tickers that point to ERC-20 contracts across various chains. <span class="comment">*For simplicity sake I won't go into the mechanics of these.*</span>

I like the look of [$GARFFELDO](https://dexscreener.com/base/0x4984ee8225116197f25fd21176298d0b9f217367) so in order to start farming, I go ahead and mint a Genesis Key NFT for 0.0016 ETH. I also like [$SANICSUPERSPEED](https://youtu.be/4-UCPpb3ixw?t=5). I pick up the NFT and move on to creating my Graffiti. Here, I realize that adding both tickers would exceed the 32 byte limit of my Graffiti so I mint custom short tickers and point them to [$GARFFELDO](https://dexscreener.com/base/0x4984ee8225116197f25fd21176298d0b9f217367) and [$SANICSUPERSPEED](https://youtu.be/4-UCPpb3ixw?t=5). My Graffiti now looks like this and I start farming.

<figure>
  <img src="/images/Heroglyph/Example_Graffiti.png">
    <figcaption>In reality there are already preminted tickers that can be used such as "y" for $SANICSUPERSPEED and "L" for $GARFFELDO/$LASAGNA
  </figcaption>
</figure>

After 15 days I have earnt my first full $BADGES which I can either redeem for some amount of [$GARFFELDO](https://dexscreener.com/base/0x4984ee8225116197f25fd21176298d0b9f217367) or [$SANICSUPERSPEED](https://youtu.be/4-UCPpb3ixw?t=5). Depending on the emission schedule and market price of these assets I can use Heroglyphs to supplement the 5% Staking APR by some percentage.

Depending on the market price...

#### Running the Numbers
As a rational Validator I'd redeem my earned $BADGES for 6.89m [$LASAGNA](https://dexscreener.com/base/0x4984ee8225116197f25fd21176298d0b9f217367) (the token behind GARFFELDO). At current prices this would net me about $9 so $18 a month. Comes out to an APR of 0.2% assuming the full 32 ETH. Not great.

<figure>
  <img src="/images/Heroglyph/Analy.png">
    <figcaption>The fact that I had to go out of my way and create this and it not being available anywhere shows that there is little demand/interest. Well $60 a month is decent.
  </figcaption>
</figure>

Upon further inspection I realize that there are 6 tokens and pools that have reached an equilibrium at around $30 per $BADGES. Around 1% APY. What to do? I would proceed to sell both my [$GARFFELDO](https://dexscreener.com/base/0x4984ee8225116197f25fd21176298d0b9f217367) and [$SANICSUPERSPEED](https://youtu.be/4-UCPpb3ixw?t=5) keys on OpenSea, pick up [$ARBINAUTS](https://youtu.be/gAV-_AHJ2C8?t=14), [$BERA](https://youtu.be/WQQcP38O5Z0?t=3), [$PORIGON](https://dexscreener.com/polygon/0x7c173e2a341faf5c90bf0ff448cd925d3731c604) and maybe [$MOLANDAK](https://youtu.be/Hsry2-kn5tQ?t=35) and go through the Graffiti creation and ticker optimization process again. <span class="comment">*Of course, depending on by belief in the mechanism I'd only pick up one key to minimize my investment.*</span> This would allow me to realize the 1% APY on top of consensus rewards. But how sustainable is this?

$70'000 TVL in the most liquid pair. Steadily declining. The Heroglyphs ecosystem is suffocating. Slowly. Taking a breath every 100 blocks until the last slither of oxygen - liquidity - is depleted.

How did we get into this situation?

#### Turning back Time
It's April 26th. Heroglyph launches., taking Twitter by storm. [Adam Cochran](https://x.com/adamscochran/status/1784079578731843683), [Andrew Kang](https://x.com/Rewkang/status/1784261891063505216), [Arbitrum Foundation](https://x.com/arbitrum/status/1784291336213926038). The timing is perfect. Bitcoin's poor UX made Runes unfeasible, driving away disillusioned users. What better narrative to latch onto than 'Runes on EVM'.

Over the following three days, 4 of the 16 Genesis Key collections sell out - $5'318'000 are 'raised'. Cryptic tweets and a complex whitepaper only exacerbate the fire as the $LUEYGI Key floor price doubles. The experience didn't feel like the launch of a new protocol, but rather a fierce wind carrying echoes from the bygone NFT era, with speculators flooding secondary markets... A huge success in terms of revenue. <span class="comment">*Or so you'd think.*</span>

<figure>
  <img src="/images/Heroglyph/Launch.png">
    <figcaption>Some gems in there. Good laugh.
  </figcaption>
</figure>

The purpose was to show the power of the protocol through an initial game. The 16 Genesis tokens had varying supplies, emission schedules, chains, and exchanges. The intention - show what's possible. A pump.fun alternative with positive externalities countering validation centralization.

What was supposed to be like a firework - the fuse igniting a steady climb as tokens spread across the EVM before exploding into a burst of vibrant colors - turned into a quick bang on the ground. Turning heads. Leaving only confusion.

#### Snap. Back to Reality.
So the launch was... subpar. A masterclass in terms of hype. An utter failure in educating users. Where did this lead? Various routes can be taken to investigate the protocols state today. All of which culminating in the same conclusion.

<span class="highlight">Key Valuations</span> have fallen an average of 85% against mint prices with PORIGON leading the pack at 98% - from a mint value of 100 USDC to 0.0008 ETH. <span class="highlight">Token Prices</span> look identical across the board. Down only. I will spare you the image. Causally, <span class="highlight">TVL</span> has been steadily declining as Validators keep selling into the little ETH/Stables left with little to no inflow. <span class="comment">Speaking of Validators, only 5% of the total Keys minted were used inside a Graffiti. No wonder. Misguidance.</span>

Ending with the most important stat - <span class="highlight">Heroglyph Blocks</span>. A total of 782 blocks have been proposed with an injected Heroglyph Graffiti. Some low level math puts the total amount of Heroglyph Validators at somewhere north of 950. Zooming into daily proposed blocks shows that the number of validators has not increased since early May - even declining slightly. 

<figure>
  <img src="/images/Heroglyph/Stats.png">
    <figcaption>Apologies for not being able to click on this. Will add the functionality later on. Sorry.
  </figcaption>
</figure>

None of the stakeholders are benefitting from the protocols existence in any relevant capacity. The Validators are picking away at the liquidity created by confused speculators. Speculators have long since moved on, quenching their thirst for degeneracy through avenues that have done a much better job of catering to them.

The conclusion. <span class="highlight">Death.</span>

<figure>
  <img src="/images/Heroglyph/Death.png">
</figure>

### What went wrong.
<span class="comment">For the short answer, scroll down and look at the image. For the long answer, keep reading.</span>



#### Coordination Failure with Positive Externalities
The formula brought forward by Heroglyph relies on two parties. Validators mining supply and Degens driving speculative demand. The challenge becomes evident when considering the completely different buy-in profiles and misaligned KPIs. Contrasting needs.

<span class="highlight">Validators</span> simply pick and choose any combination of tokens to farm with the sole buy-in being Keys. For any token with a sufficiently short amortization period and continued high APRs, a couple clicks and one Graffiti generation is all that is needed to start farming. From there, the process becomes a passive one. *Except for dumping the token of course.*

<span class="highlight">Degens</span> on the other hand are exposed to multiple, greater risks. First, the fact that tokens are continuously being emitted according to a murky schedule means that accumulating a significant position in any of the tokens is met with immediate dilution. <span class="comment">Sure, this also happens with other memecoins but to a less significant degree. Speaking about the first couple of weeks here.</span> Early bootstrapping periods are of course present across various speculative assets but can generally be counteracted by the team/founder signaling long-term commitment. Locking Liquidity. Pushing socials. Interacting in discord.

This is not possible here. Solo Validators have very little incentive to build up a meme culture - not to mention the lacking skillset. A classic 'Tragedy of the Commons' ensues as a lack of incentivized coordination means that speculators start turning their backs.

The idea of 'fair launching' memecoins has been proven by pump.fun and other copycats. Successful projects are created by an invested team of individuals that is trying to create some form of value from nothing. I don't see how a team like this can form through Heroglyph. Given a token launched through conventional, fair means and one through Heroglyph, ceteris paribus, the former will always be the better pick for degens.

<span class="comment">One could argue that Degens and Validators don't have to be mutually exclusive. I disagree. Two possibilities. First a Validator that is part degen - unlikely. Second a Degen that turns Validator - inefficient (32 ETH).</span>

<figure>
  <img src="/images/Heroglyph/YouVSDev.png">
    <figcaption>This was literally the sentiment. You buy some NFT, get locked in a cage, a week later someone shows you complex docs. <a href="https://x.com/hero_glyphs/status/1786206987803558297">Just look at these comments</a>.
  </figcaption>
</figure>


#### The Other Stuff
In my opinion, the base-level incentive distribution is flawed which would prevent any flourishing speculative asset from establishing itself. Pushing that opinion to the side, there have also been clear mistakes in terms of execution.

First the simple fact that 95% of Key holders are not Validators. This points at a lack of education and guidance for Degens and ultimately led to the firework blowing up on the ground and with it all hopes of a posterchild asset forming.

Second, the attempt to exclude whales. The team decided to launch 14 tokens with different emission profiles across various chains and exchanges in order to mitigate the concentration of whales with outsized resources. With this, the attention is also spread thin. If the team instead launched with a single token on a popular chain, the probability of creating a speculative asset with buy in from Degens would be infinitely larger.

The very idea that the presence of whales inside the system would be to the detriment of Degens is flawed aswell. I initially carried out this point but realizing that this article has already reached a length were most won't even bother to read these points, I will omit it here.

### Conclusion
Heroglyph was an attempt to tax the most successful usecase of crypto to date - memecoins - in order to improve the very technology that enables it. This tax however is neither justified through UX or any other benefit to Degens.

I'm confident that the idea behind the protocol and possibly even Heroglyph itself will succeed in changing a small part of the on-chain environment. A few usecases come to mind like some sort of XP/Level system that would reward Solo Validators for their continuous efforts with exclusive access to TGEs, Airdrops, NFTs, etc.

I also hope that the following 2 Heroglyph Phases - we are at Phase 2 out of 4 - succeed in pivoting Heroglyph by perhaps tapping into the Degens that minted only to leave full of confusion a couple days later.

I won't change my view here. Death. Yet I see <span class="highlight">Pig Ears</span>. Full of Gelatin. Unboiled.

I hope I'm proven wrong. 
<span class="highlight">Cheers.</span>