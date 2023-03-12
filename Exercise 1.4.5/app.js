$(document).ready(function() {
    var result = null;
    
    $('#add').click(function() {
      var firstNumber = parseInt($('#firstNumber').val());
      var secondNumber = parseInt($('#secondNumber').val());
      result = firstNumber + secondNumber;
    });
    
    $('#subtract').click(function() {
      var firstNumber = parseInt($('#firstNumber').val());
      var secondNumber = parseInt($('#secondNumber').val());
      result = firstNumber - secondNumber;
    });
    
    $('#multiply').click(function() {
      var firstNumber = parseInt($('#firstNumber').val());
      var secondNumber = parseInt($('#secondNumber').val());
      result = firstNumber * secondNumber;
    });
    
    $('#divide').click(function() {
      var firstNumber = parseInt($('#firstNumber').val());
      var secondNumber = parseInt($('#secondNumber').val());
      result = firstNumber / secondNumber;
    });
  
    $('#equals').click(function() {
      $('#result').html(result);
    });
  });
  