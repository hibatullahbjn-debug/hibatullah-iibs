<?php
// share.php - Script khusus untuk memancing robot WhatsApp & Facebook agar memunculkan "Kartu Preview" (OpenGraph)

// 1. Ambil ID artikel dari URL (misal: share.php?id=45)
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

$title = "Artikel - Hibatullah IIBS";
$description = "Membangun Generasi Cerdas dan Beradab";
$image = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80";
$url = "https://hibatullah.sch.id/artikel.html?id=" . $id;

if ($id > 0) {
    // 2. Tarik data langsung dari WordPress API Anda
    $api_url = "https://linen-eagle-143399.hostingersite.com/wp-json/wp/v2/posts/" . $id . "?_embed=1";
    
    // Gunakan cURL karena Hostinger sering memblokir file_get_contents untuk URL eksternal
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5); // WhatsApp timeout sangat cepat, jangan lama-lama
    $json_data = curl_exec($ch);
    curl_close($ch);
    
    if ($json_data) {
        $post = json_decode($json_data, true);
        
        if (isset($post['title']['rendered'])) {
            $title = html_entity_decode(strip_tags($post['title']['rendered']), ENT_QUOTES, 'UTF-8');
            
            // Coba ambil thumbnail
            $img_url = "";
            if (isset($post['_embedded']['wp:featuredmedia'][0]['source_url'])) {
                $img_url = $post['_embedded']['wp:featuredmedia'][0]['source_url'];
            } else {
                // Ekstrak dari konten jika tidak ada featured image
                preg_match('/<img.+src=[\'"](?P<src>.+?)[\'"].*>/i', $post['content']['rendered'], $img_match);
                if (isset($img_match['src'])) {
                    $img_url = $img_match['src'];
                }
            }
            
            if (!empty($img_url)) {
                $image = $img_url;
            }
            
            // Ambil deskripsi singkat
            if (isset($post['excerpt']['rendered'])) {
                $desc = strip_tags($post['excerpt']['rendered']);
                $description = mb_substr(trim($desc), 0, 150) . '...';
            }
        }
    }
}

// 3. Sajikan Meta Tags khusus untuk robot WhatsApp/Facebook
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($title) ?></title>
    
    <!-- OpenGraph / Facebook / WhatsApp -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://hibatullah.sch.id/share.php?id=<?= $id ?>">
    <meta property="og:title" content="<?= htmlspecialchars($title) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($description) ?>">
    <meta property="og:image" content="<?= htmlspecialchars($image) ?>">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= htmlspecialchars($title) ?>">
    <meta name="twitter:description" content="<?= htmlspecialchars($description) ?>">
    <meta name="twitter:image" content="<?= htmlspecialchars($image) ?>">

    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; color: #555; }
        .loader { border: 4px solid #f3f3f3; border-top: 4px solid #3a5bd9; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
  <link rel="icon" href="favicon.png" type="image/png" />
</head>
<body>
    <div class="loader"></div>
    <p>Mengarahkan Anda ke artikel...</p>

    <!-- 4. Pindahkan manusia yang mengklik link ini ke halaman artikel.html yang asli! -->
    <script>
        window.location.replace("artikel.html?id=<?= $id ?>");
    </script>
</body>
</html>
