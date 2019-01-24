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
