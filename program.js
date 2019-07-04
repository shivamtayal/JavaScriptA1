"use strict";
window.onload = function () {
    //This binds the file input button from the html file to the 'openFile' function here.
    var fileInput = document.getElementById("fileinput");
    fileInput.onchange = openFile;

	//This opens the file and leaches all the content to be processed later.
	
    function openFile() {
        var outputCanvas = document.getElementById('cvs');
        var ctx = outputCanvas.getContext("2d");
        var f = document.getElementById('fileinput').files[0];

        //This check that the file exists
        if (f) {
            var r = new FileReader();

            //This function runs when the file is read.
            r.onload = function (e) {
                var contents = e.target.result;
                var charCount = [];

                //This creates an array for the 26 alphabets to be stored into later on.
                for (var i = 0; i < 26; i++) {
                    charCount[i] = 0;
                }
				

                //For each character in the file, all the data is being stored as per the alphabets.
				
                for (var i = 0; i < contents.length; i++) {
                    
                    if ((contents.charAt(i)).toLowerCase() === 'a') {
                        charCount[0] += 1;
                    }
					 if ((contents.charAt(i)).toLowerCase() === 'b') {
                        charCount[1] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'c') {
                        charCount[2] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'd') {
                        charCount[3] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'e') {
                        charCount[4] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'f') {
                        charCount[5] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'g') {
                        charCount[6] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'h') {
                        charCount[7] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'i') {
                        charCount[8] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'j') {
                        charCount[9] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'k') {
                        charCount[10] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'l') {
                        charCount[11] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'm') {
                        charCount[12] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'n') {
                        charCount[13] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'o') {
                        charCount[14] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'p') {
                        charCount[15] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'q') {
                        charCount[16] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'r') {
                        charCount[17] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 's') {
                        charCount[18] += 1;
                    }
                    if ((contents.charAt(i)).toLowerCase() === 't') {
                        charCount[19] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'u') {
                        charCount[20] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'v') {
                        charCount[21] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'w') {
                        charCount[22] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'x') {
                        charCount[23] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'y') {
                        charCount[24] += 1;
                    }
					if ((contents.charAt(i)).toLowerCase() === 'z') {
                        charCount[25] += 1;
                    }
                }

                //This stores and displays all the data from the above function.
                
				var data = [charCount[0],charCount[1],charCount[2],charCount[3],charCount[4],charCount[5],charCount[6],charCount[7],charCount[8],charCount[9],charCount[10],charCount[11],charCount[12],charCount[13],charCount[14],charCount[15],charCount[16],charCount[17],charCount[18],charCount[19],charCount[20],charCount[21],charCount[22],charCount[23],charCount[24],charCount[25]];
				
				
				
				//These are properties for rGraph Library.
				
					new RGraph.Bar({
						id: 'cvs',
						data: data,
						options: {
							hmargin: 0,
							gutterLeft: 50,
							gutterBottom: 50,
							titleXaxisBold: true,
							titleXaxis: 'Alphabets',
							titleYaxis: 'Frequency',
							textSize: 8,
							colors: ['rgb(239,21,21)'],
							labels: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
							shadowBlur: 0,
							shadowOffsetx: 2,
							shadowOffsety: 2,
							strokestyle: 'rgb(0,0,0)',
							backgroundGridVlines: false,
							backgroundGridBorder: false,
							labelsAbove: true,
							labelsAboveSize: 10,
							noxaxis: true,
							
							
						}
					}).grow();
					
							}
							

            //This actually reads the file in as text, triggering the above function.
            r.readAsText(f);

        } else {
            alert("Failed to load file");
        }
    };
};


function clearCanvas() {
    var outputCanvas = document.getElementById('cvs');
    var ctx = outputCanvas.getContext("2d");

    //Draws a clear rectangle to wipe the canvas using (canvas.width, canvas.height) to fill up the area.
    ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	//Removes any saved canvas from the rGraph Memory so the cleared canvas is not restored.
	RGraph.ObjectRegistry.Clear();

    //Resets the upload file so new file can be uploaded.
    document.getElementById('fileinput').value = "";
};
