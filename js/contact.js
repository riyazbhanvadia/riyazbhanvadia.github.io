$(document).ready(function() {
    $('[data-mz-role="contact-form"]').each(function() {
        var $form = $(this);
        $form.on('submit', function(e) {
            e.preventDefault();
            var action = $form.prop('action');
            action += (action.indexOf('?') !== -1) ? "&" : "?";
            $.getJSON(action + $form.serialize() + "&callback=?").then(function(res) {
                if (res === "OK") {
                    $form.html('<i class="fa fa-check-circle" aria-hidden="true"></i><h3 class="mz-sucess"><i class="fa fa-smile-o" aria-hidden="true"></i>&nbsp;Thank you! I will respond to your mail as soon as possible.</h3');
                } else {
                    $form.append('<span class="mz-validationmessage">Sorry, an error occurred. Please make sure all fields are filled out!</span>');
                }
            });
        });
    });
});
