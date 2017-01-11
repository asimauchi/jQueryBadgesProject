$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/simauchi3.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response.courses.completed, function(name, value){
            $('#badges').append('<div class=".course"></div>');
        });
      }
    });

});
