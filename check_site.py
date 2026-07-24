import urllib.request, re

req = urllib.request.Request('https://storepcshop.uz', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
print('HTML length:', len(html))
links = set(re.findall(r'/_next/static/chunks/[a-zA-Z0-9_-]+\.js', html))
print('JS Chunks:', links)
