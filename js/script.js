function init(){   
  var button = document.getElementById('entrybutton');
  button.addEventListener('click', function (event){
    var message = document.getElementById('entryinput').value;
    alert("Yongsi Liu: " + message);
    document.getElementById('textoutput').innerHTML = message;
    console.log(message);
  })

  }

  var window = document.getElementById('entrybutton');
  window.addEventListener('load', init);
