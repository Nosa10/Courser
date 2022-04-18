document.addEventListener("DOMContentLoaded", 
	function (event) {
		// Unobstrusive event binding
		document.querySelector("button").addEventListener("click", function() {
			

			// Call server to get the name
			$ajaxUtils.sendGetRequest("/data/names.txt", function(request) {
				var name = request.responseText;
				document.querySelector("#content").innerHTML =
				 "<h2>Hello " + name + "!";
			});

			
		});
		// function sayHello (event) {
		// 	this.textContent = "Said it";
		// 	var name = document.getElementById("name").value
	 //        var message = "<h2>Hello " + name + "!</h2>"
	 //        document.getElementById("content").innerHTML = message;
	 //        if (name === "Cynthia") {
	 //        	var title =
		//         document.querySelector("h1").textContent;
		//         title += " & Lovin' it"

		//         document.querySelector("h1").textContent = 
		//         title
	 //        }

		// }
		// document.querySelector("button").addEventListener("click", sayHello)

	}
);


