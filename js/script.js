var teaToTable= function(teaspoon) {
  return teaspoon / 3;
};

var tableToCup= function(tablespoons) {
  return tablespoons / 16;
};

var inputTable = parseInt(prompt("Enter tablespoons: "));

alert(inputTable + " is " + tableToCup(inputTable).toFixed(2) + " in cups");
