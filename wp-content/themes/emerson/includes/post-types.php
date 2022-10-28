<?php

// Register Custom Post types

function eg_register_post_types() {
  // Blog / Posts
  unregister_taxonomy_for_object_type( 'post_tag', 'post' );
  // unregister_taxonomy_for_object_type( 'category', 'post' );
  remove_post_type_support( 'post', 'comments' );

  $home_url = get_home_url();
  $np_options = get_option( 'nestedpages_posttypes' );

  $team_root_id = $np_options['team']['post_type_page_assignment_page_id'];
  $team_slug = trim( str_ireplace( $home_url, '', get_permalink( $team_root_id ) ), '/' );

  $slugs = array(
    'team' => $team_slug,
    'team_id' => $team_root_id,
  );

  // Team
  register_post_type( 'team', array(
    'labels'              => array(
      'name'              => 'Team',
      'singular_name'     => 'Person',
      'add_new_item'      => 'Add New Person',
      'edit_item'         => 'Edit Person',
    ),
    'description'         => '',
    'menu_icon'           => 'dashicons-groups',
    'public'              => true,
    'show_ui'             => true,
    'has_archive'         => true,
    'show_in_menu'        => true,
    'show_in_nav_menus'   => false,
    'exclude_from_search' => false,
    'publicly_queryable'  => true,
    'capability_type'     => 'post',
    'capabilities'        => array(),
    'supports'            => array( 'title', 'editor', 'revisions' ),
    'map_meta_cap'        => true,
    'map_meta_cap'        => true,
    'hierarchical'        => false,
    'rewrite'             => array(
      'slug'              => $slugs['team'],
      'with_front'        => false,
    ),
    'query_var'           => true,
  ) );

  $old_slugs = get_option( 'eg_post_type_slugs' );
  if ( empty( $old_slugs ) || (
    $slugs['team'] != $old_slugs['team']
  ) ) {
    flush_rewrite_rules();
    update_option( 'eg_post_type_slugs', $slugs );
  }
}
add_action( 'init', 'eg_register_post_types', 5 );
