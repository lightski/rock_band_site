function porthole_shift(target_region) {
	//shift the porthole image on mouseover of navigation
var hover_over = target_region;
var porthole_back = document.getElementById("porthole_back");
var back_position = '0px 0px';
switch(hover_over) {
	case 'blog':
		back_position = '0px 0px';
		break;
	case 'about':
		back_position = '-83px 0px';
		break;
	case 'members':
		back_position = '-166px 0px';
		break;
	case 'store':
		back_position = '-249px 0px';
		break;
	case 'music':
		back_position = '-332px 0px';
		break;
	case 'contact':
		back_position = '-415px 0px';
		break;
}
porthole_back.style.backgroundPosition = back_position;
}
