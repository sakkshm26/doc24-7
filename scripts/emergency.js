// function incrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
//     if (!isNaN(currentVal)) {
//       parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//       parent.find('input[name=' + fieldName + ']').val(0);
//     }
//   }
  
//   function decrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
//     if (!isNaN(currentVal) && currentVal > 0) {
//       parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//       parent.find('input[name=' + fieldName + ']').val(0);
//     }
//   }

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}