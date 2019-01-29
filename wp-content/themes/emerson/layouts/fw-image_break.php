<?php
$image = get_sub_field( 'image' );
$label = get_sub_field( 'label' );
$title = get_sub_field( 'title' );
$content = get_sub_field( 'content' );
$buttons = get_sub_field( 'buttons' );

$background_options = eg_image_background_image_callout( $image['id'] );
?>
<div class="image_break">
  <div class="image_break_background js-background" data-background-options="<?php echo eg_json_options( $background_options ); ?>" data-checkpoint-animation="fade-up"></div>
  <div class="fs-row fs-all-justify-center image_break_row">
    <div class="fs-cell fs-md-5 fs-lg-9 fs-xl-9 image_break_cell" data-checkpoint-animation="fade-up">
      <span class="image_break_label"><?php echo $label; ?></span>
      <h2 class="image_break_title"><?php echo $title; ?></h2>
      <div class="page_content image_break_content">
        <?php echo $content; ?>
      </div>
      <div class="image_break_buttons">
        <?php foreach ( $buttons as $button ) : ?>
        <a href="<?php echo $button['link']['url']; ?>" class="image_break_button image_break_button_<?php echo $button['color']; ?>"><?php echo $button['link']['title']; ?></a>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</div>
