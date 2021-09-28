if ($.inArray("admin", ENV.current_user_roles) == -1) {
$("a[href*='content_exports'").hide();
}
