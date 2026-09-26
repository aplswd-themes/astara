$ErrorActionPreference = "Stop"
$root = (Resolve-Path .).Path
$destDir = Join-Path $root "public\downloads"

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

# 1. Package the Full Multi-Theme System
$tempFull = Join-Path $env:TEMP "themekit-astro-full-pkg"
if (Test-Path $tempFull) { Remove-Item -Recurse -Force $tempFull }
New-Item -ItemType Directory -Path $tempFull -Force | Out-Null

Copy-Item -Path (Join-Path $root "src") -Destination (Join-Path $tempFull "src") -Recurse
$tempPublic = Join-Path $tempFull "public"
New-Item -ItemType Directory -Path $tempPublic -Force | Out-Null
Get-ChildItem -Path (Join-Path $root "public") | Where-Object { $_.Name -ne "downloads" } | Copy-Item -Destination $tempPublic -Recurse

$rootFiles = @("astro.config.mjs", "package.json", "package-lock.json", "tsconfig.json", "README.md", ".gitignore")
foreach ($file in $rootFiles) {
    $filePath = Join-Path $root $file
    if (Test-Path $filePath) {
        Copy-Item -Path $filePath -Destination $tempFull
    }
}

$fullZipPath = Join-Path $destDir "themekit-astro-theme.zip"
if (Test-Path $fullZipPath) { Remove-Item -Force $fullZipPath }
Compress-Archive -Path (Join-Path $tempFull "*") -DestinationPath $fullZipPath -Force
Remove-Item -Recurse -Force $tempFull
$fullInfo = Get-Item $fullZipPath
Write-Host "Created: $($fullInfo.Name) ($([math]::Round($fullInfo.Length / 1KB, 2)) KB)"

# 2. Package Each Individual Theme as a Standalone Astro Project
$themes = @(
    @{ slug = "saas"; name = "NexaCloud SaaS Theme"; desc = "Modern SaaS and tech startup landing page with edge architecture, pricing, and dark hero." },
    @{ slug = "agency"; name = "Forma Studio Agency Theme"; desc = "High-end editorial creative agency landing page with work portfolio and service accordion." },
    @{ slug = "ecommerce"; name = "Shopfront eCommerce Theme"; desc = "Curated eCommerce store landing page with product showcase and trust signals." },
    @{ slug = "health"; name = "Vitality Health Theme"; desc = "Longevity clinic and modern health practice landing page with specialties matrix." },
    @{ slug = "restaurant"; name = "Saveur Gastronomy Theme"; desc = "Michelin 3-star fine dining landing page with carte menu and cellar showcase." }
)

foreach ($t in $themes) {
    $slug = $t.slug
    $name = $t.name
    $desc = $t.desc
    
    $tempTheme = Join-Path $env:TEMP "themekit-theme-$slug"
    if (Test-Path $tempTheme) { Remove-Item -Recurse -Force $tempTheme }
    New-Item -ItemType Directory -Path $tempTheme -Force | Out-Null
    
    # Copy shared assets
    $themeSrc = Join-Path $tempTheme "src"
    New-Item -ItemType Directory -Path $themeSrc -Force | Out-Null
    Copy-Item -Path (Join-Path $root "src\components") -Destination (Join-Path $themeSrc "components") -Recurse
    Copy-Item -Path (Join-Path $root "src\layouts") -Destination (Join-Path $themeSrc "layouts") -Recurse
    Copy-Item -Path (Join-Path $root "src\lib") -Destination (Join-Path $themeSrc "lib") -Recurse
    Copy-Item -Path (Join-Path $root "src\styles") -Destination (Join-Path $themeSrc "styles") -Recurse
    
    # Public assets
    $tPublic = Join-Path $tempTheme "public"
    New-Item -ItemType Directory -Path $tPublic -Force | Out-Null
    Get-ChildItem -Path (Join-Path $root "public") | Where-Object { $_.Name -ne "downloads" } | Copy-Item -Destination $tPublic -Recurse
    
    # Root configs
    Copy-Item -Path (Join-Path $root "astro.config.mjs") -Destination $tempTheme
    Copy-Item -Path (Join-Path $root "tsconfig.json") -Destination $tempTheme
    Copy-Item -Path (Join-Path $root ".gitignore") -Destination $tempTheme
    
    # Specialized package.json for this theme
    $pkgJson = Get-Content (Join-Path $root "package.json") -Raw | ConvertFrom-Json
    $pkgJson.name = "themekit-$slug-theme"
    $pkgJson.description = "$name in Astro Framework"
    $pkgJsonString = $pkgJson | ConvertTo-Json -Depth 10
    [System.IO.File]::WriteAllText((Join-Path $tempTheme "package.json"), $pkgJsonString, [System.Text.Encoding]::UTF8)
    
    # Pages directory: set this specific theme as the main homepage
    $tPages = Join-Path $themeSrc "pages"
    New-Item -ItemType Directory -Path $tPages -Force | Out-Null
    
    # Read the theme's template file and adjust relative paths: ../../ -> ../
    $themeIndexFile = Join-Path $root "src\themes\$slug\index.astro"
    if (Test-Path $themeIndexFile) {
        $content = [System.IO.File]::ReadAllText($themeIndexFile, [System.Text.Encoding]::UTF8)
        $content = $content.Replace("../../layouts/", "../layouts/")
        $content = $content.Replace("../../components/", "../components/")
        $content = $content.Replace("../../lib/", "../lib/")
        $content = $content.Replace("../../styles/", "../styles/")
        [System.IO.File]::WriteAllText((Join-Path $tPages "index.astro"), $content, [System.Text.Encoding]::UTF8)
    }
    
    # Copy supporting inner pages (about, contact, pricing, blog, etc.)
    $innerPages = @("about.astro", "contact.astro", "pricing.astro", "blog.astro", "services.astro", "faq.astro", "privacy.astro", "terms.astro", "404.astro", "docs.astro")
    foreach ($ip in $innerPages) {
        $ipPath = Join-Path $root "src\pages\$ip"
        if (Test-Path $ipPath) {
            Copy-Item -Path $ipPath -Destination $tPages
        }
    }
    
    if (Test-Path (Join-Path $root "src\pages\blog")) {
        Copy-Item -Path (Join-Path $root "src\pages\blog") -Destination (Join-Path $tPages "blog") -Recurse
    }
    
    # Tailored README.md
    $readmeContent = "# $name (Astro Framework)`n`n$desc`n`nBuilt with Astro, React 19, and Tailwind CSS v4.`n`n## Quick Start`n`n1. Install dependencies:`n```bash`nnpm install`n````n`n2. Start the development server:`n```bash`nnpm run dev`n````n`n3. Open in browser:`nNavigate to http://localhost:4321 to see your theme live!`n`n## Build for Production`n```bash`nnpm run build`nnpm run preview`n```"
    [System.IO.File]::WriteAllText((Join-Path $tempTheme "README.md"), $readmeContent, [System.Text.Encoding]::UTF8)
    
    # Compress standalone theme ZIP
    $themeZip = Join-Path $destDir "themekit-$slug-theme.zip"
    if (Test-Path $themeZip) { Remove-Item -Force $themeZip }
    Compress-Archive -Path (Join-Path $tempTheme "*") -DestinationPath $themeZip -Force
    Remove-Item -Recurse -Force $tempTheme
    
    $tInfo = Get-Item $themeZip
    Write-Host "Created: $($tInfo.Name) ($([math]::Round($tInfo.Length / 1KB, 2)) KB)"
}

Write-Host "`nAll theme packages generated successfully in public\downloads!"
