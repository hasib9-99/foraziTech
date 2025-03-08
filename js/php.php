<?php>

// the array link 
// /wp-json/custom/v1/categories-posts
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


<script>
    // face the data 
    fetch('https://www.slideshare.forazitech.com/wp-json/custom/v1/categories-posts')
    .then((response) => response.json())
    .then((data) => {
        console.log(data); // Use this data as needed
        // Example: Displaying the data
        data.forEach((category) => {
            console.log(`Category: ${category.categoryName}`);
            category.posts.forEach((post) => {
                console.log(`Title: ${post.title}`);
                console.log(`Content: ${post.content}`);
                // Access other post fields as needed
            });
        });
    })
    .catch((error) => {
        console.error('Error fetching detailed categories and posts:', error);
    });
</script>







<!-- blog parmaling change  -->
<?php

function custom_post_permalink($permalink, $post) {
    // Only modify the default "post" type
    if ($post->post_type === 'post') {
        return home_url('/blog/' . $post->post_name . '/');
    }
    return $permalink;
}
add_filter('post_link', 'custom_post_permalink', 10, 2);

// Add a rewrite rule to ensure posts work correctly
function custom_post_rewrite_rules($rules) {
    $new_rules = array(
        'blog/([^/]+)/?$' => 'index.php?name=$matches[1]'
    );
    return $new_rules + $rules;
}
add_filter('rewrite_rules_array', 'custom_post_rewrite_rules');

// Ensure the post type query works
function custom_parse_request($query) {
    if (!is_admin() && isset($query->query['name']) && !isset($query->query['post_type'])) {
        $query->set('post_type', 'post');
    }
}
add_action('pre_get_posts', 'custom_parse_request');

?>