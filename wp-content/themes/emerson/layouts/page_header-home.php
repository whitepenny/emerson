<?php
$page_id = get_the_ID();

$page_color = get_field( 'page_color', $page_id );
$page_nav_title = get_the_title( $page_id );
$page_title = get_field( 'page_title', $page_id );
$page_intro = get_field( 'page_intro', $page_id );
$page_subtitle = get_field( 'page_subtitle', $page_id );
$page_buttons = get_field( 'page_buttons', $page_id );
$page_image = get_field( 'page_image', $page_id );
$page_background = get_field( 'page_background_image', $page_id );

$background_options = eg_image_background_page_header( $page_background['ID'] );
$background_options_main = eg_image_background_page_header( $page_image['ID'] );
?>
<div class="page_header page_header_home">
  <div class="page_header_top theme_blue">
    <div class="fs-row fs-all-justify-center page_header_top_row" data-checkpoint-animation="fade-up">
      <div class="fs-cell fs-lg-8">
        <h1 class="page_title"><?php echo eg_format_content( $page_title ); ?></h1>
        <?php if ( ! empty( $page_intro ) ) : ?>
        <div class="page_intro">
          <?php echo $page_intro; ?>
        </div>
        <?php endif; ?>
      </div>
    </div>
    <div class="page_header_background js-background" data-background-options="<?php echo eg_json_options( $background_options ); ?>"></div>
  </div>
  <div class="page_header_bottom">
    <div class="fs-row fs-all-justify-center" data-checkpoint-animation="fade-up">
      <div class="fs-cell fs-md-5 fs-lg-11 page_header_cell js-background">

        <div class="page_header_bottom_container js-background" data-background-options="<?php echo eg_json_options( $background_options_main ); ?>">
          <div class="page_header_container">
            <p class="page_header_subtitle"><?php echo eg_format_content( $page_subtitle ); ?></p>
            <div class="page_header_buttons">
              <?php foreach ( $page_buttons as $button ) : ?>
              <a href="<?php echo $button['link']['url']; ?>" class="page_header_button page_header_button_<?php echo $button['color']; ?>"><?php echo $button['link']['title']; ?></a>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
