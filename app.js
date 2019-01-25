var budgetController = (function(){

var a = 20;

var add = function(b) {
  return a + b;
}

return {
  publicTest: function(c){
    console.log(add(c));
  }
}

})();

var UIController = (function () {


})();


var controller = (function (budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(10);

  return {
    anotherTest: function () {
      console.log(z);
    }
  }
})();