<?php
/*
Template Name: Contact
*/

get_header();

if ( have_posts() ) :
  while ( have_posts() ) :
    the_post();

    $form = get_field( 'gravity_form' );
    $sidebar_content = get_field( 'sidebar_content' );
?>
<?php get_template_part( 'layouts/page_header' ); ?>
<div class="fs-row page_main">
  <div class="fs-cell fs-lg-8 page_container">
    <div class="page_content">
      <?php the_content(); ?>
    </div>
    <?php
      eg_template_part( 'layouts/partial-gravity_form', array(
        'form' => $form,
      ) );
    ?>
  </div>
  <div class="fs-cell fs-lg-last fs-lg-justify-end fs-lg-4 page_sidebar">
    <div class="page_content sidebar_content">
      <?php echo $sidebar_content; ?>
    </div>
  </div>
</div>
<?php
  endwhile;
endif;

get_footer();
