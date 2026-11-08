# finality - all credits goes to original creator [tedhinklater](https://github.com/tedhinklater)
768p x 1080p :heavy_check_mark: 1440p :heavy_check_mark: 4k :heavy_check_mark: Mobile :heavy_check_mark: TV Mode :soon:

Also: Turn it up to 11 with the new [Featured Content Bar](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar) 
![bar](https://github.com/user-attachments/assets/f2c45f47-3530-4525-9f89-fe4e96c7676f)

# This theme is optimized for Fullscreen! 
The main goal was to have everything on one screen without having to scroll up/down.
Care has been taken to make it work in windowed mode, but it's mainly for fullscreen view (press ```F11```)

![movie](https://github.com/user-attachments/assets/56046d69-9626-467a-be9e-533b2e9599bc)

# Jellyfin 12.x

```css
@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/finality-12.css");

```

or the colour version

```css
@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/Finality-Coloured-12.css");

```

or the scrolling backdrop colour version

```css
@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/scrolling-backdrop-12.css");

```

Jellyfin 12 makes the new **Modern** layout the default (Settings > Display > Display mode = Auto). The previous layout is still available as *Desktop (Legacy)*.
After upgrading, hard refresh (`Ctrl+Shift+R`) or clear the site cache. Jellyfin 12 does not apply the Custom CSS setting to the admin dashboard.

### Featured Content Bar on Jellyfin 12

The bar used to be installed by replacing `home-html.<hash>.chunk.js`. The Modern layout no longer uses that file, so the bar disappears.
Instead, keep `ui/spotlight.html` and `ui/List.txt` as they are, put `featured-content-bar-12.js` in the same `ui` folder and load it from `index.html` (the `jellyfin-web` folder, `/jellyfin/jellyfin-web` in the official Docker image):

```sh
sed -i 's#</body>#<script defer src="ui/featured-content-bar-12.js"></script></body>#' index.html
```

`index.html` is replaced by every Jellyfin update, so run it again after updating (same as before with the chunk file). It also works with the Legacy layout.

# If you've updated to Jellyfin 10.11.x you need the latest version of Finality

```css
@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/finality-10.11.css");

```

or, import the colour version with

```css

@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/Finality-Coloured-10.11.css");

```

or, import the scrolling backdrop colour version with

```css

@import url("https://cdn.jsdelivr.net/gh/testycro/finality@main/scrolling-backdrop.css");

```

<img width="1679" height="1049" alt="1-0" src="https://github.com/user-attachments/assets/6bc923c0-6e7e-45e4-bf66-a19988f086af" />
<img width="1679" height="1049" alt="1-1" src="https://github.com/user-attachments/assets/dcf8f120-3b95-4a04-b1f1-9638737f4169" />
<img width="1679" height="1049" alt="1-2" src="https://github.com/user-attachments/assets/74f5b1af-d0db-45cb-b85c-93622edf02ab" />


# Under "Display" make sure you enable backdrops and use the Dark theme
![Backdrops](https://i.imgur.com/18D9IO3.png)

