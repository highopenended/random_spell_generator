const traitsData = [
    {
      "Trait": "Aasimar",
      "Description": "A creature with this trait has the aasimar versatile heritage. Aasimars are planar scions descended from celestial beings. An ability with this trait can be used or selected only by aasimars."
    },
    {
      "Trait": "Aberration",
      "Description": "Aberrations are creatures from beyond the planes or corruptions of the natural order."
    },
    {
      "Trait": "Abjuration",
      "Description": "Effects and magic items with this trait are associated with the abjuration school of magic, typically involving protection or wards."
    },
    {
      "Trait": "Acid",
      "Description": "Effects with this trait deal acid damage. Creatures with this trait have a connection to magical acid."
    },
    {
      "Trait": "Additive",
      "Description": "Feats with the additive trait allow you to add special substances to alchemical consumables you create when you use Quick Alchemy to create a consumable (you can't use additives with quick vials). You can add only one additive to a single alchemical item, you can add an additive only once per round, and most additive abilities specify a subset of alchemical consumables you can add them to."
    },
    {
      "Trait": "Adjusted",
      "Description": "The equipment comes with an adjustment described in its entry. This adjustment is built into the equipment permanently, meaning the equipment can't have another adjustment added, nor can it be swapped out for a different adjustment. If the adjustment alters the item's base statistics, such as adding the noisy trait, that's reflected in the equipment's table entry."
    },
    {
      "Trait": "Adjustment",
      "Description": "Items with this trait are intended to alter existing pieces of equipment, typically armors, shields, and weapons. The given item will note which type of equipment it modifies. An adjustment that modifies armor can't modify explorer's clothing. A piece of equipment can only be affected by a single adjustment at a time. Unless otherwise noted, adding or removing an adjustment requires using a 10-minute activity and a repair kit."
    },
    {
      "Trait": "Aeon",
      "Description": "These monitors are the self-styled defenders of reality. Traditional aeons have dualistic natures and forms, and they hold a dichotomy of interests, axiomites and inevitables don't. Aeons other than axiomites and inevitables communicate via a strange telepathic hodgepodge of sensory sending called envisioning."
    },
    {
      "Trait": "Aesir",
      "Description": "Aesir are often-bellicose monitors of the chaotic planes, honing their skill in battle and preparing for a final confrontation at the end of the multiverse."
    },
    {
      "Trait": "Aftermath",
      "Description": "This trait describes feats that represent special abilities gained after exposure to the weird and deadly."
    },
    {
      "Trait": "Agathion",
      "Description": "This family of animal-featured celestials is native to the plane of Nirvana. Most agathions are neutral good, have darkvision, and have a weakness to evil damage."
    },
    {
      "Trait": "Agile",
      "Description": "The multiple attack penalty you take with this weapon on the second attack on your turn is -4 instead of -5, and -8 instead of -10 on the third and subsequent attacks in the turn."
    },
    {
      "Trait": "Air",
      "Description": "Effects with the air trait either manipulate or conjure air. Those that manipulate air have no effect in a vacuum or an area without air. Creatures with this trait consist primarily of air or have a connection to magical air. Planes with this trait consist mostly of open spaces and air of various levels of turbulence, though they also contain rare islands of floating stone and other elements and energies. Air planes usually have breathable atmospheres, though they might include clouds of acidic or toxic gas. Earth creatures often find themselves at a disadvantage within air planes, as there's little solid ground for them to gain their bearings, which tends to at least make them uncomfortable."
    },
    {
      "Trait": "Aiuvarin",
      "Description": "A creature with this trait has the aiuvarin versatile heritage. Aiuvarins are of mixed ancestry, including elves or other aiuvarins. An ability with this trait can be used or selected only by aiuvarins."
    },
    {
      "Trait": "Alchemical",
      "Description": "Alchemical items are powered by reactions of alchemical reagents. Alchemical items aren't magical and don't radiate a magical aura.Alchemical creatures are partially powered by alchemical reactions."
    },
    {
      "Trait": "Alchemist",
      "Description": "This indicates abilities from the alchemist class."
    },
    {
      "Trait": "Amp",
      "Description": "An amp is a special thoughtform that modifies the properties of your psi cantrips. Psi cantrips each have their own amp, and feats with the amp trait provide different amps you can apply to psi cantrips in place of their normal amps."
    },
    {
      "Trait": "Amphibious",
      "Description": "An amphibious creature can breathe in water and in air, even outside of its preferred environment, usually indefinitely but at least for hours. These creatures often have a swim Speed. Their bludgeoning and slashing unarmed Strikes don't take the usual -2 penalty for being underwater."
    },
    {
      "Trait": "Anadi",
      "Description": "A reclusive people from Garund who resemble spiders and can assume human forms."
    },
    {
      "Trait": "Android",
      "Description": "A synthetic humanoid ancestry created by artificial means. Most common in Numeria."
    },
    {
      "Trait": "Angel",
      "Description": "This family of celestials is native to the plane of Nirvana."
    },
    {
      "Trait": "Animal",
      "Description": "An animal is a creature with a relatively low intelligence. It typically doesn't have an Intelligence attribute modifier over -4, can't speak languages, and can't be trained in Intelligence-based skills."
    },
    {
      "Trait": "Anugobu",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Apex",
      "Description": "When you Invest an Item that has the apex trait, it improves one of your attributes, either increasing the attribute's modifier by 1 or to a total of +4, whichever would give you a higher score. This gives you all the benefits of the new attribute modifier until the investiture runs out: increasing Intelligence lets you become trained in an additional skill and learn a new language, increasing Constitution gives you more Hit Points, and so on.An apex item grants this benefit only the first time it's invested within a 24-hour period, and you can benefit from only one apex item at a time. If you attempt to invest an apex item when you already have one invested, you don't gain the attribute modifier increase, though you do gain any other effects of Investing the Item."
    },
    {
      "Trait": "Aphorite",
      "Description": "A type of planar scion descended from a being from Axis, the Plane of Law."
    },
    {
      "Trait": "Aquadynamic",
      "Description": "This armor is made for use underwater, with streamlined design and buoyant materials used in strategic places. You don't apply the armor's check penalty to Acrobatics or Athletics checks in water or similar liquids."
    },
    {
      "Trait": "Aquatic",
      "Description": "Aquatic creatures are at home underwater. Their bludgeoning and slashing unarmed Strikes don't take the usual -2 penalty for being underwater. Aquatic creatures can breathe water but not air."
    },
    {
      "Trait": "Arcane",
      "Description": "This magic comes from the arcane tradition, which is built on logic and rationality. Anything with this trait is magical.A creature with this trait is primarily constituted of or has a strong connection to arcane magic."
    },
    {
      "Trait": "Archetype",
      "Description": "This feat belongs to an archetype."
    },
    {
      "Trait": "Archon",
      "Description": "This family of celestials protect Heaven."
    },
    {
      "Trait": "Ardande",
      "Description": "Ardandes are planar scions descended from kizidhar and other beings of elemental wood."
    },
    {
      "Trait": "Army",
      "Description": "This item is related to Warfare"
    },
    {
      "Trait": "Artifact",
      "Description": "Items with this trait are artifacts. These magic items can't be crafted by normal means, and they can't be damaged by normal means. Artifacts are always rare or unique."
    },
    {
      "Trait": "Astral",
      "Description": "Astral creatures are natives of the Astral Plane. They can survive the basic environmental effects of the Astral Plane."
    },
    {
      "Trait": "Asura",
      "Description": "These lawful fiends are physical manifestations of divine accidents. Asuras typically have darkvision, immunity to curses, and a weakness to good."
    },
    {
      "Trait": "Athamaru",
      "Description": "Athamarus are fishlike aquatic humanoids."
    },
    {
      "Trait": "Attached",
      "Description": "An attached weapon must be combined with another piece of gear to be used. The trait lists what type of item the weapon must be attached to. You must be wielding or wearing the item the weapon is attached to in order to attack with it. For example, shield spikes are attached to a shield, allowing you to attack with the spikes instead of a shield bash. An attached weapon is usually bolted onto or built into the item it's attached to, and typically an item can have only one weapon attached to it. An attached weapon can be affixed to an item with 10 minutes of work and a successful DC 10 Crafting check; this includes the time needed to remove the weapon from a previous item, if necessary. If an item is destroyed, its attached weapon can usually be salvaged."
    },
    {
      "Trait": "Attack",
      "Description": "An ability with this trait involves an attack. For each attack you make beyond the first on your turn, you take a multiple attack penalty."
    },
    {
      "Trait": "Auditory",
      "Description": "Auditory actions and effects rely on sound. An action with the auditory trait can be successfully performed only if the creature using the action can speak or otherwise produce the required sounds. A spell or effect with the auditory trait has its effect only if the target can hear it. This applies only to sound-based parts of the effect, as determined by the GM. This is different from a sonic effect, which still affects targets who can't hear it (such as deaf targets) as long as the effect itself makes sound."
    },
    {
      "Trait": "Aura",
      "Description": "An aura is an emanation that continually ebbs out from you, affecting creatures within a certain radius. Aura can also refer to the magical signature of an item."
    },
    {
      "Trait": "Automaton",
      "Description": "Automatons are living constructs sustained by a magical core."
    },
    {
      "Trait": "Awakened Animal",
      "Description": "Awakened animals were once normal creatures before they gained sapience."
    },
    {
      "Trait": "Azarketi",
      "Description": "Azarketi are an offshoot of humans adapted to live in aquatic communities. They have gills, webbed digits, and small fins, and they can survive in or out of water."
    },
    {
      "Trait": "Azata",
      "Description": "This family of celestials is native to Elysium."
    },
    {
      "Trait": "Backstabber",
      "Description": "When you hit an off-guard creature, this weapon deals 1 precision damage in addition to its normal damage. The precision damage increases to 2 if the weapon is a +3 weapon."
    },
    {
      "Trait": "Backswing",
      "Description": "You can use the momentum from a missed attack with this weapon to lead into your next attack. After missing with this weapon on your turn, you gain a +1 circumstance bonus to your next attack with this weapon before the end of your turn."
    },
    {
      "Trait": "Barbarian",
      "Description": "This indicates abilities from the barbarian class."
    },
    {
      "Trait": "Bard",
      "Description": "This indicates abilities from the bard class."
    },
    {
      "Trait": "Barding",
      "Description": "You can purchase special armor for animals, called barding. All animals have a trained proficiency rank in light barding, and combat-trained animals are trained in heavy barding. Barding uses the same rules as armor except for the following. The Price and Bulk of barding depend on the animal's size. Unlike for a suit of armor, barding's Strength entry is listed as a modifier, not a score. Barding can't be etched with magic runes, though special magical barding might be available."
    },
    {
      "Trait": "Beast",
      "Description": "A creature similar to an animal but with an Intelligence modifier of -3 or higher is usually a beast. Unlike an animal, a beast might be able to speak and reason."
    },
    {
      "Trait": "Beastkin",
      "Description": "Humanoids that can partially or fully transform into animal forms."
    },
    {
      "Trait": "Beneficial",
      "Description": "Beneficial events provide boons and benefits to the kingdom."
    },
    {
      "Trait": "Boggard",
      "Description": "Boggards are frog-like humanoids. They typically have darkvision."
    },
    {
      "Trait": "Bomb",
      "Description": "An alchemical bomb combines volatile alchemical components that explode when the bomb hits a creature or object. Most alchemical bombs deal damage, though some produce other effects."
    },
    {
      "Trait": "Bottled Breath",
      "Description": "Bottles of breath are enchanted bottles of cloud and mist, first developed by the denizens of the Plane of Air. You can Activate an item with the bottled breath trait as you inhale it or cause another creature to inhale it. You can make another creature inhale bottled breath only if that creature is within reach and willing or so helpless that it can't resist. You usually need only one hand to consume a bottled breath or make another creature inhale it. The bottled breath is held in a user's lungs, and its effects last as long as the user holds its breath. This is typically a maximum number of rounds equal to 5 + its Constitution modifier, but this time can be reduced due to the creature's actions or it taking damage, or extended by abilities that increase the amount of time a creature can hold its breath. Some bottled breath consumables have a special effect when you exhale them. Since you're exhaling the breath, doing this expends the item."
    },
    {
      "Trait": "Brace",
      "Description": "A brace weapon is effective at damaging moving opponents. When you Ready to Strike an opponent that moves within your reach, until the start of your next turn Strikes with the brace weapon deal an additional 2 precision damage for each weapon damage die it has."
    },
    {
      "Trait": "Bravado",
      "Description": "Actions with this trait can grant panache, depending on the result of the check involved. If you succeed at the check on a bravado action, you gain panache, and if you fail (but not critically fail) the check, you gain panache but only until the end of your next turn. These effects can be applied even if the action had no other effect due to a failure or a creature's immunity."
    },
    {
      "Trait": "Brutal",
      "Description": "A ranged attack with this trait uses its Strength modifier instead of Dexterity on the attack roll."
    },
    {
      "Trait": "Bugbear",
      "Description": "A creature with this trait is a furry, stealthy goblinoid. Bugbears tend to have darkvision."
    },
    {
      "Trait": "Building",
      "Description": "The Building trait indicates the structure is a collection of indoor sites"
    },
    {
      "Trait": "Bulwark",
      "Description": "The armor covers you so completely that it provides benefits against some damaging effects. On Reflex saves to avoid a damaging effect, such as a fireball, you add a +3 modifier instead of your Dexterity modifier"
    },
    {
      "Trait": "Caligni",
      "Description": "These subterranean people have darkvision, and some have powers to create darkness."
    },
    {
      "Trait": "Camping",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Cantrip",
      "Description": "A spell you can cast at will that is automatically heightened to half your level rounded up."
    },
    {
      "Trait": "Capacity",
      "Description": "Weapons that have the capacity trait typically have multiple barrels or chambers capable of containing a bolt or round of ammunition. Capacity is always accompanied by a number indicating the number of barrels or chambers. After a capacity weapon is fired, you can select the next loaded barrel or chamber as an Interact action that doesn't require a free hand. You can use abilities that let or require you to Interact to reload to switch barrels or chambers of a capacity weapon instead. Each barrel or chamber can be individually reloaded after it's fired as a separate Interact action."
    },
    {
      "Trait": "Catalyst",
      "Description": "Items with the catalyst trait are consumables that alter or magnify specific spells. Using a catalyst adds the manipulate trait to the spell."
    },
    {
      "Trait": "Catfolk",
      "Description": "A creature with this trait is a member of the catfolk ancestry. Catfolk are humanoids with feline features. An ability with this trait can be used or selected only by catfolk. An item with this trait is created and used by catfolk."
    },
    {
      "Trait": "Cavalry",
      "Description": "Cavalry consists of mounted combat units."
    },
    {
      "Trait": "Celestial",
      "Description": "Creatures that hail from or have a strong connection to the holy planes are called celestials. Celestials can survive the basic environmental effects of planes in the Outer Sphere."
    },
    {
      "Trait": "Censer",
      "Description": "An item with the censer trait must be filled with incense to Activate it, which ignites the incense and causes the censer to exude a cloud of smoke. The smoke creates an aura in an emanation from the censer's square. The smoke lasts for 1 minute but is immediately dispersed by a strong wind (ending the activation) or if you Dismiss the activation to snuff out the incense. Unless specifically noted otherwise, the smoke from a censer isn't thick enough to make creatures concealed, and you can choose to be immune to the smoke of any censer you Activate. You must be holding a censer to Activate it, but if you Release the censer, the incense continues to burn from the censer's location. A magical censer requires incense, as noted in its activation, which can be purchased in most settlements. You can use an alchemical or magical incense item for this purpose, but the magic of the censer overwhelms the incense and negates any other magical or alchemical properties it has. You can typically use the censer without activating it to burn incense as though it were a mundane censer."
    },
    {
      "Trait": "Centaur",
      "Description": "Centaurs have humanoid upper bodies and equine lower bodies."
    },
    {
      "Trait": "Certain Kill",
      "Description": "This trait is from the Fists of the Ruby Phoenix Adventure Path and is closely tied to a specific location visited during the adventure. Only one Certain Kill Art can be used in a given round."
    },
    {
      "Trait": "Champion",
      "Description": "This indicates abilities from the champion class."
    },
    {
      "Trait": "Changeling",
      "Description": "A creature with this trait has the changeling versatile heritage. Changelings are the children of hags and members of other humanoid ancestries. An ability with this trait can be used or selected only by changelings."
    },
    {
      "Trait": "Chaotic",
      "Description": "Chaotic effects often manipulate energy from chaos-aligned Outer Planes and are anathema to lawful divine servants or divine servants of lawful deities. A creature with this trait is chaotic in alignment."
    },
    {
      "Trait": "Charau-ka",
      "Description": "Mandrill-like humanoids that are brutal warriors. Many charau-ka live in Usaro."
    },
    {
      "Trait": "Charm",
      "Description": "Note from Nethys: This trait was not listed in the Glossary, its only use is as a Trait for some monster abilities."
    },
    {
      "Trait": "Circus",
      "Description": "Note from Nethys: no description was provided for this trait. It is used as part of the circus subsystem from the Extinction Curse Adventure Path"
    },
    {
      "Trait": "City",
      "Description": "Settlements with this trait tend to be relatively large, with levels typically ranging from 5 to 7."
    },
    {
      "Trait": "Civic",
      "Description": "This is a Kingdom skill activitiy that can be undertaken during the Civic Activity phase."
    },
    {
      "Trait": "Class",
      "Description": "Archetypes with the class trait fundamentally diverge from your class's specialties but still fit within the theme of your class. You can select a class archetype only if your class meets the criteria listed in the archetype's prerequisites. Class archetypes always alter or replace some of a class's static class features in addition to any new feats they offer. It might be possible to take a class archetype at 1st level if it alters or replaces some of the class's initial class features. The 1st-level ability is presented much like a class feature and includes the class archetype's prerequisites and rules on how it changes your class. If you select this ability, you must take that archetype's dedication feat at 2nd level, and you proceed normally afterward. You can never have more than one class archetype."
    },
    {
      "Trait": "Cleric",
      "Description": "This indicates abilities from the cleric class."
    },
    {
      "Trait": "Climbing",
      "Description": "The hand holding this weapon is freely available to Climb."
    },
    {
      "Trait": "Clockwork",
      "Description": "Clockworks are intricate, complex constructs that can be programmed to perform specific functions. A clockwork creature must be wound regularly to function. Clockwork items use clockwork to function, though they don't necessarily require daily winding.Wind-Up: To remain operational, a clockwork vehicle or creature must be wound with a unique key by a creature. This takes an amount of time listed in the clockwork's wind-up entry, which also lists how long the clockwork remains operational once wound; after this duration, the clockwork becomes inactive and immobile until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most are re-wound approximately halfway through their operating time. A clockwork vehicle can be placed into standby mode by its pilot as a 3-action activity; a clockwork creature must perform this activity itself. A clockwork's operational time doesn't decrease in standby. A creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, a clockwork vehicle loses 10 minutes of operational time, while a clockwork creature loses 1 hour. This can be done even if the clockwork is in standby mode. Broken clockwork vehicles have difficulty holding energy. The first time each round that a broken clockwork vehicle moves, it must attempt a DC 5 flat check. On a failure, it loses 10 minutes of operational time."
    },
    {
      "Trait": "Coagulant",
      "Description": "Healing alchemical items with the coagulant trait lose effectiveness when many are applied in a short period of time. If a creature heals Hit Points from an item with the coagulant trait, that creature is temporarily immune to healing Hit Points from subsequent items with the coagulant trait for 10 minutes (but not immune to any other effects of those items)."
    },
    {
      "Trait": "Coatl",
      "Description": "A family of supernatural feathered serpents who serve as guardians and messengers in the Universe for various holy divinities."
    },
    {
      "Trait": "Cobbled",
      "Description": "This firearm is cobbled together and likely to misfire. No matter how well you upkeep it, on a failed attack roll, the attack misses and you must roll a DC 5 flat check. If you fail this check, the weapon misfires."
    },
    {
      "Trait": "Coda",
      "Description": "Instruments with the coda trait work mostly like staves and have the staff trait. There are two differences: Coda instruments are in the form of musical instruments, and they can be prepared only by bards. Because they're not physically staves, you can't attack with a coda instrument, nor can you etch it with weapon runes. The process of preparing a coda instrument involves playing significant portions of songs related to the spells within the instrument-either old standards or ones of your own creation. This leaves magical reverberations within the instrument that allow you to complete the songs by playing their coda later in the day."
    },
    {
      "Trait": "Cold",
      "Description": "Effects with this trait deal cold damage. Creatures with this trait have a connection to magical cold."
    },
    {
      "Trait": "Combination",
      "Description": "Combination weapons combine the functionality of melee weapons and ranged weapons in unique or unusual ways. A combination weapon has a ranged form or usage and a melee weapon form or usage. The combination weapons table lists the ranged weapon statistics first and the melee weapon statistics indented beneath, just above the ammunition. Switching between the melee weapon usage and the ranged weapon usage requires an Interact action. However, if your last action was a successful melee Strike against a foe using a combination weapon, you can make a ranged Strike with the combination weapon against that foe without fully switching to the ranged weapon usage, firing the ranged weapon just as you hit with the melee attack. In this case, the combination weapon returns to its melee usage after the ranged weapon Strike. Since a combination weapon is one weapon with two usages, both usages share any fundamental runes. You can put a property rune on a combination weapon as long as it's appropriate for either of the two usages, but if only one of the usages meets the property rune's requirements, the effects of the property rune only apply for that usage. For instance, a vorpal axe musket only applies the vorpal property rune when you're using it as an axe. Due to their complexity, combination weapons can't have another weapon, such as a bayonet or reinforced stock, attached to them."
    },
    {
      "Trait": "Comfort",
      "Description": "The armor is so comfortable that you can rest normally while wearing it."
    },
    {
      "Trait": "Commerce",
      "Description": "This is a Kingdom skill activitiy that can be undertaken during the Commerce Activity phase."
    },
    {
      "Trait": "Common",
      "Description": "Anything that doesn't list another rarity trait (uncommon, rare, or unique) automatically has the common trait. This rarity indicates that an ability, item, or spell is available to all players who meet the prerequisites for it. A creature of this rarity is generally known and can be summoned with the appropriate summon spell."
    },
    {
      "Trait": "Companion",
      "Description": "An item with this trait can be worn by an animal companion or similar creature. A companion can have up to two items invested."
    },
    {
      "Trait": "Complex",
      "Description": "A hazard with this trait takes turns in an encounter."
    },
    {
      "Trait": "Composite",
      "Description": "A composite impulse combines multiple elements. You can gain an impulse with the composite trait only if your kinetic elements include all the elements listed in the impulse's traits."
    },
    {
      "Trait": "Composition",
      "Description": "To cast a composition cantrip or focus spell, you use a type of Performance. If the spell requires an auditory performance, you might recite a poem, sing a song, or perform a dramatic monologue. If the spell requires a visual performance, you might dance or pantomime. You can cast only one composition spell each turn, and you can have only one active at a time. If you cast a new composition spell, any ongoing effects from your previous composition spell end immediately."
    },
    {
      "Trait": "Concealable",
      "Description": "This weapon is designed to be inconspicuous or easily concealed. You gain a +2 circumstance bonus to Stealth checks and DCs to hide or conceal a weapon with this trait."
    },
    {
      "Trait": "Concentrate",
      "Description": "An action with this trait requires a degree of mental concentration and discipline."
    },
    {
      "Trait": "Concussive",
      "Description": "These weapons smash as much as puncture. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning. For instance, if the creature were immune to piercing and had no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance or immunity to all physical damage, or all damage, applies as normal."
    },
    {
      "Trait": "Conjuration",
      "Description": "Effects and magic items with this trait are associated with the conjuration school of magic, typically involving summoning, creation, teleportation, or moving things from place to place."
    },
    {
      "Trait": "Conrasu",
      "Description": "A people that are made of cosmic force given consciousness and housed within unique exoskeletons. Conrasus craft and use these weapons."
    },
    {
      "Trait": "Consecration",
      "Description": "A consecration spell enhances an area for an extended period of time. A given area can have only a single consecration effect at a time. The new effect attempts to counteract any existing one in areas of overlap."
    },
    {
      "Trait": "Construct",
      "Description": "A construct is an artificial creature empowered by a force other than vitality or void."
    },
    {
      "Trait": "Consumable",
      "Description": "An item with this trait can be used only once. Unless stated otherwise, it's destroyed after activation. Consumable items include alchemical items and magical consumables such as scrolls and talismans. A character can Craft consumable items in batches of four."
    },
    {
      "Trait": "Contact",
      "Description": "A contact poison is activated by applying it to an item or directly onto a living creature's skin. The first creature to touch the affected item must attempt a saving throw against the poison; if the poison is applied directly, the creature must attempt a saving throw immediately when the poison touches its skin. Contact poisons are infeasible to apply to a creature via a weapon attack due to the logistics of delivering them without poisoning yourself. Typically, the onset time of a contact poison is 1 minute."
    },
    {
      "Trait": "Contingency",
      "Description": "Spells with this trait grant you an action during the spell's effects, typically a reaction with a special trigger. They typically have a long duration, such as 24 hours. You can have only one spell with the contingency trait, or one contingency spell, active at a time. If you cast another spell with the contingency trait or contingency, the newer casting supersedes the older."
    },
    {
      "Trait": "Continuous",
      "Description": "Continuous events play out during multiple consecutive Event phases until the event has been resolved (see the event's Resolution entry)."
    },
    {
      "Trait": "Contract",
      "Description": "A contract is a type of item that magically establishes an agreement between multiple parties and typically grants magical benefits."
    },
    {
      "Trait": "Critical Fusion",
      "Description": "Critical fusion is a trait for combination weapons that grants you two additional options for the critical specialization effect when using the combination weapon's melee version to make a melee attack while the ranged weapon is loaded. If you choose to use one of them, it replaces the melee usage's normal critical specialization effect. First, if the ranged weapon is a firearm, you can discharge it to create a loud bang and concussion, using the critical specialization effect for firearms instead of the melee weapon group's critical specialization effect. Second, you can choose to discharge the ranged weapon to increase the critical hit's momentum or shoot the foe as you attack in melee, dealing 2 additional damage per weapon damage die. Both of these options discharge the ranged weapon, which typically means you have to reload it before firing it again."
    },
    {
      "Trait": "Curse",
      "Description": "A curse is an effect that places some long-term affliction on a creature. Curses are always magical and are typically the result of a spell or trap. Effects with this trait can be removed only by effects that specifically target curses."
    },
    {
      "Trait": "Cursebound",
      "Description": "Abilities with this trait tighten your oracular curse's grasp on your soul in exchange for divine insights, giving you the cursebound condition. When you use a cursebound ability, you become cursebound 1, or if you were already cursebound, you increase the value of your cursebound condition by 1. As cursebound abilities are directly linked to your oracular curse, you can't use a cursebound ability if you don't have an oracular curse or if you are already at your maximum cursebound value. You can't mitigate or bypass the drawbacks of any cursebound ability with spells or other effects, and the effects of any cursebound ability end when you Refocus and remove the cursebound condition."
    },
    {
      "Trait": "Cursed",
      "Description": "An item with this trait is cursed to cause trouble for its owner. A curse isn't detected when the item is identified, though a critical success reveals both the presence and exact nature of the curse. Cursed items can't be discarded once they've been triggered or invested the first time. The item can be removed only if the curse is removed."
    },
    {
      "Trait": "Daemon",
      "Description": "A family of fiends from Abaddon."
    },
    {
      "Trait": "Dangerous",
      "Description": "Dangerous events threaten the kingdom."
    },
    {
      "Trait": "Darkness",
      "Description": "Darkness effects extinguish non-magical light in the area and can counteract less powerful magical light. You must usually target light magic with your darkness magic directly to counteract it, but some darkness spells automatically attempt to counteract light."
    },
    {
      "Trait": "Darvakka",
      "Description": "Entropic undead creatures twisted by the Shadow Plane and Negative Energy Plane."
    },
    {
      "Trait": "Deadly",
      "Description": "On a critical hit, the weapon adds a weapon damage die of the listed size. Roll this after doubling the weapon's damage. This increases to two dice if the weapon has a greater striking rune and three dice if the weapon has a major striking rune. For instance, a rapier with a greater striking rune deals 2d8 extra piercing damage on a critical hit. An ability that changes the size of the weapon's normal damage dice doesn't change the size of its deadly die."
    },
    {
      "Trait": "Death",
      "Description": "An effect with the death trait kills you immediately if it reduces you to 0 HP. Some death effects can bring you closer to death or slay you outright without reducing you to 0 HP."
    },
    {
      "Trait": "Dedication",
      "Description": "You must select a feat with this trait to apply an archetype to your character."
    },
    {
      "Trait": "Deflecting",
      "Description": "This shield is designed to block or divert certain types of attacks or weapons. Increase the shield's Hardness against the listed type of attack by 2."
    },
    {
      "Trait": "Demon",
      "Description": "A family of sinful fiends from the Outer Rifts."
    },
    {
      "Trait": "Dero",
      "Description": "This family of humanoids are the descendants of fey creatures that fell into darkness and confusion after being abandoned in the Darklands. They are immune to confusion and vulnerable to sunlight."
    },
    {
      "Trait": "Detection",
      "Description": "Effects with this trait attempt to determine the presence or location of a person, object, or aura."
    },
    {
      "Trait": "Deviant",
      "Description": "This trait describes strange supernatural or paranormal abilities."
    },
    {
      "Trait": "Devil",
      "Description": "A family of regimented fiends from Hell."
    },
    {
      "Trait": "Dhampir",
      "Description": "A creature with this trait has the dhampir versatile heritage. These humanoids are the offspring of vampires and members of other ancestries."
    },
    {
      "Trait": "Dinosaur",
      "Description": "These reptiles have survived from prehistoric times."
    },
    {
      "Trait": "Disarm",
      "Description": "You can use this weapon to Disarm with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls (if any) as an item bonus to the Athletics check. If you critically fail a check to Disarm using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure. On a critical success, you still need a free hand if you want to take the item."
    },
    {
      "Trait": "Disease",
      "Description": "An effect with this trait applies one or more diseases. A disease is typically an affliction."
    },
    {
      "Trait": "Div",
      "Description": "Divs are a family of fiends spawned from the spirits of evil genies within the desolation of Abaddon. Most divs are neutral evil. They typically have greater darkvision and weakness to cold iron and good damage."
    },
    {
      "Trait": "Divination",
      "Description": "The divination school of magic typically involves obtaining or transferring information, or predicting events."
    },
    {
      "Trait": "Divine",
      "Description": "This magic comes from the divine tradition, drawing power from deities or similar sources. Anything with this trait is magical.A creature with this trait is primarily constituted of or has a strong connection to divine magic."
    },
    {
      "Trait": "Double Barrel",
      "Description": "This weapon has two barrels that are each loaded separately. You can fire both barrels of a double barrel weapon in a single Strike to increase the weapon damage die by one step. If the weapon has the fatal trait, this increases the fatal die by one step."
    },
    {
      "Trait": "Downtime",
      "Description": "A mode of play in which characters are not adventuring. Days pass quickly at the table, and characters engage in longterm activities."
    },
    {
      "Trait": "Dragon",
      "Description": "Dragons are reptilian creatures, often winged or with the power of flight. Most can exhale magical energy and are immune to sleep and paralysis."
    },
    {
      "Trait": "Dragonblood",
      "Description": "A creature with this trait has the dragonblood versatile heritage. These creatures are born of draconic lineage and often have draconic appearances."
    },
    {
      "Trait": "Dream",
      "Description": "Creatures native to the Dimension of Dreams can possess a diverse array of abilities, although those associated with the nightmare realm of Leng are almost always unholy and immune to that realm's freezing temperatures."
    },
    {
      "Trait": "Dromaar",
      "Description": "A creature with this trait has the dromaar versatile heritage. Dromaars are of mixed ancestry, including orcs or other dromaars. An ability with this trait can be used or selected only by dromaars."
    },
    {
      "Trait": "Drow",
      "Description": "Subterranean kin of the elves, drow typically have darkvision and inborn magical abilities."
    },
    {
      "Trait": "Drug",
      "Description": "An item with this trait is a drug, a poison that conveys short-term benefits in addition to harmful side effects and long-term consequences. Each time a creature uses a given drug it must also attempt a saving throw against addiction to that drug."
    },
    {
      "Trait": "Druid",
      "Description": "This indicates abilities from the druid class."
    },
    {
      "Trait": "Duskwalker",
      "Description": "A creature with this trait has the duskwalker versatile heritage. Duskwalkers are planar scions infused with the supernatural energy of psychopomps."
    },
    {
      "Trait": "Dwarf",
      "Description": "A creature with this trait is a member of the dwarf ancestry. Dwarves are stout folk who often live underground and typically have darkvision. An ability with this trait can be used or selected only by dwarves. An item with this trait is created and used by dwarves."
    },
    {
      "Trait": "Earth",
      "Description": "Effects with the earth trait either manipulate or conjure earth. Those that manipulate earth have no effect in an area without earth. Creatures with this trait consist primarily of earth or have a connection to magical earth.These planes are mostly solid. Travelers arriving upon an earth plane risk suffocation if they don't reach a cavern or some other air pocket within the plane's solid matter. Creatures who can't burrow are entombed in the plane's substance and must attempt to dig their way toward an air pocket. Air creatures are ill at ease, as they rarely have the space to move freely through even the loftiest warrens."
    },
    {
      "Trait": "Edifice",
      "Description": "The Edifice trait grants its benefits to a settlement only once; if you build that structure an additional time in the same settlement, it's purely cosmetic."
    },
    {
      "Trait": "Eidolon",
      "Description": "A creature with this trait is a summoner's eidolon. An action or spell with this trait can be performed by an eidolon only. An item with this trait can be used or worn by an eidolon only, and an eidolon can't use items that don't have this trait. (An eidolon can have up to two items invested.)"
    },
    {
      "Trait": "Electricity",
      "Description": "Effects with this trait deal electricity damage. A creature with this trait has a connection to magical electricity."
    },
    {
      "Trait": "Elemental",
      "Description": "Elementals are creatures directly tied to an element and native to the elemental planes. Elementals don't need to breathe."
    },
    {
      "Trait": "Elf",
      "Description": "A creature with this trait is a member of the elf ancestry. Elves are mysterious people with rich traditions of magic and scholarship who typically have low-light vision. An ability with this trait can be used or selected only by elves. A weapon with this trait is created and used by elves."
    },
    {
      "Trait": "Elixir",
      "Description": "Elixirs are alchemical liquids that are used by drinking them."
    },
    {
      "Trait": "Emotion",
      "Description": "This effect alters a creature's emotions. Effects with this trait always have the mental trait as well. Creatures with special training or that have mechanical or artificial intelligence are immune to emotion effects."
    },
    {
      "Trait": "Enchantment",
      "Description": "Effects and magic items with this trait are associated with the enchantment school of magic, typically involving mind control, emotion alteration, and other mental effects."
    },
    {
      "Trait": "Entrench",
      "Description": "You can position yourself in the armor or reposition its articulated pieces to better protect against some attacks. If you're trained in this armor, while wearing it you can spend a single action to gain a +1 circumstance bonus to AC against a certain type of attack until the start of your next turn. The entrench trait lists the type of attack this bonus applies against, typically entrench melee or entrench ranged."
    },
    {
      "Trait": "Environmental",
      "Description": "A hazard with this trait is something dangerous that's part of the natural world, such as quicksand or harmful mold."
    },
    {
      "Trait": "Erratic",
      "Description": "Time slows down and speeds up, so an individual might lose or gain time as they move between planes. When a creature moves from a plane with erratic time to one with normal time, roll a DC 11 flat check. Creatures that leave an erratic time plane together share the same result.Success Time passed normally on the erratic time plane.Failure For each hour spent on the erratic time plane, 1 day passed on the normal time plane.Critical Failure For each round spent on the erratic time plane, 1 day passed on the normal time plane."
    },
    {
      "Trait": "Esoterica",
      "Description": "The esoterica trait is present in many thaumaturge feats and class features that incorporate the various talismans, supernatural trinkets, and other objects you carry with you. Abilities that have the esoterica trait require you to be in possession of your esoterica to use them. Normally, you're assumed to always have your esoterica with you, but in some rare circumstances, you might either not have them on hand or have your gear stripped from you."
    },
    {
      "Trait": "Ethereal",
      "Description": "Ethereal creatures are natives of the Ethereal Plane. They can survive the basic environmental effects of the Ethereal Plane."
    },
    {
      "Trait": "Evil",
      "Description": "Evil effects often manipulate energy from evil-aligned Outer Planes and are antithetical to good divine servants or divine servants of good deities. A creature with this trait is evil in alignment."
    },
    {
      "Trait": "Evocation",
      "Description": "Effects and magic items with this trait are associated with the evocation school of magic, typically involving energy and elemental forces."
    },
    {
      "Trait": "Evolution",
      "Description": "Feats with this trait affect your eidolon instead of you, typically by granting it additional physical capabilities."
    },
    {
      "Trait": "Expandable",
      "Description": "An item with the expandable trait increases to a specific size when activated. Unless otherwise noted, this space must be adjacent to you and on the ground, and the item needs to have enough open space to expand into or else the activation has no effect. When the effect ends, the expanded item disintegrates if it's a consumable or shrinks back to its normal size if it's not a consumable."
    },
    {
      "Trait": "Experiment",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Exploration",
      "Description": "An activity with this trait takes more than a turn to use, and can usually be used only during exploration mode."
    },
    {
      "Trait": "Extradimensional",
      "Description": "This effect or item creates an extradimensional space. An extradimensional effect placed inside another extradimensional space ceases to function until it is removed."
    },
    {
      "Trait": "Famous",
      "Description": "The Famous trait increases your Fame score when the structure is built. Some structures have both Famous and Infamous traits; in this case apply the one that matches your kingdom's preference (see Fame and Infamy)."
    },
    {
      "Trait": "Fatal",
      "Description": "The fatal trait includes a die size. On a critical hit, the weapon's damage die increases to that die size instead of the normal die size, and the weapon adds one additional damage die of the listed size."
    },
    {
      "Trait": "Fatal Aim",
      "Description": "It's possible to hold the stock of this weapon under one arm so you can fire it with a single hand as long as the other hand isn't holding a weapon, shield, or anything else you would need to move and position, to ensure the weapon doesn't slip out from under your arm. However, if you use both hands, the weapon can make fatal attacks. When you wield the weapon in two hands, it gains the fatal trait with the listed damage die. Holding the weapon underarm stably enough to fire is significantly more complicated than just releasing one hand from the weapon, so to switch between the two grips, you must do so with an Interact action rather than Releasing or as part of reloading."
    },
    {
      "Trait": "Fear",
      "Description": "Fear effects evoke the emotion of fear. Effects with this trait always have the mental and emotion traits as well."
    },
    {
      "Trait": "Fetchling",
      "Description": "A creature with this trait is a member of the fetchling ancestry. Fetchlings were once human, but generations of life on the Shadow Plane have transformed them."
    },
    {
      "Trait": "Fey",
      "Description": "Creatures of the First World are called the fey"
    },
    {
      "Trait": "Fiend",
      "Description": "Creatures that hail from or have a strong connection to the unholy planes are called fiends. Fiends can survive the basic environmental effects of planes in the Outer Sphere."
    },
    {
      "Trait": "Fighter",
      "Description": "This indicates abilities from the fighter class."
    },
    {
      "Trait": "Figurehead",
      "Description": "While many ships are adorned with decorative carvings, daring crews sometimes procure magical figureheads for their vessels. Installing an item with the figurehead trait takes 1 hour. The item then shifts slightly to match the vessel's purpose or crew as determined by the attuned creature, such as gaining avian features on a tengu vessel. A ship can have only one figurehead attached to it at a time; attaching another one suppresses all the figureheads. A figurehead can be activated only by a creature that's attuned to it, a process that takes 1 hour and can be performed while the creature is installing the figurehead. Only one creature can be attuned to the figurehead at a time unless otherwise noted. The attuned creature can activate the figurehead from anywhere aboard the vessel. Typically, the owner or captain of the vessel attunes to their vessel's figurehead. The figureheads presented here assume the vehicles they attach to are sailing ships or similar aquatic vessels, but figureheads might be modified or crafted to function on other vehicles instead."
    },
    {
      "Trait": "Finesse",
      "Description": "You can use your Dexterity modifier instead of your Strength modifier on attack rolls using this melee weapon. You still calculate damage using Strength."
    },
    {
      "Trait": "Finisher",
      "Description": "Finishers are spectacular finishing moves that use your panache. Finishers can be used only with weapons that deal additional damage with precise strike (agile or finesse melee weapons or unarmed attacks, for most swashbucklers). You can use a finisher only if you have panache, and you lose your panache immediately after performing a finisher. Once you use a finisher, you can't use actions that have the attack trait for the rest of your turn.\n\nSome finisher actions also grant an effect on a failure. Effects added on a failure don't apply on a critical failure. If your finisher action succeeds, you can still choose to apply the failure effect instead. For example, you might do this when an attack deals no damage due to resistance."
    },
    {
      "Trait": "Finite",
      "Description": "Finite planes consist of a limited amount of space."
    },
    {
      "Trait": "Fire",
      "Description": "Effects with the fire trait deal fire damage or either conjure or manipulate fire. Those that manipulate fire have no effect in an area without fire. Creatures with this trait consist primarily of fire or have a connection to magical fire.Planes with this trait are composed of flames that continually burn with no fuel source. Fire planes are extremely hostile to non-fire creatures. Unprotected wood, paper, cloth, and other flammable materials catch fire almost immediately, and creatures wearing unprotected flammable clothing catch fire, typically taking 1d6 persistent fire damage. Extraplanar creatures take moderate environmental fire damage at the end of each round (sometimes minor environmental damage in safer areas, or major or massive damage in even more fiery areas). Ice creatures are extremely uncomfortable on a fire plane, assuming they don't outright melt in the heat."
    },
    {
      "Trait": "Fleshwarp",
      "Description": "A humanoid transformed so completely by outside forces that they are now a unique ancestry"
    },
    {
      "Trait": "Flexible",
      "Description": "The armor is pliable and doesn't hinder most actions. You don't apply its check penalty to Acrobatics or Athletics checks."
    },
    {
      "Trait": "Flourish",
      "Description": "Actions with the flourish trait are special techniques that require too much exertion for you to perform frequently. You can use only one action with the flourish trait per round."
    },
    {
      "Trait": "Flowing",
      "Description": "The flow of time is consistently faster or slower. A creature might travel to one of these planes, spend a year there, and find that only an hour passed in the Universe; alternatively, they might spend a minute on this plane and find out an hour passed in the Universe."
    },
    {
      "Trait": "Focus",
      "Description": "A spell you can cast by spending a Focus Point, and that is automatically heightened to half your level rounded up."
    },
    {
      "Trait": "Focused",
      "Description": "An item with this trait can give you an additional Focus Point. This focus point is separate from your focus pool and doesn't count toward the cap on your focus pool. You can gain this benefit only if you have a focus pool, and there might be restrictions on how the point can be used. You can't gain more than 1 Focus Point per day from focused items."
    },
    {
      "Trait": "Foldaway",
      "Description": "This shield can collapse into a smaller form attached to a gauntlet for stability and easy travel. You can use an Interact action to deploy or stow the shield. While it's deployed, you can Raise the Shield as long as you have that hand free or are holding an object of light Bulk that's not a weapon in that hand. The shield impedes the use of your hand while it's deployed. Though you can still hold items in that hand, you can't wield weapons in that hand, operate anything that takes two hands, or attack with the gauntlet. A foldaway shield must be attached to a gauntlet for stability. It can be affixed to an item with 10 minutes of work and a successful DC 10 Crafting check; this includes the time needed to remove the shield from a previous gauntlet, if necessary. If the gauntlet is destroyed, the foldaway shield can usually be salvaged. The collapsible nature of the shield makes it impossible to affix an attached weapon to it."
    },
    {
      "Trait": "Force",
      "Description": "Effects with this trait deal force damage or create objects made of pure magical force."
    },
    {
      "Trait": "Forceful",
      "Description": "This weapon becomes more dangerous as you build momentum. When you attack with it more than once on your turn, the second attack gains a circumstance bonus to damage equal to the number of weapon damage dice, and each later attack gains a circumstance bonus to damage equal to double the number of damage dice."
    },
    {
      "Trait": "Formian",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Fortune",
      "Description": "A fortune effect beneficially alters how you roll your dice. You can never have more than one fortune effect alter a single roll. If multiple fortune effects would apply, you have to pick which to use. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally."
    },
    {
      "Trait": "Free-Hand",
      "Description": "This weapon doesn't take up your hand, usually because it is built into your armor. A free-hand weapon can't be Disarmed. You can use the hand covered by your free-hand weapon to wield other items, perform manipulate actions, and so on. You can't attack with a free-hand weapon if you're wielding anything in that hand or otherwise using that hand. When you're not wielding anything and not otherwise using the hand, you can use abilities that require you to have a hand free as well as those that require you to be wielding a weapon in that hand. Each of your hands can have only one free-hand weapon on it."
    },
    {
      "Trait": "Fulu",
      "Description": "Fulus are small paper charms that can be affixed to a suit of armor, a shield, a weapon, a creature, or even a structure. Some fulus are composed of multiple such charms, taking effect only once all have been affixed. Normal fulus have effects immediately once affixed, while fulu talismans have an effect only once activated. Once a fulu has been activated, it lasts for the given duration and then burns out. Unless otherwise noted, fulus expire one year after being created, reverting to mundane paper. All fulus have the fulu and consumable traits. Fulus also have a tradition trait-either arcane, divine, occult or primal-determined by the magical tradition of its creator. For example, a fulu created by a priest would have the divine trait, whereas a witch who dabbles in fate might create a fulu with the occult trait. Some fulus also have the talisman trait, if they work similarly to talismans (such as being affixed to a suit of armor, a shield, or a weapon. Each fulu's stat block indicates the type of item or creature it can be affixed to. Affixing or removing a fulu requires using the Affix a Fulu activity, or the Affix a Talisman action instead if the fulu is also a talisman."
    },
    {
      "Trait": "Fungus",
      "Description": "Fungal creatures have the fungus trait. They are distinct from normal fungi."
    },
    {
      "Trait": "Gadget",
      "Description": "Gadgets are consumable technological inventions with innovative uses."
    },
    {
      "Trait": "Ganzi",
      "Description": "A planar scion descended from a chaotic being of the Maelstrom, such as a protean"
    },
    {
      "Trait": "General",
      "Description": "A type of feat that any character can select, regardless of ancestry and class, as long as they meet the prerequisites. You can select a feat with this trait when your class grants a general feat."
    },
    {
      "Trait": "Genie",
      "Description": "The diverse families of genies hold positions of prominence on the elemental planes. They have powerful magical abilities."
    },
    {
      "Trait": "Geniekin",
      "Description": "An umbrella term for planar scions descended from beings from the Elemental Planes. Geniekin craft and use these weapons."
    },
    {
      "Trait": "Ghoran",
      "Description": "Ghorans are sapient plants grown in the shape of humanoids with floral faces."
    },
    {
      "Trait": "Ghost",
      "Description": "Lost souls that haunt the world as incorporeal undead are called ghosts."
    },
    {
      "Trait": "Ghoul",
      "Description": "Ghouls are vile undead creatures that feast on flesh."
    },
    {
      "Trait": "Ghul",
      "Description": "Greedy and gluttonous undead originally formed from genie."
    },
    {
      "Trait": "Giant",
      "Description": "Giants are massive humanoid creatures."
    },
    {
      "Trait": "Gnome",
      "Description": "A creature with this trait is a member of the gnome ancestry. Gnomes are small people skilled at magic who seek out new experiences and usually have low-light vision. An ability with this trait can be used or selected only by gnomes. A weapon with this trait is created and used by gnomes."
    },
    {
      "Trait": "Goblin",
      "Description": "A creature with this trait can be one of several kinds of creature, including goblins, hobgoblins, and bugbears. Goblins tend to have darkvision. An ability with this trait can be used or chosen only by goblins. A weapon with this trait is created and used by goblins."
    },
    {
      "Trait": "Golem",
      "Description": "Golems are a special type of construct. Golems are immune to almost all magic, but most have a weakness to certain spells."
    },
    {
      "Trait": "Goloma",
      "Description": "Insular humanoids that bear countless eyes."
    },
    {
      "Trait": "Good",
      "Description": "Good effects often manipulate energy from good-aligned Outer Planes and are antithetical to evil divine servants or divine servants of evil deities. A creature with this trait is good in alignment."
    },
    {
      "Trait": "Graft",
      "Description": "An item that has the graft trait is a living tissue sample that has been implanted into a host. It's permanently a part of the subject's body and reduces the number of items that creature can invest per day by 1. Each graft has the invested trait to indicate this limitation-a graft is like an invested item that the host creature has no choice but to invest. If a creature gets a new graft when their limit on invested items has already been reduced to zero, the host body rejects the graft. Once fully implanted, a graft cannot take damage separately.If a graft is ever severed from the host body, it can be reattached by any effect that can typically reattach limbs or organs, such as the regenerate spell. A grafter can remove a grant using the same process required to implant one, though this does not necessarily restore any organs replaced by the graft initially. Grafts typically require specialized storage conditions, such as alchemical tanks, to remain viable outside of a host. Grafts can usually be upgraded into their greater versions by having a grafter apply additional surgeries, mutagenic development, or similar medical procedures."
    },
    {
      "Trait": "Grapple",
      "Description": "You can use this weapon to Grapple with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Grapple using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure."
    },
    {
      "Trait": "Graveknight",
      "Description": "Nethys Note: no description was provided for this trait."
    },
    {
      "Trait": "Gremlin",
      "Description": "Cruel and mischievous fey, gremlins have acclimated to life in the Universe."
    },
    {
      "Trait": "Grimoire",
      "Description": "Note from Nethys: no description was provided for this trait. See here for details"
    },
    {
      "Trait": "Grioth",
      "Description": "A grioth is a batlike alien that wields occult powers and can exist in the dark vacuum of space. They have darkvision and echolocation."
    },
    {
      "Trait": "Grippli",
      "Description": "Gripplis are a family of frog-like humanoids. Gripplis craft and use these weapons."
    },
    {
      "Trait": "Gunslinger",
      "Description": "This indicates abilities from the gunslinger class."
    },
    {
      "Trait": "Hag",
      "Description": "These malevolent spellcasters form covens."
    },
    {
      "Trait": "Halfling",
      "Description": "A creature with this trait is a member of the halfling ancestry. These small people are friendly wanderers considered to be lucky. An ability with this trait can be used or selected only by halflings. A weapon with this trait is created and used by halflings."
    },
    {
      "Trait": "Hampering",
      "Description": "A weapon with the hampering trait includes a disruptive limb or flange. After you hit with the weapon, you can use an Interact action to give the target a -10-foot circumstance penalty to all Speeds. The penalty ends after the target takes a move action, at the start of your next turn, if you attack with the weapon, or if you move out of reach of the target, whichever comes first."
    },
    {
      "Trait": "Hantu",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Harnessed",
      "Description": "This shield features a special brace or opening designed to hold lances or other jousting weapons. Jousters often use these shields as a backup in narrow passages and other places where they're unable to ride a mount. You can Interact to lock a weapon with the jousting trait in place in the shield, enabling you to use two hands to wield the shield and weapon simultaneously. If you're not wielding the combined unit with both hands, you can use neither the weapon nor the shield. While you have the shield raised, you can gain the jousting benefit of a weapon as if you were mounted. Because a significant portion of the weapon needs to be braced behind the shield, the weapon's reach is reduced by 5 feet if it is greater than 5 feet."
    },
    {
      "Trait": "Harrow Court",
      "Description": "This trait is associated with the Deck of Destiny and the Harrow Court. It is limited to the Stolen Fate campaign."
    },
    {
      "Trait": "Haunt",
      "Description": "A hazard with this trait is a spiritual echo, often of someone with a tragic death. Putting a haunt to rest often involves resolving the haunt's unfinished business. A haunt that hasn't been properly put to rest always returns after a time."
    },
    {
      "Trait": "Healing",
      "Description": "A healing effect restores a creature's body, typically by restoring Hit Points, but sometimes by removing diseases or other debilitating effects."
    },
    {
      "Trait": "Hefty",
      "Description": "A hefty shield is so heavy that raising it takes more effort. Raising a Shield with the hefty trait is a two-action activity unless your Strength score equals or exceeds the number with the trait."
    },
    {
      "Trait": "Herald",
      "Description": "Nearly all deities have a specific representative known as a herald; heralds are as diverse in their appearances and abilities as the gods themselves. A creature with the herald type is always unique."
    },
    {
      "Trait": "Hex",
      "Description": "A hex is a spell caused by your patron's direct attention and intervention. Your patron does not take well to being disturbed repeatedly, so you can cast only one spell that has the hex trait each turn; attempts to use a second automatically fail and usually cause your familiar to hiss in displeasure as your patron rejects your call."
    },
    {
      "Trait": "Hex-KM",
      "Description": "Hex events take place in a specific hex in the kingdom. Skill checks to resolve these events receive item bonuses only from structures that influence that hex. Hex events' effects may be enhanced or diminished if the site has (or lacks) specific features."
    },
    {
      "Trait": "High Gravity",
      "Description": "As in normal gravity, bodies of great mass act as centers of gravity, but the force relative to the size of the body is greater than in the Universe. The Bulk of all creatures and objects is doubled, meaning creatures acclimated to normal gravity can carry only half as much. Creatures used to normal gravity move at half Speed and can jump only half as high and far. Physical ranged attacks are impossible beyond the third range increment (instead of the sixth). Creatures that fall in high gravity take bludgeoning damage equal to the distance they fell."
    },
    {
      "Trait": "Hindering",
      "Description": "This armor is so heavy and bulky it slows you down no matter what. You take a -5 penalty to all your Speeds (to a minimum of a 5-foot Speed). This is separate from and in addition to the armor's Speed penalty, and affects you even if your Strength or an ability lets you reduce or ignore the armor's Speed penalty."
    },
    {
      "Trait": "Hobgoblin",
      "Description": "A creature with this trait is a tall, militaristic goblinoid. Hobgoblins tend to have darkvision. An ability with this trait can be used or selected only by hobgoblins. An item with this trait is created and used by hobgoblins."
    },
    {
      "Trait": "Holy",
      "Description": "Effects with the holy trait are tied to powerful magical forces of benevolence and virtue. They often have stronger effects on unholy creatures. Creatures with this trait are strongly devoted to holy causes and often have weakness to unholy. If a creature with weakness to holy uses a holy item or effect, it takes damage from its weakness."
    },
    {
      "Trait": "Hryngar",
      "Description": "Subterranean kin of the dwarves, hryngars typically have darkvision, resist poison, and recoil from bright light."
    },
    {
      "Trait": "Human",
      "Description": "A creature with this trait is a member of the human ancestry. Humans are a diverse array of people known for their adaptability. An ability with this trait can be used or selected only by humans."
    },
    {
      "Trait": "Humanoid",
      "Description": "Humanoid creatures reason and act much like humans. They typically stand upright and have two arms and two legs."
    },
    {
      "Trait": "Hungerseed",
      "Description": "A name for those who have oni ancestry."
    },
    {
      "Trait": "Ifrit",
      "Description": "Ifrits are planar scions descended from efreet."
    },
    {
      "Trait": "Ikeshti",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Illusion",
      "Description": "Effects and magic items with this trait involve false sensory stimuli."
    },
    {
      "Trait": "Immeasurable",
      "Description": "Immeasurable planes are immeasurably large, perhaps infinite."
    },
    {
      "Trait": "Impulse",
      "Description": "The primary magical actions kineticists use are called impulses. You can use an impulse only if your kinetic aura is active and channeling that element, and only if you have a hand free to shape the elemental flow. The impulse trait means the action has the concentrate trait unless another ability changes this. If an impulse allows you to choose an element, you can choose any element you're channeling, and the impulse gains that element's trait."
    },
    {
      "Trait": "Incapacitation",
      "Description": "An ability with this trait can take a character completely out of the fight or even kill them, and it's harder to use on a more powerful character. If a spell has the incapacitation trait, any creature of more than twice the spell's rank treats the result of their check to prevent being incapacitated by the spell as one degree of success better, or the result of any check the spellcaster made to incapacitate them as one degree of success worse. If any other effect has the incapacitation trait, a creature of higher level than the item, creature, or hazard generating the effect gains the same benefits."
    },
    {
      "Trait": "Incarnate",
      "Description": "A spell with the incarnate trait is similar in theme to spells that summon creatures, but it doesn't conjure a minion with the summoned trait. Instead, when summoned, the incarnate creature takes its Arrive action when you finish Casting the Spell. At the end of your next turn, the incarnate creature can either Step, Stride, or take the action for another movement type it has (such as Climb or Burrow), and then takes its Depart action. The spell then ends. The names of specific Arrive and Depart actions are listed in italics after the word \"Arrive\" or \"Depart\" respectively, along with any traits.A creature summoned by an incarnate spell acts in your interests, directs its effects away from you and your allies as much as possible, and might listen to your requests, but ultimately makes its own decisions. If the spell indicates that the incarnate makes a decision, the GM determines what the incarnate would do. It might even become more inclined to do precisely as you wish over multiple summonings.The incarnate is not fully a creature. It can't take any other actions, nor can it be targeted or harmed by Strikes, spells, or other effects unless they would be able to target or end a spell effect (such as dispel magic). It has a size for the purposes of determining its placement for effects, but it doesn't block movement. If applicable, its effects use your spell DCs and spell attack modifier."
    },
    {
      "Trait": "Incorporeal",
      "Description": "An incorporeal creature or object has no physical form. It can pass through solid objects, including walls. When inside an object, an incorporeal creature can't perceive, attack, or interact with anything outside the object, and if it starts its turn in an object, it's slowed 1 until the end of its turn. A corporeal and an incorporeal creature can pass through one another, but they can't end their movement in each other's space.An incorporeal creature can't attempt Strength-based checks against physical creatures or objects-only against incorporeal ones-unless those objects have the ghost touch property rune. Likewise, a corporeal creature can't attempt Strength-based checks against incorporeal creatures or objects.Incorporeal creatures usually have immunity to effects or conditions that require a physical body, like disease, poison, and precision damage. They usually have resistance against all damage (except force damage and damage from Strikes with the ghost touch property rune), with double the resistance against non-magical damage."
    },
    {
      "Trait": "Inevitable",
      "Description": "These constructed aeons were created by the axiomites. Each type of inevitable is dedicated to a specific task. Most inevitables have weakness to chaotic damage."
    },
    {
      "Trait": "Infamous",
      "Description": "The Infamous trait increases your Infamy score when the structure is built. Some structures have both Famous and Infamous traits; in this case apply the one that matches your kingdom's preference (see Fame and Infamy)."
    },
    {
      "Trait": "Infantry",
      "Description": "Infantry consists of soldiers or creatures that move on foot."
    },
    {
      "Trait": "Infrastructure",
      "Description": "The Infrastructure indicates that the structure benefits all lots in an Urban Grid without occupying a lot. (For a metropolis, this means you'll need to build Infrastructure separately for each Urban Grid that makes up the settlement.)"
    },
    {
      "Trait": "Infused",
      "Description": "An alchemical item with the infused trait has a limited time before it becomes inert. Any non-permanent effects from your infused alchemical items, with the exception of afflictions such as slow-acting poisons, end when you make your daily preparations again."
    },
    {
      "Trait": "Infusion",
      "Description": "Actions with the infusion trait tweak your kineticist impulses. You must use an infusion action directly before the impulse action you want to alter. If you use any action (including free actions and reactions) other than an impulse action directly after, you waste the benefits of the infusion action. Any additional effects added by an infusion action are part of the impulse's effect, not of the infusion action itself."
    },
    {
      "Trait": "Ingested",
      "Description": "An ingested poison is activated by applying it to food or drink to be consumed by a living creature, or by placing it directly into a living creature's mouth. A creature attempts a saving throw against such a poison when it consumes the poison or the food or drink treated with the poison. The onset time of ingested poisons typically ranges anywhere from 1 minute to 1 day"
    },
    {
      "Trait": "Inhaled",
      "Description": "An inhaled poison is activated by unleashing it from its container. Once unleashed, the poison creates a cloud filling a 10-foot cube lasting for 1 minute or until a strong wind dissipates the cloud. Every creature entering this cloud is exposed to the poison and must attempt a saving throw against it; a creature aware of the poison before entering the cloud can use a single action to hold its breath and gain a +2 circumstance bonus to the saving throw for 1 round."
    },
    {
      "Trait": "Injection",
      "Description": "This weapon can be filled with a liquid, usually an injury poison. Immediately after a successful attack with the weapon, you can inject the target with the loaded contents with a single Interact action. (If the target is willing, the injection takes only 1 Interact action total.) Refilling the weapon with a new substance requires 3 Interact actions and uses two hands."
    },
    {
      "Trait": "Injury",
      "Description": "An injury poison is activated by applying it to a weapon or ammunition, and it affects the target of the first Strike made using the poisoned item. If that Strike is a success and deals piercing or slashing damage, the target must attempt a saving throw against the poison. On a failed Strike, the target is unaffected, but the poison remains on the weapon and you can try again. On a critical failure, or if the Strike fails to deal slashing or piercing damage for some other reason, the poison is spent but the target is unaffected."
    },
    {
      "Trait": "Inscribed",
      "Description": "The equipment, typically an armor or shield, has been treated so it can be inscribed with magical symbols using the same methods as Crafting a scroll. Inscribed attire can hold one scroll inscribed on it. You need a free hand to Activate the scroll, but you don't need to Interact to draw it. You can also Activate the magic to erase the scroll the equipment currently contains. You can't inscribe a new scroll onto the equipment if a scroll is currently inscribed on it or if the equipment is broken."
    },
    {
      "Trait": "Integrated",
      "Description": "This shield has been created to include a weapon in its construction, which works like an attached weapon but can't be removed from the shield. This also prevents other attached weapons from being added to the shield. The integrated weapon's damage is listed alongside the trait, such as \"integrated d6 S,\" with any traits in parentheses. Unless otherwise noted in the shield's description, an integrated weapon is a martial weapon in the shield weapon group and requires one hand to attack with. The attached weapon can have runes etched onto it like other attached weapons. You can continue fighting normally with the integrated weapon if the shield is broken, but if the shield is destroyed, so is the weapon."
    },
    {
      "Trait": "Intelligent",
      "Description": "An item with this trait is intelligent and has its own will and personality, as well as several statistics that most items don't have. Intelligent items can't be crafted by normal means, and they are always rare or unique."
    },
    {
      "Trait": "Inventor",
      "Description": "This indicates abilities from the inventor class."
    },
    {
      "Trait": "Invested",
      "Description": "A character can wear only 10 magical items that have the invested trait. None of the magical effects of the item apply if the character hasn't invested it, nor can it be activated, though the character still gains any normal benefits from wearing the physical item (like a hat keeping rain off their head)."
    },
    {
      "Trait": "Investigator",
      "Description": "This trait indicates abilities from the investigator class."
    },
    {
      "Trait": "Jousting",
      "Description": "The weapon is suited for mounted combat with a harness or similar means. When mounted, if you moved at least 10 feet on the action before your attack, add a circumstance bonus to damage for that attack equal to the number of damage dice for the weapon. In addition, while mounted, you can wield the weapon in one hand, changing the damage die to the listed value. As a part of your action to Mount a creature, you can switch your grip on a jousting weapon to one-handed. After that, changing your grip takes the same actions described on page 268. If you dismount while wielding a jousting weapon onehanded, you can switch to using two hands as part of that action if you have a hand free at that point. If not, you'll still be holding the weapon in one hand, but not wielding it."
    },
    {
      "Trait": "Kaiju",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Kami",
      "Description": "Kami are spirits of the Material Plane that bond with a specific object or place."
    },
    {
      "Trait": "Kashrishi",
      "Description": "A stout ancestry bearing distinctive crystal horns and inherent psychic abilities."
    },
    {
      "Trait": "Kholo",
      "Description": "A creature with this trait is a member of the kholo ancestry -humanoids that resemble hyenas. An ability with this trait can be used or selected only by kholos. An item with this trait is created and used by kholos."
    },
    {
      "Trait": "Kickback",
      "Description": "A kickback weapon is extra powerful and difficult to use due to its high recoil. A kickback weapon deals 1 additional damage with all attacks. Firing a kickback weapon gives a -2 circumstance penalty to the attack roll, but characters with 14 or more Strength ignore the penalty. Attaching a kickback weapon to a deployed bipod, tripod, or other stabilizer can lower or negate this penalty."
    },
    {
      "Trait": "Kineticist",
      "Description": "This indicates abilities from the kineticist class."
    },
    {
      "Trait": "Kingdom",
      "Description": "A kingdom gains feats as it increases in level. Some feats are general-purpose abilities that apply all the time. Others grant benefits to specific kingdom activities or events or allow kingdoms to perform special activities. Each time a kingdom gains a feat, players can select any feat whose level does not exceed their kingdom's level and whose prerequisites their kingdom satisfies."
    },
    {
      "Trait": "Kitsune",
      "Description": "Shapeshifting humanoids whose true forms resemble foxes."
    },
    {
      "Trait": "Kobold",
      "Description": "A creature with this trait is a member of the kobold ancestry, reptilian humanoids who are usually Small and typically have darkvision. An ability with this trait can be used or selected only by kobolds."
    },
    {
      "Trait": "Kovintus",
      "Description": "Reclusive humanoids with an inborn talent for geomancy, kovintus have an intrinsic tie to nature and magic alike."
    },
    {
      "Trait": "Laminar",
      "Description": "The armor is made up of layered sections, so when it breaks, it isn't as much of a problem. The status penalty to AC if this armor is broken is -1 for broken medium armor, -2 for broken heavy armor, or no penalty for broken light armor."
    },
    {
      "Trait": "Launching",
      "Description": "A mechanism within this shield can shoot projectiles, causing the shield to also function as a ranged weapon. The trait lists the type of weapon, such as \"launching dart.\" Striking with the launcher requires the same number of hands as normal, except that the hand holding the shield counts toward this total, so a one-handed ranged weapon would require only one hand. Reloading takes the normal number of Interact actions, to a minimum of 1 action, and you can't use the hand holding your shield to reload."
    },
    {
      "Trait": "Lawful",
      "Description": "Lawful effects often manipulate energy from law-aligned Outer Planes and are antithetical to chaotic divine servants or divine servants of chaotic deities. A creature with this trait is lawful in alignment."
    },
    {
      "Trait": "Leadership",
      "Description": "This is a Kingdom skill activitiy that can be undertaken during the Leadership Activity phase."
    },
    {
      "Trait": "Legacy",
      "Description": "Once you've played through the listed Adventure Path, these rare backgrounds can become available in your future campaigns after the events of this Adventure Path."
    },
    {
      "Trait": "Leshy",
      "Description": "A creature with this trait is a member of the leshy ancestry. These small plant or fungus creatures are humanoid in form. An ability with this trait can be used or selected only by leshies. A weapon with this trait is created and used by leshies."
    },
    {
      "Trait": "Light",
      "Description": "Light effects overcome non-magical darkness in the area and can counteract magical darkness. You must usually target darkness magic with your light magic directly to counteract the darkness, but some light spells automatically attempt to counteract darkness."
    },
    {
      "Trait": "Lilu",
      "Description": "All lilus are chaotic evil fiends who can fly, are immune to disease, have mixed avian and humanoid appearances, possess darkvision and lifesense, and resist physical damage (except from cold iron). Most have a selection of primal innate spells (often including a primal version of dimension door)"
    },
    {
      "Trait": "Lineage",
      "Description": "A feat with this trait indicates a character's descendance from a particular type of creature. You can have only one lineage feat. You can select a lineage feat only at 1st level, and you can't retrain into or out of these feats."
    },
    {
      "Trait": "Linguistic",
      "Description": "An effect with this trait depends on language comprehension. A linguistic effect that targets a creature works only if the target understands the language you are using."
    },
    {
      "Trait": "Litany",
      "Description": "Litanies are special devotion spells, typically used by champions and requiring a single action, that usually give temporary immunity to further litanies."
    },
    {
      "Trait": "Lizardfolk",
      "Description": "A creature with this trait is a member of the lizardfolk ancestry, a family of reptilian humanoids. An ability with this trait can be used or selected only by lizardfolk."
    },
    {
      "Trait": "Low Gravity",
      "Description": "As in normal gravity, bodies of great mass act as centers of gravity, but the force relative to the size of the body is less than in the Universe. The Bulk of all creatures and objects is halved, meaning creatures acclimated to normal gravity can carry twice as much and jump twice as high and far. Physical ranged attacks are possible up to the twelfth range increment (instead of the sixth). Creatures that fall in low gravity take no damage for the first 10 feet of a fall, and then take bludgeoning damage equal to a quarter of the remaining distance it fell."
    },
    {
      "Trait": "Lozenge",
      "Description": "You Activate an alchemical lozenge by putting it in your mouth. It stays there, slowly dissolving and releasing its ingredients over time. You can bite a lozenge for a secondary effect. The action this takes is noted in the item. As soon as this secondary effect is over, the lozenge is used up and its benefits for you end. You can drink elixirs, potions, and beverages with a lozenge in your mouth, but you can't benefit from more than one lozenge at a time. If you have two lozenges in your mouth at the same time, both become inert. You can also spit out a lozenge as a single action to end its effect and make it inert. A lozenge dissolves due to its alchemical ingredients, so it typically still works even if you don't have saliva."
    },
    {
      "Trait": "Magical",
      "Description": "Something with the magical trait is imbued with magical energies not tied to a specific tradition of magic. Some items or effects are closely tied to a particular tradition of magic. In these cases, the item has the arcane, divine, occult, or primal trait instead of the magical trait. Any of these traits indicate that the item is magical."
    },
    {
      "Trait": "Magus",
      "Description": "This indicates abilities from the magus class."
    },
    {
      "Trait": "Maneuver",
      "Description": "This modifier applies to all checks made by the army to maneuver, be it to execute a complex tactic or to minimize damage and effects from unusual physical dangers"
    },
    {
      "Trait": "Manipulate",
      "Description": "You must physically manipulate an item or make gestures to use an action with this trait. Creatures without a suitable appendage can't perform actions with this trait. Manipulate actions often trigger reactions."
    },
    {
      "Trait": "Meal",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Mechanical",
      "Description": "A hazard with this trait is a constructed physical object."
    },
    {
      "Trait": "Mental",
      "Description": "A mental effect can alter the target's mind. It has no effect on an object or a mindless creature."
    },
    {
      "Trait": "Merfolk",
      "Description": "These aquatic humanoids have an upper body similar to a human and a lower body similar to a fish."
    },
    {
      "Trait": "Metal",
      "Description": "Effects with the metal trait conjure or manipulate metal. Those that manipulate metal have no effect in an area without metal. Creatures with this trait consist primarily of metal or have a connection to magical metal.These planes consist of chaotic and shifting structures and oceans of metal. Metal planes tend to exist in a state of change and decay, leaving plentiful pockets of air for visitors to breathe or move within. Creatures unlucky enough to be entombed in the plane's substance risk suffocation if they can't phase through metal. Wood creatures find the lack of stability and soil on a metal plane disconcerting and often fail to thrive in such environments."
    },
    {
      "Trait": "Metamorphic",
      "Description": "Things change by means other than physical force or magic. Sometimes spells have morphic effects. Other times, the plane's nature is under the control of a deity or power, or the plane simply changes at random."
    },
    {
      "Trait": "Metropolis",
      "Description": "Settlements with this trait are the largest of cities, often with a level of 8 or higher."
    },
    {
      "Trait": "Microgravity",
      "Description": "There's little to no gravity on this plane. Creatures float in space unless they can push off a surface or use some force to propel themselves throughout the plane."
    },
    {
      "Trait": "Mindless",
      "Description": "A mindless creature has either programmed or rudimentary mental attributes. Most, if not all, of their mental attribute modifiers are -5. They are immune to all mental effects."
    },
    {
      "Trait": "Mindshift",
      "Description": "An action with this trait can always be altered to use the raw power of your mind. When you take this action, you can choose to replace any damage it deals with mental damage, give it the mental trait, and replace any save it requires with a Will save. The action loses any traits matching damage types it no longer deals."
    },
    {
      "Trait": "Minion",
      "Description": "Minions are creatures that directly serve another creature. Your minion acts on your turn in combat, once per turn, when you spend an action to issue it commands. For an animal companion, you Command an Animal; for a minion that's a spell or magic item effect, like a summoned minion, you Sustain the effect; if not otherwise specified, you issue a verbal command as a single action with the auditory and concentrate traits. If given no commands, minions use no actions except to defend themselves or to escape obvious harm. If left unattended for long enough, typically 1 minute, mindless minions usually don't act, animals follow their instincts, and sapient minions act how they please. A minion has only 2 actions and 0 reactions per turn, though certain conditions (such as slowed or quickened) or abilities might give them a reaction that they can use. Alterations to a minion's actions occur when they gain their actions for the round. A minion can't control other creatures."
    },
    {
      "Trait": "Minotaur",
      "Description": "Minotaurs are horned, bovine humanoids with a mastery of mazes and puzzles."
    },
    {
      "Trait": "Misfortune",
      "Description": "A misfortune effect detrimentally alters how you roll your dice. You can never have more than one misfortune effect alter a single roll. If multiple misfortune effects would apply, the GM decides which is worse and applies it. If a fortune effect and a misfortune effect would apply to the same roll, the two cancel each other out, and you roll normally."
    },
    {
      "Trait": "Missive",
      "Description": "A missive is a piece of magical stationery that must be crafted and composed before it can be activated. All missives have the missive and consumable traits. Missives are often constructed of paper, parchment, or vellum, but any other thin, portable material that can hold writing or embossing upon it can be crafted into missives. After being crafted, the missive is a blank sheet until a message is composed upon it, completing its magic."
    },
    {
      "Trait": "Modification",
      "Description": "A feat with this trait alters the construction of your innovation. If you have the reconfigure class feature, you can retrain such a feat more easily"
    },
    {
      "Trait": "Modular",
      "Description": "The weapon has multiple configurations that you can switch between using an Interact action. Typically, switching between configurations of a modular weapon allows it to deal different types of damage (listed in the trait, such as \"modular B, P, or S\"), though it's possible for a modular weapon's description to list more complicated configurations."
    },
    {
      "Trait": "Monitor",
      "Description": "Creatures that hail from or have a strong connection to Axis, the Boneyard, or the Maelstrom are called monitors. Monitors can survive the basic environmental effects of planes in the Outer Sphere."
    },
    {
      "Trait": "Monk",
      "Description": "Abilities with this trait are from the monk class. A weapon with this trait is primarily used by monks."
    },
    {
      "Trait": "Morale",
      "Description": "This modifier applies to all checks made by the army to avoid becoming shaken or to resist effects"
    },
    {
      "Trait": "Morlock",
      "Description": "Morlocks are a family of pale, underground-dwelling humanoids who, generations ago, were regular humans."
    },
    {
      "Trait": "Morph",
      "Description": "Effects that slightly alter a creature's form have the morph trait. Any Strikes specifically granted by a morph effect are magical. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described in that trait).Your morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. The GM determines which morph effects can be used together and which can't."
    },
    {
      "Trait": "Mortic",
      "Description": "Mortics are living humanoids with close ties to undeath. They have darkvision, negative healing, and vulnerabilities to sacred ground, and they can become undead by holding their breath."
    },
    {
      "Trait": "Mounted",
      "Description": "Mounted siege weapons take up a certain size and space, and typically have statistics to allow them to be attacked. They're used for large-scale warfare."
    },
    {
      "Trait": "Move",
      "Description": "An action with this trait involves moving from one space to another."
    },
    {
      "Trait": "Multiclass",
      "Description": "Archetypes with the multiclass trait represent diversifying your training into another class's specialties. You can't select a multiclass archetype's dedication feat if you are a member of the class of the same name."
    },
    {
      "Trait": "Mummy",
      "Description": "A mummy is an undead creature created from a preserved corpse."
    },
    {
      "Trait": "Munavri",
      "Description": "Amicable humanoids living in the Darklands, munavris have powerful telekinetic and psychic abilities."
    },
    {
      "Trait": "Mutagen",
      "Description": "Mutagens are a special type of elixir that temporarily transmogrify the subject's body and mind. Typically, only alchemists have the expertise to craft mutagens. A mutagen always conveys one or more beneficial effects (listed in the Benefit entry) and one or more detrimental effects (shown in the Drawback entry). Mutagens are polymorph effects, and a subsequent polymorph effect attempts to counteract an existing effect; the counteract check for a mutagen uses the item's level and a modifier equal to that level's DC - 10."
    },
    {
      "Trait": "Mutant",
      "Description": "The monster has mutated or evolved, granting it unusual benefits, drawbacks, or both."
    },
    {
      "Trait": "Nagaji",
      "Description": "Nagaji are brawny humanoids with scaled skin and serpentine heads, many of whom serve or respect nagas."
    },
    {
      "Trait": "Necromancy",
      "Description": "Effects and magic items with this trait are associated with the necromancy school of magic, typically involving forces of life and death."
    },
    {
      "Trait": "Nephilim",
      "Description": "A creature with this trait has the nephilim versatile heritage. Nephilim are planar scions descended from immortal beings from other planes. An ability with this trait can be used or selected only by nephilim."
    },
    {
      "Trait": "Nindoru",
      "Description": "Nindorus are chaotic evil fiends that rise from corruptions to the cycle of reincarnating souls and live on the Material Plane. Although they often have elements in their appearance that make them seem undead, they're actually living beings. Most nindorus have darkvision, are immune to death effects, have weakness to silver, and possess the power to manifest objects or creatures from their thoughts."
    },
    {
      "Trait": "Noisy",
      "Description": "This armor is loud and likely to alert others to your presence. The armor's check penalty applies to Stealth checks even if you have the required Strength modifier."
    },
    {
      "Trait": "Nonlethal",
      "Description": "Attacks with this weapon are nonlethal, and are used to knock creatures unconscious instead of kill them. You can use a nonlethal weapon to make a lethal attack with a -2 circumstance penalty."
    },
    {
      "Trait": "Nymph",
      "Description": "This family of beautiful fey creatures has strong ties to natural locations."
    },
    {
      "Trait": "Oath",
      "Description": "Oaths add an additional tenet to your code. You can usually have only one feat with this trait."
    },
    {
      "Trait": "Occult",
      "Description": "This magic comes from the occult tradition, calling upon bizarre and ephemeral mysteries. Anything with this trait is magical.A creature with this trait is primarily constituted of or has a strong connection to occult magic."
    },
    {
      "Trait": "Oil",
      "Description": "Oils are magical gels, ointments, pastes, or salves that are typically applied to an object and are used up in the process."
    },
    {
      "Trait": "Olfactory",
      "Description": "An olfactory effect can affect only creatures that can smell it. This applies only to olfactory parts of the effect, as determined by the GM."
    },
    {
      "Trait": "Oni",
      "Description": "Oni are a family of brutal, shapechanging giants who were once kami."
    },
    {
      "Trait": "Ooze",
      "Description": "Oozes are creatures with simple anatomies. They tend to have low mental attribute modifiers and immunity to mental effects and precision damage."
    },
    {
      "Trait": "Open",
      "Description": "These maneuvers work only as the first salvo on your turn. You can use an open only if you haven't used an action with the attack or open trait yet this turn."
    },
    {
      "Trait": "Oracle",
      "Description": "This trait indicates abilities from the oracle class."
    },
    {
      "Trait": "Orc",
      "Description": "A creature with this trait is a member of the orc ancestry. These green-skinned people tend to have darkvision. An ability with this trait can be used or selected only by orcs. An item with this trait is created and used by orcs."
    },
    {
      "Trait": "Oread",
      "Description": "Oreads are planar scions descended from shaitans."
    },
    {
      "Trait": "Overflow",
      "Description": "Powerful impulses temporarily overdraw the energy of your kinetic gate. When you use an impulse that has the overflow trait, your kinetic aura deactivates until you revitalize it (typically with Channel Elements). Extinguishing your element this severely is taxing, and consequently, you can use only one overflow impulse per round, even if you reactivate your kinetic gate."
    },
    {
      "Trait": "Paaridar",
      "Description": "A paaridar is a humanoid who has gained physical aspects and abilities of a powerful beast through corrupted magical rituals."
    },
    {
      "Trait": "Parry",
      "Description": "This weapon can be used defensively to block attacks. While wielding this weapon, if your proficiency with it is trained or better, you can spend a single action to position your weapon defensively, gaining a +1 circumstance bonus to AC until the start of your next turn."
    },
    {
      "Trait": "Pervasive Magic",
      "Description": "Note from Nethys: no description was provided for this trait. See here for details"
    },
    {
      "Trait": "Phantom",
      "Description": "A phantom is soul that has diverged from the River of Souls on the Ethereal Plane before being judged. They typically retain memories of their life before death but are not undead."
    },
    {
      "Trait": "Plant",
      "Description": "Vegetable creatures have the plant trait. They are distinct from normal plants. Magical effects with this trait manipulate or conjure plants or plant matter in some way. Effects that manipulate plants have no effect in an area with no plants."
    },
    {
      "Trait": "Poison",
      "Description": "An effect with this trait delivers a poison or deals poison damage. An item with this trait is poisonous and might cause an affliction."
    },
    {
      "Trait": "Polymorph",
      "Description": "These effects transform the target into a new form. A target can't be under the effect of more than one polymorph effect at a time. If it comes under the effect of a second polymorph effect, the second polymorph effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes specifically granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don't allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry. If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there's doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can't activate any items. If a polymorph effect causes you to increase in size, you must have space to expand into or the effect is disrupted."
    },
    {
      "Trait": "Ponderous",
      "Description": "The armor has moving parts or other complications that lengthen the wearer's initial reaction time. While wearing the armor, you take a -1 penalty to initiative checks. If you don't meet the armor's required Strength score, this penalty increases to be equal to the armor's check penalty if it's worse."
    },
    {
      "Trait": "Poppet",
      "Description": "Small constructs originally designed to serve as companions or servants. They occasionally gain a greater spark of life, transforming them into independent, sapient creatures."
    },
    {
      "Trait": "Portable",
      "Description": "Portable siege weapons, such as battering rams, can be more easily carried and have a role in both warfare and smaller conflicts or exploration."
    },
    {
      "Trait": "Possession",
      "Description": "Effects with this trait allow a creature to project its mind and spirit into a target. A creature immune to mental effects can't use a possession effect. While possessing a target, a possessor's true body is unconscious (and can't wake up normally), unless the possession effect allows the creature to physically enter the target. Whenever the target takes damage, the possessor takes half that amount of damage as mental damage.A possessor loses the benefits of any of its active spells or abilities that affect its physical body, though it gains the benefits of the target's active spells and abilities that affect their body. A possessor can use any of the target's abilities that are purely physical, and it can't use any of its own abilities except spells and purely mental abilities. The GM decides whether an ability is purely physical or purely mental. A possessor uses the target's attack modifier, AC, Fortitude save, Reflex save, Perception, and physical skills, and its own Will save, mental skills, spell attack modifier, and spell DC; benefits of invested items apply where relevant (the possessor's invested items apply when using its own values, and the target's invested items apply when using the target's values). A possessor gains no benefit from casting spells that normally affect only the caster, since it isn't in its own body. The possessor must use its own actions to make the possessed creature act.If a possessor reaches 0 Hit Points through any combination of damage to its true body and mental damage from the possession, it is knocked out as normal and the possession immediately ends. If the target reaches 0 Hit Points first, the possessor can either fall unconscious with the body and continue the possession or end the effect as a free action and return to its body. If the target dies, the possession ends immediately, and the possessor is stunned for 1 minute."
    },
    {
      "Trait": "Potion",
      "Description": "A potion is a consumable magical liquid activated when you drink it."
    },
    {
      "Trait": "Precious",
      "Description": "Valuable materials with special properties have the precious trait. They can be substituted for base materials when you Craft items."
    },
    {
      "Trait": "Prediction",
      "Description": "Effects with this trait determine what is likely to happen in the near future."
    },
    {
      "Trait": "Press",
      "Description": "Actions with this trait allow you to follow up earlier attacks. An action with the press trait can be used only if you are currently affected by a multiple attack penalty. You can't use a press action when it's not your turn, even if you use the Ready activity.Some actions with the press trait also grant an effect on a failure. The effects that are added on a failure don't apply on a critical failure. If your press action succeeds, you can choose to apply the failure effect instead. (For example, you may wish to do this when an attack deals no damage due to resistance.)"
    },
    {
      "Trait": "Primal",
      "Description": "This magic comes from the primal tradition, connecting to the natural world and instinct. Anything with this trait is magical.A creature with this trait is primarily constituted of or has a strong connection to primal magic."
    },
    {
      "Trait": "Processed",
      "Description": "An alchemical consumable with the processed trait can be created with Quick Alchemy but is too complex to create in a single action. Using Quick Alchemy to create a processed item takes 1 minute. If the item would take more than 3 actions to Activate, the time the item remains potent after you create it is equal to its activation time. For instance, a processed item that takes 10 minutes to Activate would remain potent for 10 minutes when created with Quick Alchemy instead of remaining potent only until the start of your next turn. This trait doesn't change other specifics of Quick Alchemy. You could, for example, use double brew to create two of the same processed item over the course of 1 minute."
    },
    {
      "Trait": "Propulsive",
      "Description": "You add half your Strength modifier (if positive) to damage rolls with a propulsive ranged weapon. If you have a negative Strength modifier, you add your full Strength modifier instead."
    },
    {
      "Trait": "Protean",
      "Description": "A family of monitors spawned within the Maelstrom, these creatures are guardians of disorder. They typically have darkvision, an amorphous anatomy."
    },
    {
      "Trait": "Psyche",
      "Description": "Your psyche must be unleashed to use abilities that have the psyche trait, and they end automatically when your unleashed psyche subsides."
    },
    {
      "Trait": "Psychic",
      "Description": "This indicates abilities from the psychic class."
    },
    {
      "Trait": "Psychopomp",
      "Description": "A family of monitors spawned within the Boneyard to convey souls to the Outer Planes, most psychopomps are true neutral. They typically have darkvision, lifesense, and spirit touch, and they're immune to death effects."
    },
    {
      "Trait": "Qlippoth",
      "Description": "A family of fiends hailing from the Outer Rifts, most qlippoth are unholy. Their appearance affects the minds of non-qlippoth that view them."
    },
    {
      "Trait": "Radiation",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Rage",
      "Description": "You must be raging to use abilities with the rage trait, and they end automatically when you stop raging."
    },
    {
      "Trait": "Rakshasa",
      "Description": "Rakshasas are divine spirits who exemplify the profane. They can typically Change Shape and have a weakness to holy."
    },
    {
      "Trait": "Range",
      "Description": "These attacks will either list a finite range or a range increment, which follows the normal rules for range increments."
    },
    {
      "Trait": "Ranged Trip",
      "Description": "The weapon can be used to Trip with the Athletics skill within the weapon's first range increment. The skill check takes a -2 circumstance penalty. You can add the weapon's item bonus to attack rolls as a bonus to the check. A ranged trip weapon doesn't deal any damage when used to Trip. These weapons are usually thrown."
    },
    {
      "Trait": "Ranger",
      "Description": "This indicates abilities from the ranger class."
    },
    {
      "Trait": "Rare",
      "Description": "This rarity indicates that a rules element is very difficult to find in the game world. A rare feat, spell, item or the like is available to players only if the GM decides to include it in the game, typically through discovery during play. Creatures with this trait are rare. They typically can't be summoned. The DC of Recall Knowledge checks related to these creatures is increased by 5."
    },
    {
      "Trait": "Ratajin",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Ratfolk",
      "Description": "A creature with this trait is a member of the ratfolk ancestry. Ratfolk are humanoids who resemble rats. An ability with this trait can be used or selected only by ratfolk."
    },
    {
      "Trait": "Razing",
      "Description": "Razing weapons are particularly good at damaging objects, structures, and vehicles. Whenever you deal damage to an object (including shields and animated objects), structure, or vehicle with a razing weapon, the object takes an amount of additional damage equal to double the number of weapon damage dice."
    },
    {
      "Trait": "Reach",
      "Description": "This weapon can be used to attack enemies up to 10 feet away instead of only adjacent enemies. For creatures with reach, the weapon increases their reach by 5 feet."
    },
    {
      "Trait": "Reckless",
      "Description": "Actions that have the reckless trait push the pilot and the vehicle beyond the normal parameters for safe operation, and the pilot risks losing control of the vehicle. When performing a reckless action, the pilot must first attempt an appropriate piloting check to keep control of the vehicle, with the following effects. Resolve this piloting check before resolving the action itself.Success The action occurs as described. Failure The vehicle moves its Speed in a straight line along its most recent heading, drifting up to 45 degrees at the GM's discretion, and becomes uncontrolled."
    },
    {
      "Trait": "Recovery",
      "Description": "Recovery weapons are thrown weapons designed to return to the thrower when they miss the target. When you make an unsuccessful thrown Strike with this weapon, it flies back to your hand after the Strike is complete, allowing you to try again. If your hands are full when the weapon returns, it falls to the ground in your space."
    },
    {
      "Trait": "Reflection",
      "Description": "A creature with this trait has the reflection versatile heritage. Reflections are beings who are copies of living people, whether through cloning, planar duplication, or another mechanism. An ability with this trait can be used or selected only by reflections."
    },
    {
      "Trait": "Region",
      "Description": "This is a Kingdom skill activitiy that can be undertaken during the Region Activity phase."
    },
    {
      "Trait": "Reincarnated",
      "Description": "This rare ancestry feat is available to any\ncharacter who has reincarnated at least once, either as\npart of their backstory or because of a reincarnation\nthat took place during play."
    },
    {
      "Trait": "Relic",
      "Description": "Nethys note: this trait has not been defined, but has been used for relic seeds and set relics."
    },
    {
      "Trait": "Reload",
      "Description": "While all weapons need some amount of time to get into position, many ranged weapons also need to be loaded and reloaded. This entry indicates how many Interact actions it takes to reload such weapons. This can be 0 if drawing ammunition and firing the weapon are part of the same action. If an item takes 2 or more actions to reload, the GM determines whether they must be performed together as an activity, or you can spend some of those actions during one turn and the rest during your next turn."
    },
    {
      "Trait": "Repeating",
      "Description": "A repeating weapon is a type of ranged weapon with a shorter reload time. These weapons can't be loaded with individual bolts or bullets like other crossbows and firearms; instead, they require a magazine of specialized ammunition to be loaded into a special slot. Once that magazine is in place, the ammunition is automatically loaded each time the weapon is cocked to fire, reducing its reload to the value in its reload entry (typically 0). When the ammunition runs out, a new magazine must be loaded, which requires a free hand and 3 Interact actions (to remove the old magazine, retrieve the new magazine, and slot the new magazine in place). These actions don't need to be consecutive and are the same as Interacting to reload."
    },
    {
      "Trait": "Residential",
      "Description": "A Residential structure helps house the settlement's citizens; a settlement requires at least one Residential lot per block to avoid being Overcrowded."
    },
    {
      "Trait": "Resonant",
      "Description": "This weapon can channel energy damage. You gain the Conduct Energy free action while wielding a resonant weapon."
    },
    {
      "Trait": "Revelation",
      "Description": "Effects with this trait see things as they truly are."
    },
    {
      "Trait": "Rogue",
      "Description": "This indicates abilities from the rogue class."
    },
    {
      "Trait": "Saggorak",
      "Description": "Ancient dwarven blacksmiths in Saggorak designed a series of spectacularly powerful runes. Only someone with legendary proficiency in Crafting, or a well-versed dwarven crafter from the city of Kovlar, can apply, transfer, or remove a rune with the Saggorak trait. Because of their considerable power, all Saggorak runes take up two property rune slots, and consequently they can be applied only to armor and weapons with at least a +2 potency rune."
    },
    {
      "Trait": "Sahkil",
      "Description": "Sahkils are fiends that delight in spreading fear and unease among mortal creatures. They typically have darkvision, immunity to fear, and weakness to good."
    },
    {
      "Trait": "Samsaran",
      "Description": "Samsarans are humanoids whose souls reincarnate into new bodies upon their death."
    },
    {
      "Trait": "Samsaran",
      "Description": "Blue-skinned people native to Zi Ha, who reincarnate upon death and recall pieces of their past lives."
    },
    {
      "Trait": "Sanctified",
      "Description": "If you are holy or unholy, your sanctified actions and spells gain the same trait."
    },
    {
      "Trait": "Sarangay",
      "Description": "Powerful carabao-headed warriors who live on the isles of Minata. Known for the magical gems in their foreheads that are said to contain their souls."
    },
    {
      "Trait": "Scatter",
      "Description": "This weapon fires a cluster of pellets in a wide spray. Scatter always has an area listed with it, indicating the radius of the spray. On a hit, the primary target of attacks with a scatter weapon take the listed damage, and the target and all other creatures within the listed radius around it take 1 point of splash damage per weapon damage die."
    },
    {
      "Trait": "Scroll",
      "Description": "A scroll contains a single spell you can cast without a spell slot."
    },
    {
      "Trait": "Scrying",
      "Description": "A scrying effect lets you see, hear, or otherwise get sensory information from a distance using a sensor or apparatus, rather than your own eyes and ears."
    },
    {
      "Trait": "Sea Devil",
      "Description": "Evil ocean-dwelling humanoids, sea devils usually have darkvision and wavesense."
    },
    {
      "Trait": "Secret",
      "Description": "The GM rolls the check for this ability in secret."
    },
    {
      "Trait": "Sedacthy",
      "Description": "Ocean-dwelling humanoids who communicate with sea life and usually have darkvision and wavesense."
    },
    {
      "Trait": "Sentient",
      "Description": "The plane changes based on its own whims."
    },
    {
      "Trait": "Serpentfolk",
      "Description": "Serpentfolk are a family of serpentine humanoids."
    },
    {
      "Trait": "Settlement",
      "Description": "Settlement events take place in a specific settlement. Skill checks to resolve these events receive item bonuses only from structures that are part of that settlement. Settlement events' effects may be enhanced or diminished if the site has (or lacks) specific features."
    },
    {
      "Trait": "Seugathi",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Shabti",
      "Description": "A shabti is a constructed humanoid originally meant to face judgment for a living creature's sins after death."
    },
    {
      "Trait": "Shade",
      "Description": "Shades are mortal souls who have been judged and then transformed into creatures native to other planes. Petitioners can survive the basic environmental effects of their home plane."
    },
    {
      "Trait": "Shadow",
      "Description": "Magic with this trait involves shadows or the energy of the Netherworld. Planes with this trait are umbral with murky light. In the Netherworld, the radius of all light from light sources and the areas of light spells are halved."
    },
    {
      "Trait": "Shapechanger",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Shield Throw",
      "Description": "A shield with this trait is designed to be thrown as a ranged attack. When thrown, the shield is a martial thrown ranged weapon. Its damage dice and type are the same as its shield bash attack, but if the shield includes an attached weapon or integrated weapon, you can choose to attack with it instead when you throw the shield. You add your Strength modifier to damage, as typical of a thrown weapon. The trait also includes the range increment."
    },
    {
      "Trait": "Shisk",
      "Description": "Secretive humanoids covered in bony plumage that reside underground."
    },
    {
      "Trait": "Shoony",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Shove",
      "Description": "You can use this weapon to Shove with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Shove using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure."
    },
    {
      "Trait": "Siege",
      "Description": "Siege armies focus on the deployment of siege engines rather than personal combat."
    },
    {
      "Trait": "Siktempora",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Skeleton",
      "Description": "This undead is made by animating a dead creature's skeleton with void energy."
    },
    {
      "Trait": "Skelm",
      "Description": "These creatures are monstrous, wrathful misanthropes who seek to control others through anger and spite."
    },
    {
      "Trait": "Skill",
      "Description": "A general feat with the skill trait improves your skills and their actions or gives you new actions for a skill. A feat with this trait can be selected when a class grants a skill feat or general feat. Archetype feats with the skill trait can be selected in place of a skill feat if you have that archetype's dedication feat."
    },
    {
      "Trait": "Skirmisher",
      "Description": "Skirmishers consist of a small number of highly mobile units."
    },
    {
      "Trait": "Skulk",
      "Description": "Skulks are a family of humanoids whose skin can shift coloration to aid in stealth."
    },
    {
      "Trait": "Sleep",
      "Description": "This effect makes a creature fall asleep or get drowsy"
    },
    {
      "Trait": "Snare",
      "Description": "Traps typically made by rangers, snares follow special rules that allow them to be constructed quickly and used on the battlefield."
    },
    {
      "Trait": "Social",
      "Description": "Actions and abilities with the social trait can be used only while a vigilante is in their social identity."
    },
    {
      "Trait": "Sonic",
      "Description": "An effect with the sonic trait functions only if it makes sound, meaning it has no effect in an area of silence or in a vacuum. This is different from an auditory spell, which is effective only if the target can hear it. A sonic effect might deal sonic damage."
    },
    {
      "Trait": "Sorcerer",
      "Description": "This indicates abilities from the sorcerer class."
    },
    {
      "Trait": "Soulbound",
      "Description": "These constructs are mentally augmented by a fragment of a once-living creature's soul."
    },
    {
      "Trait": "Spellgun",
      "Description": "The spellgun trait appears on items that can generate a magical effect that flies out like a bullet. You can make either a spell attack roll with a spellgun or a ranged attack roll using your proficiency with simple firearms. Spellguns have a range increment, which applies regardless of which type of attack roll you make. Though you can use your modifier for simple firearms, a spellgun isn't actually a firearm. You don't get the damage of a firearm Strike, nor other benefits like critical specialization. Similarly, you can't load or reload a spellgun, affix talismans to one, make a spellgun Strike as part of an action that lets you make a firearm Strike, and so on."
    },
    {
      "Trait": "Spellheart",
      "Description": "Spellhearts are permanent items that work similarly to talismans. You affix a spellheart using the Affix a Spellheart activity, which is otherwise identical to Affix a Talisman. The limit of one talisman per item remains-an item can have one spellheart or one talisman, not both. When casting a cantrip from a spellheart, you can use your own spell attack roll or spell DC if it's higher. Crafting a spellheart requires the spells the spellheart can cast. For example, a major five-feather wreath requires air walk, gale blast, and wall of wind."
    },
    {
      "Trait": "Spellshape",
      "Description": "Actions with the spellshape trait tweak the properties of your spells. You must use a spellshape action directly before casting the spell you want to alter. If you use any action (including free actions and reactions) other than casting a spell directly after, you waste the benefits of the spellshape action. The benefit is also lost if your turn ends before you cast the spell. Any additional effects added by a spellshape action are part of the spell's effect, not of the spellshape action itself."
    },
    {
      "Trait": "Spellshot",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Spirit",
      "Description": "Effects with this trait can affect creatures with spiritual essence and might deal spirit damage. A creature with this trait is defined by its spiritual essence. Spirit creatures often lack a material form."
    },
    {
      "Trait": "Splash",
      "Description": "Most bombs also have the splash trait. When you use a thrown weapon with the splash trait, you don't add your Strength modifier to the damage roll. If an attack with a splash weapon fails, succeeds, or critically succeeds, all creatures within 5 feet of the target (including the target) take the listed splash damage. On a critical failure, the bomb misses entirely, dealing no damage. Add splash damage together with the initial damage against the target before applying the target's resistance or weakness. You don't multiply splash damage on a critical hit."
    },
    {
      "Trait": "Sporeborn",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Spriggan",
      "Description": "Kin to gnomes, spriggans tend to be evil and can grow in size to resemble giants."
    },
    {
      "Trait": "Sprite",
      "Description": "A family of diminutive winged fey with a strong connection to primal magic."
    },
    {
      "Trait": "Staff",
      "Description": "This magic item holds spells of a particular theme and allows a spellcaster to cast additional spells by preparing the staff."
    },
    {
      "Trait": "Stamina",
      "Description": "This trait was created by the Archives of Nethys to assist in grouping like mechanics. It is not from a published source.Available for use in games using the Stamina Rules Variant."
    },
    {
      "Trait": "Stance",
      "Description": "A stance is a general combat strategy that you enter by using an action with the stance trait, and you remain in for some time. A stance lasts until you get knocked out, until its requirements (if any) are violated, until the encounter ends, or until you use a stance action again, whichever comes first. After you take an action with the stance trait, you can't take another one for 1 round. You can enter or be in a stance only in encounter mode. You can Dismiss a stance."
    },
    {
      "Trait": "Static",
      "Description": "Visitors can't affect living residents of the plane or objects the denizens carry in any way. Any spells that would affect those on the plane have no effect unless the static trait is somehow removed or suppressed."
    },
    {
      "Trait": "Steam",
      "Description": "Items with this trait are powered by engines that boil water to produce steam and move their components."
    },
    {
      "Trait": "Stheno",
      "Description": "Stheno are humanoids related to medusas, with snakes for hair."
    },
    {
      "Trait": "Strange Gravity",
      "Description": "All bodies of mass are centers of gravity with roughly the same force. A creature can stand on any solid objects that's as large as or larger than themself."
    },
    {
      "Trait": "Strix",
      "Description": "Winged humanoids, most of whom live in and around Cheliax."
    },
    {
      "Trait": "Structure",
      "Description": "An item with the structure trait creates a magical building or other structure when activated. The item must be activated on a plot of land free of other structures. The structure adapts to the natural terrain, adopting the structural requirements for being built there. The structure adjusts around small features such as ponds or spires of rock, but it can't be created on water or other nonsolid surfaces. If activated on snow, sand dunes, or other soft surfaces with a solid surface underneath, the structure's foundation (if any) reaches the solid ground. If an item with this trait is activated on a solid but unstable surface, such as a swamp or an area plagued by tremors, roll a DC 3 flat check each day; on a failure, the structure begins to sink or collapse.The structure doesn't harm creatures within the area when it appears, and it can't be created within a crowd or in a densely populated area. Any creature inadvertently caught inside the structure when the item is activated ends up unharmed inside the complete structure and always has a clear path of escape. A creature inside the structure when the activation ends isn't harmed, and it lands harmlessly on the ground if it was on an upper level of the structure."
    },
    {
      "Trait": "Subjective Gravity",
      "Description": "All bodies of mass can be centers of gravity with the same force, but only if a non-mindless creature wills it. Unattended items, objects, and mindless creatures treat the plane as having microgravity. Creatures on a plane with subjective gravity can move normally along a solid surface by imagining \"down\" near their feet. Designating this downward direction is a free action that has the concentration trait. If suspended in midair, a creature can replicate flight by choosing a \"down\" direction and falling in that direction, moving up to their Speed or fly Speed. This pseudo-flight uses the Fly action."
    },
    {
      "Trait": "Subtle",
      "Description": "A spell with the subtle trait can be cast without incantations and doesn't have obvious manifestations."
    },
    {
      "Trait": "Suli",
      "Description": "Sulis are planar scions descended from jann."
    },
    {
      "Trait": "Summon",
      "Description": "Spells with the summon trait can conjure creatures, typically ones with a particular trait. Such creatures can be found in Monster Core and similar books. Unless noted otherwise, the creature must be common, it gains the summoned trait, and it must appear in an unoccupied space in range large enough to contain it. The highest level of creature the spell can summon depends on the rank of the spell, as listed below. The spell can still summon a creature of a lower level if you so choose. These rules apply only to spells that have the summon trait; other spells that call or conjure items or beings but that don't have the trait, like summon instrument, work as explained in the spell.  Spell RankMaximum Creature Level 1st-1 2nd1 3rd2 4th3 5th5 6th7 7th9 8th11 9th13 10th15"
    },
    {
      "Trait": "Summoned",
      "Description": "A creature called by a spell or effect gains the summoned trait. A summoned creature can't summon other creatures, create things of value, or cast spells that require a cost. It has the minion trait. If it tries to Cast a Spell of equal or higher level than the spell that summoned it, it overpowers the summoning magic, causing its own spell to fail and the summon spell to end. Otherwise, the summoned creature uses the standard abilities for a creature of its kind. It generally attacks your enemies to the best of its ability. If you can communicate with it, you can attempt to command it, but the GM determines the degree to which it follows your commands. Immediately when you finish Casting the Spell, the summoned creature uses its 2 actions for that turn. A spawn or other creature generated from a summoned creature returns to its unaltered state (usually a corpse in the case of spawn) once the summoned creature is gone. If it's unclear what this state would be, the GM decides. Summoned creatures can be banished by various spells and effects. They are automatically banished if reduced to 0 Hit Points or if the spell that called them ends."
    },
    {
      "Trait": "Summoner",
      "Description": "This indicates abilities from the summoner class."
    },
    {
      "Trait": "Surki",
      "Description": "Surkis are a subterranean insectile ancestry that absorb ambient magic and evolve unique adaptations."
    },
    {
      "Trait": "Swarm",
      "Description": "A swarm is a mass or cloud of creatures that functions as one monster. Its size entry gives the size of the entire mass, though for most swarms, the individual creatures that make up that mass are Tiny. A swarm can occupy the same space as other creatures and must do so in order to use its damaging action. A swarm typically has weakness to effects that deal damage over an area (like area spells and splash weapons). Swarms are immune to the grappled, prone, and restrained conditions."
    },
    {
      "Trait": "Swashbuckler",
      "Description": "This trait indicates abilities from the swashbuckler class."
    },
    {
      "Trait": "Sweep",
      "Description": "This weapon makes wide swinging attacks. When you attack with this weapon, you gain a +1 circumstance bonus to your attack roll if you already attempted to attack a different target this turn using this weapon."
    },
    {
      "Trait": "Sylph",
      "Description": "Sylphs are planar scions descended from djinn."
    },
    {
      "Trait": "Talisman",
      "Description": "A talisman is a small object affixed to armor, a shield, or a weapon (called the affixed item). You must be wielding or wearing an item to activate a talisman attached to it. Once activated, a talisman burns out permanently."
    },
    {
      "Trait": "Talos",
      "Description": "Taloses are planar scions descended from zuhras."
    },
    {
      "Trait": "Tandem",
      "Description": "Actions with this trait involve you and your eidolon acting in concert. You can't use a tandem action if either you or your eidolon can't act, if you haven't Manifested your Eidolon, or if you've Manifested your Eidolon in a way where it isn't a separate entity (such as with the Meld into Eidolon feat). Tandem actions often let both you and your eidolon take separate actions, but these must be actions taken separately by you and your eidolon; you can't use a tandem action to take another tandem action."
    },
    {
      "Trait": "Tane",
      "Description": "The Tane are powerful creatures created eons ago by the Eldest of the First World. All of the Tane treat whatever plane they happen to be on as their home plane."
    },
    {
      "Trait": "Tanggal",
      "Description": "This family of cannibalistic aberrations consists of various humanoid-shaped creatures that can separate their body into two pieces while hunting."
    },
    {
      "Trait": "Tanuki",
      "Description": "A name for both a raccoon-like animal native to Minkai and sapient tanuki who possess shapeshifting powers."
    },
    {
      "Trait": "Tattoo",
      "Description": "A magical tattoo has the tattoo trait. It's permanently a part of the subject's body, and reduces the number of items that creature can invest per day by 1. Each tattoo has the invested trait to indicate this limitation-a magical tattoo is like an invested item that the tattooed creature has no choice but to invest. If the tattoo loses its magic or is destroyed, it no longer reduces your investiture. Just like a physical magic item, a magical tattoo can be counteracted by spells like dispel magic or disjunction. If destroyed, the tattoo fades from the skin. If a creature gets a new magical tattoo when their limit on invested items has already been reduced to zero, the new tattoo's magic fails to take hold, and it becomes a non-magical tattoo instead. However, a tattooist can alter an existing tattoo when they Craft a tattoo, modifying the old one into a different magical tattoo and removing the old effect. Magical tattoos can usually be upgraded into their greater versions by having a tattooist add to or modify the existing tattoo."
    },
    {
      "Trait": "Tea",
      "Description": "Magic tea is a type of potion. It activates when you drink it, which uses it up. Magic tea has the potion and tea traits. When you craft a dose of magic tea, the raw materials you supply are in the form of unusual and costly tea leaves. The process of crafting magic tea includes infusing the leaves with magical reagents, purifying the water, and steeping the tea in the water, resulting in what's essentially a particularly delicious-tasting potion. You can activate magic tea with an Interact action as you drink it or feed it to another creature, as if it were a potion. You can also activate magic tea with a 10-minute activity that requires sterling tea ware (these artisan's tools can be shared by up to four people who take this activity simultaneously) to prepare the tea and then consume it or present it to someone during a short tea ceremony, after which the magic tea's effects begin; activating magic tea in this way enhances its effect, as detailed in each entry's Tea Ceremony below. Once you drink a dose of magic tea, you're temporarily immune to that particular type of magic tea for 24 hours."
    },
    {
      "Trait": "Tech",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Telepathy",
      "Description": "Note from Nethys: This trait was not listed in the Glossary, its only use is as a Trait for some monster abilities."
    },
    {
      "Trait": "Teleportation",
      "Description": "Teleportation effects instantaneously move something from one point in space to another. Teleportation does not usually trigger reactions based on movement."
    },
    {
      "Trait": "Tengu",
      "Description": "A creature with this trait is a member of the tengu ancestry. Tengu are humanoids who resemble crows. An ability with this trait can be used or selected only by tengu. An item with this trait is created and used by tengu."
    },
    {
      "Trait": "Tethered",
      "Description": "This weapon is attached to a length of rope or chain that allows you to retrieve it after it has left your hand. If you have a free hand (including if you've just thrown a two-handed tethered weapon and have a hand holding nothing but the weapon's tether), you can use an Interact action to pull the weapon back into your grasp after you have thrown it as a ranged attack or after it has been disarmed (unless it's being held by another creature)."
    },
    {
      "Trait": "Thaumaturge",
      "Description": "This indicates abilities from the thaumaturge class."
    },
    {
      "Trait": "Thrown",
      "Description": "You can throw this weapon as a ranged attack; it is a ranged weapon when thrown. You add your Strength modifier to damage as you would for a melee weapon. When this trait appears on a melee weapon, it also includes the range increment. Ranged weapons with this trait use the range increment in the weapon's Range entry."
    },
    {
      "Trait": "Tiefling",
      "Description": "A creature with this trait has the tiefling versatile heritage. Tieflings are planar scions descended from fiends. An ability with this trait can be used or selected only by tieflings."
    },
    {
      "Trait": "Time",
      "Description": "Time creatures are natives of the Dimension of Time. They don't age, and while some might be driven by supernatural hungers, they don't need to eat or drink to survive. They can survive the basic environmental effects of the Dimension of Time."
    },
    {
      "Trait": "Timeless",
      "Description": "Time still passes, but the effects of time are diminished. Creatures on these planes don't feel hunger, thirst, or the effects of aging or natural healing. The effects of poison, diseases, and other kinds of healing might also be diminished on certain timeless planes. Spell energy and other effects still dissipate, so the durations of spells and other effects function as normal. The danger of this trait is that when a creature leaves a timeless plane and enters a plane with another time trait, the effects of hunger, thirst, aging, and other effects slowed or arrested by the timeless trait occur retroactively in the instant of transition, possibly causing the creature to immediately starve or die of old age."
    },
    {
      "Trait": "Titan",
      "Description": "Titans are enormous, primordial creatures of neargodlike power who predate the mortal races."
    },
    {
      "Trait": "Town",
      "Description": "Settlements with this trait are modest in size, with a level usually ranging from 2-4."
    },
    {
      "Trait": "Training",
      "Description": "A training weapon is designed to be used when training an animal to participate in combat by identifying the target for the animal to attack. Striking a creature with a training weapon gives your animal companion or your bonded animal a +1 circumstance bonus to its next attack roll against that target."
    },
    {
      "Trait": "Transmutation",
      "Description": "Effects and magic items with this trait are associated with the transmutation school of magic, typically changing something's form."
    },
    {
      "Trait": "Trap",
      "Description": "A hazard constructed to hinder interlopers."
    },
    {
      "Trait": "Trial",
      "Description": "Rituals with the trial trait extend beyond the initial checks necessary when the ritual is first performed, and they typically have a following condition or set of conditions that must be met before they grant their full benefits. The particulars of the conditions are specified in each individual ritual and can vary from defeating a set number of a particular type of monster to performing some other notable deed or accomplishment."
    },
    {
      "Trait": "Trip",
      "Description": "You can use this weapon to Trip with the Athletics skill even if you don't have a free hand. This uses the weapon's reach (if different from your own) and adds the weapon's item bonus to attack rolls as an item bonus to the Athletics check. If you critically fail a check to Trip using the weapon, you can drop the weapon to take the effects of a failure instead of a critical failure."
    },
    {
      "Trait": "Tripkee",
      "Description": "A creature with this trait is a member of the tripkee ancestry. Tripkees are a family of froglike humanoids. An ability with this trait can be used or selected only by tripkees. An item with this trait is created and used by tripkees."
    },
    {
      "Trait": "Troll",
      "Description": "Trolls are giant, brutish creatures and are well known for transforming into inanimate materials."
    },
    {
      "Trait": "Troop",
      "Description": "A troop is an organized collection of component creatures, typically Small or Medium in size, working as a cohesive whole. A troop is 16 squares in size and has two Hit Point thresholds in their HP entry, under which it reduces in size to 12 squares and then 8 squares. A troop has the Troop Defenses, Form Up, and Troop Movement abilities. Most troops have a weakness to area damage. Because they consist of multiple discrete creatures, they can't be summoned."
    },
    {
      "Trait": "True Name",
      "Description": "Certain spells, feats, and items have the true name trait. This trait means they require you to know a creature's true name to use them."
    },
    {
      "Trait": "Twin",
      "Description": "These weapons are used as a pair. When you attack with a twin weapon, you add a circumstance bonus to the damage roll equal to the weapon's number of damage dice if you have previously attacked with a different weapon of the same type this turn. The weapons must be of the same type, but they don't need to have the same runes."
    },
    {
      "Trait": "Two-Hand",
      "Description": "This weapon can be wielded with two hands to change its weapon damage die to the indicated value. This change applies to all the weapon's damage dice."
    },
    {
      "Trait": "Unarmed",
      "Description": "An unarmed attack uses your body rather than a manufactured weapon. An unarmed attack isn't a weapon, though has a weapon group and might have weapon traits. An unarmed attack can't be Disarmed. It also doesn't take up a hand, though a fist or other grasping appendage generally works like a free-hand weapon."
    },
    {
      "Trait": "Unbounded",
      "Description": "Unbounded planes loop back on themselves when a creature reaches the plane's \"edge."
    },
    {
      "Trait": "Uncommon",
      "Description": "Something of uncommon rarity requires special training or comes from a particular culture or part of the world. Some character choices give access to uncommon options, and the GM can choose to allow access for anyone. Less is known about uncommon creatures than common creatures. They typically can't be summoned. The DC of Recall Knowledge checks related to these creature is increased by 2."
    },
    {
      "Trait": "Undead",
      "Description": "Once living, these creatures were infused after death with void energy and soul-corrupting unholy magic. When reduced to 0 Hit Points, an undead creature is destroyed. Undead creatures are damaged by vitality energy and are healed by void energy, and don't benefit from healing vitality effects."
    },
    {
      "Trait": "Undine",
      "Description": "Undines are planar scions descended from marids."
    },
    {
      "Trait": "Unholy",
      "Description": "Effects with the unholy trait are tied to powerful magical forces of cruelty and sin. They often have stronger effects on holy creatures. Creatures with this trait are strongly devoted to unholy causes, and often have weakness to holy. If a creature with weakness to unholy uses an unholy item or effect, it takes damage from its weakness."
    },
    {
      "Trait": "Unique",
      "Description": "A rules element with this trait is one-of-a-kind. The DC of Recall Knowledge checks related to creatures with this trait is increased by 10."
    },
    {
      "Trait": "Universal Ancestry",
      "Description": "This trait was created by the Archives of Nethys to assist in grouping like mechanics. It is not from a published source.A feat with this trait is available to all ancestries."
    },
    {
      "Trait": "Unstable",
      "Description": "Unstable actions use experimental applications of your innovation that even you can't fully predict, and that are hazardous to your innovation (and potentially you). When you take an unstable action, attempt a DC 15 flat check immediately after applying its effects. On a failure, the innovation malfunctions in a spectacular (though harmless) fashion, such as a belch of smoke or shower of sparks, and it becomes incapable of being used for further unstable actions. On a critical failure, you also take an amount of fire damage equal to your level. As the innovation's creator, you can spend 10 minutes retuning your innovation and making adjustments to return it to functionality, at which point you can use unstable actions with that innovation again. To take an unstable action, you must be using your innovation (for example, wearing an armor innovation or wielding a weapon innovation). If you have a minion innovation, some unstable actions are taken by the minion instead of you. In these cases, only the minion can take that action, and the minion needs to have been Commanded that turn to take the action. If you critically fail the flat check, the minion takes the damage instead of you. Some actions have an Unstable Function entry, which you can use to add the unstable trait for a bigger benefit. If you're unable to use unstable actions, you can still use the action normally, but you can't use the unstable function."
    },
    {
      "Trait": "Upkeep",
      "Description": "This is a Kingdom skill activitiy that can be undertaken during the Upkeep Activity phase."
    },
    {
      "Trait": "Urdefhan",
      "Description": "Urdefhans are humanoids who have pacts with daemons, have transparent skin, and drink blood."
    },
    {
      "Trait": "Vampire",
      "Description": "Undead creatures who thirst for blood, vampires are notoriously versatile and hard to destroy."
    },
    {
      "Trait": "Vanara",
      "Description": "Vanaras are monkeylike humanoids who share a devotion to monastic training."
    },
    {
      "Trait": "Varies",
      "Description": "This trait was created by the Archives of Nethys to assist in grouping like mechanics. It is not from a published source.The traits of an alchemical bomb vary between different bombs."
    },
    {
      "Trait": "Vehicular",
      "Description": "A vehicular weapon is attached to a vehicle or worn by a mount and can typically only be wielded by the driver of the vehicle or the mount's primary rider. The driver or rider can control a vehicular weapon with the same hands they use to steer the vehicle or guide the mount. A vehicular weapon can be Disarmed by knocking the controls (typically reins for a mount or a steering device for a vehicle) out of the wielder's hands."
    },
    {
      "Trait": "Velstrac",
      "Description": "A family of fiends from the Shadow Plane that are associated with pain and agony. All velstracs possess some form of disturbing gaze."
    },
    {
      "Trait": "Venomous",
      "Description": "These weapons inject poison into every hit. When you hit a creature with this weapon, it deals an additional 1 persistent poison damage. This increases to 2 persistent poison damage if the weapon has a greater striking rune."
    },
    {
      "Trait": "Versatile",
      "Description": "A versatile weapon can be used to deal a different type of damage than its listed type. This trait indicates the alternate damage type. For instance, a piercing weapon with versatile S can deal piercing or slashing damage. You choose the damage type each time you attack."
    },
    {
      "Trait": "Vigilante",
      "Description": "Your class feats and vigilante feats are associated with your vigilante identity, and using them while in your social identity may risk exposing you as a vigilante. If your identity is exposed to the public, you lose the benefits of Vigilante Dedication to disguising yourself, but you can spend 1 week of downtime to create a new social identity."
    },
    {
      "Trait": "Village",
      "Description": "Settlements with this trait tend to be small and usually have a level no higher than 1."
    },
    {
      "Trait": "Virulent",
      "Description": "Afflictions with the virulent trait are harder to remove. You must succeed at two consecutive saves to reduce a virulent affliction's stage by 1. A critical success reduces a virulent affliction's stage by only 1 instead of by 2."
    },
    {
      "Trait": "Vishkanya",
      "Description": "These faintly ophidian humanoids have venomous blood and saliva."
    },
    {
      "Trait": "Visual",
      "Description": "A visual effect can affect only creatures that can see it. This applies only to visible parts of the effect, as determined by the GM."
    },
    {
      "Trait": "Vitality",
      "Description": "Effects with this trait heal living creatures with energy from the Forge of Creation, deal vitality energy damage to undead, or manipulate vitality energy.These planes are awash with life energy. Colors are brighter, fires are hotter, noises are louder, and sensations are more intense. At the end of each round, an undead creature takes at least minor vitality environmental damage. In the strongest areas of a vitality plane, they could take moderate or even major vitality damage instead. While this might seem safe for living creatures, vitality planes present a different danger. Living creatures regain an amount of HP each round equal to the environmental damage undead take in the same area. If this would bring the living creature above their maximum HP, any excess becomes temporary HP. Unlike normal, these temporary HP combine with each other, and they last until the creature leaves the plane. If a creature's temporary HP from a vitality plane ever exceeds its maximum HP, it explodes in a burst of overloaded vitality energy, spreading across the area to birth new souls."
    },
    {
      "Trait": "Vocal",
      "Description": "Note from Nethys: no description was provided for this trait"
    },
    {
      "Trait": "Void",
      "Description": "Effects with this trait heal undead creatures with void energy, deal void damage to living creatures, or manipulate void energy.Planes with this trait are vast, empty reaches that suck the life from the living. They tend to be lonely, haunted planes, drained of color and filled with winds carrying the moans of the dead At the end of each round, a living creature takes at least minor void environmental damage. In the strongest areas of a void plane, they could take moderate or even major void damage at the end of each round. This damage has the death trait, and if a living creature is reduced to 0 Hit Points by this void damage and killed, it crumbles into ash and can become a wraith (see Monster Core)."
    },
    {
      "Trait": "Volley",
      "Description": "This ranged weapon is less effective at close distances. Your attacks against targets that are at a distance within the range listed take a -2 penalty."
    },
    {
      "Trait": "Wand",
      "Description": "A wand contains a single spell which you can cast once per day."
    },
    {
      "Trait": "Water",
      "Description": "Effects with the water trait either manipulate or conjure water. Those that manipulate water have no effect in an area without water. Creatures with this trait consist primarily of water or have a connection to magical water.Planes with this trait are mostly liquid. Visitors who can't breathe water or reach an air pocket likely drown. The rules for aquatic combat (Player Core 437) usually apply, including the inability to cast fire spells or use actions with the fire trait. Creatures with a weakness to water take damage equal to double their weakness at the end of each round."
    },
    {
      "Trait": "Wayang",
      "Description": "Small humanoids who emigrated from the Shadow Plane long ago, wayangs still wield shadow magic."
    },
    {
      "Trait": "Wayang",
      "Description": "Small people native to the Netherworld. Immigrated to Golarion after Earthfall."
    },
    {
      "Trait": "Weather",
      "Description": "A weather event is a type of hazard that plays out in exploration mode rather than encounter mode."
    },
    {
      "Trait": "Werecreature",
      "Description": "These shapechanging creatures either are naturally able to shift between animal, humanoid, and hybrid forms or are afflicted with a curse that forces them to shift involuntarily."
    },
    {
      "Trait": "Wight",
      "Description": "A wight is an undead creature that drains life and stands vigil over a burial site."
    },
    {
      "Trait": "Wild Hunt",
      "Description": "Creatures with the wild hunt trait are never below 14th level. They possess greater darkvision, greensight, planar acclimation, wild gaze, instinctive cooperation, weakness to cold iron, the ability to speak with plants and animals, and their own specific wild hunt link."
    },
    {
      "Trait": "Witch",
      "Description": "This trait indicates abilities from the witch class."
    },
    {
      "Trait": "Wizard",
      "Description": "This indicates abilities from the wizard class."
    },
    {
      "Trait": "Wood",
      "Description": "Effects with the wood trait conjure or manipulate wood. Those that manipulate wood have no effect in an area without wood. Creatures with this trait consist primarily of wood or have a connection to magical wood.These planes consist of trees and other flora latticed in organic patterns. Wood planes are often perfectly constructed to match their desired purpose or environment but aren't usually outright hostile to visitors."
    },
    {
      "Trait": "Wraith",
      "Description": "A wraith is an incorporeal undead creature infused with void energy and driven by a hatred of all life."
    },
    {
      "Trait": "Wyrwood",
      "Description": "A wyrwood is a small, sapient living construct crafted of wood and powered with an aeon stone or a similar magical stone."
    },
    {
      "Trait": "Xulgath",
      "Description": "These subterranean reptilian creatures tend to have darkvision and smell awful."
    },
    {
      "Trait": "Yaksha",
      "Description": "Divine spirits who emigrated to Golarion from the first world."
    },
    {
      "Trait": "Yaoguai",
      "Description": "Beings who usually begin their existence as simple animals, objects, or plants, but have found a means to transcend their original forms through the power of cultivation."
    },
    {
      "Trait": "Yard",
      "Description": "The Yard trait indicates the structure is primarily an outdoor site."
    },
    {
      "Trait": "Zombie",
      "Description": "These undead are mindless rotting corpses that hunger for living flesh."
    }
  ]

  export default traitsData;