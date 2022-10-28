<?php
$background_options = eg_image_background_page_header( $page_image['ID'] );
?>
<div class="page_header theme_<?php echo $page_color; ?>">
  <div class="page_header_background js-background" data-background-options="<?php echo eg_json_options( $background_options ); ?>"></div>
  <div class="fs-row page_header_row" data-checkpoint-animation="fade-up">
    <div class="fs-cell fs-md-5 fs-lg-10 fs-xl-10 page_header_cell">
      <h1 class="page_nav_title"><span><?php echo eg_format_content( $page_nav_title ); ?></span></h1>
      <?php if ( ! empty( $page_title ) ) : ?>
      <h2 class="page_title"><?php echo eg_format_content( $page_title ); ?></h2>
      <?php endif; ?>

      <?php if($page_header_content): ?>
        <div class="page-header-content">
        <?php echo $page_header_content; ?>  
        </div>
        
      <?php endif; ?>

      <?php if($page_header_link): ?>
        <a class="page-header-link" href="<?php echo $page_header_link['url'] ?>"><?php echo $page_header_link['title']; ?></a>
      <?php endif; ?>
    </div>
  </div>
</div>
