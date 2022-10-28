<?php
get_header();

if ( have_posts() ) :
  while ( have_posts() ) :
    the_post();

    $post_image = get_field( 'post_image' );
    $categories = get_the_category_list( ', ' );
?>
<div class="fs-row page_main post_detail">
  <div class="fs-cell fs-lg-8 page_container">
    <div class="page_content">
      <h1><?php the_title(); ?></h1>
      <div class="post_meta">
        <span class="post_date"><?php the_date( 'F j, Y' ); ?></span>
        <?php if ( ! empty( $categories ) ) : ?>&nbsp;|&nbsp; <?php echo $categories; ?><?php endif; ?>
      </div>
      <?php if ( ! empty( $post_image ) ) : ?>
      <?php eg_responsive_image( eg_image_post_detail( $post_image['ID'] ), 'post_image' ); ?>
      <?php endif; ?>
      <?php the_content(); ?>
      <div class="post_social addthis_toolbox">
        <span class="post_social_label">Share This Post</span>
        <a class="post_social_link facebook addthis_button_facebook">
          <span class="icon social_facebook_white"></span>
          Facebook
        </a>
        <a class="post_social_link twitter addthis_button_twitter">
          <span class="icon social_twitter_white"></span>
          Twitter
        </a>
        <a class="post_social_link googleplus addthis_button_googleplus">
          <span class="icon social_googleplus_white"></span>
          <span class="screenreader">Google+</span>
        </a>
        <a class="post_social_link pinterest addthis_button_pinterest">
          <span class="icon social_pinterest_white"></span>
          <span class="screenreader">Pinterest</span>
        </a>
      </div>
      <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid="></script>
    </div>
  </div>
  <div class="fs-cell fs-lg-last fs-lg-justify-end fs-lg-4 page_sidebar">
    <?php get_template_part( 'layouts/partial', 'sidebar_blog_detail' ); ?>
  </div>
</div>
<?php
  endwhile;
endif;

get_footer();
