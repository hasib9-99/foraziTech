<?php>

// this code make catagory and post for a array 
function get_posts_grouped_by_categories() {
    // Get all categories
    $categories = get_categories();
    $data = []; // Initialize the final data array

    foreach ($categories as $category) {
        $category_data = [
            'categoryName' => $category->name, // Store category name
            'post' => [], // Initialize posts array
        ];

        // Fetch posts for the current category
        $query = new WP_Query([
            'cat' => $category->term_id,
            'posts_per_page' => -1, // Get all posts in this category
        ]);

        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();

                // Include all post details
                $category_data['post'][] = [
                    'title' => get_the_title(),
                    'description' => get_the_excerpt(),
                    'content' => apply_filters('the_content', get_the_content()),
                    'author' => get_the_author(),
                    'date' => get_the_date(),
                    'categories' => get_the_category_list(', '),
                    'featured_image' => get_the_post_thumbnail_url(get_the_ID(), 'full'),
                    'permalink' => get_permalink(),
                    'custom_fields' => get_post_meta(get_the_ID()), // All custom fields
                ];
            }
        }

        wp_reset_postdata();

        // Add category data to the main array
        $data[] = $category_data;
    }

    return $data;
}

// Register a REST API route
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/categories-posts', [
        'methods' => 'GET',
        'callback' => function () {
            $data = get_posts_grouped_by_categories();
            return rest_ensure_response($data);
        },
    ]);
});

<?>