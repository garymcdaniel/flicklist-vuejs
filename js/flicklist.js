

var api = {
	root: "https://api.themoviedb.org/3",
	token: "8a01e65af03f233d2602db804478c886" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	fetch(`${api.root}/discover/movie?api_key=${api.token}`)
		.then(resp => resp.ok ? resp : Promise.reject(resp))
		.then(function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		})
}


console.log("The script loaded!");
testTheAPI();
