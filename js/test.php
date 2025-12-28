<?php
/* =====================================================
   CONFIG: All Layers URLs
===================================================== */
$layers = [
    10 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/shadow/exshad_l550_k26_a-swb_1.png?v=4cjrf"
    ],
    100 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/colour/exbse_l550_k26_a-swb_a-rdyn-se_n-1af_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/colour/exbsemask_l550_k26_a-swb_a-rdyn-se_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/colour/exbse_l550_k26_a-swb_a-rdyn-se_gl.json?v=4cjrf"
    ],
    200 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/engine/exeng_l550_k26_a-swb_a-d204_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/engine/exengmask_l550_k26_a-swb_a-d204_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/engine/exeng_l550_k26_a-swb_a-d204_gl.json?v=4cjrf"
    ],
    400 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/wheel/exwhl_l550_k26_a-swb_n-039kz_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/wheel/exwhlmask_l550_k26_a-swb_n-039kz_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/wheel/exwhl_l550_k26_a-swb_n-039kz_gl.json?v=4cjrf"
    ],
    500 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/roof/exroof_l550_k26_a-swb_n-080an_a-rdyn-se_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/roof/exroofmask_l550_k26_a-swb_n-080an_a-rdyn-se_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/roof/exroof_l550_k26_a-swb_n-080an_a-rdyn-se_gl.json?v=4cjrf"
    ],
    600 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exopt_l550_k26_n-047db_a-swb_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exoptmask_l550_k26_n-047db_a-swb_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exopt_l550_k26_n-047db_a-swb_gl.json?v=4cjrf"
    ],
    701 => [
        "image" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exbcopt_l550_k26_n-041cx_a-swb_n-1af_n-080an_a-rdyn-se_gl_1.jpg?v=4cjrf",
        "alpha" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exbcoptmask_l550_k26_n-041cx_a-swb_n-080an_a-rdyn-se_gl_1.png?v=4cjrf",
        "coord" => "https://assets.config.landrover.com/lr/l550/k26/exkf/option/exbcopt_l550_k26_n-041cx_a-swb_n-080an_a-rdyn-se_gl.json?v=4cjrf"
    ]
];

/* =====================================================
   HELPER: Fetch remote JSON
===================================================== */
function fetch_json($url) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_TIMEOUT => 10
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);
    return $data ?: null;
}

/* =====================================================
   FETCH ALL COORDS
===================================================== */
foreach ($layers as $key => $layer) {
    if (isset($layer['coord'])) {
        $layers[$key]['coord_data'] = fetch_json($layer['coord']);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Land Rover Canvas Configurator</title>
<style>
body { margin:0; background:#111; display:flex; justify-content:center; align-items:center; height:100vh; }
canvas { max-width:100%; height:auto; }
</style>
</head>
<body>

<canvas id="carCanvas" width="2000" height="1000"></canvas>

<script>
/* =====================================================
   JS LAYER DATA (PHP EMBEDDED)
===================================================== */
const layers = <?php echo json_encode($layers, JSON_PRETTY_PRINT); ?>;

/* =====================================================
   CANVAS SETUP
===================================================== */
const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');

/* =====================================================
   HELPERS
===================================================== */
function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.src = src;
    });
}

/* =====================================================
   DRAW LAYER
===================================================== */
async function drawLayer(layer) {
    const img = await loadImage(layer.image);

    if (!layer.alpha || !layer.coord_data) {
        ctx.drawImage(img, 0, 0);
        return;
    }

    const mask = await loadImage(layer.alpha);
    const coord = layer.coord_data;

    const off = document.createElement('canvas');
    off.width = coord.width;
    off.height = coord.height;
    const octx = off.getContext('2d');

    octx.drawImage(img, 0, 0, coord.width, coord.height);
    octx.globalCompositeOperation = 'destination-in';
    octx.drawImage(mask, 0, 0, coord.width, coord.height);

    ctx.drawImage(off, coord.x, coord.y);
}

/* =====================================================
   RENDER ALL LAYERS
===================================================== */
async function render() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    const order = [10,100,200,400,500,600,701];
    for (const id of order) {
        if (layers[id]) await drawLayer(layers[id]);
    }
}

render();
</script>

</body>
</html>
