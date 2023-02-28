<?php

namespace DLM\Setup;

use DLM\Common\Keys;

/**
 * Class Installer.
 *
 * Install necessary database tables and options for the plugin.
 */
class Installer {

    /**
     * Run the installer.
     *
     * @since 0.3.0
     *
     * @return void
     */
    public function run(): void {
        // Update the installed version.
        $this->add_version();

        // Register and create tables.
        $this->register_table_names();
        $this->create_tables();

        // Make this administrator user as company.
        $this->make_admin_as_company();

        // Run the database seeders.
        $seeder = new \DLM\Databases\Seeder\Manager();
        $seeder->run();
    }

    /**
     * Make administrator user as company.
     *
     * @since 0.5.0
     *
     * @return void
     */
    private function make_admin_as_company() {
        update_user_meta( get_current_user_id(), 'user_type', 'company' );
    }

    /**
     * Register table names.
     *
     * @since 0.3.0
     *
     * @return void
     */
    private function register_table_names(): void {
        global $wpdb;

        // Register the tables to wpdb global.
        $wpdb->jobplace_job_types = $wpdb->prefix . 'jobplace_job_types';
        $wpdb->jobplace_jobs      = $wpdb->prefix . 'jobplace_jobs';
    }

    /**
     * Add time and version on DB.
     *
     * @since 0.3.0
     * @since 0.4.1 Fixed #11 - Version Naming.
     *
     * @return void
     */
    public function add_version(): void {
        $installed = get_option( Keys::DLM_INSTALLED );

        if ( ! $installed ) {
            update_option( Keys::DLM_INSTALLED, time() );
        }

        update_option( Keys::DLM_VERSION, DLM_VERSION );
    }

    /**
     * Create necessary database tables.
     *
     * @since DLM_
     *
     * @return void
     */
    public function create_tables() {
        if ( ! function_exists( 'dbDelta' ) ) {
            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        }

        // Run the database table migrations.
        \DLM\Databases\Migrations\JobTypeMigration::migrate();
        \DLM\Databases\Migrations\JobsMigration::migrate();
    }
}
