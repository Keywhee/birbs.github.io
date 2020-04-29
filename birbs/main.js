// Variables

var gd = {
	birbs: 0,
	birbList: [],
	coins: 0
}

// Birb stuff  
function buyBirb()
{
	var birbPrice = gd.birbs * Math.pow(3, gd.birbs);
	if (gd.coins >= birbPrice)
	{
		gd.coins -= birbPrice;
		gd.birbs++;
		gd.birbList.push([chooseBirb, 0]);
		document.getElementById("coins").innerHTML = gd.coins;
		document.getElementById("birbCount").innerHTML = gd.birbs;
		// add more stuff later
	};
}

function displayBirbs()
{
	for (var i = 0; i < birbs; i++)
	{
	};
}

function chooseBirb()
{
	// do something 
}	

// Skills

// Makes your experience go up
function train(num)
{
	gd.birbList[0][1] += num;
	document.getElementById("experience").innerHTML = gd.birbList[0][1];
};

// Necessities

// Dueling

// Contests

// Saving

function saving()
{
	localStorage.getItem("birbs_save", JSON.stringify(gd));
}

function load()
{
	var savegame = JSON.parse(localStorage.getItem("birbs_save"));
	if (savegame != null) {
		gd = savegame;
	}
}

function deleteSave()
{
	localStorage.removeItem("birbs_save");
}

// Utility

// Rounds to nearest tenth
function cleanTenths(something)
{
	return Math.round(something * 10)/10;
}

// Loops

window.setInterval(function() {
	// something 
}, 1000);

var autosave = window.setInterval(function() {
	localStorage.setItem("birbs_save", JSON.stringify(gd))
}, 60000);