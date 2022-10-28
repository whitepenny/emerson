<?php
$title = get_sub_field( 'title' );
$logos = get_sub_field( 'logos' );
?>
<div class="logo_row section_padded bg_white" data-checkpoint-animation="fade-up">
  <div class="fs-row fs-lg-justify-center">
    <div class="fs-cell logo_row_cell">
      <h2 class="logo_row_title"><?php echo $title; ?></h2>
      <div class="logo_row_items">
        <?php
          foreach ( $logos as $item ) :
            $file = eg_get_image( $item['image']['ID'], 'scaled-small' );

            if ( empty( $item['link'] ) ) :
        ?>
        <span class="logo_row_item">
          <img src="<?php echo $file['src']; ?>" alt="">
        </span>
        <?php
            else :
        ?>
        <a href="<?php echo $item['link']['url']; ?>" class="logo_row_item">
          <img src="<?php echo $file['src']; ?>" alt="">
        </a>
        <?php
            endif;
          endforeach;
        ?>
      </div>
    </div>
  </div>
</div>
