<?php
$args  = array(
    'posts_per_page' => 10,
    'post_type' => 'post',
    'post_status' => 'publish',
    'tax_query' => [
        [
            'taxonomy' => 'category',
            'field'    => 'slug',
            // 'terms'    => ['featured', "opini", "infografis"],
            'operator' => 'NOT IN',
        ],
    ],
);
$the_query = new WP_Query($args); ?>

<?php if ($the_query->have_posts()) : ?>

    <!-- pagination here -->

    <!-- the loop -->
    <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
        <ul>
            <?php
            // require __DIR__ . "\\template\default\card-1.view.php";
            require __DIR__ . "\\template\default\horizontal-1.view.php";
            ?>
        </ul>
    <?php endwhile; ?>
    <!-- end of the loop -->

    <!-- pagination here -->

    <?php wp_reset_postdata(); ?>

<?php else : ?>
    <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
