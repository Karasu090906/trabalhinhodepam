window.onload = function(){
    document.querySelector("#scan").addEventListener('click', function(){
        
         cordova.plugins.barcodeScanner.scan(
      function (result) {
          if(result.text == '1234'){
              document.querySelector("#dados").innerHTML = "<h1> ACHEIIII </h1>
          }else {
              document.querySelector("#dados").innerHTML = "<h1> cade ?? </h1>"
          }
      },
      function (error) {
          alert("Falha no escaneamento , por favor tente novamente: " + error);
      },
      {
          preferFrontCamera : false, 
          showFlipCameraButton : true, 
          showTorchButton : true, 
          torchOn: false, 
          saveHistory: true, 
          prompt : "Coloque um código de barras na área de scan", 
          resultDisplayDuration: 500, 
          formats : "CODE_39", 
          orientation : "landscape",  
          disableAnimations : true, 
          disableSuccessBeep: true
      }
   );

    });

}    