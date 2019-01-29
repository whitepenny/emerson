<?php
$main_title = get_bloginfo( 'name' );
$social_links = get_field( 'global_social', 'option' );

$search_page = get_field( 'global_search_page', 'option' );
$register_page = get_field( 'global_register_page', 'option' );
?>
        </main>
      </div>
      <footer class="footer">
        <div class="fs-row footer_top">
          <div class="fs-cell">
            <a href="<?php echo get_home_url(); ?>" class="footer_logo">
              <span class="icon logo_white"></span>
              <span class="screenreader"><?php echo $main_title; ?></span>
            </a>
            <div class="footer_nav">
              <?php eg_footer_navigation( 1 ); ?>
            </div>
          </div>
        </div>
        <div class="fs-row footer_bottom">
          <div class="fs-cell">
            <div class="footer_social">
              <?php
                foreach ( $social_links as $social_link ) :
              ?>
              <a href="<?php echo $social_link['link']; ?>" class="footer_social_link" target="_blank">
                <span class="icon social_<?php echo strtolower( $social_link['service'] ); ?>"></span>
                <span class="screenreader"><?php echo $social_link['service']; ?></span>
              </a>
              <?php
                endforeach;
              ?>
            </div>
            <p class="footer_copyright"><?php echo date( 'Y' ); ?> Copyright <?php echo $main_title; ?>. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>

    <?php
      $navigation_options = array(
        'type'     => 'overlay',
        'gravity'  => 'right',
        'label'    => false,
        'maxWidth' => '979px'
      );
    ?>
    <div class="mobile_nav_tray js-navigation" data-navigation-handle=".js-mobile_nav_handle" data-navigation-content=".js-mobile_nav_content" data-navigation-options="<?php echo eg_json_options( $navigation_options ); ?>" aria-hidden="true">
      <nav class="mobile_nav main_nav">
        <?php eg_main_navigation( 1 ); ?>
      </nav>
      <div class="mobile_nav utility_nav">
        <?php if ( ! empty( $search_page ) ) : ?>
        <a href="<?php echo get_the_permalink( $search_page->ID ); ?>" class="utility_nav_search">
          <span class="icon search_red"></span>
          Search Jobs
        </a>
        <?php endif; ?>
        <?php if ( ! empty( $search_page ) ) : ?>
        <a href="<?php echo get_the_permalink( $search_page->ID ); ?>" class="utility_nav_button">
          Register
        </a>
        <?php endif; ?>
      </div>
      <div class="mobile_social">
        <?php
          foreach ( $social_links as $social_link ) :
        ?>
        <a href="<?php echo $social_link['link']; ?>" class="mobile_social_link" target="_blank">
          <span class="icon social_<?php echo strtolower( $social_link['service'] ); ?>"></span>
          <span class="screenreader"><?php echo $social_link['service']; ?></span>
        </a>
        <?php
          endforeach;
        ?>
      </div>
    </div>

    <?php wp_footer(); ?>

  </body>
</html>
