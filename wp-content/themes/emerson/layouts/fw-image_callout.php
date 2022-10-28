<?php
$gravity = get_sub_field( 'gravity' );
$image = get_sub_field( 'image' );
$content = get_sub_field( 'content' );

$background_options = eg_image_background_image_callout( $image['id'] );
?>
<div class="image_callout gravity_<?php echo $gravity; ?>" data-checkpoint-animation="fade-up">
  <div class="image_callout_background js-background" data-background-options="<?php echo eg_json_options( $background_options ); ?>"></div>
  <div class="fs-row fs-lg-align-center image_callout_row">
    <div class="fs-cell fs-md-4 fs-lg-7 fs-xl-5 image_callout_cell">
      <div class="page_content image_callout_content">
        <?php echo $content; ?>
      </div>
    </div>
  </div>
</div>
