<?php
$post_image = get_field( 'post_image' );
$categories = get_the_category_list( ', ' );
?>
<div class="post_item fs-cell fs-md-half fs-lg-half" data-checkpoint-animation="fade-up" data-checkpoint-container=".post_list">
  <a href="<?php the_permalink(); ?>">
    <?php if ( ! empty( $post_image ) ) : ?>
    <?php eg_responsive_image( eg_image_post_list( $post_image['ID'] ), 'post_item_image' ); ?>
    <?php endif; ?>
    <div class="post_item_container">
      <div class="post_meta">
        <span class="post_date post_item_date"><?php the_time( 'F j, Y' ); ?></span>
      </div>
      <h2 class="post_item_title"><?php the_title(); ?></h2>
      <div class="post_item_content">
        <p>
          <?php echo eg_trim_length( strip_tags( get_the_excerpt() ), 200 ); ?>
          <span class="post_item_link">
            <span class="arrow_forward"></span>
            <span class="screenreader">Continue Reading</span>
          </span>
        </p>
      </div>
    </div>
  </a>
  <div class="post_meta">
    <?php echo $categories; ?>
  </div>
</div>
