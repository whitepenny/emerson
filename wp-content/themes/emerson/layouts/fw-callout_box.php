<?php 
    $heading = get_sub_field('heading');
    $content = get_sub_field('content');
    $background = get_sub_field('background');
?>

<style>
    .callout-box {
        background: <?php echo $background; ?>;
    }
</style>

<div class="fs-row fs-all-justify-center fs-checkpoint" data-checkpoint-animation="fade-up">
    <div class="fs-cell fs-lg-12">
    
        <div class="callout-box">
            <h2>
                <?php echo $heading; ?>
            </h2>

            <?php echo $content; ?>
        </div>

    </div>
    
</div>