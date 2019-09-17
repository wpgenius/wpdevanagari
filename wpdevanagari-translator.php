<?php
/*
Plugin Name: WPDevanagari - Type in Devanagari in WordPress
Plugin URI: https://plugins.gallery
Description: Type in Devanagari inside WordPress. Hello -> हॅलो. WPDevanagari helps you save time by letting you type inside Classic Editor and Gutenberg in Devanagari.
Author: Team WPGenius
Author URI: https://wpgenius.in
Version: 1.4.0
Requires at least: 5.0
*/

include(plugin_dir_path(__FILE__).'constant.php');
include(plugin_dir_path(__FILE__).'class/wpdevanagari-transliterator.php');
include(plugin_dir_path(__FILE__).'class/wpdevanagari-deactivation-feedback.php');

add_action( 'admin_enqueue_scripts', function($hook){
    new WPDevanagari_Transliterator($hook);
    new WPDevanagari_Deactivation_Feedback($hook);
});

/*
    Enqueue Required FrontEnd Scripts.
*/
add_action( 'wp_enqueue_scripts', function($hook){
    wp_enqueue_style('wpdevanagari-frontend',
        plugin_dir_url(__FILE__).'/assets/css/wpdevanagari-frontend.css',
        null,
        WPDEVANAGARI
    );
});