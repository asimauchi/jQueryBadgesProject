$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/simauchi3.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response, function(){
            console.log(this);
            //$('#badges').html('<div></div>').addClass('.course');
        });
      }
    });

});
