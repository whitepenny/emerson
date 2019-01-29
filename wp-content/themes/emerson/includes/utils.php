<?php

// Formatted content

function eg_get_the_content( $post_id = false ) {
  if ( ! empty( $post_id ) ) {
    $post = get_page( $post_id );
    $content = $post->post_content;
  } else {
    $content = get_the_content( '' );
  }

	$content = apply_filters( 'the_content', $content );
	$content = str_replace( ']]>', ']]&gt;', $content );
	return $content;
}


// Check external link

function eg_external_link( $link ) {
  global $eg_domain;

  return ( strpos( $link, $eg_domain ) === false );
}


// Draw Link Target

function eg_link_target( $link ) {
  return eg_external_link( $link ) ? ' target="_blank"' : '';
}


// Get Template Part w/ Variables

function eg_template_part( $template, $args ) {
  // $path = locate_template( $template . '.php', true, false );
  $path = EG_THEME_DIR . '/' . $template . '.php';

  if ( file_exists( $path ) ) {
    extract( $args );

    include $path;
  }
}


// Main Nav

function eg_main_navigation( $depth = 2 ) {
  $args = array(
    'theme_location' => 'main-navigation',
    'depth' => $depth
  );

  wp_nav_menu( $args );
}

function eg_get_main_navigation( $depth = 2 ) {
  $locations = get_nav_menu_locations();

  $args = array(
    'depth' => $depth,
  );

  return wp_get_nav_menu_items( $locations['main-navigation'], $args );
}

function eg_footer_navigation( $depth = 2 ) {
  $args = array(
    'theme_location' => 'footer-navigation',
    'depth' => $depth
  );

  wp_nav_menu( $args );
}

// Subnavigation

function eg_sub_navigation( $depth = 2 ) {
  $args = array(
    'theme_location' => 'main-navigation',
    'depth'          => $depth,
  );

  // $theme_locations = get_nav_menu_locations();
  //
  // $page_id = get_queried_object_id();
  // $top_id = false;
  //
  // $menu_items = wp_get_nav_menu_items( $theme_locations['main-navigation'] );
  //
  // $menu_item = current( wp_filter_object_list( $menu_items, array( 'object_id' => $page_id ) ) );
  // $menu_item_id = $menu_item->ID;
  //
  // // while ( $top_id == false && $menu_item = current( wp_filter_object_list( $menu_items, array( 'ID' => $menu_item_id ) ) ) ) {
  // //   $nav_options = get_field( 'page_nav_options', $menu_item->object_id );
  // //
  // //   if ( empty( $nav_options ) ) {
  // //     $nav_options = array();
  // //   }
  // //
  // //   $nav_hide = ( in_array( 'hide', $nav_options ) );
  // //   $nav_reset = ( in_array( 'reset', $nav_options ) );
  // //
  // //   if ( ! empty( $nav_reset ) ) {
  // //     $top_id = $menu_item->object_id;
  // //   } else {
  // //     $menu_item_id = $menu_item->menu_item_parent;
  // //   }
  // // }
  //
  // if ( ! empty( $top_id ) ) {
  //   $current = current( wp_filter_object_list( $menu_items, array( 'object_id' => $top_id ) ) );
  //   $children = current( wp_filter_object_list( $menu_items, array( 'menu_item_parent' => $current->ID ) ) );
  //
  //   if ( empty( $children ) ) {
  //     $current = current( wp_filter_object_list( $menu_items, array( 'ID' => $current->menu_item_parent ) ) );
  //   }
  //
  //   if ( ! empty( $current ) ) {
  //     $args['submenu'] = $current->title;
  //     $args['submenu_id'] = $current->ID;
  //   }
  // }

  wp_nav_menu( $args );
}



