<?php
global $header_transparent;

$main_title = get_bloginfo( 'name' );

$scripts_head = get_field( 'scripts_head', 'option' );
$scripts_body = get_field( 'scripts_body', 'option' );

$search_page = get_field( 'global_search_page', 'option' );
$register_page = get_field( 'global_register_page', 'option' );
?><!DOCTYPE html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <?php wp_head(); ?>
    <?php eg_favicons(); ?>
    <?php echo $scripts_head; ?>
  </head>
  <body <?php body_class( 'fs-grid fs-grid-fluid' ); ?> >
    <?php echo $scripts_body; ?>

    <div class="container js-mobile_nav_content">

      <header class="header <?php echo ( $header_transparent ) ? 'flipped' : ''; ?>">
        <div class="fs-row">
          <div class="fs-cell">
            <a href="<?php echo get_home_url(); ?>" class="header_logo">
              <span class="icon logo_color"></span>
              <span class="screenreader"><?php echo $main_title; ?></span>
            </a>
            <div class="utility_nav">
              <?php if ( ! empty( $search_page ) ) : ?>
              <a href="<?php echo get_the_permalink( $search_page->ID ); ?>" class="utility_nav_search">
                <span class="icon search_red"></span>
                Search Jobs
              </a>
              <?php endif; ?>
              <?php if ( ! empty( $register_page ) ) : ?>
              <a href="<?php echo get_the_permalink( $register_page->ID ); ?>" class="utility_nav_button">
                Register
              </a>
              <?php endif; ?>
            </div>
            <div class="main_nav">
              <?php eg_main_navigation( 2 ); ?>
            </div>
            <button type="button" class="mobile_nav_handle js-mobile_nav_handle">
              <span></span>
              Menu
            </button>
          </div>
        </div>
      </header>

      <div class="page_wrapper">
        <main class="main">
