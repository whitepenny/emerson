<?php
get_header();

if ( have_posts() ) :
  while ( have_posts() ) :
    the_post();

    $post_image = get_field( 'image' );
    $credentials = get_field( 'credentials' );
    $position = get_field( 'position' );
    $linkedin = get_field( 'social_linkedin' );
?>
<div class="fs-row page_main team_detail">
  <div class="fs-cell fs-lg-8 page_container">
    <div class="page_content">
      <h1><?php the_title(); ?><?php if ( ! empty( $credentials ) ) echo ', ' . $credentials; ?></h1>
      <div class="team_meta">
        <?php if ( ! empty( $linkedin ) ) : ?>
        <a href="<?php echo $linkedin; ?>" class="team_social_link" target="_blank">
          <span class="icon social_linkedin_white"></span>
          <span class="screenreader">LinkedIn</span>
        </a>
        <?php endif; ?>
        <span class="team_position"><?php echo $position; ?></span>
      </div>
      <?php if ( ! empty( $post_image ) ) : ?>
      <?php // eg_responsive_image( eg_image_post_detail( $post_image['ID'] ), 'team_image' ); ?>
      <?php eg_responsive_image( eg_image_team_list( $post_image['ID'] ), 'team_image' ); ?>
      <?php endif; ?>
      <?php the_content(); ?>
    </div>
    <div class="team_back">
      <a href="<?php echo eg_get_cpt_link( 'team' ); ?>">
        <span class="arrow_back"></span>
        Back to Team
      </a>
    </div>
  </div>
  <div class="fs-cell fs-lg-last fs-lg-justify-end fs-lg-4 page_sidebar">
    <?php get_template_part( 'layouts/partial', 'sidebar' ); ?>
  </div>
</div>
<?php
  endwhile;
endif;

get_footer();
