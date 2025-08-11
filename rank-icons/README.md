# Rank Icons

This folder contains SVG rank icons for the CYBR372 Mid Tri Practice Test.

## File Naming Convention

Rank icons are named according to the following pattern:
`{rank_name}.svg`

Where `{rank_name}` is the lowercase version of the rank name with spaces replaced by underscores.

## Available Icons

The following rank icons are included:

1. `unranked.svg` - Default icon for new players
2. `bronze_1.svg` - Bronze 1 rank
3. `bronze_2.svg` - Bronze 2 rank
4. `bronze_3.svg` - Bronze 3 rank
5. `silver_1.svg` - Silver 1 rank
6. `silver_2.svg` - Silver 2 rank
7. `silver_3.svg` - Silver 3 rank
8. `gold_1.svg` - Gold 1 rank
9. `gold_2.svg` - Gold 2 rank
10. `gold_3.svg` - Gold 3 rank
11. `platinum_1.svg` - Platinum 1 rank
12. `platinum_2.svg` - Platinum 2 rank
13. `platinum_3.svg` - Platinum 3 rank
14. `diamond_1.svg` - Diamond 1 rank
15. `diamond_2.svg` - Diamond 2 rank
16. `diamond_3.svg` - Diamond 3 rank
17. `champion_1.svg` - Champion 1 rank
18. `champion_2.svg` - Champion 2 rank
19. `champion_3.svg` - Champion 3 rank
20. `grand_champion.svg` - Grand Champion rank
21. `ssl.svg` - SSL (Super Sonic Legend) rank

## Icon Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **Size**: 128x128 pixels (viewBox)
- **Background**: Transparent
- **Style**: Gradient-filled circles with rank abbreviations
- **Fallback**: If SVG files are missing, the system will use emoji fallbacks

## How It Works

The application automatically:
1. Looks for SVG icons in this folder
2. Displays the SVG icon if available
3. Falls back to emoji icons if SVG files are missing or fail to load

## Example Implementation

```html
<img 
    src="rank-icons/bronze_1.svg"
    alt="Bronze 1"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
/>
<div class="fallback-icon" style="display: none;">
    🥉
</div>
```

## Custom Icons

You can replace the default icons with your own custom designs:
1. Create SVG images following the naming convention above
2. Place them in this folder
3. The application will automatically use your custom icons

## Color Scheme

The current icons use these color schemes:

- **Unranked**: Gray (#666666)
- **Bronze**: Bronze (#CD7F32)
- **Silver**: Silver (#C0C0C0)
- **Gold**: Gold (#FFD700)
- **Platinum**: Platinum (#E5E4E2)
- **Diamond**: Light Blue (#B9F2FF)
- **Champion**: Red-Orange (#FF6B6B)
- **Grand Champion**: Purple (#9C27B0)
- **SSL**: Gold (#FFD700)

## Advantages of SVG

- **Scalable**: Can be scaled to any size without losing quality
- **Small file size**: Typically smaller than PNG files
- **Customizable**: Can be easily modified with text editors
- **Accessible**: Better for screen readers and accessibility
- **Performance**: Faster loading than raster images

## Tips

- SVG icons look crisp at any resolution
- Icons are accessible and SEO-friendly
- Easy to customize colors and text in any text editor
- Work well on both light and dark backgrounds
- Can be easily converted to PNG if needed