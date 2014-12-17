(function($,W,D)
{
	var JQUERY4U = {};

		JQUERY4U.UTIL =
		{
			setupFormValidation: function()
			{
				$("#register-form").validate({
					rules: {
						firstname: "required",
						lastname: "required",
						email: {
							required: true,
							email: true
						},
						comments: {
							required: true,
							maxlength: 1200
							},
						agree: "required"
					},
					messages: {
						firstname: "Please enter your first name",
						lastname: "Please enter your lastname",
						password: {
							required: "Please provide a comment",
							maxlength: "Your comments must be less than 1200 characters."
							},
						email: "Please enter a valid email address",
						agree: "Please accept our policy"
						},
				submitHandler: function(form) {
					form.submit();
				}		
			});
		}
	}
//when the dom has loaded
//setup form validation rules
	$(D).ready(function($) {
		JQUERY4U.UTIL.setupFormValidation();
	});
	
})(jQuery, window, document);
