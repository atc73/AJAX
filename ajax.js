var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var xhr = document.querySelector("#xhr");
var fetchx = document.querySelector("#fetch");
var jqueryx = document.querySelector("#jquery");
var axiosx = document.querySelector("#axios");

xhr.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
  if(XHR.readyState == 4 && XHR.status == 200){
    var data = JSON.parse(XHR.responseText);
    quote.innerText = data;
  }
};
XHR.open("GET", url);
XHR.send();
})


fetchx.addEventListener("click", function(){
  fetch(url)
  .then(function(response){
    return response.json();
})
  .then(function(data){
    quote.innerText = data;
})
  .catch(function(){
    alert("Problem with the request");
  });
});

$(jqueryx).click(function(){
  $.getJSON(url)
  .done(function(data){
    quote.innerText = data;
  })
  .fail(function(){
    alert("Problem on board");
  });
});

axiosx.addEventListener("click", function(){
  axios.get(url)
  .then(function(res){
    quote.innerText = res.data;
  })
  .catch(function(e){
    alert("We have a problem Sir");
  });
});
