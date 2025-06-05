---
title: "StarkWare - Orange and Blue"
excerpt: "Thoughts about StarWare, OP_Cat and Settling on multiple chains"
date: "2024-08-29"
image: "/images/Starkware.png"
slug: "StarkWare"
colorClass: "article-orange-blue"
---

![Starkware.png](/images/Starkware.png)

### **A lengthy Introduction**

> We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.
> <span class="quote-author">T.S. Eliot, Four Quartets</span>


This will be an attempt to capture the fleeing thoughts and impressions of my most recent jump into a rabbit hole. Over the last days (weeks even) I spent more time than I’d like to admit studying OP_Cat and the possibilities BIP-420 could unlock. After detours of listening to hour-long debates between Bitcoin Devs, leaving me humbled and confused, and looking at the vertical scalability approach by Ethereum for the umpteenth time I settled my attention on StarkWare.

Prior to this research marathon Starknet was just another L2 in my mind. Just another chain pushed by VCs. Trying to become consensus again so the stakeholders can run to the exit. $3b FDV, lacking metrics, eroded community. Was I wrong? Probably not. But there is some insanely fascinating stuff happening here.

So no, this is not supposed to be some glorified hit piece. This is not some SUI shill before unlocks. This is my unfiltered view. Or rather a way for me to note down my thoughts and learning in a way that allows me to find flaws and share knowledge at the same time.

Let’s start off with some basics.

####  Why L2s? Why so many?

_Money. Extraction._

