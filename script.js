$(function() {
  $('#select1').change(function() {
    // Gets the value of selected item in the dropdown.
    var value = $(this).val();

    // Hides all content views on the right.
    $('.item-content').hide();

    // Shows the content view matching the id of the selected item in the dropdown.
    $('#content-item' + value).show();
  })
});