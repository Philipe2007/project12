from pathlib import Path
from zipfile import ZipFile

base = Path('public/projects/shoe-making')
for folder in [
    'images/materials',
    'images/cutting',
    'images/stitching',
    'images/assembly',
    'images/finishing',
    'images/completed',
    'downloads',
]:
    (base / folder).mkdir(parents=True, exist_ok=True)

try:
    from PIL import Image, ImageDraw, ImageFont
except Exception as exc:
    raise SystemExit(f'Pillow is required for image generation: {exc}')

specs = [
    ('hero.jpg', 'Shoe Making Project', 'Youth enterprise and craftsmanship', '#0a3d8f', '#00a1de'),
    ('images/materials/material-1.jpg', 'Material Selection', 'Leather • Thread • Soles', '#103b73', '#fcd116'),
    ('images/materials/material-2.jpg', 'Workshop Tools', 'Cutters • Needles • Glue', '#0f3a5d', '#dfeaf9'),
    ('images/cutting/cutting-1.jpg', 'Design & Measurement', 'Patterns • Size • Fit', '#0d4f7d', '#b7e7ff'),
    ('images/cutting/cutting-2.jpg', 'Cutting', 'Precision • Layout • Quality', '#124a7a', '#9bd0f5'),
    ('images/stitching/stitching-1.jpg', 'Stitching', 'Craft • Reinforcement • Finish', '#214d6d', '#ffd166'),
    ('images/stitching/stitching-2.jpg', 'Hand-Stitched Details', 'Careful finishing', '#1d5a7a', '#d5f0ff'),
    ('images/assembly/assembly-1.jpg', 'Assembly', 'Form • Structure • Balance', '#163d67', '#7bc8f6'),
    ('images/assembly/assembly-2.jpg', 'Sole Attachment', 'Support • Shape • Durability', '#1b2f4f', '#90dbf4'),
    ('images/finishing/finishing-1.jpg', 'Finishing', 'Polish • Trim • Quality', '#234d73', '#f0e2b6'),
    ('images/finishing/finishing-2.jpg', 'Final Detailing', 'Presentation • Comfort', '#2f5275', '#cce6ff'),
    ('images/completed/completed-1.jpg', 'Final Product', 'Ready for use', '#0d315b', '#ffd166'),
    ('images/completed/completed-2.jpg', 'Completed Shoes', 'Handmade quality', '#173b63', '#7dd3fc'),
]

for rel, title, subtitle, color1, color2 in specs:
    c1 = tuple(int(color1.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    c2 = tuple(int(color2.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    img = Image.new('RGB', (1200, 900), c1)
    draw = ImageDraw.Draw(img)
    for y in range(0, 900, 24):
        t = y / 900
        mix = tuple(int(c1[i] * (1 - t) + c2[i] * t) for i in range(3))
        draw.rectangle((0, y, 1200, y + 24), fill=mix)
    draw.rounded_rectangle((180, 230, 1020, 640), radius=52, fill=(255, 255, 255, 120))
    draw.polygon([(300, 610), (430, 360), (770, 360), (900, 610), (760, 680), (470, 680)], fill=(255, 255, 255, 180))
    draw.ellipse((320, 230, 880, 610), fill=(255, 255, 255, 70))
    draw.rectangle((200, 150, 1000, 200), fill=(255, 255, 255, 60))
    try:
        title_font = ImageFont.truetype('arial.ttf', 54)
        subtitle_font = ImageFont.truetype('arial.ttf', 28)
    except Exception:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    draw.text((80, 90), title, fill='white', font=title_font)
    draw.text((80, 170), subtitle, fill=(233, 246, 255), font=subtitle_font)
    target = base / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    img.save(target, quality=90)

# Build PDF downloads
pdf_files = {
    'shoe-making-project-report.pdf': 'Shoe Making Project Report\n\nThis report outlines the project goals, process, impact, materials, and hands-on learning outcomes.',
    'materials-list.pdf': 'Materials List\n\nLeather, soles, adhesives, polish, thread, needles, scissors, and finishing supplies.',
    'project-documentation.pdf': 'Project Documentation\n\nComprehensive project notes for production, learning milestones, and implementation outcomes.',
}
for name, text in pdf_files.items():
    payload = (
        '%PDF-1.4\n'
        '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'
        '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n'
        '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n'
        '4 0 obj\n<< /Length 200 >>\nstream\n'
        'BT\n/F1 18 Tf\n50 740 Td\n(' + name.replace('(', '\\(').replace(')', '\\)') + ') Tj\n0 -28 Td\n/F1 11 Tf\n(' + text.replace('(', '\\(').replace(')', '\\)') + ') Tj\nET\nendstream\nendobj\n'
        '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
        'xref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000062 00000 n \n0000000124 00000 n \n0000000247 00000 n \n0000000332 00000 n \ntrailer\n<< /Root 1 0 R /Size 6 >>\nstartxref\n430\n%%EOF\n'
    )
    (base / 'downloads' / name).write_bytes(payload.encode('latin1'))

zip_path = base / 'downloads' / 'shoe-making-photos.zip'
with ZipFile(zip_path, 'w') as zf:
    for file in sorted((base / 'images').rglob('*.jpg')):
        zf.write(file, arcname=str(file.relative_to(base)))

print('Created assets in', base)
