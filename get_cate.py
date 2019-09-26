from bs4 import BeautifulSoup as bs
import requests

with open("cate.html",'r') as f:
    html = f.read()
    bsobj = bs(html, 'html.parser')

uls = bsobj.findAll("ul")
cate = {}
for ul in uls:
    if ul.attrs.get('data-menu-id') > 16:
        details = []
        ds = ul.findAll('div')[1:]
        for d in ds:
            details.append(d.get_text().strip())
        cate[ul.attrs.get('data-menu-id')] = details

print cate

ul_pattern = """
<ul class="cate-detail" data-menu-id="%d">\n%s\n</ul>
"""
li_pattern = """
<li class="cate-detail-item"><a href="#" class="cate-detail-item-link">%s</a></li>"
"""

index = 16
maincontent = ""
while cate.get(str(index)):
    l = cate[str(index)]
    content = ""
    for i in l:
        content += li_pattern % i + "\n"
    maincontent += ul_pattern % (index, content)
    index += 1

with open("cate_new.html", "w") as f:
    f.write(maincontent.encode("utf-8","ignore"))

