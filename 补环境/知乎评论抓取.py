import requests
import execjs
from urllib.parse import urlencode




url = "https://www.zhihu.com/api/v4/comment_v5/answers/2868252154/root_comment"
params = {
    "order_by": "score",
    "limit": "20",
    "offset": ""
}
url = url + '?' + urlencode(params)
t = execjs.compile(open('知乎调试.js', encoding='utf-8').read()).call('t',url)
x_zse_96 = execjs.compile(open('知乎评论.js', encoding='utf-8').read()).call('D',t)
print("2.0_" + x_zse_96)
headers = {
    "authority": "www.zhihu.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.zhihu.com/topic/21239753/hot",
    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "x-requested-with": "fetch",
    "x-zse-93": "101_3_3.0",
    "x-zse-96": ""
}
cookies = {
    "_zap": "9c350c30-dc9c-4e43-bddc-e11df6cd8086",
    "d_c0": "\"APCQxBmDARWPTrKsuHG4D3Lo7TY4qOHSEd0=|1653658728\"",
    "_9755xjdesxxd_": "32",
    "YD00517437729195%3AWM_TID": "5iGxdhX2z9NAQRQVABKRQgiHR5jWrf2X",
    "_xsrf": "z20F43gyKUxp1MPn2nV2XgKV3cG2p6Au",
    "__snaker__id": "MAnVZNmLeqx6H54P",
    "q_c1": "9325ef55ff1240f3b08715414a11c60d|1675695919000|1675695919000",
    "tst": "r",
    "arialoadData": "false",
    "Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49": "1675695893,1676354023,1676453725,1676528519",
    "SESSIONID": "G93mV5aQ0YCFo6msWS48pIYeaLwvlRySBxy7e3d2yMQ",
    "JOID": "V1EQAU7Y3obo4lnxPN_S1nWzBPcpk-uygrRgnGroi8mpim-QQ1Aea4zuWfo8ixrSVmco1PVEHtapSgym-I4eX2M=",
    "osd": "W1EQAk_U3obr41XxPNzT2nWzB_Ylk-uxg7hgnGnph8mpiW6cQ1AdaoDuWfk9hxrSVWYk1PVHH9qpSg-n9I4eXGI=",
    "YD00517437729195%3AWM_NI": "LuLWgb1xjd1YI3CcKFL8RffpMek2KbRkcujhqDLxUR6DQcOpL48wTqiKy33Tv2etjk4pe3T4onzriioNT6LPD107OB5FZIwZ1D%2F2p5zAOp2C%2B4Vsd%2BnHqJRONvKgbx0sRk4%3D",
    "YD00517437729195%3AWM_NIKE": "9ca17ae2e6ffcda170e2e6eed5f070b589e1b8d0458de78bb3d55b869f9b82c86e88be8a96d57982af8c95b22af0fea7c3b92a90ab84b8e66af3a8a685b4538bed8d84ca4e90e89e87e57c8fbba5d3ca6a92b5ad96e964b39c8499d85af69c9f84ce7c90ecf898d77bab95b7d4b260b6eeab95e961f8b0abd4d740adb2b693ec63ad929cd7cf5c88ef00d8ce4af79a96aaf652f39ce1d3f33fba9f8191b149e9ec9a94e721ae98bfabd1458eaa8588e174f4ad9e8cb737e2a3",
    "l_n_c": "1",
    "l_cap_id": "\"ODg5NDExYjBhZDE4NGJjZTg3ZDM5OTU3NWE0ZmYzOGE=|1676534904|d06830b08ebf7c00d0a2b08d1a96d64fdf76e805\"",
    "r_cap_id": "\"ZmRmNjY3ZmY4ZDNlNDA1ZWEzM2FhMmRiMDZkZjNkYzc=|1676534904|468fdadf6f63e89971a0b9a968bd326a9e368d4b\"",
    "cap_id": "\"YWI4ZjljYTRmOTkwNDE4Yzk5ODE2ZTk5ZTY1NmNjOTY=|1676534904|c9ada5ebb3766199344c0db94294dbd71059d799\"",
    "n_c": "1",
    "gdxidpyhxdE": "WRCgnDG4KpW4mx2Saxalan1Jjt40C4xYQea4BoX9Ura%5C6WEhkZoQXhyjjTmBWqhhozezTI%5Czr80M2sdcTK0abmalXfeEHiihI%2Bi8bVu08iin%5CiNbySm98KPowcXwudf7PrPNNI3PskyLAEN%2BVJ%2Bvd9f3m%5CwM%2BciCe8y74PcoJI88vHf4%3A1676540632612",
    "Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49": "1676539770",
    "captcha_session_v2": "2|1:0|10:1676539770|18:captcha_session_v2|88:TExjRFV6SU1FSm1aeVdzV1lmUHlQSUNIVVdXc2Y3c0ZnVXovZDlXZ01LUjNZa3RZL3dNSjh0QzB5UXp5MUxFMA==|f57b8eacd998725942dbe0b4a255221f38bb03a41ae04b84919af1284ebc406b",
    "KLBRSID": "fb3eda1aa35a9ed9f88f346a7a3ebe83|1676539773|1676528518"
}
response = requests.get(url, headers=headers,params=params)

print(response.text)

