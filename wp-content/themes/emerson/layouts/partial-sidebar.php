<?php
$navigation_options = array(
  'label'    => false,
  'maxWidth' => '980px',
);

$search_page = get_field( 'global_search_page', 'option' );
$sidebar_button = get_field( 'sidebar_button' );
?>
<div class="subnav_container">
  <button type="button" class="subnav_handle js-sub_nav_handle"><span></span>In This Section</button>
  <div class="subnav js-navigation" data-navigation-options="<?php echo eg_json_options( $navigation_options ); ?>" data-navigation-handle=".js-sub_nav_handle">
    <?php eg_sub_navigation( 99 ); ?>
  </div>
</div>
<?php if ( ! empty( $sidebar_button ) ) : ?>
<a href="<?php echo $sidebar_button['url']; ?>" class="sidebar_button sidebar_button_icon">
  <span>
    <span class="icon search_white"></span>
  </span>
  <?php echo $sidebar_button['title']; ?>
</a>
<?php elseif ( ! empty( $search_page ) ) : ?>
<a href="<?php echo get_the_permalink( $search_page->ID ); ?>" class="sidebar_button sidebar_button_icon">
  <span>
    <span class="icon search_white"></span>
  </span>
  Find Your Next Job
</a>
<?php endif; ?>
