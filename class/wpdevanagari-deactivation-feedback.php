<?php
/**
 * Adds feedback pop-up upon plugin deactivation.
 * @since 1.0.5
 */
class WPDevanagari_Deactivation_Feedback
{
    function __construct($hook)
    {
        if ($hook == 'plugins.php') {
            $this->enqueue_modal_script();
            $this->enqueue_modal_style();

            $this->enqueue_deactivation_script();
        }
    }

    private function enqueue_deactivation_script()
    {
        // Script with HTML form markup.
        wp_enqueue_script(
            'wpmarathi-deactivation-form',
            plugin_dir_url(__DIR__) . 'assets/js/deactivation-form.js',
            'jquery',
            WPDEVANAGARI_VERSION,
            true
        );

        // 
        wp_enqueue_script(
            'wpmarathi-deactivation',
            plugin_dir_url(__DIR__) . 'assets/js/deactivate.js',
            array(
                'wpmarathi-deactivation-form',
                'jquery-modal'
            ),
            WPDEVANAGARI_VERSION,
            true
        );
    }

    private function enqueue_modal_script()
    {
        wp_enqueue_script(
            'jquery-modal',
            "https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js",
            'jquery',
            null,
            true
        );
    }
    private function enqueue_modal_style()
    {
        wp_enqueue_style(
            'jquery-modal',
            'https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css'
        );
    }
}
