var Pokeman = function(id) {
	var self = {};

	self.id = id;
	self.type = "Sucky Entertainment Pokéman";
	self.element = "Electric";
	self.weight = 135;
	self.feet = 5;
	self.inches = 8;
	self.blurb = "This pokéman is from the distant land of Brossard. It is said that it is stupid enough to play through Dragon Quest VIII. Highly loyal, you will never get rid of it.";
	self.image = "url(images/Jonathan.jpg)";
	self.bottomimage = "url(images/JonathanPokeman.jpg)";
	self.cry = "Osti de jeu de pisse!";
	self.cryAudio = "cries/JonCry.mp3";
	self.area = "Unknown";

	return self;
};

var selected = -1;

var jo = Pokeman("#Jo");
var alexi = Pokeman("#Alexi");
var seb = Pokeman("#Seb");
var william = Pokeman("#William");

pokemen = [jo];

alexi.cry = "OOOooooh!";
alexi.image = "url(images/Alexi.jpg)";
alexi.bottomimage = "url(images/HoboAlexi.jpg)";
alexi.feet = 5;
alexi.inches = 11;
alexi.weight = 180;
alexi.type = "Hobo Pokéman";
alexi.element = "Water";
alexi.blurb = "Alexi is the genetic paragon of over 20 nations. It is known for its laziness and ability to play music with any instrument for which human would give money. It is not satisfied unless it eats over 880 pounds of food every day.";
alexi.cryAudio = "cries/AlexiCry.mp3";
alexi.area = "Can be found drinking his musical sorrows around castles"

seb.cry = "Bonjouuur!"
seb.feet = 5;
seb.inches = 8;
seb.type = "Vegan Pokéman";
seb.element = "Grass";
seb.blurb = "Unexperienced pokéman trainers might think it never eats. In fact, Sébastien declines every type of food so it can cook its own meal to maintain its super brain power. Has an IQ that exceeds 5,000."
seb.image = "url(images/Seb.jpg)";
seb.bottomimage = "url(images/SebPokemanPokedex.jpg)";
seb.cryAudio = "cries/Sebcry.mp3"
seb.area = "Likely to be found in tiny spaces"

william.cry = "Saute saute saute non non non!"
william.feet = 6;
william.inches = 3;
william.type = "Police Pokéman";
william.element = "Fire";
william.blurb = "Even though it has great muscle and impressive height, William is known to be a pacific pokéman. Its sense of justice brings down bad guys, but is ineffective against school."
william.image = "url(images/William.jpg)";
william.bottomimage = "url(images/WilliamPokeman.jpg)";
william.area = "Still in his parents' fiery nest";
william.cryAudio = "cries/williamcry.mp3";


var selectedButton = -1;

