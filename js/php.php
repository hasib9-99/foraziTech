<?php

function output_years_data_json() {
    $query = new WP_Query([
        'post_type' => 'years',
        'post_status' => 'publish',
        'posts_per_page' => -1
    ]);

    $grouped = [];

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();

            $title = get_the_title();
            $content = apply_filters('the_content', get_the_content());

            // Extract year from title (e.g., "Feb 2016" or just "2016")
            preg_match('/\b(20\d{2}|19\d{2})\b/', $title, $match);
            $year = $match[1] ?? 'Unknown';

            // Add to the grouped array
            $grouped[$year][] = [
                'title' => $title,
                'content' => $content,
            ];
        }
        wp_reset_postdata();
    }

    $final_output = [];

    foreach ($grouped as $year => $entries) {
        if (count($entries) === 1) {
            $final_output[] = $entries[0];
        } else {
            $final_output[] = [
                'title' => $year,
                'content' => '',
                'subPosts' => $entries
            ];
        }
    }

    // Sort by year/title
    usort($final_output, function ($a, $b) {
        $titleA = $a['title'];
        $titleB = $b['title'];
        return strtotime("01 Jan $titleA") <=> strtotime("01 Jan $titleB");
    });

	$output_html =  '
		<script>
			const yearsData = '. json_encode($final_output, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . ' ;
		</script>
	';
    echo $output_html;
}
add_action('wp_head', 'output_years_data_json');

?>