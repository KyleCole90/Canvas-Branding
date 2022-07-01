function onElementRendered(selector, cb, _attempts) {
    var el = $(selector);
    _attempts = ++_attempts || 1;
    if (el.length) return cb(el);
    if (_attempts == 60) return;
    setTimeout(function() {
      onElementRendered(selector, cb, _attempts);
    }, 250);
  }

  onElementRendered(document.getElementsByClassName("tox-editor-header"), function(e) {
    if(ENV.current_user_roles.includes("student")) document.getElementsByClassName("tox-editor-header")[0].remove();
  }) 