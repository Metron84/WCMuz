#!/usr/bin/env python3
"""Generate PWA icons using only the stdlib + Pillow."""
from PIL import Image, ImageDraw, ImageFont
import os

SIZES = [32, 192, 512]
OUT = os.path.join(os.path.dirname(__file__), '..', 'icons')
os.makedirs(OUT, exist_ok=True)

BG = (6, 13, 26)        # --bg-deep
GOLD = (200, 168, 75)   # --gold

def make_icon(size):
    img = Image.new('RGBA', (size, size), (0,0,0,0))
    d = ImageDraw.Draw(img)

    # Background circle
    margin = size * 0.04
    d.ellipse([margin, margin, size-margin, size-margin], fill=BG)

    # Gold ring
    ring = size * 0.04
    d.ellipse([margin+ring, margin+ring, size-margin-ring, size-margin-ring],
              outline=GOLD, width=max(1, size//48))

    # Crescent ☪ symbol as text
    try:
        font_size = int(size * 0.5)
        font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', font_size)
    except Exception:
        font = ImageFont.load_default()

    symbol = '☪'
    bbox = d.textbbox((0,0), symbol, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0]
    y = (size - th) / 2 - bbox[1]
    d.text((x, y), symbol, fill=GOLD, font=font)

    return img

for sz in SIZES:
    icon = make_icon(sz)
    path = os.path.join(OUT, f'icon-{sz}.png')
    icon.save(path)
    print(f'  Generated {path}')

print('Done.')
