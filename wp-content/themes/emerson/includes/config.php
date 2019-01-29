<?php

// Env

$eg_page_protocol = ( isset( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] ) ? 'https://' : 'http://';
$eg_page_url      = $eg_page_protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$eg_domain        = $eg_page_protocol . $_SERVER['HTTP_HOST'];

if ( strpos( $eg_page_url, '?') > -1 ) {
  $eg_page_url = substr( $eg_page_url, 0, strpos( $eg_page_url, '?') );
}

// Globals

define( 'EG_VERSION', '1.2.0' );
define( 'EG_DEBUG', true );
define( 'EG_DEV', ( strpos( $eg_page_url, '.test') !== false || strpos( $eg_page_url, 'localhost') !== false ) );