$(document).ready(function(){	

	var capture = function(pokeman,nextPokeman) {
		$(pokeman).css("background-image", "url(images/pokeball.png)");
		$(pokeman).css("background-position", "left 99% top 50%");
		
		setTimeout(function() {$("#nextpokeman").hide()},4000);
		$("#ownnumber").html(4-toDiscover.length);
		if (pokeman === "#William") {
			$("#nextpokeman").css("background","url(images/DiplomaVince.jpg) no-repeat");
			$("#nextpokeman").css("height", "250px");
			$("#nextpokeman").html("");
			$("#nextpokeman").css("border","none")

		} else {
			$("#nextpokeman").html(nextPokeman);
		};
		$("#nextpokeman").show();
	};

	var joClick = function() {
		clickName("#Jo", "url(images/Jonathan.jpg)");
		selected = 0;
	};

	$("#Jo").on("click", function(){capture("#Jo", "From Professor Oak: Hello! I just got news of a rare Pokéman that likes to hang out around castles!");});

	var alexiClick = function() {
		clickName("#Alexi", "url(images/Alexi.jpg)");
		$("#Alexi").html("No1 ALEXI");
		$("#seennumber").html("2");
		$("#newpokeman").html("You discovered... Alexi!");
		pokemen.push(alexi);
		selected = 1;
		clickArrow();
		$("#Alexi").on("click", function(){capture("#Alexi", "From Professor Oak: Hi! No time to talk, I've just heard that your pantry is being attacked by a Pokéman!");});
	};

	var sebClick = function() {
		clickName("#Seb", "url(images/Seb.jpg)");
		$("#Seb").html("No3 SEBASTIEN");
		$("#seennumber").html("3");
		pokemen.push(seb);
		$("#newpokeman").html("You discovered... Sebastien!");
		selected = 2;
		clickArrow();
		$("#Seb").on("click", function(){capture("#Seb","From Professor Oak: Hello! I have just got a tip about an interesting Pokéman who is nesting with his parents!");});

	};


	var williamClick = function() {
		clickName("#William", "url(images/William.jpg)");
		$("#William").html("No4 WILLIAM");
		$("#seennumber").html("4");
		pokemen.push(william);
		$("#newpokeman").html("You discovered... William!");
		selected = 3;
		clickArrow();
		$("#William").on("click", function(){capture("#William", "Congratulations! You got them all!");});
	};


	toDiscover = [williamClick, sebClick, alexiClick];

	var clickName = function(clicked, source) {
		$(".menuSelector").css("background-color","transparent");
		$("#displayArea").hide();
		$("#displayArea").css("background-image",source);
		$("#displayArea").css("background-repeat","no-repeat");
		$("#displayArea").slideToggle(400);
		$(clicked).css("background-color","#FFF4B8");
	};

	var clickArrow = function() {
		clickName(pokemen[selected].id,pokemen[selected].image);
		if (selectedButton !== -1) {
			selectedButton();
		};

		pokemanSelected = pokemen[selected];

		$("#first").html(pokemanSelected.type);
		$("#second").html(pokemanSelected.element);
		$("#third").html("WT "+pokemanSelected.weight+" lbs. <br/>&emsp;&emsp;&emsp;&emsp; HT "+pokemanSelected.feet+"'"+pokemanSelected.inches+'"');
		$("#fourth").html(pokemanSelected.blurb);
	
		$("#secondimage").css("background-image", pokemanSelected.bottomimage);

		$("audio").attr("src",pokemanSelected.cryAudio);
		$("#cryTranscript").html(pokemanSelected.cry);
		$("#areaBlurb").html(pokemanSelected.area);
	};

	var clickDownArrow = function() {
		selected += 1;
		if (selected > pokemen.length-1) {
			selected = 0;
		};

		clickArrow();
	};
	
	var clickUpArrow = function() {
		selected += -1;
		if (selected < 0) {
			selected = pokemen.length-1;
		};

		clickArrow();
	};

	$("#upArrow").on("click", clickUpArrow);
	$("#downArrow").on("click", clickDownArrow);

	var clickBelowButton = function(clicked) {
		$(".belowButton").css("background-color", "#FFB827");
		$(".infowindow").hide();
		$("#secondimage").hide();
		$(clicked).css("background-color", "#FFF4B8");

	}

	var clickInfoButton = function() {
		if (selected > -1) {
			selectedButton = clickInfoButton;
			clickBelowButton("#info");
			$("#secondimage").slideToggle();
			$(".infowindow").slideToggle();
			$("#cryTranscript").hide();
			$("#areaBlurb").hide();
		};
	};

	var clickCryButton = function() {
		if (selected > -1) {
			selectedButton = clickCryButton;
			clickBelowButton("#cry");
			$("audio")[0].play();
			$("#cryTranscript").slideToggle();
			$("#areaBlurb").hide();
		};
	};

	var clickAreaButton = function() {
		if (selected > -1) {
			selectedButton = clickAreaButton;
			clickBelowButton("#area");
			$("#areaBlurb").slideToggle();
		};
	};


	$("#info").on("click", clickInfoButton);
	$("#cry").on("click", clickCryButton);
	$("#area").on("click", clickAreaButton);

	var clickScanButton = function() {
		$(this).css("background-color", "#FFF4B8");

		scanning = $("#scanning");
		
		scanning.show();
		var delay = 800;

		setTimeout(function() {scanning.html("Scanning.")},delay);
		setTimeout(function() {scanning.html("Scanning..")}, delay*2);
		setTimeout(function() {scanning.html("Scanning...")}, delay*3);
		setTimeout(function() {scanning.html("Scanning")},delay*4);
		setTimeout(function() {scanning.html("Scanning.")},delay*5);
		setTimeout(function() {scanning.html("Scanning..")}, delay*6);
		setTimeout(function() {scanning.html("Scanning...")}, delay*7);

		setTimeout(function() {scanning.hide()}, delay*8);

		scanning.html("Scanning");

		setTimeout(function() {$("#scan").css("background-color", "#FF3131")},delay*8);

		if (toDiscover.length < 1) {
			$("#newpokeman").html("You scanned them all!");
		};
		setTimeout(function() {discoverNext()}, delay*8);

		setTimeout(function(){$("#newpokeman").hide()},delay*14);
	};

	var discoverNext = function() {
		$("#newpokeman").slideToggle();
		if (toDiscover.length > 0) {
			toDiscover.pop()();

		};
	}

	$("#scan").on("click", clickScanButton);

});



