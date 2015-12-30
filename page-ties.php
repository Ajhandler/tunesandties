<?php 
/* 
	Template Name: Fly-tie Page
*/
?>

<?php get_header(); ?>

<?php 

$args = array(
	'post_type' => 'tie'
);
$query = new WP_Query($args);
?>

<?php if($query->have_posts() ) : while ($query->have_posts() ) : $query->the_post();?>
	<?php the_field('images'); ?>
	<?php the_field('description'); ?>
<?php endwhile; endif; wp_reset_postdata(); ?>

<?php get_footer(); ?>