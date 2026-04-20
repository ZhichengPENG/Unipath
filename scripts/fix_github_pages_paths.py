from __future__ import annotations

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]


def fix_one_html(s: str) -> str:
    # 1) Make common root-absolute static paths relative.
    #    GitHub Pages project sites use /<repo>/... basePath, so leading "/" breaks.
    for prefix in (
        "/assets/",
        "/uploads/",
        "/css/",
        "/js/",
        "/images/",
        "/fonts/",
    ):
        s = s.replace(f'src="{prefix}', f'src="{prefix.lstrip("/")}')
        s = s.replace(f"src='{prefix}", f"src='{prefix.lstrip('/')}")
        s = s.replace(f'href="{prefix}', f'href="{prefix.lstrip("/")}')
        s = s.replace(f"href='{prefix}", f"href='{prefix.lstrip('/')}")

    # favicon
    s = s.replace('href="/favicon.ico"', 'href="favicon.ico"')
    s = s.replace("href='/favicon.ico'", "href='favicon.ico'")

    # 2) Root link href="/" => "./"
    s = re.sub(r'(\bhref=")/(")', r'\1./\2', s)
    s = re.sub(r"(\\bhref=')/(')", r"\1./\2", s)

    # 3) Internal directory links href="/services/" => "services/" (avoid http(s), mailto, javascript, tel)
    def repl_href(m: re.Match[str]) -> str:
        q = m.group("q")
        rest = m.group("rest")
        low = rest.lower()
        if rest.startswith(("#", "?")):
            return m.group(0)
        if low.startswith(("http://", "https://", "//", "mailto:", "javascript:", "tel:")):
            return m.group(0)
        return f'href={q}{rest}{q}'

    s = re.sub(r'\\bhref=(?P<q>["\'])/(?P<rest>[^"\']+)(?P=q)', repl_href, s)

    # 4) Fix wrong CSS inclusion: <script src="assets/css/*.css"></script> -> <link rel="stylesheet" href="...">
    s = re.sub(
        r'<script\\s+([^>]*?)src=(["\'])(assets/css/[^"\']+\\.css)\\2([^>]*)>\\s*</script>',
        r'<link rel="stylesheet" href="\\2\\3\\2">',
        s,
        flags=re.IGNORECASE,
    )

    return s


def main() -> int:
    html_files = list(ROOT.rglob("*.html"))
    changed_files = 0

    for f in html_files:
        s = f.read_text(encoding="utf-8", errors="ignore")
        o = s
        s = fix_one_html(s)
        if s != o:
            f.write_text(s, encoding="utf-8")
            changed_files += 1

    print(f"updated_files {changed_files}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

