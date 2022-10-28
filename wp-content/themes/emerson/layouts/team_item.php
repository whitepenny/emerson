<?php
$image = get_field( 'image' );
$credentials = get_field( 'credentials' );
$position = get_field( 'position' );
?>
<div class="team_item fs-cell fs-xs-full fs-sm-half fs-md-half fs-lg-third" data-checkpoint-animation="fade-up" data-checkpoint-container=".team_list">
  <a href="<?php the_permalink(); ?>" class="team_item_link">
    <?php if ( ! empty( $image ) ) : ?>
      <?php eg_responsive_image( eg_image_team_list( $image['ID'] ), 'team_item_image' ); ?>
    <?php endif; ?>
    <div class="team_item_container">
      <h2 class="team_item_title">
        <?php the_title(); ?><?php if ( ! empty( $credentials ) ) echo ', ' . $credentials; ?>
      </h2>
      <div class="team_meta">
        <span class="team_position"><?php echo $position; ?></span>
      </div>
    </div>
  </a>
</div>
