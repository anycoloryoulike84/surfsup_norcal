	$(document).ready(function(){






		
		// search input

	 $("#txt_name").keypress(function() {
	      var value = $("#txt_name").val(); 
	      $("#viz-wrapper").text(value);
	    });

	var value = $( "#beach option:selected" ).text();

	console.log(value)
	 // option select option

		$('select').on('change', function(){

	var url = 'http://api.wunderground.com/api/595d000c42bcd508/conditions/q/IA/' + value + '.json'
	var url2 = "weatherdata.json"


// JETTY BEACH
	if ( $("#beach option:selected").val() == 'eureka') {

		 $.ajax({
		  url : "https://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Eureka.json",
		  dataType : "jsonp",
		  success : function(parsed_json) {
		  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );
		  
		  }
		  });


// BOLINAS BEACH
	}  else if  ( $("#beach option:selected").val() == 'bolinas') {

	 $.ajax({
	  url : "https://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Bolinas_Beach.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	 	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );


	  
	  }


	  });

// OCEAN BEACH
	} else if  ( $("#beach option:selected").val() == 'oceanbeach') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/San_Francisco.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	 var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });
// CHRONKITE
	} else if  ( $("#beach option:selected").val() == 'chronkite') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Headlands.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	 var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });

// STINSON

	}  else if  ( $("#beach option:selected").val() == 'stinson') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Stinson_Beach.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
		var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });

// SANTA CRUZ

	} else if  ( $("#beach option:selected").val() == 'santacruz') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Santa_Cruz.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	 var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });

// PACIFICA

	} else if  ( $("#beach option:selected").val() == 'pacifica') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Pacifica.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });

// HALF MOON BAY

	}  else if  ( $("#beach option:selected").val() == 'halfmoonbay') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Half_Moon_Bay.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });


	} else if  ( $("#beach option:selected").val() == 'mendocino') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Mendocino.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });


	}  else if  ( $("#beach option:selected").val() == 'sonoma') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Bodega_Bay.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: " + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });


	}   else if  ( $("#beach option:selected").val() == 'delnorte') {

	 $.ajax({
	  url : "http://api.wunderground.com/api/595d000c42bcd508/geolookup/conditions/q/CA/Klamath.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	  var location = parsed_json['location']['city'];
		  var temp_f = parsed_json['current_observation']['temp_f'];
		  var wind = parsed_json['current_observation']['wind_string'];
		  $('h1').html("<br>Current temperature at " + $("#beach option:selected").text() + " is: <br>" + temp_f + "°F <br>Wind report: <br>" + wind );

	  }
	  });


	}    else if  ( $("#beach option:selected").val() == 'selectabeach') {

	  $('h1').html("<br>Please select a beach from options");
	  


	} 


	});










						// Static method data retrieval
						
				// $.getJSON( url2, function( json ) {
				//    $('#weatherdata')

				// .append( "City: <br>" + json[0]
				// .current_observation.observation_location.city +

				//  "<br> Coordinates: <br>" + json[0].current_observation
				// .observation_location.longitude + ', ' + json[0]
				// .current_observation.observation_location.latitude
				//  )

				// .append( " <br>Temperature: <br>" + json[0].current_observation.temp_f )

				// .append( " <br>Wind Description: <br>" + json[0].current_observation.wind_string )

				// .append( "Temperature: <br>" + json[0].current_observation.wind_mph );

				//  });








	});
