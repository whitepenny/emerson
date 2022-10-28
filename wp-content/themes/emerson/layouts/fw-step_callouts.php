<?php
$steps = get_sub_field( 'steps' );
?>
<div class="step_callouts section_padded bg_white">
  <div class="step_callouts_items">
    <?php
      $i = 0;
      foreach ( $steps as $item ) :
        $i++;
    ?>
    <div class="step_callout" data-checkpoint-animation="fade-up" data-checkpoint-container=".step_callouts">
      <span class="step_callout_marker"><?php echo $i; ?><span></span></span>
      <div class="step_callout_container">
        <h2 class="step_callout_title"><?php echo eg_format_content( $item['title'] ); ?></h2>
        <div class="step_callout_content">
          <p><?php echo $item['content']; ?></p>
        </div>
      </div>
    </div>
    <?php
      endforeach;
    ?>
  </div>
</div>
