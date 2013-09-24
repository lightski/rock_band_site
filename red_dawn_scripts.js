//		-fix weird layout whitespace gaps (css)

function porthole_shift(target_region) {
	//shift the porthole image on mouseover of navigation
	//updated to make the shift more gradual (show off entire graphic)
	
	//this is the target x coordinates on the background image	
	x_coordinates = new Array();
	x_coordinates[0] = 0;
	x_coordinates[1] = -208;
	x_coordinates[2] = -416;
	x_coordinates[3] = -624;
	x_coordinates[4] = -832;
	x_coordinates[5] = -1024;

	switch(target_region) {
		//first, set variable to where the viewport is going
		case 'blog':
			new_region = x_coordinates[0];
			break;
		case 'about':
			new_region = x_coordinates[1];
			break;
		case 'members':
			new_region = x_coordinates[2];
			break;
		case 'store':
			new_region = x_coordinates[3];
			break;
		case 'music':
			new_region = x_coordinates[4];
			break;
		case 'contact':
			new_region = x_coordinates[5];
			break;
	}
//var for the div whose background image changes x coordinates
	var porthole_back = document.getElementById("porthole_back");
//if this is the first time we're running this, last_region
//should be 0. else it will be carried over from previous runs
	if (typeof last_region == 'undefined') {
		var last_region = 0;
	}

	//check if the new x coordinates are greater or less than the current ones
	if (new_region < last_region) {	
		// decrement x coordinate to reach new_region
		var decrementer = setInterval(function(){decrement_image(last_region,new_region)},1000);
	} else if (new_region > last_region) {
		//increment x coordinate to reach new_region
		var	incrementer = setInterval(function(){increment_image(last_region,new_region)},1000);
	}
}

function decrement_image(last_region,new_region){
		if (last_region == new_region) {
			clearInterval(decrementer);
		} else {
			last_region -= 26;
			back_position = last_region + "px 0px";
			porthole_back.style.backgroundPosition = back_position;
		}
}

function increment_image(last_region,new_region){
	if (last_region == new_region) {
		clearInterval(incrementer);
	} else {
		last_region += 26;
		back_position = last_region + "px 0px";
		porthole_back.style.backgroundPosition = back_position;
	}
}

