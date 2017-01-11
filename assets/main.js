$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/simauchi3.json',
      dataType: 'jsonp',
      success: function(response) {
        $.each(response.courses.completed, function(index, course){
            //console.log(course.title);
            $('#badges').append(
                '<div class=".course">' +
                '<h3>'+ course.title + '</h3>' +
                '<img src=' + course.badge + '>' +
                '<a href='+ course.url + 'target=\'_blank\' class=\'btn btn-primary\'> See Course </a>' +
                '</div>'
            );
        });
      }
    });

});
