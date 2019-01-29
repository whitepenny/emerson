<?php
$title = get_sub_field( 'title' );
$category = get_sub_field( 'category' );

$args = array(
	'posts_per_page' => 3,
);

if ( ! empty( $category ) ) {
  $args['category'] = $category;
}

$posts = get_posts( $args );
?>
<div class="blog_posts section_padded bg_blue_gray">
  <div class="fs-row blog_posts_row">
    <div class="fs-cell blog_posts_header" data-checkpoint-animation="fade-up" data-checkpoint-container=".blog_posts_row">
      <span class="blog_posts_label">From the Blog</span>
      <h2 class="blog_posts_title"><?php echo $title; ?></h2>
    </div>
		<?php
			foreach ( $posts as $post ) :
				setup_postdata( $post );

				$post_image = get_field( 'post_image' );
		?>
    <div class="post_item fs-cell fs-md-2 fs-lg-4" data-checkpoint-animation="fade-up" data-checkpoint-container=".blog_posts_row">
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
    </div>
		<?php
			endforeach;

			wp_reset_postdata();
		?>
  </div>
</div>
