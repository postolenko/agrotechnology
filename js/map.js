if( document.getElementsByClassName("map-box")[0] ) {

	var map;

	// var marker;
	// var image = 'img/pin.svg';

	var styles;

	function initMap() {

		var styles = [
		    {
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "gamma": 0.8
		            },
		            {
		                "lightness": 4
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#5dff00"
		            },
		            {
		                "gamma": 4.97
		            },
		            {
		                "lightness": -5
		            },
		            {
		                "saturation": 100
		            }
		        ]
		    }
		];

		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.7933604, lng: 37.5407951},
			scrollwheel: false,
			scaleControl: false,
			mapTypeControl: false,
			zoom: 15
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.7933604, lng: 37.5428951},
			map: map,
			// icon: image,
			title: 'ИНАГРОПРОМ'
		});

		marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		// map.mapTypes.set('map_style', styledMap);
		// map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

}



