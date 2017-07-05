import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="w3-top">
	<div class="w3-bar w3-black w3-card-2">
		<a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
		<a href="#" class="w3-bar-item w3-button w3-padding-large">TEAM</a>
		<a href="#" class="w3-bar-item w3-button w3-padding-large">GAMES</a>
		<a href="#" class="w3-bar-item w3-button w3-padding-large">HIGHLIGHTS</a>
	</div>
  </div>
  
  <div class="w3-content" style="max-width: 2000px; margin-top:46px">
	<div class="w3-container w3-content w3-center w3-padding-64">
		<h2 class="w3-wide">TEAM ASSASSIN GAMING</h2>
		<p class="w3-opacity"><i>Kill One Save Many</i></p>
		<p class="w3-justify">Team Assassin Gaming is a group of gamers, friends, and comrades.  We play both competitive and casual games
		together.</p>
	</div>
  </div>
  `,
  styles:[ `
	body {font-family: "Lato", sans-serif}
	.mySlides {display: none}
  `],
})
export class AppComponent  { name = 'Angular'; }
