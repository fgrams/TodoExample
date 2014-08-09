// TodoExample Program
// A program for keeping track of a todo list.
// Frank Grams, August 2014

$(document).ready(function(){
    var ballowEdit = true, $currentItem = null;
    
    $('#addButton').click(function(){
        var $textInput = $('#textInput'),
            $newItem = null,
            s = $textInput.val();
        
        if (ballowEdit && '' != s) {
            $newItem = $('<li class="todoItem">' + s + '</li>');
            $('#todoList').append($newItem);
            $newItem.click(listItemHandler);
            $textInput.val('');
        }
    });
    
    $('#removeButton').click(function(){
        if (ballowEdit && null != $currentItem) {
            $currentItem.remove();
            $currentItem = null;
        }
    });
    
    $('#upButton').click(function(){
        var $prevItem = null;
        
        if (ballowEdit && null != $currentItem) {
            $prevItem = $currentItem.prev();
            if (!$prevItem.is(':empty')) {
                $prevItem.before($currentItem);
            }
        }
    });
    
    $('#downButton').click(function(){
        var $nextItem = null;
        
        if (ballowEdit && null != $currentItem) {
            $nextItem = $currentItem.next();
            if (!$nextItem.is(':empty')) {
                $nextItem.after($currentItem);
            }
        }
    });
    
    $('#helpButton').click(function(){
        if (ballowEdit) {
            ballowEdit = false;
            $('#helpButton').addClass('selected');
            $('#todoList').hide();
            $('#helpText').show();
        } else {
            ballowEdit = true;
            $('#helpButton').removeClass('selected');
            $('#todoList').show();
            $('#helpText').hide();
        }
    });
    
    function listItemHandler(){
        if ($(this).hasClass('selected')) {
            $currentItem = null;
            $(this).removeClass('selected');
        } else {
            if (null != $currentItem) {
                $currentItem.removeClass('selected');
            }
            $currentItem = $(this);
            $(this).addClass('selected');
        }
    }
});