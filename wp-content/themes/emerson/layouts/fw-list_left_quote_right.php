<?php
$list = get_sub_field('list');
$quote = get_sub_field('quote');
$counter = 1;
?>

<div class="list-left-quote-right fs-checkpoint" data-checkpoint-animation="fade-up">
    <div class="fs-row fs-all-justify-center">
        <div class="fs-cell fs-lg-7">
            <?php
            foreach ($list as $list) : ?>

                <div class="numbered-list-item">
                    <div class="number">
                        <?php echo $counter; ?>
                    </div>
                    <div>
                        <h3><?php echo $list['heading']; ?></h3>
                        <div class="page_content content_quote_content">
                        <?php echo $list['content']; ?>
                        </div>
                        
                    </div>

                </div>

            <?php
                $counter++;
            endforeach; ?>
        </div>
        <div class="fs-cell fs-lg-5">

            <div class="quote">
                <div class="quote-container">
                    <div class="quote-content">
                        <?php echo $quote['quote_content']; ?>
                    </div>
                    <div class="quote-citation">
                        <?php echo $quote['quote_citation']; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>