<?php

get_header();

?>
<?php get_template_part( 'layouts/page_header', 'cpt' ); ?>
<div class="fs-row page_main">
  <div class="fs-cell">
    <?php get_template_part( 'layouts/team_list' ); ?>
  </div>
</div>
<?php

get_footer();
