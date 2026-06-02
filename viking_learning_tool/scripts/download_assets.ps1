$urls = @{
    "hnefatafl.jpg" = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSMloTPHGZsChKqGMp6vaBIp699GO1KWLPC2vMaz1VBRUa-D5IWl0lAw2BQq1jlolu_6uLXw1A0t7qGexc"
    "lindholm_hoje.jpg" = "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSepuA8YpIv89al651wp7X2xieREtjgWBMob9lNeL_IFp4Lipd6BWYOAjI8gv2W9-6U3qEZ0_t6J-Y2I1Q"
    "volr_baguette.jpg" = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQaIgbBxefzZnU4m0Xoa49Jueo0iLabYe7ek1RMV7leB75NsFNpoFMR9cZu&s=10"
    "pierre_runique.jpg" = "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRxMwEHzT1WDdBCtaAZrL2-zwlz0gvnDepSRY80H_rvKDbyxfXOa0wr71tX38MQdDJWpurd5agbd9shkc4"
    "odin_fenrir.jpg" = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbH9sWBFlGBqyDZSo7NrxndwSqyxzsajwESn3p9gXpqsnNEcaSztbQlCtx&s=10"
    "fenrir_manuscrit.jpg" = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tBc_7hThNbC5OTWM0u44AoHb7FZ5_1y1FzX8UkIHKiyqo9uMo-5cLbBl&s=10"
}

$assetsDir = "p:\Laboratoire\Mathieu Lachance\Mathieu Lachance\html_desktop\viking_learning_tool\assets"
if (!(Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Force -Path $assetsDir
}

foreach ($filename in $urls.Keys) {
    $url = $urls[$filename]
    $dest = Join-Path $assetsDir $filename
    Write-Host "Téléchargement de $url vers $dest..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "Mozilla/5.0"
        Write-Host "Succès !"
    } catch {
        Write-Error "Erreur lors du téléchargement de $url : $_"
    }
}
