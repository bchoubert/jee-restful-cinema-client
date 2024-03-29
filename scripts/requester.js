function request(url, callback) {
	var baseUrl = "http://localhost:8080/cinema/cinema/";	
	var req = new XMLHttpRequest();
	req.open('GET', baseUrl+url, true);
	req.onreadystatechange = function (aEvt) {
		if(req.readyState == 4)
		{
			if(req.status == 200)
			{
				callback(JSON.parse(req.responseText));
			}
			else
			{
				console.error("Erreur XHR : "+req.status+" "+req.responseText);
			}
		}
	}
	req.send(null);
}

function postRequest(url, args) {
	var baseUrl = "http://localhost:8080/cinema/cinema/";
	
	jQuery.ajax({
		headers: { 
			'Content-Type': 'application/x-www-form-urlencoded' 
		},
		'type': 'POST',
		'url': baseUrl+url,
		'data': args
    });


}