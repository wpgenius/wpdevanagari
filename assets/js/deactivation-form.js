/* 
    Appends deactivation feedback form to body
    
*/
const WPMARATHI_FORM_HTML = 
`<div id='wpmarathi-deactivate-form' class='modal'>
<h1>Deactivate WPMarahi</h1>
<hr>
<form id='wpmarathi-feedback'>
    <ul>
        <li>
            <label>
                <input type="radio" name="reason" required value="1">
                The plugin suddenly stopped working
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="reason" required value="2">
                I no longer need the plugin
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="reason" required value="3">
                I only needed the plugin for a short period
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="reason" required value="4">
                The plugin broke my site
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="reason" required value="5">
                It's a temporary deactivation. I'm just debugging an issue.
            </label>
        </li>
        <li>
            <label>
                <input type="radio" name="reason" required id='wpmarathi-other-reasons' value="6">
                Other
                <div id='wpmarathi-more-info' style='display:none;'>
                    <p><b>Kindly tell us the reason so we can improve.</b></p>
                    <textarea class='large-text' id='wpmarathi-other-reasons' name='other_reason'></textarea>
                </div>
            </label>
        </li>
    </ul>
    <hr>
    <label>
        <input type="checkbox" name='anonymous' value='1'>
        Anonymous feedback
    </label>
    <button class="button" style="float:right">Deactivate</button>
</form>
</div>
`;

jQuery(WPMARATHI_FORM_HTML).appendTo('body');