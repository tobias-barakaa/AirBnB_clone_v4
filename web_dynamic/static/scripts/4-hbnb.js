$(document).ready(function () {
  const nameAmenity = [];
  
  $('input:checkbox').click(function () {
    if ($(this).is(":checked")) {
      nameAmenity.push($(this).attr('data-name'));
    } else {
      const nameIndex = nameAmenity.indexOf($(this).attr('data-name'));
      nameAmenity.splice(nameIndex, 1);
    }
    $('.amenities h4').text(nameAmenity.join(', '));
  });

  $.get("http://localhost:5001/api/v1/status/", data => {
    if (data.status == "OK") {
      $('DIV#api_status').addClass("available");
    } else {
      $('DIV#api_status').removeClass("available");
    }
  });

  // Add a click event handler for the button
  $('button').click(function () {
    const amenitiesData = {
      amenities: nameAmenity
    };

    // Make a POST request to places_search with the list of checked amenities
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search',
      data: JSON.stringify(amenitiesData),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        // Clear existing places and append new ones
        $('SECTION.places').empty();
        $('SECTION.places').append(data.map(place => {
          return `<article>
                    <!-- Customize the content here based on your place data -->
                  </article>`;
        }));
      }
    });
  });

});

