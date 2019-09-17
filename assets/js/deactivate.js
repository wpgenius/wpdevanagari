{
	let wpmarahi_deactivation_url = null;

	const WPMARATHI_FEEDBACK_URL = "https://plugins.gallery";

	/*
		Show modal on deactivation request
		*/

	jQuery(`[data-slug="wpmarahi"] a:contains(Deactivate)`).click(function (event) {
		event.preventDefault();

		//Show modal
		jQuery("#wpmarathi-deactivate-form").modal();

		// Sets deactivation URL
		if (wpmarahi_deactivation_url === null) {
			wpmarahi_deactivation_url = jQuery(this).attr("href");
		}
	});

	jQuery('[name="reason"]').on("change", toggleOtherReasonInput);

	/* AJAX submission */
	jQuery("#wpmarathi-feedback").submit(submitFeedback);

	/*
	 	Function Definations
	*/
	function toggleOtherReasonInput() {

		var inputValue = jQuery(this).val();

		var isChecked = false;

		if (inputValue == 6) {// 6 = "Others"
			isChecked = true;
		}

		// Toggle textarea
		if (isChecked) {
			jQuery('#wpmarathi-more-info').show();
			jQuery('textarea#wpmarathi-other-reasons').attr("required", true);
			return;
		}

		jQuery("#wpmarathi-more-info").hide();
		jQuery("textarea#wpmarathi-other-reasons").removeAttr("required");

	}

	function submitFeedback(event) {
		event.preventDefault();

		var formData = getFormData(this);

		jQuery.post(WPMARATHI_FEEDBACK_URL, { feedback: formData }, function () {
			// Redirect to deactivation URL
			window.location.href = wpmarahi_deactivation_url;
		});
	}

	function getFormData(formElement) {
		// Extract form data
		var rawData = jQuery(formElement).serializeArray();

		/*
			Convert data into simple object
		*/
		var feedbackData = {
			reason: rawData[0].value,
			other_reason: rawData[1].value
		};

		/*
			Append site URL of anonymous is not set.
		*/
		if (rawData[3] === undefined) {
			feedbackData.site = window.location.href.split("wp-admin")[0];
		}

		return JSON.stringify(feedbackData);
	}
}
