<?php

namespace DLM\Admin;

/**
 * Admin Menu class.
 *
 * Responsible for managing admin menus.
 */
class Menu
{

    /**
     * Constructor.
     *
     * @since 0.2.0
     */
    public function __construct()
    {
        add_action('admin_menu', [$this, 'init_menu']);
    }

    /**
     * Init Menu.
     *
     * @since 0.2.0
     *
     * @return void
     */
    public function init_menu()
    {
        global $submenu;

        $slug          = DLM_SLUG;
        $menu_position = 50;
        $capability    = 'manage_options';

        // $logo_icon     = DLM_ASSETS . '/images/wp-react-kit-logo.png';
        $logo_icon     = "dashicons-embed-post";

        add_menu_page(esc_attr__('Dafunda Load More', 'jobplace'), esc_attr__('Dafunda Load More', 'jobplace'), $capability, $slug, [$this, 'plugin_page'], $logo_icon, $menu_position);

        if (current_user_can($capability)) {
            // $submenu[ $slug ][] = [ esc_attr__( 'Home', 'jobplace' ), $capability, 'admin.php?page=' . $slug . '#/' ]; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
            // $submenu[ $slug ][] = [ esc_attr__( 'Jobs', 'jobplace' ), $capability, 'admin.php?page=' . $slug . '#/jobs' ]; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
            // $submenu[$slug][] = [esc_attr__('Settings', 'jobplace'), $capability, 'admin.php?page=' . $slug . '#/settings']; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
            // $submenu[$slug][] = [esc_attr__('Repeater Templates', 'jobplace'), $capability, 'admin.php?page=' . $slug . '#/repeater-templates']; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
            $submenu[$slug][] = [esc_attr__('Shortcode Builder', 'jobplace'), $capability, 'admin.php?page=' . $slug . '#/shortcode-builder']; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
        }
    }

    /**
     * Render the plugin page.
     *
     * @since 0.2.0
     *
     * @return void
     */
    public function plugin_page()
    {
        require_once DLM_TEMPLATE_PATH . '/app.php';
    }
}
