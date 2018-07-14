<?php
$a = [
	"success" => true,
	"count" => "6",
	"empty" => false,
	"list" => [
		[
			"date" => "22.06.2018",
			"text" => 'I ordered the same size I\'d been wearing for a while, and they fit perfectly. And though a tad more faded in color, these are perfect for casual wear but would be fine going out for dinner at most places. I\'m very satisfied with my purchase.'
		],
		[
			"date" => "22.06.2018",
			"text" => 'I ordered the same size I\'d been wearing for a while, and they fit perfectly. And though a tad more faded in color, these are perfect for casual wear but would be fine going out for dinner at most places. I\'m very satisfied with my purchase.'
		]
	]
];


die(json_encode($a));

?>
