/////remove "///" to make the field read only/////

/////User settings page/////

document.getElementById('user_sortable_name').readOnly = true
document.getElementById('user_name').readOnly = true; ///This is the full name field
$('input#course_grading_standard_enabled').prop('disabled',true); /// Grade Scheme unselectable
