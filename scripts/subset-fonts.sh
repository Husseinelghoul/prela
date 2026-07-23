#!/usr/bin/env bash
# Regenerate the subsetted Font Awesome webfonts in public/fonts/.
#
# WHY: The full FA Pro fonts are ~494 KB (woff2). We ship only the glyphs the
# site actually uses (~11 KB). This script re-scans the source for `fa-*` icons,
# maps them to codepoints via plugins.css, and re-subsets the FULL fonts kept in
# scripts/fa-full/ down to just those glyphs.
#
# RUN THIS whenever you add a new Font Awesome icon to any page/component,
# otherwise the new icon will not render (its glyph won't be in the subset).
#
#   bash scripts/subset-fonts.sh
#
set -euo pipefail
cd "$(dirname "$0")/.."

FULL_DIR="scripts/fa-full"
OUT_DIR="public/fonts"
CSS="public/css/plugins/plugins.css"
VENV="/tmp/fa_subset_venv"

# 1. Ensure a Python env with fonttools + brotli (for woff2 output).
if [ ! -x "$VENV/bin/pyftsubset" ]; then
  python3 -m venv "$VENV"
  "$VENV/bin/pip" install -q fonttools brotli
fi

# 2. Collect used icons from src, map to codepoints, subset each weight.
"$VENV/bin/python" - "$FULL_DIR" "$OUT_DIR" "$CSS" <<'PY'
import re, glob, sys, subprocess, os
full_dir, out_dir, css_path = sys.argv[1:4]

STYLE={'fa','fas','far','fal','fat','fad','fab','fa-solid','fa-regular','fa-light','fa-thin',
 'fa-duotone','fa-brands','fa-fw','fa-lg','fa-2x','fa-3x','fa-1x','fa-xs','fa-sm','fa-spin',
 'fa-pulse','fa-border','fa-inverse','fa-stack','fa-stack-1x','fa-stack-2x'}
icons=set()
for f in glob.glob('src/**/*.astro', recursive=True)+glob.glob('src/**/*.ts', recursive=True):
    for m in re.findall(r'fa-[a-z0-9-]+', open(f,encoding='utf-8').read()):
        if m not in STYLE: icons.add(m)

css=open(css_path,encoding='utf-8').read()
codes=set(); missing=[]
for ic in sorted(icons):
    found=None
    for m in re.finditer(r'([^{}]+)\{([^{}]*content\s*:\s*["\']\\([0-9a-fA-F]+)[^{}]*)\}', css):
        if re.search(r'\.'+re.escape(ic)+r'::?before(?![a-z0-9-])', m.group(1)):
            found=m.group(3).lower(); break
    if found: codes.add(found)
    else: missing.append(ic)
if missing: print("WARN: no codepoint for:", missing, file=sys.stderr)
uni=",".join("U+"+c for c in sorted(codes))
print(f"Subsetting {len(codes)} glyphs from {len(icons)} icons")

for w in ["light-300","regular-400","solid-900"]:
    src=f"{full_dir}/fa-{w}.ttf"
    for flavor,ext in [("--flavor=woff2","woff2"),("","ttf")]:
        cmd=[f"{os.path.dirname(sys.executable)}/pyftsubset", src, f"--unicodes={uni}",
             f"--output-file={out_dir}/fa-{w}.{ext}"]
        if flavor: cmd.insert(3, flavor)
        subprocess.run([c for c in cmd if c], check=True)
    print(f"  fa-{w}: ok")
print("Done. Rebuild with `npm run build`.")
PY
