<?php

get_header();

$title = 'Blog';

if ( is_category() ) {
  $title = single_cat_title( '' , false );
}

?>
<div class="fs-row page_main">
  <div class="fs-cell fs-lg-8">
    <div class="page_content">
      <h1><?php echo $title; ?></h1>
    </div>
    <?php get_template_part( 'layouts/post_list' ); ?>
  </div>
  <div class="fs-cell fs-lg-last fs-lg-justify-end fs-lg-align-start fs-lg-4 page_sidebar">
    <?php get_template_part( 'layouts/partial', 'sidebar_blog' ); ?>
  </div>
</div>
<?php

get_footer();