// add_filter( 'wp_nav_menu_objects', 'submenu_limit', 10, 2 );
//
// function submenu_limit( $items, $args ) {
//   if ( empty( $args->submenu_id ) ) {
//     $children  = submenu_get_children_ids( 0, $items );
//   } else {
//     $ids       = wp_filter_object_list( $items, array( 'ID' => $args->submenu_id ), 'and', 'ID' );
//     $parent_id = array_pop( $ids );
//     $children  = submenu_get_children_ids( $parent_id, $items );
//
//     $children[] = $parent_id;
//   }
//
//   foreach ( $items as $key => $item ) {
//     if ( ! in_array( $item->ID, $children ) ) {
//       unset( $items[$key] );
//     }
//   }
//
//   return $items;
// }
//
// function submenu_get_children_ids( $id, $items ) {
//   $menu_items = wp_filter_object_list( $items, array( 'menu_item_parent' => $id ) );
//   $ids = array();
//
//   foreach ( $menu_items as $menu_item ) {
//     $page_id = $menu_item->object_id;
//     $nav_options = get_field( 'page_nav_options', $menu_item->object_id );
//
//     if ( empty( $nav_options ) ) {
//       $nav_options = array();
//     }
//
//     $nav_hide = ( in_array( 'hide', $nav_options ) );
//     $nav_reset = ( in_array( 'reset', $nav_options ) );
//
//     if ( empty( $nav_hide ) ) {
//       $ids[] = $menu_item->ID;
//
//       $ids = array_merge( $ids, submenu_get_children_ids( $menu_item->ID, $items ) );
//     }
//   }
//
//   return $ids;
// }




// Highlight CPTs in menu

function eg_get_cpt() {
  $types = array(
    'team',
  );

  foreach ( $types as $type ) {
    if ( is_post_type_archive( $type ) || is_singular( $type ) ) {
      return $type;
    }
  }

  return false;
}

function eg_get_cpt_page( $post_type ) {
  $np_options = get_option( 'nestedpages_posttypes' );

  if ( ! empty( $np_options[ $post_type ]['post_type_page_assignment_page_id'] ) ) {
    return $np_options[ $post_type ]['post_type_page_assignment_page_id'];
  }

  return null;
}

function eg_get_cpt_link( $post_type ) {
  if ( $post_type == 'post' ) {
    return get_the_permalink( get_option( 'page_for_posts' ) );
  }

  $np_options = get_option( 'nestedpages_posttypes' );

  if ( ! empty( $np_options[ $post_type ]['post_type_page_assignment_page_id'] ) ) {
    return get_the_permalink( $np_options[ $post_type ]['post_type_page_assignment_page_id'] );
  }

  return null;
}

//

function eg_menu_item_classes( $classes, $item, $args ) {
  global $eg_domain;
  global $eg_page_url;

  $cpt = eg_get_cpt();

  $cpts_in_nav = array(
    'service'
  );

  if ( ! empty( $cpt ) ) {
    $bcn_options = get_option( 'bcn_options' );
    $root_id = $bcn_options['apost_' . $cpt . '_root'];

    $item_path = str_ireplace( $eg_domain, '', $item->url );
    $current_path = str_ireplace( $eg_domain, '', $eg_page_url );

    if ( $item->object_id == $root_id ) {

      if ( in_array( $cpt, $cpts_in_nav ) ) {
        if ( is_singular( $cpt ) && $current_path == $item_path ) {
          $classes[] = 'current-menu-item';
        } elseif ( is_post_type_archive( $cpt ) ) {
          $classes[] = 'current-menu-item';
        }
      } else {
		    $classes[] = 'current-menu-item';
      }
    }

    if ( strpos( $eg_page_url, $item_path ) !== false ) {
      $classes[] = 'current-menu-ancestor';
    }
  }

	return array_unique( $classes );
}
add_filter( 'nav_menu_css_class', 'eg_menu_item_classes', 10, 3 );


// Format text content

function eg_format_content( $text = '', $echo = true ) {
  $find    = array( '[br]', '{', '}', '[', ']' );
  $replace = array( '<br>', '<strong>', '</strong>', '<em>', '</em>' );
  $string  = str_ireplace( $find, $replace, $text );

  if ( $echo ) {
    echo $string;
  } else {
    return $string;
  }
}


