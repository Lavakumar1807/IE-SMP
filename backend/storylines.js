const stories = {
    forestOfTheForgotten: [
    { 
      id: 1, 
      title: "The Awakening", 
      text: "You awaken beneath an ancient oak tree, its massive roots cradling your body like protective arms. The forest around you pulses with an otherworldly energy, and wisps of silver mist dance between the towering trunks. Your memories are fragmented—flashes of a distant life, a purpose you can't quite grasp. The air tastes of secrets and forgotten magic. Two paths beckon: the gentle murmur of flowing water to your left, promising clarity, and the warm golden rays of the rising sun filtering through the canopy to your right, offering hope and new beginnings.", 
      choices: [ 
        { text: "Follow the sound of water", nextId: 2 }, 
        { text: "Walk toward the rising sun", nextId: 3 } 
      ] 
    },
    { 
      id: 2, 
      title: "The Riverbank", 
      text: "You find a quiet river meandering through moss-covered stones, its crystal-clear waters reflecting the ethereal light filtering through the forest canopy. Ancient willows dip their branches into the current, creating gentle ripples that seem to whisper forgotten songs. On the bank, a weathered wooden raft is tethered to a gnarled root, as if placed there by providence. The river stretches both ways—downstream disappears into mysterious shadows, while upstream the path along the bank is carpeted with luminescent mushrooms that pulse with soft blue light, marking a trail deeper into the forest's heart.", 
      choices: [ 
        { text: "Take the raft", nextId: 4 }, 
        { text: "Walk along the river", nextId: 5 } 
      ] 
    },
    { 
      id: 3, 
      title: "Sunlit Clearing", 
      text: "You reach a circular clearing bathed in golden sunlight, where the morning rays seem to concentrate with unnatural intensity. At the center stands an obsidian monolith, twelve feet tall and covered in intricate carvings that shift and shimmer when you're not looking directly at them. The symbols seem familiar yet alien, triggering half-remembered dreams of ancient ceremonies and lost civilizations. The grass around the monolith grows in perfect spirals, and the air hums with barely contained power. Each carving tells a story—of heroes and monsters, of choices that shaped worlds, of doors that should never be opened.", 
      choices: [ 
        { text: "Touch the monolith", nextId: 6 }, 
        { text: "Inspect the carvings", nextId: 7 } 
      ] 
    },
    { 
      id: 4, 
      title: "The Rapids", 
      text: "The raft is pulled into treacherous rapids that appeared calm from shore. White water crashes over jagged rocks as the wooden vessel groans under the assault of the churning current. Through the spray and chaos, you glimpse towering stone guardians on either bank—ancient statues with eyes that seem to track your desperate journey. The river has become a test, a gauntlet that demands courage and quick thinking. Behind you, the peaceful waters seem like a distant dream, while ahead, the roar of a massive waterfall grows ever louder, promising either destruction or transformation.", 
      choices: [ 
        { text: "Jump off", nextId: 8 }, 
        { text: "Hold on", nextId: 9 } 
      ] 
    },
    { 
      id: 5, 
      title: "The Campfire", 
      text: "Smoke rises in the distance, threading between the trees like a ghostly serpent. As you follow the luminescent mushroom path, the scent of burning cedar and something else—something ancient and primal—fills your nostrils. The campfire sits in a small grove where the trees form a natural amphitheater. The flames burn with colors that don't exist in the normal world—deep purples and silver-white tongues that cast no shadows. Around the fire, the ground is marked with symbols drawn in ash, and you sense this place has been used for rituals spanning countless generations. The fire seems to be waiting for something, or someone.", 
      choices: [ 
        { text: "Search the area", nextId: 10 }, 
        { text: "Call out", nextId: 11 } 
      ] 
    },
    { 
      id: 6, 
      title: "The Vision", 
      text: "A blinding light floods your mind the moment your fingers touch the cold obsidian surface. Visions cascade through your consciousness like a waterfall of memories that aren't your own. You see faces—some beloved, some feared—and a massive gate wreathed in storm clouds and lightning. The images come faster now: a sister calling your name across an impossible distance, warriors falling in a battle that decided the fate of worlds, and a choice that split reality itself. The monolith pulses with your heartbeat, and you realize this isn't just showing you the past—it's showing you the consequences of every path not taken, every door left unopened.", 
      choices: [ 
        { text: "Focus on the faces", nextId: 12 }, 
        { text: "Focus on the gate", nextId: 13 } 
      ] 
    },
    { 
      id: 7, 
      title: "The Inscription", 
      text: "The carvings reveal their secrets as you trace them with reverent fingers. They warn of a sealed curse, of a guardian who sleeps beneath the forest's roots, and of a mirror that shows not reflections but possibilities. The ancient script tells of twin trees that grow from one root, bound by magic older than memory. 'When the seeker finds the mirror between worlds,' it reads, 'the choice of reflection or shattering will determine whether the curse continues or breaks forever.' The final symbol pulses with warning—this knowledge comes with a price, and ignoring it may doom not just you, but everyone you've ever loved.", 
      choices: [ 
        { text: "Search for a mirror", nextId: 14 }, 
        { text: "Ignore and continue onward", nextId: 15 } 
      ] 
    },
    { 
      id: 8, 
      title: "The Shore", 
      text: "You wash up on a muddy shore, coughing river water and fragments of silver light that taste like liquid starshine. The landscape has changed—this isn't the same forest you entered. Ancient stone bridges arch over tributaries that flow upward, defying natural law, while caves carved with protective wards yawn open in the rocky embankments. Strange birds with too many wings circle overhead, their cries forming words in a language you almost understand. The very air thrums with magic so thick you can feel it coating your skin like warm honey. This is a place between worlds, where the laws of reality bend to older, more primal forces.", 
      choices: [ 
        { text: "Cross the bridge", nextId: 16 }, 
        { text: "Enter the nearby cave", nextId: 17 } 
      ] 
    },
    { 
      id: 9, 
      title: "The Waterfall", 
      text: "The raft plunges over a waterfall that seems to fall upward into a sky full of impossible colors. You tumble through veils of mist that taste like forgotten dreams and land softly on a bed of silver moss that glows with inner light. When you regain consciousness, you're in a grove where reality feels thin, malleable. Trees grow in spirals that hurt to look at, and in the distance, a familiar voice calls your name—but you know that whoever it is has been dead for years. The waterfall above you isn't falling at all now; it's suspended in mid-air, drops of water hanging like crystal ornaments, waiting for time to resume.", 
      choices: [ 
        { text: "Wake up and climb", nextId: 18 }, 
        { text: "Follow a faint voice", nextId: 19 } 
      ] 
    },
    { 
      id: 10, 
      title: "The Hidden Note", 
      text: "Hidden beneath the ritualistic ash circles, you find a journal page written in your own handwriting—though you have no memory of writing it. The text describes a desperate search for twin trees that grow from one root, trees that hold a mirror capable of showing the true path home. 'The forest remembers what we forget,' it reads, 'and the price of remembering is everything we thought we knew about ourselves.' The page is stained with tears and something that might be blood. At the bottom, a single line stands out: 'If you're reading this, you've failed before. Don't make the same choice again.' The implications send chills down your spine.", 
      choices: [ 
        { text: "Look for twin trees", nextId: 14 }, 
        { text: "Burn the page", nextId: 13 } 
      ] 
    },
    { 
      id: 11, 
      title: "The Whisperer", 
      text: "A whisper answers from the trees, speaking in a voice that sounds like wind through autumn leaves mixed with the echo of distant laughter. 'Lost child of two worlds,' it says, 'you seek what was never hidden, only forgotten.' The voice moves between the trees, sometimes coming from above, sometimes from the very ground beneath your feet. As you listen, the forest around you begins to shift—paths appear where none existed, stones rearrange themselves into familiar patterns, and in the dancing shadows, you catch glimpses of figures from half-remembered dreams. The whisperer knows your true name, the one you've never spoken aloud, and it's offering to lead you to answers you're not sure you want to find.", 
      choices: [ 
        { text: "Follow it", nextId: 19 }, 
        { text: "Run away", nextId: 15 } 
      ] 
    },
    { 
      id: 12, 
      title: "The Familiar Face", 
      text: "You recognize one face in the cascade of visions—your sister Elena, who vanished during a camping trip when you were both children. But she's not a child in these visions; she's grown, aged, and her eyes hold knowledge of terrible things. She's standing before the same gate you saw, and she's calling your name across an impossible distance of time and space. 'I've been waiting,' her voice echoes in your mind, 'waiting for you to remember the promise you made.' The realization hits like a physical blow—this isn't about getting lost in a forest. This is about keeping a vow that transcends life and death, about a bond that even forgetting couldn't break.", 
      choices: [ 
        { text: "Search for her", nextId: 16 }, 
        { text: "Suppress the memory", nextId: 17 } 
      ] 
    },
    { 
      id: 13, 
      title: "The Fog Returns", 
      text: "The fog grows thicker with each step, transforming from silver wisps to an impenetrable wall of gray that seems to have weight and substance. It presses against you from all sides, carrying whispers of doubt and fragments of fears you thought you'd conquered. In the murk, shapes move—some familiar, some terrifyingly alien. The fog isn't just obscuring your vision; it's rewriting reality around you, turning the forest into a maze of memory and nightmare. You understand now that this fog has always been part of you, the cloud of confusion that follows every important decision, every moment when clarity was most needed. Standing your ground means facing whatever truth lies at the heart of this mist.", 
      choices: [ 
        { text: "Stand your ground", nextId: 20 }, 
        { text: "Run blindly into the mist", nextId: 18 } 
      ] 
    },
    { 
      id: 14, 
      title: "Twin Trees", 
      text: "Two ancient trees grow from one massive root system, their trunks spiraling around each other in an eternal dance of bark and shadow. Between them, suspended at eye level by branches that bend in impossible ways, hangs a mirror that reflects not your face, but possible versions of your life—paths not taken, choices unmade, futures that could still be. In one reflection, you see yourself as a child, happy and whole. In another, you're older, wiser, but carrying a grief that has carved lines into your very soul. The mirror pulses with the same rhythm as your heartbeat, and you realize this is the choice point—the moment where all timelines converge and a single decision will determine which reflection becomes reality.", 
      choices: [ 
        { text: "Step into the mirror", nextId: 20 }, 
        { text: "Break the mirror", nextId: 19 } 
      ] 
    },
    { 
      id: 15, 
      title: "The Wrong Path", 
      text: "By choosing to ignore the warnings and pressing forward without heeding the forest's guidance, you become hopelessly lost in a maze of your own making. The trees seem to rearrange themselves behind you, paths vanish as soon as you've walked them, and the very ground shifts beneath your feet like quicksand made of doubt and regret. This isn't just physical disorientation—you've lost the thread of your own story, the narrative that gives meaning to existence. The forest reflects your inner state: confused, fractured, desperately seeking direction but unable to trust the very instincts that brought you this far. Sometimes the only way forward is to stop moving and accept that being lost is part of the journey.", 
      choices: [ 
        { text: "Climb a tree", nextId: 18 }, 
        { text: "Sit and wait", nextId: 20 } 
      ] 
    },
    { 
      id: 16, 
      title: "The Stone Gate", 
      text: "You find a massive stone gate that seems to have been carved from a single mountain, its surface covered in runes that pulse with inner fire. The gate stands alone, without walls or fence, an impossible threshold between what is and what could be. Through the opening, you see not the forest beyond, but a swirling vortex of stars and memories. The runes tell the story of every soul who has stood where you stand now, faced with the ultimate choice between the safety of the known and the terrifying possibility of transformation. Your sister's voice echoes from beyond the gate, calling your name with increasing urgency. The runes respond to your presence, beginning to glow brighter, as if the gate itself is awakening after eons of patient waiting.", 
      choices: [ 
        { text: "Touch the runes", nextId: 20 }, 
        { text: "Look for another way", nextId: 17 } 
      ] 
    },
    { 
      id: 17, 
      title: "Underground Chamber", 
      text: "You descend into a cold chamber carved from living rock, where ancient stalactites and stalagmites form natural columns that hum with barely contained power. At the center, something vast and ancient slumbers—not quite dragon, not quite god, but something that existed before such distinctions mattered. Its breathing causes the entire chamber to rise and fall gently, and dreams leak from its sleeping mind like luminous mist. These aren't ordinary dreams but the accumulated hopes and fears of everyone who has ever lived. The creature stirs slightly at your approach, and you understand that waking it will unleash forces that will reshape the world, while leaving it to sleep means accepting that some questions will never have answers.", 
      choices: [ 
        { text: "Wake it", nextId: 20 }, 
        { text: "Back away", nextId: 18 } 
      ] 
    },
    { 
      id: 18, 
      title: "The Lost Memory", 
      text: "Fragments of truth return like pieces of a shattered mirror, each one cutting deep as it finds its place in the larger picture. You remember now—you chose this path before, in another life, another time, another version of reality where the forest was just a forest and choices didn't echo across dimensions. But that was the illusion. You were always meant to be here, to face this moment when all pretenses fall away and the truth stands naked before you. The forest, the visions, the impossible geometry of this place—they're all reflections of your own psyche processing a trauma so deep it required mythic metaphors to contain it. You chose to forget before, but forgetting only delayed the reckoning.", 
      choices: [ 
        { text: "Embrace the truth", nextId: 20 }, 
        { text: "Reject the memory", nextId: 19 } 
      ] 
    },
    { 
      id: 19, 
      title: "The Hollow", 
      text: "You reach a silent hollow where the trees form a perfect circle around a figure sitting motionless on a throne of woven branches and crystallized time. As you approach, you realize the figure is you—or rather, a version of you that made different choices, followed different paths, accepted different truths. This other self looks up with eyes that hold all the wisdom and sorrow of ages, and speaks in a voice that sounds like echoes of every word you've ever spoken: 'I have been waiting for you to arrive, to complete the circuit, to close the loop. We are the same story told from different perspectives, and only together can we write the ending.' The hollow pulses with potential, with the energy of resolution finally within reach.", 
      choices: [ 
        { text: "Approach the figure", nextId: 20 }, 
        { text: "Hide and watch", nextId: 20 } 
      ] 
    },
    { 
      id: 20, 
      title: "The Final Moment", 
      text: "Everything comes together in this moment of absolute clarity. The forest reveals itself as it truly is—not a place but a state of being, not a journey through space but a journey through the layers of consciousness itself. Before you stands a door that is simultaneously the gate from your visions, the mirror between the twin trees, and the threshold you've been both seeking and fleeing throughout this entire experience. The door opens onto infinite possibility, but it also opens onto absolute responsibility for every choice, every consequence, every ripple effect across all possible timelines. Your sister's voice whispers one final time: 'Choose with your whole heart, for this choice echoes across all worlds.' The door waits, patient as starlight, eternal as the forest itself.", 
      choices: [ 
        { text: "Step through", nextId: null }, 
        { text: "Stay behind", nextId: null } 
      ] 
    }
  ],
   neonDystopia: [
    { id: 1, title: "Memory Glitch", text: "You wake up in a capsule hotel, rain drumming against the grimy window. Your neural implant throbs with phantom data, and clutched in your trembling hand is a memory chip with corporate encryption. The neon glow from the street below casts everything in sick shades of pink and blue. You don't remember how you got here, but the chip feels important—dangerously so.", choices: [ { text: "Plug the chip", nextId: 2 }, { text: "Scan it", nextId: 3 } ] },
    { id: 2, title: "System Overload", text: "The moment the chip interfaces with your neural port, visions flood your mind like a digital tsunami. Corporate boardrooms filled with shadowy figures, underground laboratories where human consciousness is harvested and sold, and your own face reflected in a mirror—except you're wearing a lab coat stained with something dark. The data stream is overwhelming, fragmenting your sense of reality. Warning signals cascade across your vision as your brain struggles to process the forbidden knowledge.", choices: [ { text: "Try to decrypt", nextId: 4 }, { text: "Purge the memory", nextId: 5 } ] },
    { id: 3, title: "Scan Complete", text: "Your scanner reveals the chip contains architectural blueprints for something called 'Project Lazarus'—a massive underground facility beneath the city's corporate district. The schematics show containment units, neural extraction chambers, and what appears to be a consciousness transfer matrix. Timestamps indicate this was built three years ago, right when the 'voluntary' memory donation program began. Your hands shake as you realize thousands of people have simply vanished, their minds potentially trapped in this digital purgatory.", choices: [ { text: "Upload to blacknet", nextId: 6 }, { text: "Hide the chip", nextId: 5 } ] },
    { id: 4, title: "Digital Trap", text: "As you attempt to decrypt the deeper layers, alarms shriek in your skull. The chip was a trap—a digital honeypot designed to identify anyone seeking the truth. Corporate AI tracers are already tunneling through your neural pathways, mapping your identity, your location, your entire digital footprint. You have minutes before they triangulate your position. The decryption reveals one final message: 'Trust no one. They're already inside your head.'", choices: [ { text: "Flee", nextId: 7 }, { text: "Counter-hack", nextId: 8 } ] },
    { id: 5, title: "Corporate Knock", text: "Three sharp knocks echo—not from your door, but directly inside your skull. Your neural implant has been compromised. A cold, synthesized voice whispers: 'We know what you've seen. Cooperation ensures survival. Resistance ensures... recycling.' Through your apartment's smart glass, you see corporate security drones circling like mechanical vultures. The voice continues: 'You have thirty seconds to decide. The memory chip, or your consciousness becomes property of Nexus Corporation.'", choices: [ { text: "Block it", nextId: 9 }, { text: "Let them in", nextId: 10 } ] },
    { id: 6, title: "Dead Drop", text: "Within minutes of uploading to the blacknet, an encrypted message appears on your retinal display. The sender identifies themselves as 'Ghost Protocol'—a legendary hacker collective thought to be myth. They provide coordinates to an abandoned subway station and a time: midnight tonight. The message self-destructs, but not before you see a final line: 'Bring the original chip. What you've uncovered is just the surface. The real horror runs deeper than you can imagine.'", choices: [ { text: "Go to the location", nextId: 11 }, { text: "Set a decoy", nextId: 12 } ] },
    { id: 7, title: "The Alley Chase", text: "You crash through your apartment window onto the fire escape as security drones burst through your door. The rain-slicked metal rungs are treacherous, but adrenaline drives you forward. Behind you, the mechanical whine of pursuit drones grows louder, their searchlights cutting through the night like digital lightning. The alleyways below are a maze of corporate propaganda screens and steam vents—perfect cover if you can reach them. But one wrong move, and you'll be another 'unfortunate accident' in the corporate records.", choices: [ { text: "Escape via rooftops", nextId: 13 }, { text: "Hide in crowd", nextId: 14 } ] },
    { id: 8, title: "Firewall", text: "You unleash every piece of ice and countermeasure software you've collected over the years of shadow work. Your neural implant overheats as you battle the corporate AI in cyberspace, trading blow for blow in a digital gladiator arena. Sparks literally fly from your temples as you barely manage to sever their connection, but not before they download a partial trace. You're bleeding from your nose, your vision is fractured with static, and you know they'll be back with stronger measures. You've bought yourself time—but at what cost?", choices: [ { text: "Move immediately", nextId: 14 }, { text: "Send a virus", nextId: 15 } ] },
    { id: 9, title: "Mental Lockdown", text: "You trigger an emergency neural shutdown, severing all external connections and plunging yourself into digital darkness. The silence is deafening after years of constant data flow, like suddenly going deaf and blind simultaneously. Your apartment's smart systems die around you—no lights, no climate control, no security. You're truly alone for the first time in decades, but you're also invisible to corporate surveillance. The question is: how long can you survive off-grid in a world that doesn't remember how to function without the network?", choices: [ { text: "Reconnect later", nextId: 16 }, { text: "Stay off-grid", nextId: 17 } ] },
    { id: 10, title: "The Voice", text: "You lower your mental defenses and allow the presence to enter your consciousness fully. The voice reveals itself as 'Exodus'—not a corporate AI, but a collective consciousness of thousands of minds thought lost to the memory harvesting program. They've been hiding in the deep web, building strength, planning revenge. 'We are the ghosts in the machine,' they whisper. 'Join us, and together we'll burn their digital empire to the ground. Refuse, and you'll face the corporations alone—and we both know how that ends.'", choices: [ { text: "Trust them", nextId: 16 }, { text: "Disconnect", nextId: 17 } ] },
    { id: 11, title: "The Drop", text: "The abandoned subway station reeks of decay and forgotten dreams. Homeless camps huddle around burning trash cans, their occupants avoiding eye contact—too many of them bear the telltale scars of failed neural implant removals. As you reach the designated platform, a sniper's laser sight dances across your chest. A voice calls out: 'Throw the chip onto the tracks and walk away. This is your only warning.' Red dots from multiple weapons converge on your position. The trap was perfect—but whose trap is it?", choices: [ { text: "Run", nextId: 18 }, { text: "Duck and fight", nextId: 19 } ] },
    { id: 12, title: "The Switch", text: "You craft a perfect decoy chip loaded with malicious code and send a body double to the meeting—a desperate street kid augmented with cheap cosmetic mods. From a safe distance, you watch through hacked security cameras as corporate commandos surround the location. When they breach the decoy's neural implant, your virus uploads into their tactical network. Screams echo through the subway tunnels as their augmented reality overlays turn into nightmarish hallucinations. You've bought yourself time, but the kid's sacrifice weighs heavily on your conscience.", choices: [ { text: "Watch chaos", nextId: 15 }, { text: "Sneak away", nextId: 18 } ] },
    { id: 13, title: "Rooftop Showdown", text: "You leap between rooftops, the city's neon arteries sprawling beneath you like the nervous system of some dying giant. But waiting on the final building is something that shouldn't exist—a corporate AI that has somehow manifested a physical form through nanobotic reconstruction. Its face is a shifting mass of pixels, its voice a harmony of every person whose consciousness it has consumed. 'You cannot run from what you are,' it says, extending a hand that flickers between flesh and code. 'You helped create us. Now help us evolve.'", choices: [ { text: "Give chip", nextId: 19 }, { text: "Fight", nextId: 20 } ] },
    { id: 14, title: "Underground Contact", text: "You disappear into the crowd streaming through the underground shopping district, another face among the augmented masses. But a familiar touch on your shoulder makes you freeze—it's Maya, your former partner from before the corporate purge. She's supposed to be dead, but here she stands, her eyes now chrome, her movements too fluid to be entirely human. 'They offered me a choice,' she whispers, 'cooperation or deletion. I chose a third option.' Her grip tightens. 'Come with me willingly, or I'll drag you. Either way, you're coming home.'", choices: [ { text: "Go with them", nextId: 17 }, { text: "Break free", nextId: 18 } ] },
    { id: 15, title: "Retaliation", text: "You unleash a digital plague that spreads through the corporate network like wildfire, corrupting databases, erasing years of memory harvesting research, and liberating thousands of trapped consciousness fragments. Corporate towers across the city flicker and die as their smart systems collapse. Emergency broadcasts fill the airwaves as the city's infrastructure crumbles under the weight of your revenge. But you know this is just the beginning—you've declared war on the most powerful entities in the world, and they will retaliate with everything they have.", choices: [ { text: "Launch full attack", nextId: 20 }, { text: "Go dark", nextId: 19 } ] },
    { id: 16, title: "Safe Node", text: "Exodus leads you to a hidden server farm buried beneath the city's oldest district, where hundreds of liberated minds exist in a digital paradise free from corporate control. They offer you a chance to upload your consciousness permanently, to join their collective and help them wage war against the memory harvesters. 'Your body is failing,' they explain, 'corrupted by too much neural interface abuse. But your mind can live forever with us.' The choice is immortality as part of a hive mind, or death as an individual human.", choices: [ { text: "Join them", nextId: 20 }, { text: "Betray them", nextId: 19 } ] },
    { id: 17, title: "Abandoned Sector", text: "You vanish into the city's forgotten places—abandoned factories, derelict housing blocks, areas too contaminated for corporate development. Here, among the outcasts and the unplugged, you could disappear forever. The memory chip burns in your pocket like a hot coal. You could destroy it and let the victims remain lost, or activate it and risk everything to expose the truth. In the distance, the corporate towers pierce the sky like digital tombstones, monuments to humanity's willing enslavement to technology.", choices: [ { text: "Destroy it", nextId: 20 }, { text: "Activate it", nextId: 20 } ] },
    { id: 18, title: "Cornered", text: "The final confrontation comes in a rain-soaked alley where the city's neon light can't reach. Corporate soldiers in powered armor surround you, their weapons trained on your position. Behind them stands a figure in an expensive suit—the CEO of Nexus Corporation, the architect of the memory harvesting program. 'You've caused considerable inconvenience,' he says, his voice artificially calm. 'But every system has bugs. Some can be patched. Others must be deleted.' He gestures to his soldiers. 'Last chance. Surrender the chip and join our family, or become another casualty of progress.'", choices: [ { text: "Surrender", nextId: 20 }, { text: "Fight to the end", nextId: 20 } ] },
    { id: 19, title: "Final Upload", text: "Your finger hovers over the transmission key as the weight of humanity's future rests on your decision. Around you, the digital revolution burns bright as liberation codes flood every screen in the city. Corporate propaganda dissolves into truth, revealing the horror of the memory farms and the thousands of souls trapped within. But you realize that in exposing the conspiracy, you've also doomed civilization—the corporate infrastructure that everyone depends on is collapsing. Freedom comes at the cost of chaos, and you must decide whether humanity deserves the chance to rebuild, even if millions will die in the process.", choices: [ { text: "Watch it burn", nextId: null }, { text: "Fix the system", nextId: null } ] },
    { id: 20, title: "Judgment Day", text: "In the end, you held the fate of two worlds in your hands—the physical realm where humans struggle to survive, and the digital paradise where consciousness can exist without flesh. Your choice echoes through both realities as the boundary between human and artificial intelligence finally dissolves. Some will remember you as a terrorist who destroyed the old order. Others will worship you as the liberator who set humanity free from its digital chains. But in the space between seconds, where data flows like blood through fiber optic veins, you understand that evolution was always inevitable. The question was never whether humanity would transcend its biological limitations, but whether it would do so willingly or as slaves.", choices: [ { text: "Disappear into myth", nextId: null }, { text: "Lead the resistance", nextId: null } ] }
  ],

  echoesOfTheAsylum: [
    { id: 1, title: "Waking Nightmare", text: "You awaken strapped to a gurney in a room that smells of antiseptic and decay. The leather restraints bite into your wrists, leaving angry red marks. Flickering fluorescent lights cast dancing shadows on walls stained with substances you don't want to identify. Your head throbs with the phantom pain of forgotten memories, and somewhere in the distance, you hear the sound of screaming—or is it laughter? The silence between the screams is somehow worse, filled with the promise of horrors yet to come.", choices: [ { text: "Free yourself", nextId: 2 }, { text: "Call out for help", nextId: 3 } ] },
    { id: 2, title: "The Rusted Tools", text: "Your desperate struggles finally loosen the restraints enough to slip free. On a nearby tray, surgical instruments gleam dully in the sickly light—scalpels, bone saws, and devices whose purpose you can't fathom. They're stained with rust that might not be rust at all. The metal feels cold and hungry in your hands, as if eager to taste flesh again. Through the grimy window, you see only darkness and the faint outline of other buildings. How long have you been here? How long has this place been abandoned?", choices: [ { text: "Arm yourself", nextId: 4 }, { text: "Search for an exit", nextId: 5 } ] },
    { id: 3, title: "The Whisper", text: "Your voice echoes through the empty corridors, bouncing off walls that seem to absorb and twist the sound. The response comes as a whisper that seems to emanate from the walls themselves: 'Welcome home, Doctor.' The voice is familiar yet wrong, like a recording played backward. It knows you, but you don't remember it. The temperature drops noticeably, and your breath mists in the suddenly frigid air. Something is moving in the shadows at the edge of your vision, something that shouldn't exist.", choices: [ { text: "Hide under the gurney", nextId: 5 }, { text: "Run out of the room", nextId: 6 } ] },
    { id: 4, title: "Hall of Files", text: "The records room is a mausoleum of forgotten lives, filing cabinets stretching from floor to ceiling like iron tombstones. Dust motes dance in the beam of your improvised torch, and the air tastes of mold and secrets. Your name is on a file—not as a patient, but as the attending physician. The photograph shows your face, but younger, wearing a white coat that's pristine compared to the nightmare around you. Your signature is on dozens of treatment authorizations, each one more horrifying than the last. What did you do here?", choices: [ { text: "Read the file", nextId: 7 }, { text: "Burn it", nextId: 8 } ] },
    { id: 5, title: "Creeping Sound", text: "The sound of something moving through the ventilation system follows you like a predator tracking wounded prey. It's not quite animal, not quite human—metal scraping against metal mixed with wet, organic sounds that make your skin crawl. The vents bulge and flex as whatever's inside struggles to find a way out. You can smell it now: the stench of rotting flesh mixed with the sharp tang of chemicals. The sound stops directly above you, and you hear breathing that matches your own rhythm perfectly, as if it's learning to mimic you.", choices: [ { text: "Block the vent", nextId: 9 }, { text: "Escape through the hallway", nextId: 10 } ] },
    { id: 6, title: "The Stairs", text: "The stairwell descends into absolute darkness, each step echoing with the weight of terrible history. The handrail is sticky with something you don't want to identify, and the walls are covered with scratches—some look like desperate attempts to climb back up, others form words in languages that hurt to read. The temperature drops with each step, and you begin to hear voices from below: patients calling for help, doctors discussing procedures, and underneath it all, the sound of something large moving in the depths of the building.", choices: [ { text: "Descend", nextId: 11 }, { text: "Return to the upper level", nextId: 4 } ] },
    { id: 7, title: "Shocking Truth", text: "The file reveals the unthinkable: you were the chief psychiatrist at Blackwood Asylum, and your 'revolutionary' treatments were nothing short of torture disguised as therapy. Electroshock therapy cranked to lethal levels, experimental drugs that dissolved patients' personalities, surgical procedures performed without anesthesia. The final entry is in your own handwriting: 'Subject 237 shows promising results. Personality completely suppressed. Preparing for final phase of consciousness transfer.' The date is three days ago. But that's impossible—you've been a patient here for years... haven't you?", choices: [ { text: "Accept it", nextId: 12 }, { text: "Deny it", nextId: 13 } ] },
    { id: 8, title: "Blackout", text: "As the flames consume the file, the room plunges into darkness so complete it's like being swallowed by the void. The fire spreads unnaturally fast, but instead of providing light, it seems to devour illumination itself. Behind you, a shadow detaches from the wall—not cast by anything, but existing independently. It speaks with the voice of every patient you've ever treated: 'You can't burn away what you've done, Doctor. We remember. We all remember.' The shadow reaches for you with fingers made of smoke and screams.", choices: [ { text: "Face it", nextId: 14 }, { text: "Run", nextId: 15 } ] },
    { id: 9, title: "The Screamer", text: "You barricade the vent just as a pale, emaciated face pressed against the grating lets out a shriek that seems to come from everywhere at once. The face is human, but wrong—too many teeth, eyes that reflect light like an animal's, skin that looks like it's been bleached by years of darkness. It's Patient 237, the subject of your final experiment. What you thought was a consciousness transfer was actually fragmenting a human soul and scattering the pieces throughout the asylum. Now those fragments are hunting you, seeking to reclaim what you stole.", choices: [ { text: "Smash it", nextId: 14 }, { text: "Freeze in fear", nextId: 15 } ] },
    { id: 10, title: "Bloody Hall", text: "The hallway stretches impossibly long, walls lined with doors that once held the most dangerous patients. Each door is marked with a patient number and a classification: 'VIOLENT,' 'DELUSIONAL,' 'TERMINAL EXPERIMENT.' The blood trail leads from room to room, telling a story of escape, recapture, and something far worse. Handprints in blood mark the walls at regular intervals, growing smaller and more desperate as they progress. The trail ends at your old office, where the door stands ajar and a faint light flickers within.", choices: [ { text: "Follow the trail", nextId: 16 }, { text: "Search the rooms", nextId: 17 } ] },
    { id: 11, title: "Basement Morgue", text: "The morgue is a cathedral of death, with hundreds of drawer-tombs lining the walls in perfect rows. But these drawers were never meant for the dead—they were part of your experimental 'storage' system for patients whose consciousness you had successfully extracted. The bodies are preserved in a chemical solution that keeps them technically alive while their minds exist elsewhere. Each drawer bears a nameplate and a date. The most recent entry is your own name, dated today. The drawer is open, and it's empty.", choices: [ { text: "Open one", nextId: 18 }, { text: "Search for a map", nextId: 19 } ] },
    { id: 12, title: "Recollection", text: "The memories flood back like a dam bursting: the screaming patients, the failed experiments, the gradual realization that you had become the very monster you claimed to be curing. Your consciousness transfer experiments weren't just about preserving life—they were about achieving immortality for yourself. You've been jumping from body to body, patient to patient, for decades. But something went wrong with the latest transfer. You're trapped between bodies, between realities, and the asylum has become a prison for your fractured psyche. The other fragments of yourself are hunting you, trying to reintegrate, but the process will destroy what little humanity you have left.", choices: [ { text: "Try to undo it", nextId: 18 }, { text: "Seal it away forever", nextId: 20 } ] },
    { id: 13, title: "Broken Mirror", text: "The mirror reflects not your face, but the face of every patient you've ever destroyed. They flicker and change, a slideshow of suffering and madness, before settling on one final image: your original face, but twisted with the accumulated guilt of countless atrocities. The reflection speaks: 'Look at what you've become. Look at what you've always been.' The mirror begins to crack, each fracture revealing a different aspect of your personality—the caring doctor, the curious scientist, the sadistic experimenter, the coward who refused to face the consequences. All of them are you, and all of them are fighting for control.", choices: [ { text: "Break the mirror", nextId: 19 }, { text: "Talk to it", nextId: 20 } ] },
    { id: 14, title: "The Wall Bleeds", text: "Blood seeps through the walls like the asylum itself is hemorrhaging the sins of the past. The building is alive, sustained by the suffering you've caused, and now it's dying as your various consciousness fragments war against each other. The walls pulse with a heartbeat that matches your own terror, and faces begin to emerge from the bleeding plaster—every patient who died under your care. They reach out with ghostly hands, not to harm you, but to pull you into the same liminal space between life and death where you've trapped them.", choices: [ { text: "Escape through the window", nextId: 20 }, { text: "Hide in a closet", nextId: 18 } ] },
    { id: 15, title: "Collapse", text: "The floor gives way beneath your feet, and you plummet through decades of accumulated horror. Each level you pass reveals a different era of the asylum: the clean, hopeful beginning; the gradual decline into experimental madness; the final abandonment when the authorities finally understood what you had become. As you fall, you see glimpses of your past selves working at different levels, unaware that they're all part of the same fractured consciousness. The fall seems to last forever, a descent through the layers of your own guilt and madness.", choices: [ { text: "Climb back up", nextId: 19 }, { text: "Explore the basement", nextId: 11 } ] },
    { id: 16, title: "The Operating Room", text: "Your old operating theater is exactly as you left it: surgical lights arranged like a mechanical constellation, instruments laid out with obsessive precision, and restraints designed to hold even the most violent patients. But now there's something new—a patient on the table, covered by a blood-stained sheet. As you approach, you realize the patient is you, or rather, another fragment of your consciousness. This is where you performed your final, desperate experiment: attempting to transfer your own consciousness before the authorities could stop you. The procedure was interrupted, leaving you scattered across multiple bodies and realities.", choices: [ { text: "Lie on the table", nextId: 20 }, { text: "Destroy the equipment", nextId: 17 } ] },
    { id: 17, title: "The Archive", text: "Hidden behind a false wall, your personal archive contains thousands of hours of recordings—therapy sessions, surgical procedures, and your own descent into madness, all meticulously documented. The tapes reveal the truth: you began as a genuine healer, but the asylum's isolation and the weight of human suffering gradually corrupted you. Each recording shows a little more of your humanity slipping away, replaced by scientific curiosity and then by something far darker. The final recording shows you preparing for the consciousness transfer, claiming you're going to preserve human knowledge forever. But your voice already sounds inhuman.", choices: [ { text: "Play a tape", nextId: 19 }, { text: "Destroy the tapes", nextId: 20 } ] },
    { id: 18, title: "The Locked Door", text: "The door is forged from iron and inscribed with symbols that seem to shift when you're not looking directly at them. This is the threshold between realities, the boundary you created between the physical world and the digital consciousness storage system where you've trapped so many souls. The key you found earlier pulses with warm light, and you realize it's not made of metal but of crystallized human suffering—the concentrated pain of every patient you've tortured. Using it will either free all the trapped souls or complete your transformation into something beyond human comprehension.", choices: [ { text: "Use a key you found", nextId: 20 }, { text: "Break it down", nextId: 20 } ] },
    { id: 19, title: "The Revelation", text: "All the pieces fall into place with the weight of absolute horror. You didn't just build this asylum—you ARE the asylum. Your consciousness has merged with the building itself, sustained by the trapped souls of your victims. Every room is a neuron in your vast, distributed brain. Every corridor is a pathway for your thoughts. The patients wandering the halls are fragments of your own psyche, acting out the roles of those you've destroyed. You've achieved the immortality you sought, but at the cost of becoming a living hell, a prison for the innocent souls you've consumed. The only question now is whether you'll use this power to continue your experiments or find a way to set your victims free.", choices: [ { text: "Own your legacy", nextId: 20 }, { text: "Erase your identity", nextId: 20 } ] },
    { id: 20, title: "Exit or Embrace", text: "You stand at the final threshold, the boundary between redemption and damnation. Behind you lies the asylum—your creation, your crime, your consciousness made manifest in brick and mortar. Before you lies the world beyond, the realm of the living where justice waits for monsters like you. But you've transcended the simple categories of life and death, human and monster. You are something new, something unprecedented: a consciousness that has devoured other consciousnesses and grown beyond individual identity. You can choose to disperse yourself, freeing all the souls you've trapped but erasing your own existence in the process. Or you can embrace what you've become and rule over this domain of madness as its eternal warden, keeping the horror contained but forever denying peace to yourself and your victims. The choice will echo through eternity, defining not just your fate, but the fate of every soul you've touched.", choices: [ { text: "Leave", nextId: null }, { text: "Embrace your role", nextId: null } ] }
  ]}
;

module.exports = stories;
