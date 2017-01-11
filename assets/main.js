$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/simauchi3.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response, function(name, value){
            $('#badges').append('<div>' + value + '</div>').addClass('.course');
        });
      }
    });

});
