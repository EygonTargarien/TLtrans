<?php

$a = [
	"priceList" => [
		[
			"key" => "bronze5",
			"price" => 0
		],
		[
			"key" => "bronze4",
			"price" => 10
		],
		[
			"key" => "bronze3",
			"price" => 10
		],
		[
			"key" => "bronze2",
			"price" => 10
		],
		[
			"key" => "bronze1",
			"price" => 10
		],
		[
			"key" => "silver5",
			"price" => 13
		],
		[
			"key" => "silver4",
			"price" => 13
		],
		[
			"key" => "silver3",
			"price" => 14
		],
		[
			"key" => "silver2",
			"price" => 14
		],
		[
			"key" => "silver1",
			"price" => 16
		],
		[
			"key" => "gold5",
			"price" => 22
		],
		[
			"key" => "gold4",
			"price" => 22
		],
		[
			"key" => "gold3",
			"price" => 25
		],
		[
			"key" => "gold2",
			"price" => 27
		],
		[
			"key" => "gold1",
			"price" => 30
		],
		[
			"key" => "platinum5",
			"price" => 35
		],
		[
			"key" => "platinum4",
			"price" => 42
		],
		[
			"key" => "platinum3",
			"price" => 45
		],
		[
			"key" => "platinum2",
			"price" => 50
		],
		[
			"key" => "platinum1",
			"price" => 53
		],
		[
			"key" => "diamond5",
			"price" => 60
		],
		[
			"key" => "diamond4",
			"price" => 90
		],
		[
			"key" => "diamond3",
			"price" => 110
		],
		[
			"key" => "diamond2",
			"price" => 140
		],
		[
			"key" => "diamond1",
			"price" => 180
		],
		[
			"key" => "master",
			"price" => 300
		]
	],
	"tier" => [
		"bronze" => [
			"name" => "Bronze",
			"division" => [
				[
					"key" => "5",
					"name" => "V",
					"img"=> "../../Media/assets/images/game/lol/bronze5.png"
				],
				[
					"key" => "4",
					"name" => "IV",
					"img"=> "../../Media/assets/images/game/lol/bronze4.png"
				],
				[
					"key" => "3",
					"name" => "III",
					"img"=> "../../Media/assets/images/game/lol/bronze3.png"
				],
				[
					"key" => "2",
					"name" => "II",
					"img"=> "../../Media/assets/images/game/lol/bronze2.png"
				],
				[
					"key" => "1",
					"name" => "I",
					"img"=> "../../Media/assets/images/game/lol/bronze1.png"
				]
			]
		],
		"silver" => [
			"name" => "Silver",
			"division" => [
				[
					"key" => "5",
					"name" => "V",
					"img"=> "../../Media/assets/images/game/lol/silver5.png"
				],
				[
					"key" => "4",
					"name" => "IV",
					"img"=> "../../Media/assets/images/game/lol/silver4.png"
				],
				[
					"key" => "3",
					"name" => "III",
					"img"=> "../../Media/assets/images/game/lol/silver3.png"
				],
				[
					"key" => "2",
					"name" => "II",
					"img"=> "../../Media/assets/images/game/lol/silver2.png"
				],
				[
					"key" => "1",
					"name" => "I",
					"img"=> "../../Media/assets/images/game/lol/silver1.png"
				]
			]
		],
		"gold" => [
			"name" => "Gold",
			"division" => [
				[
					"key" => "5",
					"name" => "V",
					"img"=> "../../Media/assets/images/game/lol/gold5.png"
				],
				[
					"key" => "4",
					"name" => "IV",
					"img"=> "../../Media/assets/images/game/lol/gold4.png"
				],
				[
					"key" => "3",
					"name" => "III",
					"img"=> "../../Media/assets/images/game/lol/gold3.png"
				],
				[
					"key" => "2",
					"name" => "II",
					"img"=> "../../Media/assets/images/game/lol/gold2.png"
				],
				[
					"key" => "1",
					"name" => "I",
					"img"=> "../../Media/assets/images/game/lol/gold1.png"
				]
			]
		],
		"platinum" => [
			"name" => "Platinum",
			"division" => [
				[
					"key" => "5",
					"name" => "V",
					"img"=> "../../Media/assets/images/game/lol/platinum5.png"
				],
				[
					"key" => "4",
					"name" => "IV",
					"img"=> "../../Media/assets/images/game/lol/platinum4.png"
				],
				[
					"key" => "3",
					"name" => "III",
					"img"=> "../../Media/assets/images/game/lol/platinum3.png"
				],
				[
					"key" => "2",
					"name" => "II",
					"img"=> "../../Media/assets/images/game/lol/platinum2.png"
				],
				[
					"key" => "1",
					"name" => "I",
					"img"=> "../../Media/assets/images/game/lol/platinum1.png"
				]
			]
		],
		"diamond" => [
			"name" => "Diamond",
			"division" => [
				[
					"key" => "5",
					"name" => "V",
					"img"=> "../../Media/assets/images/game/lol/diamond5.png"
				],
				[
					"key" => "4",
					"name" => "IV",
					"img"=> "../../Media/assets/images/game/lol/diamond4.png"
				],
				[
					"key" => "3",
					"name" => "III",
					"img"=> "../../Media/assets/images/game/lol/diamond3.png"
				],
				[
					"key" => "2",
					"name" => "II",
					"img"=> "../../Media/assets/images/game/lol/diamond2.png"
				],
				[
					"key" => "1",
					"name" => "I",
					"img"=> "../../Media/assets/images/game/lol/diamond1.png"
				]
			]
		],
		"master" => [
			"name" => "Master",
		],
	]
];


die(json_encode($a));

?>
