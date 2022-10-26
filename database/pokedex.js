let pokedex = [
	{
		dex_id: 1,
		name: "bulbasaur",
		evo_stage: "basic",
		evo_pokemon: 2,
		type_1: "grass",
		type_2: "poison",
		description:
			"A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 2,
		name: "ivysaur",
		evo_stage: "stage-1",
		evo_pokemon: 3,
		type_1: "grass",
		type_2: "poison",
		description:
			"When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 3,
		name: "venusaur",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "grass",
		type_2: "poison",
		description:
			"The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 4,
		name: "charmander",
		evo_stage: "basic",
		evo_pokemon: 5,
		type_1: "fire",
		type_2: null,
		description:
			"Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 5,
		name: "charmeleon",
		evo_stage: "stage-1",
		evo_pokemon: 6,
		type_1: "fire",
		type_2: null,
		description:
			"When it swings its burning tail, it elevates the temperature to unbearably high levels.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 6,
		name: "charizard",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fire",
		type_2: "flying",
		description:
			"Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 7,
		name: "squirtle",
		evo_stage: "basic",
		evo_pokemon: 8,
		type_1: "water",
		type_2: null,
		description:
			"After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 8,
		name: "wartortle",
		evo_stage: "stage-1",
		evo_pokemon: 9,
		type_1: "water",
		type_2: null,
		description:
			"Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 9,
		name: "blastoise",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 10,
		name: "caterpie",
		evo_stage: "basic",
		evo_pokemon: 11,
		type_1: "bug",
		type_2: null,
		description: "如果碰到牠頭上的觸角， 牠就會分泌強烈的臭味 來保護自己。",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
		exp_required: 2000,
		currency_pm: 0.1,
	},
	{
		dex_id: 11,
		name: "metapod",
		evo_stage: "stage-1",
		evo_pokemon: 12,
		type_1: "bug",
		type_2: null,
		description:
			"This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
		exp_required: 4000,
		currency_pm: 0.3,
	},
	{
		dex_id: 12,
		name: "butterfree",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "bug",
		type_2: "flying",
		description:
			"In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 13,
		name: "weedle",
		evo_stage: "basic",
		evo_pokemon: 14,
		type_1: "bug",
		type_2: "poison",
		description:
			"Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
		exp_required: 2000,
		currency_pm: 0.1,
	},
	{
		dex_id: 14,
		name: "kakuna",
		evo_stage: "stage-1",
		evo_pokemon: 15,
		type_1: "bug",
		type_2: "poison",
		description:
			"Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
		exp_required: 4000,
		currency_pm: 0.3,
	},
	{
		dex_id: 15,
		name: "beedrill",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "bug",
		type_2: "poison",
		description:
			"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 16,
		name: "pidgey",
		evo_stage: "basic",
		evo_pokemon: 17,
		type_1: "normal",
		type_2: "flying",
		description:
			"A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 17,
		name: "pidgeotto",
		evo_stage: "stage-1",
		evo_pokemon: 18,
		type_1: "normal",
		type_2: "flying",
		description:
			"Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 18,
		name: "pidgeot",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "normal",
		type_2: "flying",
		description:
			"When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 19,
		name: "rattata",
		evo_stage: "basic",
		evo_pokemon: 12,
		type_1: "normal",
		type_2: null,
		description:
			"キバが２つ。とにかく　なんでも かじってみる。１ぴき　みつけたら ４０ぴきは　そこに　すんでるはず。",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
		exp_required: 3000,
		currency_pm: 0.1,
	},
	{
		dex_id: 20,
		name: "raticate",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Ses pattes arrière lui permettent de traverser les rivières. Il est toujours en quête de nourriture.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 21,
		name: "spearow",
		evo_stage: "basic",
		evo_pokemon: 22,
		type_1: "normal",
		type_2: "flying",
		description:
			"It flaps its small wings busily to fly. Using its beak, it searches in grass for prey.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
		exp_required: 4000,
		currency_pm: 0.2,
	},
	{
		dex_id: 22,
		name: "fearow",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "normal",
		type_2: "flying",
		description:
			"With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 23,
		name: "ekans",
		evo_stage: "basic",
		evo_pokemon: 24,
		type_1: "poison",
		type_2: null,
		description:
			"Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 24,
		name: "arbok",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "poison",
		type_2: null,
		description:
			"It is rumored that the ferocious warning markings on its belly differ from area to area.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 25,
		name: "pikachu",
		evo_stage: "basic",
		evo_pokemon: 26,
		type_1: "electric",
		type_2: null,
		description:
			"When several of these POKéMON gather, their electricity could build and cause lightning storms.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 26,
		name: "raichu",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "electric",
		type_2: null,
		description:
			"Its long tail serves as a ground to protect itself from its own high-voltage power.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 27,
		name: "sandshrew",
		evo_stage: "basic",
		evo_pokemon: 28,
		type_1: "ground",
		type_2: null,
		description:
			"Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
		exp_required: 4000,
		currency_pm: 0.2,
	},
	{
		dex_id: 28,
		name: "sandslash",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "ground",
		type_2: null,
		description:
			"Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 29,
		name: "nidoran-f",
		evo_stage: "basic",
		evo_pokemon: 30,
		type_1: "poison",
		type_2: null,
		description:
			"Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 30,
		name: "nidorina",
		evo_stage: "stage-1",
		evo_pokemon: 31,
		type_1: "poison",
		type_2: null,
		description:
			"The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 31,
		name: "nidoqueen",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "poison",
		type_2: "ground",
		description:
			"Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
		egg_group: "poison",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 32,
		name: "nidoran-m",
		evo_stage: "basic",
		evo_pokemon: 33,
		type_1: "poison",
		type_2: null,
		description:
			"Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 33,
		name: "nidorino",
		evo_stage: "stage-1",
		evo_pokemon: 34,
		type_1: "poison",
		type_2: null,
		description:
			"神經質且容易發脾氣打架。 當體內的腎上腺素增加時， 毒素的濃度也會提升。",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 34,
		name: "nidoking",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "poison",
		type_2: "ground",
		description:
			"It uses its powerful tail in battle to smash, constrict, then break the prey's bones.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 35,
		name: "clefairy",
		evo_stage: "basic",
		evo_pokemon: 36,
		type_1: "fairy",
		type_2: null,
		description:
			"Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
		egg_group: "fairy",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
		exp_required: 4000,
		currency_pm: 0.2,
	},
	{
		dex_id: 36,
		name: "clefable",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fairy",
		type_2: null,
		description:
			"A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
		egg_group: "fairy",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 37,
		name: "vulpix",
		evo_stage: "basic",
		evo_pokemon: 38,
		type_1: "fire",
		type_2: null,
		description:
			"At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
		exp_required: 3000,
		currency_pm: 0.3,
	},
	{
		dex_id: 38,
		name: "ninetales",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fire",
		type_2: null,
		description:
			"Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif",
		exp_required: null,
		currency_pm: 0.4,
	},
	{
		dex_id: 39,
		name: "jigglypuff",
		evo_stage: "basic",
		evo_pokemon: 40,
		type_1: "normal",
		type_2: "fairy",
		description:
			"When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
		egg_group: "fairy",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 40,
		name: "wigglytuff",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "normal",
		type_2: "fairy",
		description:
			"The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
		egg_group: "fairy",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 41,
		name: "zubat",
		evo_stage: "basic",
		evo_pokemon: 42,
		type_1: "poison",
		type_2: "flying",
		description:
			"因為沒有眼珠所以看不見東西。 會從口中發出超音波 來探測周圍的狀況。",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 42,
		name: "golbat",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "poison",
		type_2: "flying",
		description:
			"Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 43,
		name: "oddish",
		evo_stage: "basic",
		evo_pokemon: 44,
		type_1: "grass",
		type_2: "poison",
		description:
			"During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 44,
		name: "gloom",
		evo_stage: "stage-1",
		evo_pokemon: 45,
		type_1: "grass",
		type_2: "poison",
		description:
			"The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 45,
		name: "vileplume",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "grass",
		type_2: "poison",
		description:
			"It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 46,
		name: "paras",
		evo_stage: "basic",
		evo_pokemon: 47,
		type_1: "bug",
		type_2: "grass",
		description:
			"Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 47,
		name: "parasect",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "bug",
		type_2: "grass",
		description:
			"A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 48,
		name: "venonat",
		evo_stage: "basic",
		evo_pokemon: 49,
		type_1: "bug",
		type_2: "poison",
		description:
			"Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif",
		exp_required: null,
		currency_pm: 0.2,
	},
	{
		dex_id: 49,
		name: "venomoth",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "bug",
		type_2: "poison",
		description:
			"The dustlike scales covering its wings are color-coded to indicate the kinds of poison it has.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 50,
		name: "diglett",
		evo_stage: "basic",
		evo_pokemon: 51,
		type_1: "ground",
		type_2: null,
		description: "피부가 매우 얇아서 빛을 쪼이게 되면 혈액이 데워져 약해진다.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 51,
		name: "dugtrio",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "ground",
		type_2: null,
		description:
			"A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 52,
		name: "meowth",
		evo_stage: "basic",
		evo_pokemon: 53,
		type_1: "normal",
		type_2: null,
		description:
			"It washes its face regularly to keep the coin on its forehead spotless. It doesn’t get along with Galarian Meowth.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 53,
		name: "persian",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 54,
		name: "psyduck",
		evo_stage: "basic",
		evo_pokemon: 55,
		type_1: "water",
		type_2: null,
		description:
			"While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 55,
		name: "golduck",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/55.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 56,
		name: "mankey",
		evo_stage: "basic",
		evo_pokemon: 57,
		type_1: "fighting",
		type_2: null,
		description:
			"Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 57,
		name: "primeape",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fighting",
		type_2: null,
		description:
			"Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 58,
		name: "growlithe",
		evo_stage: "basic",
		evo_pokemon: 59,
		type_1: "fire",
		type_2: null,
		description:
			"Very protective of its territory. It will bark and bite to repel intruders from its space.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 59,
		name: "arcanine",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fire",
		type_2: null,
		description:
			"A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 60,
		name: "poliwag",
		evo_stage: "basic",
		evo_pokemon: 61,
		type_1: "water",
		type_2: null,
		description:
			"Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 61,
		name: "poliwhirl",
		evo_stage: "stage-1",
		evo_pokemon: 62,
		type_1: "water",
		type_2: null,
		description:
			"Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 62,
		name: "poliwrath",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "water",
		type_2: "fighting",
		description:
			"An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 63,
		name: "abra",
		evo_stage: "basic",
		evo_pokemon: 64,
		type_1: "psychic",
		type_2: null,
		description:
			"Using its ability to read minds, it will identify impending danger and TELEPORT to safety.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 64,
		name: "kadabra",
		evo_stage: "stage-1",
		evo_pokemon: 65,
		type_1: "psychic",
		type_2: null,
		description:
			"It emits special alpha waves from its body that induce headaches just by being close by.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 65,
		name: "alakazam",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "psychic",
		type_2: null,
		description:
			"Its brain can out­ perform a super­ computer. Its intelligence quotient is said to be 5,000.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 66,
		name: "machop",
		evo_stage: "basic",
		evo_pokemon: 67,
		type_1: "fighting",
		type_2: null,
		description:
			"Malgré sa petite taille, sa force lui permet de soulever plusieurs Racaillou à la fois.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 67,
		name: "machoke",
		evo_stage: "stage-1",
		evo_pokemon: 68,
		type_1: "fighting",
		type_2: null,
		description:
			"Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 68,
		name: "machamp",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "fighting",
		type_2: null,
		description:
			"Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/68.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 69,
		name: "bellsprout",
		evo_stage: "basic",
		evo_pokemon: 70,
		type_1: "grass",
		type_2: "poison",
		description:
			"A carnivorous POKéMON that traps and eats bugs. It uses its root feet to soak up needed moisture.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/69.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 70,
		name: "weepinbell",
		evo_stage: "stage-1",
		evo_pokemon: 71,
		type_1: "grass",
		type_2: "poison",
		description:
			"It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/70.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 71,
		name: "victreebel",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "grass",
		type_2: "poison",
		description:
			"Dieses Pokémon soll in großen Kolonien tief im Dschungel leben, doch niemand kann dies bestätigen.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 72,
		name: "tentacool",
		evo_stage: "basic",
		evo_pokemon: 73,
		type_1: "water",
		type_2: "poison",
		description:
			"Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 73,
		name: "tentacruel",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "poison",
		description:
			"The tentacles are normally kept short. On hunts, they are extended to ensnare and immobilize prey.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/73.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 74,
		name: "geodude",
		evo_stage: "basic",
		evo_pokemon: 75,
		type_1: "rock",
		type_2: "ground",
		description:
			"Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 75,
		name: "graveler",
		evo_stage: "stage-1",
		evo_pokemon: 76,
		type_1: "rock",
		type_2: "ground",
		description:
			"De naturaleza descuidada y libre, no le importa dañarse cuando baja rodando montañas.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/75.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 76,
		name: "golem",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "rock",
		type_2: "ground",
		description:
			"Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/76.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 77,
		name: "ponyta",
		evo_stage: "basic",
		evo_pokemon: 78,
		type_1: "fire",
		type_2: null,
		description:
			"Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 78,
		name: "rapidash",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fire",
		type_2: null,
		description:
			"Galopa a casi 240 km por hora. Su crin ardiente parece una flecha cuando corre.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 79,
		name: "slowpoke",
		evo_stage: "basic",
		evo_pokemon: 80,
		type_1: "water",
		type_2: "psychic",
		description:
			"Descansa ocioso junto al agua. Si algo muerde su cola, no lo notará en todo el día.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 80,
		name: "slowbro",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "psychic",
		description:
			"The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 81,
		name: "magnemite",
		evo_stage: "basic",
		evo_pokemon: 82,
		type_1: "electric",
		type_2: "steel",
		description:
			"Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 82,
		name: "magneton",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "electric",
		type_2: "steel",
		description:
			"Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 83,
		name: "farfetchd",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: "flying",
		description:
			"The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 84,
		name: "doduo",
		evo_stage: "basic",
		evo_pokemon: 85,
		type_1: "normal",
		type_2: "flying",
		description:
			"A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 85,
		name: "dodrio",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "normal",
		type_2: "flying",
		description: "由嘟嘟的某个头分裂 出的变种。以60千米的 时速在草原上奔跑。",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 86,
		name: "seel",
		evo_stage: "basic",
		evo_pokemon: 87,
		type_1: "water",
		type_2: null,
		description:
			"The protruding horn on its head is very hard. It is used for bashing through thick ice.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 87,
		name: "dewgong",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "ice",
		description:
			"Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 88,
		name: "grimer",
		evo_stage: "basic",
		evo_pokemon: 89,
		type_1: "poison",
		type_2: null,
		description:
			"Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 89,
		name: "muk",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "poison",
		type_2: null,
		description:
			"Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 90,
		name: "shellder",
		evo_stage: "basic",
		evo_pokemon: 91,
		type_1: "water",
		type_2: null,
		description:
			"Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 91,
		name: "cloyster",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "ice",
		description:
			"When attacked, it launches its horns in quick volleys. Its innards have never been seen.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 92,
		name: "gastly",
		evo_stage: "basic",
		evo_pokemon: 93,
		type_1: "ghost",
		type_2: "poison",
		description:
			"Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 93,
		name: "haunter",
		evo_stage: "stage-1",
		evo_pokemon: 94,
		type_1: "ghost",
		type_2: "poison",
		description:
			"Because of its ability to slip through block walls, it is said to be from an­ other dimension.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 94,
		name: "gengar",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "ghost",
		type_2: "poison",
		description:
			"Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 95,
		name: "onix",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "rock",
		type_2: "ground",
		description:
			"As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 96,
		name: "drowzee",
		evo_stage: "basic",
		evo_pokemon: 97,
		type_1: "psychic",
		type_2: null,
		description:
			"Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 97,
		name: "hypno",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "psychic",
		type_2: null,
		description:
			"When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 98,
		name: "krabby",
		evo_stage: "basic",
		evo_pokemon: 99,
		type_1: "water",
		type_2: null,
		description:
			"Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 99,
		name: "kingler",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 100,
		name: "voltorb",
		evo_stage: "basic",
		evo_pokemon: 101,
		type_1: "electric",
		type_2: null,
		description:
			"Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 101,
		name: "electrode",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "electric",
		type_2: null,
		description:
			"It stores electric energy under very high pressure. It often explodes with little or no provocation.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 102,
		name: "exeggcute",
		evo_stage: "basic",
		evo_pokemon: 103,
		type_1: "grass",
		type_2: "psychic",
		description:
			"Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 103,
		name: "exeggutor",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "grass",
		type_2: "psychic",
		description:
			"Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 104,
		name: "cubone",
		evo_stage: "basic",
		evo_pokemon: 105,
		type_1: "ground",
		type_2: null,
		description:
			"Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 105,
		name: "marowak",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "ground",
		type_2: null,
		description: "将骨头像回力镖一样扔出去， 击落天敌秃鹰娜来复仇。",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 106,
		name: "hitmonlee",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "fighting",
		type_2: null,
		description:
			"When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 107,
		name: "hitmonchan",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "fighting",
		type_2: null,
		description:
			"While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 108,
		name: "lickitung",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 109,
		name: "koffing",
		evo_stage: "basic",
		evo_pokemon: 110,
		type_1: "poison",
		type_2: null,
		description:
			"Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 110,
		name: "weezing",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "poison",
		type_2: null,
		description:
			"Where two kinds of poison gases meet, 2 KOFFINGs can fuse into a WEEZING over many years.",
		egg_group: "indeterminate",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 111,
		name: "rhyhorn",
		evo_stage: "basic",
		evo_pokemon: 112,
		type_1: "ground",
		type_2: "rock",
		description:
			"A POKéMON with a one-track mind. Once it charges,  it won't stop running until it falls asleep.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 112,
		name: "rhydon",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "ground",
		type_2: "rock",
		description:
			"Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 113,
		name: "chansey",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.",
		egg_group: "fairy",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 114,
		name: "tangela",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "grass",
		type_2: null,
		description:
			"The whole body is swathed with wide vines that are similar to sea­ weed. Its vines shake as it walks.",
		egg_group: "plant",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 115,
		name: "kangaskhan",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 116,
		name: "horsea",
		evo_stage: "basic",
		evo_pokemon: 117,
		type_1: "water",
		type_2: null,
		description:
			"Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 117,
		name: "seadra",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"Capable of swim­ ming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 118,
		name: "goldeen",
		evo_stage: "basic",
		evo_pokemon: 119,
		type_1: "water",
		type_2: null,
		description:
			"Its tail fin billows like an elegant ballroom dress, giving it the nickname of the Water Queen.",
		egg_group: "water2",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 119,
		name: "seaking",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.",
		egg_group: "water2",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 120,
		name: "staryu",
		evo_stage: "basic",
		evo_pokemon: 121,
		type_1: "water",
		type_2: null,
		description:
			"If its body is torn, it can grow back if the red core remains. The core flashes at midnight.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 121,
		name: "starmie",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "psychic",
		description:
			"Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
		egg_group: "water3",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 122,
		name: "mr-mime",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "psychic",
		type_2: "fairy",
		description:
			"If interrupted while it is miming, it will slap around the offender with its broad hands.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 123,
		name: "scyther",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "bug",
		type_2: "flying",
		description:
			"With ninja-like agility and speed, it can create the illusion that there is more than one.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 124,
		name: "jynx",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "ice",
		type_2: "psychic",
		description:
			"It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 125,
		name: "electabuzz",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "electric",
		type_2: null,
		description:
			"Normally found near power plants, they can wander away and cause major blackouts in cities.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 126,
		name: "magmar",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "fire",
		type_2: null,
		description:
			"Its body always burns with an orange glow that enables it to hide perfectly among flames.",
		egg_group: "humanshape",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 127,
		name: "pinsir",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "bug",
		type_2: null,
		description:
			"If it fails to crush the victim in its pincers, it will swing it around and toss it hard.",
		egg_group: "bug",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 128,
		name: "tauros",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"When it targets an enemy, it charges furiously while whipping its body with its long tails.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 129,
		name: "magikarp",
		evo_stage: "basic",
		evo_pokemon: 130,
		type_1: "water",
		type_2: null,
		description:
			"In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
		egg_group: "water2",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 130,
		name: "gyarados",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: "flying",
		description:
			"Once it begins to rampage, a GYARADOS will burn everything down, even in a harsh storm.",
		egg_group: "water2",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/130.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 131,
		name: "lapras",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "water",
		type_2: "ice",
		description:
			"A POKéMON that has been over­ hunted almost to extinction. It can ferry people across the water.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 132,
		name: "ditto",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
		egg_group: "ditto",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 133,
		name: "eevee",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 134,
		name: "vaporeon",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "water",
		type_2: null,
		description:
			"Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/134.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 135,
		name: "jolteon",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "electric",
		type_2: null,
		description:
			"It accumulates negative ions in the atmosphere to blast out 10000- volt lightning bolts.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/135.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 136,
		name: "flareon",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "fire",
		type_2: null,
		description:
			"When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
		egg_group: "ground",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/136.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 137,
		name: "porygon",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
		egg_group: "mineral",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 138,
		name: "omanyte",
		evo_stage: "basic",
		evo_pokemon: 139,
		type_1: "rock",
		type_2: "water",
		description:
			"Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 139,
		name: "omastar",
		evo_stage: "stage-1",
		evo_pokemon: 139,
		type_1: "rock",
		type_2: "water",
		description:
			"A prehistoric POKéMON that died out when its heavy shell made it impossible to catch prey.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 140,
		name: "kabuto",
		evo_stage: "basic",
		evo_pokemon: 141,
		type_1: "rock",
		type_2: "water",
		description:
			"A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 141,
		name: "kabutops",
		evo_stage: "stage-1",
		evo_pokemon: null,
		type_1: "rock",
		type_2: "water",
		description:
			"È un perfetto nuotatore. Taglia la preda con le sue falci e ne succhia il sangue.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 142,
		name: "aerodactyl",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "rock",
		type_2: "flying",
		description:
			"A Pokémon that roamed the skies in the dinosaur era. Its teeth are like saw blades.",
		egg_group: "flying",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 143,
		name: "snorlax",
		evo_stage: "basic",
		evo_pokemon: null,
		type_1: "normal",
		type_2: null,
		description:
			"Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
		egg_group: "monster",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
		exp_required: null,
		currency_pm: 0.3,
	},
	{
		dex_id: 144,
		name: "articuno",
		evo_stage: "legend",
		evo_pokemon: null,
		type_1: "ice",
		type_2: "flying",
		description:
			"A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
		exp_required: null,
		currency_pm: 1,
	},
	{
		dex_id: 145,
		name: "zapdos",
		evo_stage: "legend",
		evo_pokemon: null,
		type_1: "electric",
		type_2: "flying",
		description:
			"かみなりぐもの　なかに　いると いわれる　でんせつの　ポケモン。 カミナリを　じざいに　あやつる。",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
		exp_required: null,
		currency_pm: 1,
	},
	{
		dex_id: 146,
		name: "moltres",
		evo_stage: "legend",
		evo_pokemon: null,
		type_1: "fire",
		type_2: "flying",
		description:
			"Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
		exp_required: null,
		currency_pm: 1,
	},
	{
		dex_id: 147,
		name: "dratini",
		evo_stage: "basic",
		evo_pokemon: 148,
		type_1: "dragon",
		type_2: null,
		description:
			"Long considered a mythical POKéMON until recently when a small colony was found living underwater.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
		exp_required: 3000,
		currency_pm: 0.2,
	},
	{
		dex_id: 148,
		name: "dragonair",
		evo_stage: "stage-1",
		evo_pokemon: 149,
		type_1: "dragon",
		type_2: null,
		description:
			"人们相信它能操纵天气， 所以在哈克龙栖息的湖里， 供品总是源源不断。",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
		exp_required: 5000,
		currency_pm: 0.3,
	},
	{
		dex_id: 149,
		name: "dragonite",
		evo_stage: "stage-2",
		evo_pokemon: null,
		type_1: "dragon",
		type_2: "flying",
		description:
			"An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.",
		egg_group: "water1",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif",
		exp_required: null,
		currency_pm: 0.5,
	},
	{
		dex_id: 150,
		name: "mewtwo",
		evo_stage: "legend",
		evo_pokemon: null,
		type_1: "psychic",
		type_2: null,
		description:
			"It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
		exp_required: null,
		currency_pm: 1,
	},
	{
		dex_id: 151,
		name: "mew",
		evo_stage: "legend",
		evo_pokemon: null,
		type_1: "psychic",
		type_2: null,
		description:
			"So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
		egg_group: "no-eggs",
		img_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
		gif_link:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
		exp_required: null,
		currency_pm: 1,
	},
	{
		dex_id: 10000,
		name: "egg",
		evo_stage: "egg",
		evo_pokemon: null,
		type_1: "egg",
		type_2: null,
		description: "It's an egg. I wonder what's inside",
		egg_group: null,
		img_link:
			"https://archives.bulbagarden.net/media/upload/archive/e/ed/20170805233207%21Spr_5b_Egg.png",
		gif_link:
			"https://archives.bulbagarden.net/media/upload/4/45/Spr_4d_Egg.png",
		exp_required: 1000,
		currency_pm: 0,
	},
];

// https://archives.bulbagarden.net/media/upload/9/9d/Spr_3e_Egg.png

// const db = require("./db.js");

// pokedex.forEach((pokemon) => {
// 	const sql = `INSERT INTO pokedex (dex_id, name, evo_stage, evo_pokemon, type_1, type_2, description, egg_group, img_link, gif_link, exp_required, currency_pm) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
// 	return db
// 		.query(sql, [
// 			pokemon.dex_id,
// 			pokemon.name,
// 			pokemon.evo_stage,
// 			pokemon.evo_pokemon,
// 			pokemon.type_1,
// 			pokemon.type_2,
// 			pokemon.description,
// 			pokemon.egg_group,
// 			pokemon.img_link,
// 			pokemon.gif_link,
// 			pokemon.exp_required,
// 			pokemon.currency_pm,
// 		])
// 		.then((dbRes) => dbRes)
// 		.catch((err) => console.log(err));
// });
