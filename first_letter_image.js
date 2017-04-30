		function firstLetterImage(letter){
			letter = letter || "A";
			var canvas = document.createElement("canvas");
			canvas.width = 100;
			canvas.height = 100;
			canvas.style.display = "none";
			var context = canvas.getContext("2d");
			context.clearRect(0,0,canvas.width,canvas.height);
			context.fillStyle = "purple";
			context.fillRect(0,0,canvas.width,canvas.height);
			context.fillStyle = "yellow";
			context.textBaseline = "middle"
			context.textAlign = "center";
			context.font= "normal 50px arial";
			context.fillText(letter.charAt(0).toUpperCase(),50,50,50);
			return canvas.toDataURL();
		}
