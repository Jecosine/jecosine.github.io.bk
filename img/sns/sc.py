from bs4 import BeautifulSoup as bs
import requests
header = {
    'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36",
}
global_url = "https://cdn.jsdelivr.net"
links = {u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/heart.png': u'heart.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/lofter.png': u'lofter.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/douban.png': u'douban.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/qq.png': u'qq.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/github.png': u'github.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/youku.png': u'youku.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/googleplus.png': u'googleplus.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/twitter.png': u'twitter.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wechat.png': u'wechat.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/jianshu.png': u'jianshu.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/csdn.png': u'csdn.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/qzone.png': u'qzone.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/wangyiyun.png': u'wangyiyun.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/bilibili.png': u'bilibili.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/zhihu.png': u'zhihu.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/email.svg': u'email.svg', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/facebook.png': u'facebook.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/sina.png': u'sina.png', u'/gh/moezx/cdn@3.1.9/img/Sakura/images/sns/telegram.svg': u'telegram.svg'}
def get_links():
    url = "https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/sns"
    h = requests.get(url,headers = header)
    bsobj = bs(h.text,'html.parser')
    links = {i.attrs['href']:i.get_text() for i in bsobj.find("table").findAll('a')}
    print links
def get_sources():
    for i in links.keys():
        res = requests.get(global_url+i,headers = header)
        f = open(links.get(i),'wb')
        f.write(res.content)
        f.close()
get_sources()