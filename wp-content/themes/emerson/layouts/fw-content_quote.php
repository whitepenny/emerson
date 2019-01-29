<?php
$content = get_sub_field( 'content' );
$quote = get_sub_field( 'quote' );
$author = get_sub_field( 'author' );
?>
<div class="content_quote section_padded_bottom bg_white">
  <div class="fs-row content_quote_row section_padded_top" data-checkpoint-animation="fade-up">
    <div class="fs-cell fs-md-3 fs-lg-7 content_quote_cell">
      <div class="page_content content_quote_content">
        <?php echo $content; ?>
      </div>
    </div>
    <div class="fs-cell fs-md-3 fs-lg-5">
      <div class="page_content content_quote_aside">
        <blockquote class="blockquote">
          <p><?php echo $quote; ?></p>
          <span class="author"><?php echo $author; ?></span>
        </blockquote>
      </div>
    </div>
  </div>
</div>
