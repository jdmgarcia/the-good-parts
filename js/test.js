// JavaScript
// 

var statement = {
  type: '',
  get: function(){
    console.log('Value of type: ' + this.type);
  },
  set: function(newType){
    this.type = newType;
  },
  appendChild: function(num, type = 'div') {
    var newLayer = document.createElement(type), secuence = num;

    for (var i =  num - 1; i > 0; i--) {
      secuence += ' - ' + i;
    }
    newLayer.innerHTML = secuence;
    document.getElementById(this.type).appendChild(newLayer);
  }
}

function load(typeStatement) {
  var value = '';

  switch(typeStatement) {
    case 'switch': 
      value = document.getElementById('inputSwitch').value;
      statement.set(typeStatement);
      statement.appendChild(value);
      statement.get();
      break;

    default:
      console.log('No available option in switch: ' + typeStatement);
  }
}