I was around in ‘20/’21 during the NFT craze. Scouring [icy.tools](http://icy.tools) for new promising mints. In many ways similar to the degens in the [pump.fun](http://pump.fun) trenches today. With a key difference. The average mint was 0.05 ETH. Double that and you had the associated gas costs. Crazy. To be profitable you had to almost always hit a 3x unless you minted hundreds of colorful pfps for 5 figures at a time. Images created by some Fiverr artist for $25.

<figure>
  <img src="/images/mint_fail.png">
  <figcaption>Screenshot from a failed mint tx, late 2021, colorized. Shit hurt back then. Still does.</figcaption>
</figure>

So yes. I understand the importance behind scaling. No need to think about downstream users, onboarding billions, whatever. A casino where moving from the slot machine to the bakkarat table costs $100 is outright stupid.

But look at gas today. Below 1 gwei. Either Ethereum has really fallen from glory or… Scaling worked?! It’s the latter. I know it’s cool to dunk on Ethereum nowadays. <span class="comment">Sorry.</span> Yet. This is still far from the grand success ETH maxis are depicting.

_Interoperability is a meme._

The vertical expansion of the EVM creates new layers of interest to absorb demand but also friction. Bridges seemed like an easy fix. You can move between chains by either waiting 7 days or paying some fee. You can even be fulfilled before finalization if you pay enough. Next in line are liquidity networks, enshrined account abstraction, asynchronous intent-filling omnichain mumbo jumbo. All in the name of interoperability. Let’s not even touch on centralized ordering/MEV here. Inefficient. Forced Extraction.

![Bridge.png](/images/Bridge.png)

I digress. Back to the topic at hand. Every new L2 erodes UX through leaky infrastructure and increases the fragmentation of the EVM. Simple as that. If we go back to thinking about the end-user we really just need cheap, secure blockspace. Namely a base layer and a single, performant, fully decentralized rollup. That’s it.

<span class="comment">_One can argue for appchains but those would settle on the rollup. I’m not against L3s, just unnecessary fragmentation at every level. I also believe that over time we will converge to this state and the current phase is natural and needed for healthy competition until the most efficient solution emerges._</span>

#### Validity vs Optimistic

Tech takes time to build. That’s why the first rollups to launch used Fraud Proofs. That’s why the leading L2s today are optimistic. Simple first-mover advantage. This will changes as superior ZK rollups start to hit a disruption point.

_A quick explanation._

Optimistic rollups - like Arbitrum and Optimism - assume transactions are valid by default. They are executed on L2, bundled into a batch and submitted to the base layer. During a challenge period (up to 7 days), verifiers can submit a fraud proof showing that some transaction is invalid. If not, the batch is finalized and state transitions.

Zero-knowledge rollups don’t rely on verifiers and incentivization models but ensure the validity of each batch through cryptographic methods. Validity Proofs. Math. Transactions are also executed on the L2 but then batched together into a single proof. The state difference (a summary showing only the changes made to balances etc.) and validity proof are then submitted to the base layer where they are finalized within hours.

<figure>
  <img src="/images/ZKRS_ORS.png">
  <figcaption>Data relayed to L1 by ZKRs (left) vs ORs (right), Credit to <a href="https://www.nervos.org/knowledge-base/zk_rollup_vs_optimistic_rollup">Nervos.org</a></figcaption>
</figure>

The added complexity increases the general computation overhead for Validity rollups by roughly ten times compared to Optimistic rollups, which require a minimum of 100 validators screening to ensure correct performance. Not continuous, complex proving.

Okay, enough tech talk. ZK rollups have faster finality and are more secure but at the cost of complexity. They will outcompete ORs as Moore’s Law accelerates cryptographical computation.

<span class="highlight">Math > Trust</span>

![Magic.png](/images/Magic.png)

#### Does the tech stack matter?

_Last section before we get into StarkWare I promise._

As a user I couldn’t care less about the tech. Honestly, decentralization as well. I don’t look at theoretical metrics like TPS and whether or not sequencers are decentralized. I don’t consult L2Beat to make a conscious decision on what to use. I simply go where there’s stuff to do or where it seems safest.

<span class="comment">And so do you.</span>

It all boils down to real users. Not hard to understand, really. Still, let’s use an analogy. Think about home parties. There are 2 extractive groups. The first are there to drink (alcoholics) and the second are there to pick up girls (chads). Across town, there are numerous parties. Which one do the alcoholics choose? The one that has the most alcohol and the least risk of cops showing up. Which one do chads choose? The one with the most people.

As a host, how do you attract them. How do you compete with neighbours. Two options. Either maximize the alcohol (incentives) to attract alcoholics, hoping chads follow and some attendees stay around after you run dry. Or … offer a unique experience. Swimming pools. Taxi service. Wide doors. Open space. Safety. Whatever. <span class="comment">_Stifler’s mom_.</span>

<figure>
  <img src="/images/Cretins.png">
  <figcaption>Sorry, watched American Pie w/ my gf for the first time, was hilarious ngl</a></figcaption>
</figure>


<span class="comment">_To quickly touch on safety. When I say I go where it’s “safe” I talk about assumptions. The consensus of a chain being safe. Essentially just lindyness. I don’t mean actual decentralization._</span>

Answering the question. <span class="highlight">Yes. Tech matters.</span> But it’s not the first-order concern. UX and DX is. Performance and Dev Tooling. We see this today. Rollups and L1s that take shortcuts in decentralization and focus on performance, TVL growth, Dev Rel, end up “winning”. CT is fighting over whether L2s are an extension of L1 as ETH maxis are disillusioned with losing a fight. Relax. The war is still being won.

I believe that were moving towards a future where a fully decentralized system (baselayer + rollup, standalone L1, whatever) can compete with more centralized competitors. I also believe that over time the former will win and a singular system (at least pareto) emerges.

In no way am I advocating for just throwing the decentralization roadmap of L2s out the window. But let’s be realistic. This stuff won’t matter this cycle. Or next.

### Starknet - Scaling Ethereum, Scaling Bitcoin

> A human being should be able to change a diaper, plan an invasion, [...] comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.
> <span class="quote-author">R. Heinlein, Time Enough for Love</span>


With an established need for scalability and Layer 2s proving to be the way forward we stand in front of another question. Which rollup will win. How can we find this fastest horse and ideally get on it before it becomes a narrative. At least that is the question I asked myself.

The current L2 environment can be broken down into Arbitrum, Optimism, Base and well … the rest. Organically thriving networks versus point-fueled liquidity dumpsters. Yes. That statement discredits a huge amount of work that went into building complex, iterative incentive-loops. One might even say a perpetuum mobile of exit liquidity generation. That’s the idea. This cannot be the fate of the ecosystem for much longer.

<span class="highlight">I don't want it to be.</span>

![Points.png](/images/Points.png)

Optimistic Rollups are inferior. Speed. Security. With all of the current contenders being ORs, it is likely we see a rupture in the coming years. ZK Rollups are steadily gaining ground and given Ethereum retains its dominance and the layered scaling approach continues its success there will be a ZKR at the top. Scroll? Linea? Starknet?

The one that doesn’t just copy paste the boring old L2 playbook. The one that differentiates itself not only through tech but through exploration. Pioneering.

I’m betting on Starknet.

#### Not just vapor. Not just points.

I won’t bore you with irrelevant facts about the history of Starknet. Instead let’s focus on the present. Starknet is a validity rollup that pioneered the use of STARK proofs and its own virtual machine. Cairo VM is designed specifically for efficient generation of validity proofs, prioritizing performance and scalability over EVM compatibility. I’ll try to ELI5.

EVM is the operating system everyone else uses. Solidity the programming language on top. Starknet created the CVM and Cairo as a new programming language to abstract away the complexities of proving.

<figure>
  <img src="/images/Bartek.jpg">
  <figcaption><a href="https://x.com/bkiepuszewski/status/1481521079562784769">Great overview that explains technological advantages</a></figcaption>
</figure>

Proofs are needed to guarantee proper execution when state diffs (changes) are sent to the L1 to be finalized. Other ZKRs use SNARKs as the technology had been discovered years before STARKs. Sound familiar? <span class="comment">_I’m optimistic you get this one._</span>

Anyways. SNARKs require less gas and are quicker to be created but require a trusted setup. Once again. Math > Trust. STARKs instead use hash functions that involve no trust. The far larger proof sizes and times were prohibitive in the past but will be irrelevant once Stwo - the next-gen STARK prover - hits mainnet in Q1 ‘25. <span class="comment">_STARKs are also quantum resistant. Fancy right._</span>

As we established. One of the crucial aspects of building a successful chain is DX. Developer Experience. Without proper tooling and documentation, Cairo fights an uphill battle. The majority of dApps are Solidity based and cannot make use of Starknet’s scalability. StarkWare is of course aware of this, working together with protocols and giving out grants.

[Kakarot](https://docs.kakarot.org/) f.e. is an EVM implementation on Starknet written in Cairo meant to bridge this gap between Starknet and the EVM. It tries to remove the compatibility barrier to developers and accelerate the adoption of provable compute.

#### Proving - Stwo is brewing

A STARK prover is a vital component within Starknet’s tech stack. Responsible for compressing transactions and generating cryptographic proofs. It can be evaluated across two qualities - Speed and Size - which have an immediate downstream effect on users. Fast and cheap transactions.

The first prover in production - Stone - has been running since 2020. During these 4 years, stack optimization has pushed TPS from a measly 5 in March ‘23 to 250+ today. Theoretically. Local confirmation times have also increased to around 2 seconds, enabling traffic-intensive use cases such as Gaming.

Research on Stwo commenced around a year ago. The next gen prover is able to prove 500’000+ hashes per second. Stone only managed around 530. On consumer hardware. How? I don’t know. Circle STARKS. They … figured out <span class="highlight">a circle is better than an ellipse</span>. Jokes aside, the math is too complex to summarize here but do [take a look yourself](https://www.youtube.com/watch?v=Gs2HwJIgdxc). <span class="comment">_I understood it all I swear._</span>

![Circles.png](/images/Circles.png)

Sub-second recursion and state diff proving. General performance upgrade of 5x - 50x. Operating over 31 bit instead of 252 make it compatible with Bitcoin. Similar sized proofs (20-40kb).

![Stwo.png](/images/Stwo.png)

In the end these theoretical improvements are irrelevant until the effects are visible onchain. That being said, the current experience is pretty great. Enshrined Account Abstraction. Scratching EOAs. Session Keys. Fee Abstractions.

#### Gaming - done right.

I always joked about web3 games. Dusty, boring gameplay loops. A couple generic assets. Unreal Engine. Throw that together with some speculation. Et voila. $500m FDV. No culture. No substance. No players. Users sure. Airdrop farmers. Bots. No players.

![P2E.png](/images/P2E.png)

Once again. I do understand the idea - the allure of interacting with a world doesn’t just sit on a server somewhere. Temporary. To be deleted in a year or two. Creating a story, building a legacy brick by brick. Documented forever on the blockchain. Some insane ace, the character you maxed out after thousands of hours, even that world you created with some mates to only play on for 2 weeks and then never look at again. Frozen. In time. Forever.

Game economics not stifled by some greedy corp but open. Rewarding users and creators alike. Think CS:GO but think bigger. NFTs on open markets. Financialization of skill, hours, joy. Speculation as a revenue-inducing tool. Clear roadmaps, enforced through governance. The direction led by developers and hardcore enthusiasts. Real communities.

Impossible. For now. Why?

<span class="highlight">Users.</span> Crypto attracts speculators. As any emerging sector. Filled with mercenary capital running after incentives and a flaming hot ball of money. Well, points really. Good luck fostering a community from those degens.

What to do. Either wait a couple years until the public narrative around this space settles to indifference. Especially that of the gaming scene. Or just stop pushing crypto. Make it invisible to users. Not a selling point. Lure them with interesting, new mechanics only possible here.

<span class="highlight">Tech.</span> Let’s be realistic. Blockchain technology is not ready to facilitate the transaction-intensive use case. At least not in a decentralized manner. Starknet has some stellar implementations live and in the pipeline that alleviate the UX concern. However the chain is not equipped for the intensive load. Maybe after Stwo. Maybe.

Let’s not make this section too long. The article is supposed to be about something else. I was bearish Gaming for a while. But. Seeing what’s being done here. Dojo. Autonomous Worlds. Loot Survivor. Influence. I might have just changed my mind.

#### Back to base'ics

[Vitalik](https://vitalik.eth.limo/general/2024/05/29/l2culture.html) describes Layer 2s as technological and cultural extensions of Ethereum. Following the logic of creating a pluralistic system, Ethereum will turn into a decentralized base layer that verifies proofs. Users will not be interacting with it as demand for block space is filled by Layer 2s. Filled by Starknet.

As I laid out before, I believe we will see a more consolidated system win. Either through a single, high-performance rollup or through abstraction. Regardless of the shape this layered system will take, one component remains. A base layer to settle on. One chain that tracks the truth.

Ethereum. Why not Bitcoin?

### Bitcoin Lasagna

![Saylor.png](/images/Saylor.png)

> What's the second best? There is no second best. There is no second best crypto asset. There's Bitcoin.
> <span class="quote-author">Jesus, probably</span>

Bitcoin is hard money. Above all. Created to be P2P electronic cash. Like many innovations, the original goal post deviated as the possibilities unlocked by decentralized system became clearer. Today, Bitcoin has evolved into more of a digital gold. To be a stronghold of value beyond the reach of any centralized party.

Ethereum - and pretty much every other Layer 1 blockchain - takes a different route. Not trying to be hard money. Or gold. Instead created with developers in mind. As a platform to build applications on top of. Owning a piece of this productive base layer means earning fees. A business model.

Computation makes sense. Turing complete smart contracts enable ambiguous programs. dApps. DeFi. Entirely new concepts and ways to leverage decentralization. Yet. Bitcoin hasn’t adopted it.

What makes money hard? The fact that it doesn’t change. Stays identical for decades. Centuries. Bitcoin understands this. When a new idea emerges - some way to enhance the protocol - intense debates ensue. Traditionalists argue that Bitcoin should remain focused on enhancing core functionalities. Expanding beyond this scope would compromise security, simplicity and … hardness.

<span class="highlight">The first crypto is as much a technological phenomenon as it is a social one.</span>

Change is possible. If consensus forms. If a majority agrees that some concept would improve the protocol without diverging focus. This takes time though - Taproot, an uncontroversial BIP, took years to implement. And it doesn’t happen often - the last contentious fork in 2017 split the network into Bitcoin with SegWit and Bitcoin Cash.

This is what makes Bitcoin powerful. Resilience. Integrity.

#### OP_Cat purring in the distance

![Cat.png](/images/Cat.png)

In recent months a group of individuals and institutions have (re)embarked on a road towards enabling general computation on Bitcoin. Enabling smart contracts. Here’s the catch. Not by adding new capabilities and complex code. By reactivating code that was once part of Bitcoin’s scripting language but then disabled in 2010. By Satoshi Nakamoto.

General Computation was deemed impossible due to two severe limitations: Bitcoin script length and opcode expressibility. The former enforced short scripts and the latter limits what those could compute. In 2021 we saw Taproot lift the script length limitation allowing for significantly longer scripts. OP_Cat has the power to lift the expressibility issue.

OP_Cat was an original opcode in Bitcoin. A simple command in a transaction script that defines operations. 13 lines of code. More specifically, it allows the concatenation of two values on the stack. Yeah. Powerful right? <span class="comment">_jk took some time to grasp the concept and I’m not confident I could explain it here in my own words…_</span>

The article is already getting quite long so I will just refer you to the [medium-complexity writeup from StarkWare](https://starkware.co/blog/general-computation-on-bitcoin/). <span class="comment">A quick summary.</span> OP_CAT enables covenants. Covenants are a mechanism that allows users to control how their funds are spent in future transactions. Locking scripts today can only read the input they are given by a spender. Through a covenant, they could access much more data. By encoding the state in this transaction data and checking the validity of its transition, general smart contracts on Bitcoin are possible.

A transaction will have two outputs. First the logic of the contract. Second the current state of the smart contract. The logic will enforce a set of rules to prevent wrong state transitions. An example could be a simple accumulation script that adds inputs together into its state.

<figure>
  <img src="/images/SC.png">
  <figcaption>Simple smart contract that accumulates inputs into its state by adding them together.</a></figcaption>
</figure>


In theory this indeed enables general smart contracts and arbitrarily long computation on top of Bitcoin Script. However, limitations such as stack size, number of opcodes and general language constraints remain. Not to mention the prohibitively long block times. This is where we loop back to StarkWare.

STARKs are mostly hash-based, with very few algebraic operations making them inherently Bitcoin-friendly. Instead of having to rely on the clunky bitcoin script to compute transitions, the computation is done off-chain and only a result and proof posted on the network. Here a STARK verifier smart contract checks the correctness of the proof of a transition instead of the transition itself. The logic is fixed, regardless of application as the single task is to validate proofs.

<span class="highlight">Do you get it yet?</span>

In simple terms. OP_Cat allows Starknet to implement a STARK verifier on Bitcoin. To scale Bitcoin alongside Ethereum. Starknet would become a bridge between the two and enable financial innovation on top of the oldest, most secure chain without cluttering the base layer. Or rather a pluralistic execution layer.

> This increases our likelihood to succeed in building protocols that can resist nation-states.
> <span class="quote-author">Eli Ben-Sasson</span>

#### Financializing Bitcoin

Some napkin math. Ethereum has a market capitalization of $320b. 30% of the total circulating ETH is used for Staking - natively, LSTs - and Restaking - LRTs. Assuming a similar level of BTC would seek yield, the DeFi sector would grow by $390b. That’s three times the current TVL of all of DeFi. Unrealistic? Maybe in the short term.

There should be clear demand for BTC in DeFi right. But only around $10b have been brought on-chain through the simple WBTC wrapper. Recent events have also pushed other institutions like Coinbase to enter the playing field. Tether is making billions bringing USD onchain under USDT so its only natural custodians of on-chain BTC want to earn aswell. Makes sense. Another black box akin to Tether paired with an actual crypto asset would have trouble being embraced by the space though. Especially as the current DeFi sector seems disjunct to Bitcoin.

Back to the demand. Looking at current developments on Bitcoin itself paints a more promising pircture. Ordinals. Inscriptions. Runes. The number of daily transactions increased by 70% during peak mania (see figure below) - which was relatively calm compared to the NFT craze back in ‘21. An increase of 40% in fees paid to miners. $110 million over 30 days. That’s about as much as Uniswap does. Not enough. No wonder, have you tried buying runes. The UX is a joke. A thing of the past. Hopefully.

<figure>
  <img src="/images/BTC_Fees.png">
  <figcaption>Graph taken from <a href="https://www.decentralised.co/p/layered-bitcoin">'Layered Bitcoin'</a></a></figcaption>
</figure>

With native BTC finally is in sight. Bitcoin is ready to be onboarded to the extensive infrastructure built for DeFi. In theory at least. Of course there is a ton of work to be done before this is realized. STARK prover in prod. Canonical BTC bridge.

But most importantly. <span class="highlight">OP_Cat.</span>

#### Debates

What makes Bitcoin so powerful is the fact that it doesn’t change on a brim. It is powerful because it is boring, hard money. So why would OP_Cat be activated. Passed by a consensus of maxis with a history of sticking to traditional values.

Many are arguing that its simplicity and the fact that it was an original part of Bitcoin make the debate non-sensical. The opcode would be an integral part of Bitcoin today if it wasn’t for some historical accident.

<figure>
  <img src="/images/Adam.png">
  <figcaption><a href="https://x.com/adam3us/status/1798018712269992150">Taken from this discussion</a></figcaption>
</figure>

Others are more skeptical. Pointing to the fact that simplicity itself is not a selling point and that the possibilities created by passing the BIP could be disastrous for the hardest money.

<figure>
  <img src="/images/Debate2.png">
  <figcaption>In response to the above</a></figcaption>
</figure>

Fortunately OP_Cat is backwards compatible and can be implemented with a soft fork. Only time will tell if we see concatenation in its current form be integrated back into Bitcoin. It is also likely that a combination of various opcodes will be chosen instead to limit the integration to only a subset of the current CAT behavior.

This is not the first rodeo for this cat. One thing is sure though. If this happens, we will see enormous innovation. I’m rooting for it. Waiting. Patiently.

Finally. I want to highlight the complexity of this decision. In no way am I qualified to judge whether or not such an implementation would indeed be a good thing. I am confident that we will see general computation on Bitcoin in the future. I am confident that we will see Layer 2s on Bitcoin in the future. 

<span class="highlight">I’m betting on Starknet here.</span>