// JSON Options

function eg_json_options( $options = array(), $echo = true ) {
  $string = htmlspecialchars( json_encode( $options ) );

  if ( $echo ) {
    echo $string;
  } else {
    return $string;
  }
}


// oEmbed Data

function eg_get_oembed_url( $html ) {
  if ( empty( $html ) ) {
    return;
  }

  preg_match( '/src="([^"]+)"/', $html, $match );

  return $match[1];
}

function eg_get_oembed_data( $url ) {
  $cache_key = 'pc_oembed-' . md5( $url );
  $oembed_data = get_transient( $cache_key );

  if ( empty( $oembed_data ) ) {
    $oembed_obj = _wp_oembed_get_object();
    $oembed_data = $oembed_obj->get_data( $url );

    set_transient( $cache_key, $oembed_data, (60 * 60 * 24 * 30) );
  }

  return $oembed_data;
}


// Trim Length (alternative to wp_trim_words)

function eg_trim_length( $string = '', $length ) {
  $ns = '';
  $opentags = array();
  $string = trim( $string );
  if ( strlen( html_entity_decode( strip_tags( $string ) ) ) < $length ) {
    return $string;
  }
  if ( strpos( $string,' ' ) === false && strlen( html_entity_decode( strip_tags( $string ) ) ) > $length ) {
    return substr( $string,0,$length ).'&hellip;';
  }
  $x = 0;
  $z = 0;
  while ( $z < $length && $x <= strlen( $string ) ) {
    $char = substr( $string, $x, 1 );
    $ns .= $char; // Add the character to the new string.
    if ( '<' == $char ) {
      // Get the full tag -- but compensate for bad html to prevent endless loops.
      $tag = '';
      while ( '>' !== $char && false !== $char ) {
        $x++;
        $char = substr( $string, $x, 1 );
        $tag .= $char;
      }
      $ns .= $tag;

      $tagexp = explode( ' ',trim( $tag ) );
      $tagname = str_replace( '>','',$tagexp[0] );

      // If it's a self contained <br /> tag or similar, don't add it to open tags.
      if ( '/' != $tagexp[1] && '/>' != $tagexp[1] ) {
        // See if we're opening or closing a tag.
        if ( substr( $tagname,0,1 ) == '/' ) {
          $tagname = str_replace( '/','',$tagname );
          // We're closing the tag. Kill the most recently opened aspect of the tag.
          $done = false;
          reset( $opentags );
          while ( current( $opentags ) && ! $done ) {
            if ( current( $opentags ) == $tagname ) {
              unset( $opentags[ key( $opentags ) ] );
              $done = true;
            }
            next( $opentags );
          }
        } else {
          // Open a new tag.
          $opentags[] = $tagname;
        }
      }
    } elseif ( '&' == $char ) {
      $entity = '';
      while ( ';' != $char && ' ' != $char && '<' != $char ) {
        $x++;
        $char = substr( $string,$x,1 );
        $entity .= $char;
      }
      if ( ';' == $char ) {
        $z++;
        $ns .= $entity;
      } elseif ( ' ' == $char ) {
        $z += strlen( $entity );
        $ns .= $entity;
      } else {
        $z += strlen( $entity );
        $ns .= substr( $entity,0,-1 );
        $x -= 2;
      }
    } else {
      $z++;
    }
    $x++;
  }
  while ( $x < strlen( $string ) && ! in_array( substr( $string,$x,1 ),array( ' ', '!', '.', ',', '<', '&' ) ) ) {
    $ns .= substr( $string,$x,1 );
    $x++;
  }
  if ( strlen( strip_tags( $ns ) ) < strlen( strip_tags( $string ) ) ) {
    $ns .= '&hellip;';
  }
  $opentags = array_reverse( $opentags );
  foreach ( $opentags as $key => $val ) {
    $ns .= '</'.$val.'>';
  }
  return $ns;
}
