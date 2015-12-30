<?php

add_theme_support('menus');
add_theme_support('post-thumbnails');

function register_theme_menus(){
	register_nav_menus(
		array(
			'primary-menu' => __('Primary-menu')
		)
	  );
}
add_action('init', 'register_theme_menus');

function tunes_theme_styles(){
	wp_enqueue_style('main_css', get_template_directory_uri() . '/style.css');
}

add_action('wp_enqueue_scripts', 'tunes_theme_styles');

function tunes_theme_js(){

	wp_enqueue_script('theme.js', get_template_directory_uri() . '/assets/javascript/theme.js',
		'', '',false);
}

add_action('wp_enqueue_scripts', 'tunes_theme_js');
?>