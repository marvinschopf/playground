module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([4],{

/***/ "./node_modules/cowsay-browser/index.js":
/***/ (function(module, exports, __webpack_require__) {

var baloon = __webpack_require__("./node_modules/cowsay-browser/lib/balloon.js");
var cows = __webpack_require__("./node_modules/cowsay-browser/lib/cows.js");
var faces = __webpack_require__("./node_modules/cowsay-browser/lib/faces.js");

exports.say = function (options) {
	return doIt(options, true);
};

exports.think = function (options) {
	return doIt(options, false);
};

exports.list = cows.list;

function doIt (options, sayAloud) {
	var cow = cows.get(options.f || "default");
	var face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	var action = sayAloud ? "say" : "think";
	return baloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + cow(face);
}


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/balloon.js":
/***/ (function(module, exports, __webpack_require__) {

var os = __webpack_require__("./node_modules/os-browserify/browser.js");

exports.say = function (text, wrap) {
	delimiters = {
		first : ["/", "\\"],
		middle : ["|", "|"],
		last : ["\\", "/"],
		only : ["<", ">"]
	};

	return format(text, wrap, delimiters);
}

exports.think = function (text, wrap) {
	delimiters = {
		first : ["(", ")"],
		middle : ["(", ")"],
		last : ["(", ")"],
		only : ["(", ")"]
	};

	return format(text, wrap, delimiters);
}

function format (text, wrap, delimiters) {
	var lines = split(text, wrap);
	var maxLength = max(lines);

	var balloon;
	if (lines.length === 1) {
		balloon = [
			" " + top(maxLength), 
			delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
			" " + bottom(maxLength)
		];
	} else {
		balloon = [" " + top(maxLength)];

		for (var i = 0, len = lines.length; i < len; i += 1) {
			var delimiter;

			if (i === 0) {
				delimiter = delimiters.first;
			} else if (i === len - 1) {
				delimiter = delimiters.last;
			} else {
				delimiter = delimiters.middle;
			}

			balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
		}

		balloon.push(" " + bottom(maxLength));
	}

	return balloon.join("\n"); //os.EOL
}

function split (text, wrap) {
	text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');

	var lines = [];
	if (!wrap) {
		lines = text.split("\n");
	} else {
		var start = 0;
		while (start < text.length) {
			var nextNewLine = text.indexOf("\n", start);

			var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

			lines.push(text.substring(start, wrapAt));
			start = wrapAt;

			// Ignore next new line
			if (text.charAt(start) === "\n") {
				start += 1;
			}
		}
	}

	return lines;
}

function max (lines) {
	var max = 0;
	for (var i = 0, len = lines.length; i < len; i += 1) {
		if (lines[i].length > max) {
			max = lines[i].length;
		}
	}

	return max;
}

function pad (text, length) {
	return text + (new Array(length - text.length + 1)).join(" ");
}

function top (length) {
	return new Array(length + 3).join("_");
}

function bottom (length) {
	return new Array(length + 3).join("-");
}

/***/ }),

/***/ "./node_modules/cowsay-browser/lib/cow-definitions.js":
/***/ (function(module, exports) {

// Generated code
exports.cowdefs = {
  "beavis.zen": "##\r\n## Beavis, with Zen philosophy removed.\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         __------~~-,\r\n    $thoughts      ,'            ,\r\n          /               \\\\\r\n         /                :\r\n        |                  '\r\n        |                  |\r\n        |                  |\r\n         |   _--           |\r\n         _| =-.     .-.   ||\r\n         o|/o/       _.   |\r\n         /  ~          \\\\ |\r\n       (____\\@)  ___~    |\r\n          |_===~~~.`    |\r\n       _______.--~     |\r\n       \\\\________       |\r\n                \\\\      |\r\n              __/-___-- -__\r\n             /            _ \\\\\r\nEOC\r\n",
  "bud-frogs": "##\r\n## The Budweiser frogs\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n          oO)-.                       .-(Oo\r\n         /__  _\\\\                     /_  __\\\\\r\n         \\\\  \\\\(  |     ()~()         |  )/  /\r\n          \\\\__|\\\\ |    (-___-)        | /|__/\r\n          '  '--'    ==`-'==        '--'  '\r\nEOC\r\n",
  "bunny": "##\r\n## A cute little wabbit\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\\r\n        \\\\ /\\\\\r\n        ( )\r\n      .( o ).\r\nEOC\r\n",
  "cheese": "##\r\n## The cheese from milk & cheese\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n      _____   _________\r\n     /     \\\\_/         |\r\n    |                 ||\r\n    |                 ||\r\n   |    ###\\\\  /###   | |\r\n   |     0  \\\\/  0    | |\r\n  /|                 | |\r\n / |        <        |\\\\ \\\\\r\n| /|                 | | |\r\n| |     \\\\_______/   |  | |\r\n| |                 | / /\r\n/||                 /|||\r\n   ----------------|\r\n        | |    | |\r\n        ***    ***\r\n       /___\\\\  /___\\\\\r\nEOC\r\n",
  "chick": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n        .---.\r\n     _ /     ' .---.\r\n     >|  o    `     `\\\r\n     ` \\       .---._ '._ ,\r\n        '-.;         /`  /'\r\n           \\    '._.'   /\r\n            '.        .'\r\n              `\";--\\_/\r\n       jgs    _/_   |\r\n           -'`/  .--;--\r\n             '    .'\r\n\r\nEOC\r\n",
  "chicken-and-egg": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n\r\n              /'._     _,\r\n              \\   ;__.'  }\r\n          (`-._;-\" _.--.}'\r\n          /_'    /`    _}     _.--\"\"\"-.\r\n            `.   \\_._.;     .'         \\\r\n              '-.__ /      /            |\r\n      jgs      _/  `\\      \\            /\r\n              ^`   ^`       '._       .'\r\n                               `\"\"\"\"\"`\r\nEOC\r\n",
  "cower": "##\r\n## A cowering cow\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n        ,__, |    | \r\n        (oo)\\\\|    |___\r\n        (__)\\\\|    |   )\\\\_\r\n             |    |_w |  \\\\\r\n             |    |  ||   *\r\n\r\n             Cower....\r\nEOC\r\n",
  "daemon": "##\r\n## 4.4 >> 5.4\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         ,        ,\r\n    $thoughts       /(        )`\r\n     $thoughts      \\\\ \\\\___   / |\r\n            /- _  `-/  '\r\n           (/\\\\/ \\\\ \\\\   /\\\\\r\n           / /   | `    \\\\\r\n           O O   ) /    |\r\n           `-^--'`<     '\r\n          (_.)  _  )   /\r\n           `.___/`    /\r\n             `-----' /\r\n<----.     __ / __   \\\\\r\n<----|====O)))==) \\\\) /====\r\n<----'    `--' `.__,' \\\\\r\n             |        |\r\n              \\\\       /\r\n        ______( (_  / \\\\______\r\n      ,'  ,-----'   |        \\\\\r\n      `--{__________)        \\\\/\r\nEOC\r\n",
  "default": "$the_cow = <<\"EOC\";\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||----w |\r\n                ||     ||\r\nEOC\r\n",
  "doge": "##\r\n## Doge\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n\r\n           _                _\r\n          / /.           _-//\r\n         / ///         _-   /\r\n        //_-//=========     /\r\n      _///        //_ ||   ./\r\n    _|                 -__-||\r\n   |  __              - \\\\   \\\r\n  |  |#-       _-|_           |\r\n  |            |#|||       _   |  \r\n |  _==_                       ||\r\n- ==|.=.=|_ =                  |\r\n|  |-|-  ___                  |\r\n|    --__   _                /\r\n||     ===                  |\r\n |                     _. //\r\n  ||_         __-   _-  _|\r\n     \\_______/  ___/  _|\r\n                   --*\r\nEOC\r\n",
  "dragon-and-cow": "##\r\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n                       $thoughts                    ^    /^\r\n                        $thoughts                  / \\\\  // \\\\\r\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\r\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\r\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\r\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\r\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\r\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\r\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\r\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\r\n                             ,-}        _      *-.|.-~-.           .~    ~\r\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\r\n             \\\\____($eyes)           *.   }            {                   /\r\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\r\n             //__\\\\\\\\  \\\\__ Ack!   ///.----..<        \\\\             _ -~\r\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\r\nEOC\r\n",
  "dragon": "##\r\n## The Whitespace Dragon\r\n##\r\n$the_cow = <<EOC;\r\n      $thoughts                    / \\\\  //\\\\\r\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\r\n            /0  0  \\\\__  /    //  | \\\\ \\\\    \r\n           /     /  \\\\/_/    //   |  \\\\  \\\\  \r\n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \r\n           //_^_/     \\\\/_ //     |    \\\\    \\\\\r\n        ( //) |        \\\\///      |     \\\\     \\\\\r\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\r\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\r\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\r\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\r\n (( /// ))      `.   {            }                   /      \\\\  \\\\\r\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\r\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\r\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\r\n                                                                  /.-~\r\nEOC\r\n",
  "elephant-in-snake": "##\r\n## Do we need to explain this?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts              ....       \r\n           ........    .      \r\n          .            .      \r\n         .             .      \r\n.........              .......\r\n..............................\r\n\r\nElephant inside ASCII snake\r\nEOC\r\n",
  "elephant": "##\r\n## An elephant out and about\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     /\\\\  ___  /\\\\\r\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\r\n     ((    O O    ))\r\n      \\\\\\\\ /     \\\\ //\r\n       \\\\/  | |  \\\\/ \r\n        |  | |  |  \r\n        |  | |  |  \r\n        |   o   |  \r\n        | |   | |  \r\n        |m|   |m|  \r\nEOC\r\n",
  "eyes": "##\r\n## Evil-looking eyes\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n                                   .::!!!!!!!:.\r\n  .!!!!!:.                        .:!!!!!!!!!!!!\r\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \r\n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \r\n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$\"  \\$\\$\\$\\$\\$\\$\\$\\$# \r\n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \r\n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R\" \r\n        \"*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#\" \r\n             \"\"\"\"          \"\"\"\"\"\"\" \r\nEOC\r\n",
  "flaming-sheep": "##\r\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts            .    .     .   \r\n   $thoughts      .  . .     `  ,     \r\n    $thoughts    .; .  : .' :  :  : . \r\n     $thoughts   i..`: i` i.i.,i  i . \r\n      $thoughts   `,--.|i |i|ii|ii|i: \r\n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \r\n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \r\n                (\\@\\@\\@\\@\\@\\@\\@\\@)    \r\n                `YY~~~~YY'    \r\n                 ||    ||     \r\nEOC\r\n",
  "ghostbusters": "##\r\n## Ghostbusters!\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts\r\n           $thoughts\r\n            $thoughts          __---__\r\n                    _-       /--______\r\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\r\n             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\r\n            /XXX(       U     )        XXXXXXX\\\\\r\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\r\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\r\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\r\n         XXXXXX__/          XXXXXX         \\\\__---->\r\n ---___  XXX__/          XXXXXX      \\\\__         /\r\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\r\n    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX\r\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\r\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\r\n          \\\\XXXXXX      >                 _/XXXXX/\r\n            \\\\XXXXX--__/              __-- XXXX/\r\n             -XXXXXXXX---------------  XXXXXX-\r\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\r\n                  \"\"VXXXXXXXXXXXXXXXXXXV\"\"\r\nEOC\r\n",
  "hellokitty": "##\r\n## Hello Kitty\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n      /\\\\_)o<\r\n     |      \\\\\r\n     | O . O|\r\n      \\\\_____/\r\nEOC\r\n",
  "kiss": "##\r\n## A lovers' empbrace\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n             ,;;;;;;;,\r\n            ;;;;;;;;;;;,\r\n           ;;;;;'_____;'\r\n           ;;;(/))))|((\\\\\r\n           _;;((((((|))))\r\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\r\n     .--~(  \\\\ ~))))))))))))\r\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\r\n    |    | `\\\\   ) |\\\\       /|)\r\n     |    |  `. _/  \\\\_____/ |\r\n      |    , `\\\\~            /\r\n       |    \\\\  \\\\           /\r\n      | `.   `\\\\|          /\r\n      |   ~-   `\\\\        /\r\n       \\\\____~._/~ -_,   (\\\\\r\n        |-----|\\\\   \\\\    ';;\r\n       |      | :;;;'     \\\\\r\n      |  /    |            |\r\n      |       |            |\r\nEOC\r\n",
  "kitty": "##\r\n## A kitten of sorts, I think\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n       (\"`-'  '-/\") .___..--' ' \"`-._\r\n         ` *_ *  )    `-.   (      ) .`-.__. `)\r\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\r\n      _.. `--'_..-_/   /--' _ .' ,4\r\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \r\nEOC\r\n",
  "koala": "##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n       ___  \r\n     {~._.~}\r\n      ( Y )\r\n     ()~*~()   \r\n     (_)-(_)   \r\nEOC\r\n",
  "kosh": "##\r\n## It's a Kosh Cow!\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n      $thoughts\r\n  ___       _____     ___\r\n /   \\\\     /    /|   /   \\\\\r\n|     |   /    / |  |     |\r\n|     |  /____/  |  |     |     \r\n|     |  |    |  |  |     |\r\n|     |  | {} | /   |     |\r\n|     |  |____|/    |     |\r\n|     |    |==|     |     |\r\n|      \\\\___________/      |\r\n|                         |\r\n|                         |\r\nEOC\r\n",
  "luke-koala": "##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts          .\r\n       ___   //\r\n     {~._.~}// \r\n      ( Y )K/  \r\n     ()~*~()   \r\n     (_)-(_)   \r\n     Luke    \r\n     Sywalker\r\n     koala   \r\nEOC\r\n",
  "mech-and-cow": "                                   ,-----.\r\n                                   |     |\r\n                                ,--|     |-.\r\n                         __,----|  |     | |\r\n                       ,;::     |  `_____' |\r\n                       `._______|    i^i   |\r\n                                `----| |---'| .\r\n                           ,-------._| |== ||//\r\n                           |       |_|P`.  /'/\r\n                           `-------' 'Y Y/'/'\r\n                                     .==\\ /_\\\r\n   ^__^                             /   /'|  `i\r\n   (oo)\\_______                   /'   /  |   |\r\n   (__)\\       )\\/\\             /'    /   |   `i\r\n       ||----w |           ___,;`----'.___L_,-'`\\__\r\n       ||     ||          i_____;----\\.____i\"\"\\____\\\r\n\r\n\r\n\r\n\r\n\r\n",
  "meow": "##\r\n## A meowing tiger?\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\r\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\r\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\r\n    /\\@\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\r\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\r\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\r\n        `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\r\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\r\n         (((__/(((_.' ((___..-'((__,'\r\nEOC\r\n",
  "milk": "##\r\n## Milk from Milk and Cheese\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     ____________ \r\n  $thoughts    |__________|\r\n      /           /\\\\\r\n     /           /  \\\\\r\n    /___________/___/|\r\n    |          |     |\r\n    |  ==\\\\ /== |     |\r\n    |   O   O  | \\\\ \\\\ |\r\n    |     <    |  \\\\ \\\\|\r\n   /|          |   \\\\ \\\\\r\n  / |  \\\\_____/ |   / /\r\n / /|          |  / /|\r\n/||\\\\|          | /||\\\\/\r\n    -------------|   \r\n        | |    | | \r\n       <__/    \\\\__>\r\nEOC\r\n",
  "moofasa": "##\r\n## MOOfasa.\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts    ____\r\n        $thoughts  /    \\\\\r\n          | ^__^ |\r\n          | ($eyes) |______\r\n          | (__) |      )\\\\/\\\\\r\n           \\\\____/|----w |\r\n                ||     ||\r\n\r\n\t         Moofasa\r\nEOC\r\n",
  "moose": "$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\_\\\\_    _/_/\r\n    $thoughts      \\\\__/\r\n           ($eyes)\\\\_______\r\n           (__)\\\\       )\\\\/\\\\\r\n            $tongue ||----w |\r\n               ||     ||\r\nEOC\r\n",
  "mutilated": "##\r\n## A mutilated cow, from aspolito@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts   \\\\_______\r\n v__v   $thoughts  \\\\   O   )\r\n ($eyes)      ||----w |\r\n (__)      ||     ||  \\\\/\\\\\r\n  $tongue\r\nEOC\r\n",
  "ren": "##\r\n## Ren \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n    ____  \r\n   /# /_\\\\_\r\n  |  |/o\\\\o\\\\\r\n  |  \\\\\\\\_/_/\r\n / |_   |  \r\n|  ||\\\\_ ~| \r\n|  ||| \\\\/  \r\n|  |||_    \r\n \\\\//  |    \r\n  ||  |    \r\n  ||_  \\\\   \r\n  \\\\_|  o|  \r\n  /\\\\___/   \r\n /  ||||__ \r\n    (___)_)\r\nEOC\r\n",
  "rooster": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n.\".\".\".\r\n(`       `)               _.-=-.\r\n'._.--.-;             .-`  -'  '.\r\n.-'`.o )  \\           /  .-_.--'  `\\\r\n`;---) \\    ;         /  / ;' _-_.-' `\r\n`;\"`  ;    \\        ; .  .'   _-' \\\r\n(    )    |        |  / .-.-'    -`\r\n '-.-'     \\       | .' ` '.-'-\\`\r\n  /_./\\_.|\\_\\      ;  ' .'-'.-.\r\n  /         '-._    \\` /  _;-,\r\n |         .-=-.;-._ \\  -'-,\r\n \\        /      `\";`-`,-\"`)\r\n  \\       \\     '-- `\\.\\\r\n   '.      '._ '-- '--'/\r\n     `-._     `'----'`;\r\n         `\"\"\"--.____,/\r\n                \\\\  \\\r\n                // /`\r\n            ___// /__\r\n  jgs     (`(`(---\"-`)\r\n\r\nEOC\r\n",
  "satanic": "##\r\n## Satanic cow, source unknown.\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts  (__)  \r\n         (\\\\/)  \r\n  /-------\\\\/    \r\n / | 666 ||    \r\n*  ||----||      \r\n   ~~    ~~      \r\nEOC\r\n",
  "sheep": "##\r\n## The non-flaming sheep.\r\n##\r\n$the_cow = <<EOC\r\n  $thoughts\r\n   $thoughts\r\n       __     \r\n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\r\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           (\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           `YY~~~~YY'\r\n            ||    ||\r\nEOC\r\n",
  "skeleton": "##\r\n## This 'Scowleton' brought to you by one of \r\n## {appel,kube,rowe}@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts      (__)      \r\n           $thoughts     /$eyes|  \r\n            $thoughts   (_\"_)*+++++++++*\r\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\r\n                   I[I|I|||||I I `\r\n                   I`I'///'' I I\r\n                   I I       I I\r\n                   ~ ~       ~ ~\r\n                     Scowleton\r\nEOC\r\n",
  "small": "##\r\n## A small cow, artist unknown\r\n##\r\n$eyes = \"..\" unless ($eyes);\r\n$the_cow = <<EOC;\r\n       $thoughts   ,__,\r\n        $thoughts  ($eyes)____\r\n           (__)    )\\\\\r\n            $tongue||--|| *\r\nEOC\r\n",
  "squirrel": "$the_cow = <<EOC;\r\n  $thoughts\r\n     $thoughts\r\n                  _ _\r\n       | \\__/|  .~    ~.\r\n       /$eyes `./      .'\r\n      {o__,   \\    {\r\n        / .  . )    \\\r\n        `-` '-' \\    }\r\n       .(   _(   )_.'\r\n      '---.~_ _ _|\r\n                                                     \r\nEOC\r\n",
  "stegosaurus": "##\r\n## A stegosaur with a top hat?\r\n##\r\n$the_cow = <<EOC;\r\n$thoughts                             .       .\r\n $thoughts                           / `.   .' \" \r\n  $thoughts                  .---.  <    > <    >  .---.\r\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\r\n         _____          ..-~             ~-..-~\r\n        |     |   \\\\~~~\\\\.'                    `./~~~/\r\n       ---------   \\\\__/                        \\\\__/\r\n      .'  O    \\\\     /               /       \\\\  \" \r\n     (_____,    `._.'               |         }  \\\\/~~~/\r\n      `----.          /       }     |        /    \\\\__/\r\n            `-.      |       /      |       /      `. ,~~|\r\n                ~-.__|      /_ - ~ ^|      /- _      `..-'   \r\n                     |     /        |     /     ~-.     `-. _  _  _\r\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\r\nEOC\r\n",
  "stimpy": "##\r\n## Stimpy!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts     .    _  .    \r\n   $thoughts    |\\\\_|/__/|    \r\n       / / \\\\/ \\\\  \\\\  \r\n      /__|O||O|__ \\\\ \r\n     |/_ \\\\_/\\\\_/ _\\\\ |  \r\n     | | (____) | ||  \r\n     \\\\/\\\\___/\\\\__/  // \r\n     (_/         ||\r\n      |          ||\r\n      |          ||\\\\   \r\n       \\\\        //_/  \r\n        \\\\______//\r\n       __ || __||\r\n      (____(____)\r\nEOC\r\n",
  "supermilker": "##\r\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts   ^__^\r\n   $thoughts  ($eyes)\\\\_______        ________\r\n      (__)\\\\       )\\\\/\\\\    |Super |\r\n       $tongue ||----W |       |Milker|\r\n          ||    UDDDDDDDDD|______|\r\nEOC\r\n",
  "surgery": "##\r\n## A cow operation, artist unknown\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts           \\\\  / \r\n           $thoughts           \\\\/  \r\n               (__)    /\\\\         \r\n               ($eyes)   O  O        \r\n               _\\\\/_   //         \r\n         *    (    ) //       \r\n          \\\\  (\\\\\\\\    //       \r\n           \\\\(  \\\\\\\\    )                              \r\n            (   \\\\\\\\   )   /\\\\                          \r\n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \r\n |\\\\__[=======______//________)__\\\\                    \r\n \\\\|_______________//____________|                    \r\n     |||      || //||     |||\r\n     |||      || @.||     |||                        \r\n      ||      \\\\/  .\\\\/      ||                        \r\n                 . .                                 \r\n                '.'.`                                \r\n\r\n            COW-OPERATION                           \r\nEOC\r\n",
  "turkey": "##\r\n## Turkey!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts                                  ,+*^^*+___+++_\r\n   $thoughts                           ,*^^^^              )\r\n    $thoughts                       _+*                     ^**+_\r\n     $thoughts                    +^       _ _++*+_+++_,         )\r\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\r\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\r\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\r\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\r\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\r\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\r\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\r\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\r\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\r\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\r\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\r\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\r\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\r\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\r\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\r\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\r\n                      ^^^ ^^ ^^^ ^\r\nEOC\r\n",
  "turtle": "##\r\n## A mysterious turtle...\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts                                  ___-------___\r\n     $thoughts                             _-~~             ~~-_\r\n      $thoughts                         _-~                    /~-_\r\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\r\n           /|  O|| O|        /      \\\\_______________/        \\\\\r\n          | |___||__|      /       /                \\\\          \\\\\r\n          |          \\\\    /      /                    \\\\          \\\\\r\n          |   (_______) /______/                        \\\\_________ \\\\\r\n          |         / /         \\\\                      /            \\\\\r\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\r\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\r\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\r\n                 ~-----||====/~     |==================|       |/~~~~~\r\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\r\n                         (_(___/                         \\\\_____)_)\r\nEOC\r\n",
  "tux": "##\r\n## TuX\r\n## (c) pborys@p-soft.silesia.linux.org.pl \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n        .--.\r\n       |o_o |\r\n       |:_/ |\r\n      //   \\\\ \\\\\r\n     (|     | )\r\n    /'\\\\_   _/`\\\\\r\n    \\\\___)=(___/\r\n\r\nEOC\r\n",
  "vader-koala": "##\r\n## Another canonical koala?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts        .\r\n     .---.  //\r\n    Y|o o|Y// \r\n   /_(i=i)K/ \r\n   ~()~*~()~  \r\n    (_)-(_)   \r\n\r\n     Darth \r\n     Vader    \r\n     koala        \r\nEOC\r\n",
  "vader": "##\r\n## Cowth Vader, from geordan@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts    ,-^-.\r\n         $thoughts   !oYo!\r\n          $thoughts /./=\\\\.\\\\______\r\n               ##        )\\\\/\\\\\r\n                ||-----w||\r\n                ||      ||\r\n\r\n               Cowth Vader\r\nEOC\r\n",
  "www": "##\r\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||--WWW |\r\n                ||     ||\r\nEOC\r\n"
}

/***/ }),

/***/ "./node_modules/cowsay-browser/lib/cows.js":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("./node_modules/path-browserify/index.js");
var replacer = __webpack_require__("./node_modules/cowsay-browser/lib/replacer.js");

var cowdefs = __webpack_require__("./node_modules/cowsay-browser/lib/cow-definitions.js").cowdefs;

var textCache = {};

exports.get = function (cow) {
	var text = cowdefs[cow];

	if (!text) {
		text = cowdefs['default'];
	}

	return function (options) {
		return replacer(text, options);
	};
}

exports.list = function (callback) {

	var cows = [];

	for (var cow in cowdefs) {
	  cows.push(cow)
	}

	callback(null, cows);
}


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/faces.js":
/***/ (function(module, exports) {

var modes = {
	"b" : {
		eyes : "==",
		tongue : "  "
	},
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$",
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
	}
};

module.exports = function (options) {
	for (var mode in modes) {
		if (options[mode] === true) {
			return modes[mode];
		}
	}

	return {
		eyes : options.e || "oo",
		tongue : options.T || "  "
	};
};


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/replacer.js":
/***/ (function(module, exports) {

module.exports = function (cow, variables) {
	var eyes = escapeRe(variables.eyes);
	var tongue = escapeRe(variables.tongue);

	if (cow.indexOf("$the_cow") !== -1) {
		cow = extractTheCow(cow);
	}

	return cow
		.replace(/\$thoughts/g, variables.thoughts)
		.replace(/\$eyes/g, eyes)
		.replace(/\$tongue/g, tongue)
		.replace(/\$\{eyes\}/g, eyes)
		.replace(/\$\{tongue\}/g, tongue)
	;
};

/*
 * "$" dollar signs must be doubled before being used in a regex replace
 * This can occur in eyes or tongue.
 * For example:
 *
 * cowsay -g Moo!
 *
 * cowsay -e "\$\$" Moo!
 */
function escapeRe (s) {
	if (s && s.replace) {
		return s.replace(/\$/g, "$$$$");
	}
	return s;
}

function extractTheCow (cow) {
	cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
	var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);

	if (!match) {
		console.error("Cannot parse cow file\n", cow);
		return cow;
	} else {
		return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
	}
}

/***/ }),

/***/ "./node_modules/os-browserify/browser.js":
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cowsay_browser__ = __webpack_require__("./node_modules/cowsay-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cowsay_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cowsay_browser__);
var _jsxFileName = "/Users/marvin/Documents/web-playground/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_1_cowsay_browser___default.a.say({
    text: 'hi there!'
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map