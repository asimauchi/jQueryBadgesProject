$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/simauchi3.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response, function(name, value){
            $('#badges').html('<div>' + value + '</div>').addClass('.course');
        });
      }
    });

});
