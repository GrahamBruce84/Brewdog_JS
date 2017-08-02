var app = function(){
  var url = "https://api.punkapi.com/v2/beers"
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var beer = JSON.parse(jsonString);
  showBeer(beer);
};

var showBeer = function(beers){
  var ul = document.getElementById('beer-list');
  
  beers.forEach(function(beer){

    var header = document.createElement('h2');
    header.textContent = "Beer name: " + beer.name;
    ul.appendChild(header);
    var description = document.createElement('li')
    description.innerText = beer.description;
    ul.appendChild(description);

    var malts = document.createElement('h2');
    malts.textContent = "Malt";
    ul.appendChild(malts);
    for(var i=0; i<beer.ingredients.malt.length; i++){
      var malt = document.createElement('li');
      malt.innerText = beer.ingredients.malt[i].name;
      ul.appendChild(malt);
    } 

    var hop = document.createElement('h2');
    hop.textContent = "Hops";
    ul.appendChild(hop);
    for(var i=0; i<beer.ingredients.hops.length; i++){
      var hops = document.createElement('li');
      hops.innerText = beer.ingredients.hops[i].name;
      ul.appendChild(hops);
    }

    var yeasts = document.createElement('h2');
    yeasts.textContent = "Yeast";
    ul.appendChild(yeasts);
    var yeast = document.createElement('li');
    yeast.innerText = beer.ingredients.yeast;
    ul.appendChild(yeast);
    var image = document.createElement('img');
    image.src = beer.image_url;
    ul.appendChild(image);
  })  
}

window.addEventListener('load', app);

















