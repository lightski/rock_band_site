//to do: -fix the setInterval bit at the bottom. 
//			make it so the porthole back image shifts gradually
//		 -merge record_last to be the last bit of porthole_shift
//			that will eliminate need for global
//		-fix weird layout whitespace gaps (css)

last_region = 0; //getting rid of soon...

function record_last(nav_item){
	//keeps track of which nav item the cursor just left
	x_coordinates = new Array();
	x_coordinates[0] = 0;
	x_coordinates[1] = 208;
	x_coordinates[2] = 416;
	x_coordinates[3] = 624;
	x_coordinates[4] = 832;
	x_coordinates[5] = 1024;

	switch(nav_item) {
		case 'blog':
			last_region = x_coordinates[0];
			break;
		case 'about':
			last_region = x_coordinates[1];
			break;
		case 'members':
			last_region = x_coordinates[2];
			break;
		case 'store':
			last_region = x_coordinates[3];
			break;
		case 'music':
			last_region = x_coordinates[4]
			break;
		case 'contact':
			last_region = x_coordinates[5];
			break;
	}
}

function porthole_shift(target_region) {
	//shift the porthole image on mouseover of navigation
	//updated to make the shift more gradual (show off entire graphic)

switch(target_region) {
	//first, set variable to where the viewport is going
	case 'blog':
		new_region = 0;
		break;
	case 'about':
		new_region = -208;
		break;
	case 'members':
		new_region = -416;
		break;
	case 'store':
		new_region = -624;
		break;
	case 'music':
		new_region = -832;
		break;
	case 'contact':
		new_region = -1040;
		break;
}
//vars for the viewport that we're changing and the current location on the image
var porthole_back = document.getElementById("porthole_back");
current_region = last_region;

	if (new_region < last_region) {	
		//while loop decrements
		//clearTimeout(decrementer); //stop the timer
			decrementer = setInterval(function(){decrement_image(current_region,new_region)},1000);
	} else if (new_region > last_region) {
		//while loop must increment
		//	clearTimeout(incrementer); //stop the timer
			incrementer = setInterval(function(){increment_image(current_region, new_region)},1000);
	}
}

function decrement_image(current_region, new_region){
	while (done == false) {
		current_region -=26;
		back_position = current_region + "px 0px";
		porthole_back.style.backgroundPosition = back_position;
		if (current_region == new_region){
			done = true;
		}
	}
}

function increment_image(current_region, new_region){
	while (!done) {
	current_region +=26;
	back_position = current_region + "px 0px";
	porthole_back.style.backgroundPosition = back_position;
		if (current_region == new_region){
			done = true;
		}
	}
}

