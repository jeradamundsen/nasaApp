angular.module('nasaApp').controller('chartMainCtrl', function($scope, $http){

var h=100;
var w=400;
var ds;// global var for data
var landingsTotal = 0.0;
var landingsAvg = 0.0;
var metrics = [];


$scope.buildLine = function (){
  var lineFun = d3.svg.line()
    //  var yearRange = 1972   need a function that will loop through data
        .x(function(d){return d.year; })
        .y(function(d){return parseInt(d.reclat); })
        .interpolate("linear");

  var svg=
    d3.select("div").append("svg").attr({
      width:w, height:h});

  var viz = svg.append("path")
    .attr({
      d: lineFun(ds),
      "stroke" : "purple",
      "stroke-width": 2,
      "fill":"none"
    });
}

  $scope.showTotals= function (){
    var t= d3.select("div").append("table");
    //get total
    for(var i=0; i<ds.length; i++){
      landingsTotal += ds[i]['fall']+1; //convert to number
    }

    landingsAvg = landingsTotal / ds.length
    metrics.push("Landings Total: " + landingsTotal);
    metrics.push("Average Meteorite Landings " + landingsAvg);

    $scope.showHeader = function (ds) {
        d3.select("div").append("h1")
            .text(ds.category) + " Meteorite Landing");
    }
//add total to table
    var tr= t.selectAll("tr")
              .data(metrics)
              .enter()
              .append("tr")
              .append("td")
              .text (function(d){return d; })


d3.json("https://data.nasa.gov/resource/gh4g-9sfh.json", function(error, data){
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        ds=data;
    }
        buildLine();
        showTotals();
        showHeader();


    data.contents.forEach(function(ds){
        console.log(ds);
        showHeader(ds);
        buildLine(ds);
})
})// closes the json request..

})// closes the controller module
