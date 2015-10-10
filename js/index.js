$(document).ready(function(){

//////////////////////////////////////////////////////////////
/*Capture city name and run select background image function*/
//////////////////////////////////////////////////////////////

function changeCity(event) {
	event.preventDefault();
	var cityN = $("#city-type").val().toLowerCase();
	citySelect(cityN);
	//$("#city-type").attr("placeholder", "Enter a city name...");

};
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
/*Clear class and input values*/
//////////////////////////////////////////////////////////////

function clearS() {
	$("body").removeClass();
	$("#city-type").val("");
};

//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
/*Select background image function*/
//////////////////////////////////////////////////////////////

function citySelect(cityN) {
	if (cityN == "new york" || cityN == "nyc" || cityN == "new york city" ) {
		clearS();
		$("body").addClass("nyc");
		}	
	else if (cityN == "san francisco" || cityN == "sf" || cityN =="bay area") {
		clearS();
		$("body").addClass("sf");
	}
	else if (cityN == "los angeles" || cityN == "la" || cityN == "lax") {
		clearS();
		$("body").addClass("la");
	}
	else if (cityN == "austin" || cityN == "atx") {
		clearS();
		$("body").addClass("austin");
	}
	else if (cityN == "sydney" || cityN == "syd") {
		clearS();
		$("body").addClass("sydney");
	}
	else {
		$("#city-type").val("");
		alert("No such city found.\nTry again :)");
		
	}
};
//////////////////////////////////////////////////////////////


$("#submit-btn").click(changeCity);
});