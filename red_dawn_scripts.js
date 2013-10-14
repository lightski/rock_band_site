/*TO-DO
* add a "return to top" arrow
* craft a better mobile experience
*/

//this script primarily changes the porthole image

//last_region and new_region are referenced by two functions
var last_region = 0;
var new_region;
//incrementer and decrementer are also referenced by two functions
// they hold  setInterval() functions later
var incrementer;
var decrementer;
//variable to stop function if an interval is already set
var interval_set = false;

function porthole_shift(target_region) {
	//shift the porthole image on mouseover of navigation
	//updated to make the shift more gradual (show off entire graphic)
	
	//these are the target x coordinates on the background image	
	x_coordinates = new Array();
	x_coordinates[0] = 0;
	x_coordinates[1] = -208;
	x_coordinates[2] = -416;
	x_coordinates[3] = -624;
	x_coordinates[4] = -832;
	x_coordinates[5] = -1040;

	switch(target_region) {
		//first, set variable to where the viewport is going
		case 'news':
			new_region = x_coordinates[0];
			break;
		case 'music':
			new_region = x_coordinates[1];
			break;
		case 'tours':
			new_region = x_coordinates[2];
			break;
		case 'merch':
			new_region = x_coordinates[3];
			break;
		case 'bio':
			new_region = x_coordinates[4];
			break;
		case 'connect':
			new_region = x_coordinates[5];
			break;
	}
	//var for the div whose background image changes x coordinates
	var porthole_back = document.getElementById("porthole_back");

	//first check if any intervals are already set. wouldn't want to get a bunch of events stacked up now, would we?
	if (interval_set == false) {
		//second, check if the new x coordinates are greater or less than the current ones
		if (new_region < last_region) {	
			// decrement x coordinate to reach new_region; time is milliseconds (1/4 second here)
			decrementer = setInterval(function(){decrement_image(last_region,new_region);}, 125);
			interval_set = true; //no more intervals will be set until this is true
		} else if (new_region > last_region) {
			//increment x coordinate to reach new_region
			incrementer = setInterval(function(){increment_image(last_region,new_region);}, 125);
			interval_set = true; //no more intervals set until this is false
		}
	}
}

function decrement_image(last_x,new_x){
	//change last_x to new_x by DEcreasing 
		if (last_x <= new_x) {
			last_region = new_region; //save value for next run
			interval_set = false; //other intervals can now trigger
			clearInterval(decrementer);
		} else {
			last_x -= 26;
			last_region = last_x;
			back_position = last_x.toString() + "px 0px";
			porthole_back.style.backgroundPosition = back_position;
		}
}

function increment_image(last_x,new_x){
	//change last_x to new_x by INcreasing 
	if (last_x >= new_x) {
		last_region = new_region; //save value for next run
		interval_set = false; //other intervals can now trigger
		clearInterval(incrementer);
	} else {
		last_x += 26;
		last_region = last_x;
		back_position = last_x.toString() + "px 0px";
		porthole_back.style.backgroundPosition = back_position;
	}
}
