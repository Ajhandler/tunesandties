<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php wp_title(); ?></title>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
	
<header>
	<h1><a href="<?php echo esc_url(home_url('/') );?>" rel="home"><?php bloginfo('name')?></a></h1>

	<?php 
		$defaults = array(
			'container' => false,
			'theme_location' => 'primary-menu',
			'menu_class' => 'assign_later'
		);

		wp_nav_menu($defaults);
	?>
</header>