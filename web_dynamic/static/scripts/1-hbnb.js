#!/usr/bin/node
$(document).ready(function() {
    let checkedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            checkedAmenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete checkedAmenities[$(this).data('id')];
        }

        let lst = Object.values(checkedAmenities);
        if (lst.length) {
            $('div.amenities h4').text(Object.values(checkedAmenities).join(', '));
        } else {
            $('div.amenities h4').html('&nbsp;');
        }
    });
});
