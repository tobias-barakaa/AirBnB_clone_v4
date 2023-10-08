$(document).ready(function() {
  // Create an empty array to store the Amenity IDs.
  var amenityIDs = [];

  // Listen for changes on each `<input>` checkbox tag.
  $('input[type="checkbox"]').change(function() {
    // Get the Amenity ID from the `data-id` attribute.
    var amenityID = $(this).attr('data-id');

    // If the checkbox is checked, add the Amenity ID to the array.
    if ($(this).is(':checked')) {
      amenityIDs.push(amenityID);
    }

    // If the checkbox is unchecked, remove the Amenity ID from the array.
    else {
      amenityIDs.splice(amenityIDs.indexOf(amenityID), 1);
    }

    // Update the `<h4>` tag with the list of Amenities checked.
    $('#amenities h4').text('Amenities: ' + amenityIDs.join(', '));
  });
});
