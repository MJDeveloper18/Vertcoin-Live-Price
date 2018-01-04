$(document).ready(function() {

getPrice();

  function getPrice() {

    var url = "https://api.coinmarketcap.com/v1/ticker/vertcoin/";
    $.getJSON(url, function(data) {
      $('#live-price').html(data[0].price_usd);
      $('#live-change').html(data[0].percent_change_1h);
      $('#live-change24').html(data[0].percent_change_24h);
      $('#live-change7').html(data[0].percent_change_7d);
    });
  }

});
