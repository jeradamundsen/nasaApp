angular.module('nasaApp').service('imageService', function(){

  this.getMeteoriteImages= function(){
    return meteoriteImages;
  }

  var meteoriteImages= [
    {
      type:"Howardite",
      imageUrl: "./images/howardite.jpg"
    },
    {
      type:"L3",
      imageUrl: "./images/L3_correct.jpeg"
    },
    {
      type:"Angrite",
      imageUrl: "./images/angrite.jpg"
    },
    {
      type: "Eucrite",
      imageUrl: "./images/Eucrite.jpg"
    },
    {
      type: "H5",
      imageUrl: "./images/H5.jpg"
    },
    {
      type: "L6",
      imageUrl: "./images/L6_meteorite.jpg"
    }
  ];
})
