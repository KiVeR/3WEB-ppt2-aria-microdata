//Lier un gestionnaire d'événement à la «soumission» d'un événement JavaScript, ou déclencher cet événement sur un élément.
$( "form" ).submit(function(event) {
  //Si cette méthode est appelée, l'action par défaut de l'événement ne sera pas déclenchée.
  event.preventDefault();
  var eventName = $('#event-name').val();
  var startDate = $('#start-date').val();
  var endDate = $('#end-date').val();
  var streetName = $('#street-name').val();
  var postalCode = $('#postal-code').val();
  var cityName = $('#city-name').val();

  $('#result').append(
    '<article itemscope itemtype="http://schema.org/Event" role="dialog" class="row">'+
    '<header>'+
    '<h1 class="event-title" itemprop="name" aria-label="event name" id="name">'+eventName+'</h1>'+
    '<span class="event-date" itemprop="startDate" id="startDate" aria-label="event star date">'+startDate+'</span><br>'+
    '<span class="event-date" itemprop="endDate" id="endDate" aria-label="event end date">'+endDate+'</span><br>'+
    '</header>'+
    '<address class="event-venue" itemprop="location" itemscope itemtype="http://schema.org/Place">'+
    '<div class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">'+
    '<span itemprop="streetAddress" id="streetAddress" aria-label="event location - street address">'+streetName+'</span><br>'+
    '<span itemprop="postalCode" id="postalCode" aria-label="event location - postal code">'+postalCode+'</span><br>'+
    '<span itemprop="addressLocality" id="addressLocality" aria-label="event location - city name">'+cityName+'</span>'+
    '</div>'+
    '</address>'+
    '</article>'
  );
});
