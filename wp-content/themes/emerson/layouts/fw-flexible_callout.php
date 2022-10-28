<?php
$gravity = get_sub_field( 'gravity' );
$image = get_sub_field( 'image' );
$icon = get_sub_field( 'icon' );
$content = get_sub_field( 'content' );
?>
<div class="flexible_callout gravity_<?php echo $gravity; ?> section_padded_small bg_white">
  <div class="fs-row fs-lg-align-center flexible_callout_row" data-checkpoint-animation="fade-up">
    <div class="fs-cell fs-md-4 fs-lg-7 flexible_callout_cell">
      <div class="page_content flexible_callout_content">
        <?php echo $content; ?>
      </div>
    </div>
    <div class="fs-cell fs-md-2 fs-lg-4 flexible_callout_media">
      <div class="flexible_callout_image">
        <?php eg_responsive_image( eg_image_flexible_callout( $image['id'] ), 'flexible_callout_picture' ); ?>
        <?php if ( ! empty( $icon ) ) : ?>
        <span class="flexible_callout_icon">
          <img src="<?php echo $icon['url']; ?>" alt="">
        </span>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
