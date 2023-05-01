/*
 * Metro-tiles:  Css3 windows metro tiles
 * Author     :  Tim Holman
 * @Author    :  @twholman
 * Get this on github: https://github.com/tholman/tileJs
 */

function Tile( element ){
	
	// Tile element	
	var tile = element;

	// Global settings

	// Declare css for when the tile is in its idle state.
    var idleCss = "rotateX( 0deg ) rotateY( 0deg ) translateZ( 0px )";


	var initialize = function() {

		// Set transform origin to the center of the element.
		tile.style.webkitTransformOrigin = "50% 50%";
		tile.style.MozTransformOrigin = "50% 50%";
		tile.style.msTransformOrigin = "50% 50%";
		tile.style.oTransformOrigin = "50% 50%";
		tile.style.transformOrigin = "50% 50%";

		// Make sure the parent preserves the 3d perspective
		tile.parentElement.style.webkitTransformStyle = "preserve-3d";
		tile.parentElement.style.MozTransformStyle = "preserve-3d";
		tile.parentElement.style.msTransformStyle = "preserve-3d";
		tile.parentElement.style.oTransformStyle = "preserve-3d";
		tile.parentElement.style.transformStyle = "preserve-3d";

		// Set element transform times
		tile.style.webkitTransition = "-webkit-transform 0.08s";
		tile.style.MozTransition = "-moz-transform 0.08s";
		tile.style.msTransition = "-ms-transform 0.08s";
		tile.style.oTransition = "-o-transform 0.08s";
		tile.style.transition = "transform 0.08s";

		// This gives an antialiased effect for transforms in firefox.
		tile.style.outline = "1px solid transparent";

		// Font smoothing for webkit.
		tile.style.webkitFontSmoothing = "antialiased";

		// Listen to mouse events for the tile.
		tile.addEventListener('mousedown', MouseDown, false);
		
	}


	var pushTile = function( x, y ){

		// Get the elements width and height.
		var width = tile.offsetWidth;
		var height = tile.offsetHeight;

		var translateString = "perspective( 800px ) ";
		

		/*  Tilt based on position clicked
		 *  
		 *  Not quite sure how msft do this, but here's my logic:
		 *
		   *  If the click is closer to the left, right, top or bottom:
		   *    Then tilt in that direction
		   *
		   *  Unless the click is in the middle quater of the tile:
		   *    In which case, push the tile down.
		   *
		 */

		// If the click is in the center quater of the element, push down.
		if ( x > width/4 && x < (width/4 * 3) && y > height/4 && y < (height/4 * 3) ) {

			translateString += "rotateX( 0deg ) rotateY( 0deg ) translateZ( -30px )";
		}
		
		// is the user closer to the right/left hand side?
		else if ( Math.min( x, width - x) < Math.min( y, height - y) ) {

			// Tilt on the left side
			if ( x < width - x ) {

				translateString += "rotateX( 0deg ) rotateY( -20deg ) translateZ( 0px )";

			// Tilt on the right side
			} else {

				translateString += "rotateX( 0deg ) rotateY( 20deg ) translateZ( 0px )";
			}

		// the user is closer to the top/bottom side (also the default)
		} else {

			// Tilt on the top
			if ( y < height - y ) {

				translateString += "rotateX( 20deg ) rotateY( 0deg ) translateZ( 0px )";

			// Tilt on the bottom
			} else {

				translateString += "rotateX( -20deg ) rotateY( 0deg ) translateZ( 0px )";
			}
		}

		// Apply transformation to tile.
		tile.style.webkitTransform = translateString;
		tile.style.MozTransform = translateString;
		tile.style.msTransform = translateString;
		tile.style.oTransform = translateString;
		tile.style.transform = translateString;

		document.addEventListener('mouseup',   MouseUp,   false);    

	};
	
	var MouseDown = function( event ){

		// Chrome
		if ( event.offsetX ) {
			pushTile( event.offsetX, event.offsetY );
			return;
		}

		// Non offsetX browsers
		var tilePosition = elementPosition( tile );
		var x = event.pageX - tilePosition.x;
		var y = event.pageY - tilePosition.y;
		
		pushTile( x, y );
		
	};
	

	var MouseUp = function( event ){

		// Set the element to its idle state
		tile.style.webkitTransform = idleCss;
		tile.style.MozTransform = idleCss;
		tile.style.msTransform = idleCss;
		tile.style.oTransform = idleCss;
		tile.style.transform = idleCss;

		document.removeEventListener('mouseup',   MouseUp,   false);
	};

	// Element position finding for non webkit browsers.
	// How will this perform on mobile?
	var getNumericStyleProperty = function(style, prop){
    	return parseInt(style.getPropertyValue(prop),10) ;
	}

	var elementPosition = function( e ){
		var x = 0, y = 0;
	    var inner = true ;
	    do {
	        x += e.offsetLeft;
	        y += e.offsetTop;
	        var style = getComputedStyle(e,null) ;
	        var borderTop = getNumericStyleProperty(style,"border-top-width") ;
	        var borderLeft = getNumericStyleProperty(style,"border-left-width") ;
	        y += borderTop ;
	        x += borderLeft ;
	        if (inner){
	          var paddingTop = getNumericStyleProperty(style,"padding-top") ;
	          var paddingLeft = getNumericStyleProperty(style,"padding-left") ;
	          y += paddingTop ;
	          x += paddingLeft ;
	        }
	        inner = false ;
	    } while (e = e.offsetParent);
	    return { x: x, y: y };
	}
  
  // Display for demo.
  this.pushTile = pushTile;
  this.mouseUp = MouseUp;
	
	// Initialize the tile.
	initialize();
}

// Find all tile elements
var tileElements = document.getElementsByClassName( 'metro-tile' );
var i;
var tiles = [];

// Apply tile functions 
for ( i = 0; i < tileElements.length; i++ ) {

	tiles.push( new Tile( tileElements[i] ) );

}

// Additional js for the codepen Demo.

setTimeout(function(){tiltTile(tiles[0], 5, 10)}, 100);
setTimeout(function(){mouseUp(tiles[0])}, 400);

setTimeout(function(){tiltTile(tiles[1])}, 500);
setTimeout(function(){mouseUp(tiles[1])}, 800);

setTimeout(function(){tiltTile(tiles[2], 100, 100)}, 900);
setTimeout(function(){mouseUp(tiles[2])}, 1200);

setTimeout(function(){tiltTile(tiles[3], 200, 60)}, 1300);
setTimeout(function(){mouseUp(tiles[3])}, 1600);

setTimeout(function(){tiltTile(tiles[4])}, 1700);
setTimeout(function(){mouseUp(tiles[4])}, 2000);

setTimeout(function(){tiltTile(tiles[5],0, 0)}, 2100);
setTimeout(function(){mouseUp(tiles[5])}, 2400);

function tiltTile( tile, x, y ){
 tile.pushTile(x,y);
}
function mouseUp( tile ){
 tile.mouseUp();
}












