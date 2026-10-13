# Draws the REDSHIFT app icon (dark tile, orange slash, white disc) at every size the APK / EXE need.
import os, sys
from PIL import Image, ImageDraw
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def icon(n, round_tile=False):
    S = 4 * n  # draw big, then downsample for smooth edges
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if round_tile: d.ellipse([0, 0, S - 1, S - 1], fill=(22, 22, 26, 255))
    else: d.rounded_rectangle([0, 0, S - 1, S - 1], radius=S * 0.18, fill=(22, 22, 26, 255))
    # the disc: a thick white ring, slightly tilted (drawn as an ellipse)
    cx, cy = S * 0.5, S * 0.52
    rx, ry = S * 0.30, S * 0.19
    d.ellipse([cx - rx, cy - ry, cx + rx, cy + ry], outline=(255, 255, 255, 255), width=int(S * 0.075))
    # the slash cutting through it
    w = S * 0.11
    d.polygon([(S * 0.60, S * 0.12), (S * 0.60 + w, S * 0.12), (S * 0.40 + w, S * 0.88), (S * 0.40, S * 0.88)], fill=(255, 90, 31, 255))
    return im.resize((n, n), Image.LANCZOS)

res = os.path.join(ROOT, 'android', 'res')
for name, n in (('mdpi', 48), ('hdpi', 72), ('xhdpi', 96), ('xxhdpi', 144), ('xxxhdpi', 192)):
    os.makedirs(os.path.join(res, 'mipmap-' + name), exist_ok=True)
    icon(n).save(os.path.join(res, 'mipmap-' + name, 'ic_launcher.png'))
    icon(n, True).save(os.path.join(res, 'mipmap-' + name, 'ic_launcher_round.png'))
os.makedirs(os.path.join(ROOT, 'desktop'), exist_ok=True)
icon(256).save(os.path.join(ROOT, 'desktop', 'icon.png'))
icon(180).save(os.path.join(ROOT, 'public', 'icon.png'))
print('icons ok')
