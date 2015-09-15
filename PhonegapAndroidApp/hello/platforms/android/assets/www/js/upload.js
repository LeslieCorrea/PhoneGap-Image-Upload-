var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    var idata;
    var n ;
    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      
  alert(imageData);
      
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
   
        var img = document.getElementById("smallImage");
        ctx.drawImage(img, 10, 10);
        //alert(c.toDataURL());
      var  idata1=imageData;
        alert(idata1);
        var d = new Date();
     var  n1 = d.getTime()+".jpeg";
       localStorage.setItem("n2", n1);
       localStorage.setItem("idata2", idata1);
      
    
    }
    
    
   

  
    // A button will call this function
    //
    function capturePhoto() {
    	document.getElementById("myBtn").disabled = false;
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
      Alert("Inside Capture photo");
    }

    

   
    function onFail(message) {
      alert('Failed because: ' + message);
    }
    function myTimeFunction() {
    	var n2 = localStorage.getItem("n2");
        
        return n2;
        
    }
    function returndata(){
    	var idata2 = localStorage.getItem("idata2");
    	
    	
    	return idata2; 
    	
    }
       	
    	
