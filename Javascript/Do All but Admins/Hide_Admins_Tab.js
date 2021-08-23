if ($.inArray("admin", ENV.current_user_roles) == -1) {
document.querySelector("#account_settings_tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-active.ui-state-active").style.display = 'none';
}
