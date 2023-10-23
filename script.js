document.getElementById("DC").addEventListener("click", function() {
   
    var downloadLink = document.createElement("a");
    downloadLink.href = "rutvik.pdf"; 
    downloadLink.download = "rutvik.pdf"; 


    var event = new MouseEvent("click");
    downloadLink.dispatchEvent(event);
});


