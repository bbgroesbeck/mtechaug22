<<<<<<< HEAD
//// Submitting a new comment

let name = $('#name');
let comment = $('#comment');
  
$("#mainSubmit").on('click', function() {
    $('<div class="newComment"><div class="avatar"></div><div class="commentFlex"><span class="userName">' + name.val() + '</span><div class="controls"><input type="button"class="edit"name="edit" value="Edit"><input type="button" class="delete" name="delete" value="Delete"></div></div><p>' + comment.val() + '</p></div>').prependTo("#commentSection");
    name.val('');
    comment.val('');
});

/// Editing existing comments

$("#commentSection").on('click', '.delete', function(){
    (this).closest('.newComment').remove();
});

$("#commentSection").on('click', '.edit', function(){
    $(this).closest(".newComment").append('<div class="editForm"><input type="text" class="edited" placeholder="Edit Comment"><input type="submit" value="Submit" class="submit submitEdit"></div>');
    let edited = $('.edited');
});

$("#commentSection").on('click', '.submitEdit', function() {
    let first = $(this).parent();
    let second = $(first).prev();
    $(second).text($('.edited').val());
    $('.editForm').remove();
});
=======
$('.navItem').css('color', 'white');

$('#nav').css('background-color', '#145');

$('li:nth-of-type(even)').css('background-color', '#ccc');

$('li:nth-of-type(odd)').css('background-color', '#aaa');

$('input').value('Daniel');
>>>>>>> 86167365cc46ed62d24911e4e053c5e0852a7dcd
