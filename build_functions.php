<?php
//these functions build parts of the pages that are the same
//this approach allows us to have a consistent look with less typing

function build_header_nav() {
	$output = "<header>
		<h1>Red Dawn</h1>
		<img id='porthole_front' src='porthole_front.png' width='83px' height='83px' alt='porthole front'>
		<div id='porthole_back'></div>
		</header>
		<nav>
			<ul>
				<li onmouseover=\"porthole_shift('blog')\"><a href='#'>Blog</a></li>
				<li onmouseover=\"porthole_shift('about')\"><a href='#'>About</a></li>
				<li onmouseover=\"porthole_shift('members')\"><a href='#'>Members</a></li>
				<li onmouseover=\"porthole_shift('store')\"><a href='#'>Store</a></li>
				<li onmouseover=\"porthole_shift('music')\"><a href='#'>Music</a></li>
				<li onmouseover=\"porthole_shift('contact')\"><a href='#'>Contact</a></li>
			</ul>
		</nav>";
	return $output;
};
?>
