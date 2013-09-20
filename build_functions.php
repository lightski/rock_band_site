<?php
//these functions build parts of the pages that are the same
//this approach allows us to have a consistent look with less typing

function build_header_nav() {
	$output = "<header>
		<h1 class='logo'>Red Dawn</h1>
		<img id='porthole_front' src='porthole_front.png' width='208px' height='208px' alt='porthole front'>
		<div id='porthole_back'></div>
		</header>
		<nav>
			<ul>
				<li onmouseover=\"porthole_shift('blog')\" onmouseout=\"record_last('blog')\"><a href='#'>Blog</a></li>
				<li onmouseover=\"porthole_shift('about')\" onmouseout=\"record_last('about')\"><a href='#'>About</a></li>
				<li onmouseover=\"porthole_shift('members')\" onmouseout=\"record_last('members')\"><a href='#'>Members</a></li>
				<li onmouseover=\"porthole_shift('store')\" onmouseout=\"record_last('blog')\"><a href='#'>Store</a></li>
				<li onmouseover=\"porthole_shift('music')\" onmouseout=\"record_last('blog')\"><a href='#'>Music</a></li>
				<li onmouseover=\"porthole_shift('contact')\" onmouseout=\"record_last('blog')\"><a href='#'>Contact</a></li>
			</ul>
		</nav>";
	return $output;
};
?>
