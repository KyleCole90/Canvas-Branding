$(document).ready(function(){
if($.inArray('admin',ENV['current_user_roles']) == -1) {
    $("a.btn.button-sidebar-wide.delete_course_link").hide();
    $("a.btn.button-sidebar-wide.reset_course_content_button").hide();
    $("a[href*='confirm_action?event=conclude']").hide();
    $('a.no-hover.edit_section_link').hide();
    $('a.no-hover.cant_delete_section_link').hide();
    $('#add_section_form').hide();
    $('input#course_section_name').hide();
    $('#add_section_form > button').hide();
}
})
