<?php

$post_type = eg_get_cpt();
$page_id = eg_get_cpt_page( $post_type );

$page_color = get_field( 'page_color', $page_id );
$page_nav_title = get_the_title( $page_id );
$page_title = get_field( 'page_title', $page_id );
$page_image = get_field( 'page_image', $page_id );

eg_template_part( 'layouts/partial-page_header', array(
  'page_color' => $page_color,
  'page_nav_title' => $page_nav_title,
  'page_title' => $page_title,
  'page_image' => $page_image,
) );

if ( is_home() ) {
  $page_id = get_option( 'page_for_posts' );
} else {
  $page_id = get_the_ID();
}
