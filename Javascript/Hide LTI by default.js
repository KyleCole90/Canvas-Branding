///// Run this in the devloper console in Chrome/////
//// Don't forget to replace the id with your LTI Id///


function getCookie(name) {
    if (!document.cookie) {
        return null;
    }
    const xsrfCookies = document.cookie.split(';').map(c => c.trim()).filter(c => c.startsWith(name + '='));
    if (xsrfCookies.length === 0) {
        return null;
    }
    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

var id = "123" /// Replace with LTI Id. 
const csrfToken = getCookie("_csrf_token");
var url = window.location.origin + "/api/v1/accounts/1/external_tools/" + id + "?course_navigation[default]=disabled";
await fetch(url,{
    method: 'PUT',
    credentials: "same-origin",
    mode: "same-origin",
    headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken,
        redirect: 'follow'
    }
});
