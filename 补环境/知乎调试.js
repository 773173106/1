

document = {}
document.cookie = "'SESSIONID=MImDScBavsPI5gHhh1Zo9OXjY5QgH8jxeg6eDWdNxPa; JOID=WlwVAkzTh4wYujbleNqE1IvsZexlpcTDbfwOlEvv-7FR2QiKD5jGZXK5PuB_QNfCQbpJZkoO4fC84ooaqAaOcVU=; osd=W10VBkPShowctTfkeN6L1YrsYeNkpMTHYv0PlE_g-rBR3QeLDpjCanO4PuRwQdbCRbVIZ0oK7vG94o4VqQeOdVo=; SESSIONID=of49lIVdCKUzQe0ez59etpgaiATziZcylUf9pNCd8IN; JOID=UlodBEu6P9dqCFWROr09j_lRCJknmxb7Tit0uBaZHv5GLHawE30nMQ4KXZQytstWPEeTxVQmPPoFIXYYhe1sDA4=; osd=W1wcCk6zOdZkDVyXO7M4hv9QBpwunRf1SyJyuRicF_hHInO5FXwpNAcMXJo3v81XMkKaw1UoOfMDIHgdjOttAgs=; _zap=cd32191d-b922-4491-84ac-6df46c8197d6; _xsrf=92cf2b0c-2b0d-48ab-a816-d581ad1f43cb; d_c0=AKCTlcGKVhaPTuLQKIsU7lKri0w89INHE38=|1676544858; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1675695893,1676354023,1676453725,1676528519; arialoadData=false; q_c1=3e9a82cb815f456bbf54fad8086f88b8|1676546653000|1676546653000; tst=r; SESSIONID=zGNsI4u23p9He1csxBnU37X24vVwe9l2z8JcDKbflVJ; JOID=U1kUB0_OQP9aEcFwJMtFr8lFnn8xtAe0KV31BRP4MMYXdPUTV0AEFDwUwXUhcNZFT3wu_-zqejXygKpCIPV5pBA=; osd=Wl4RBErHR_pZFMh3IchAps5AnXo4swK3LFTyABD9OcESd_AaUEUHETUTxHYkedFATHkn-Onpfzz1halHKfJ8pxU=; __snaker__id=LK4RuQUB9WNXkRaq; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1676561202; gdxidpyhxdE=r6jl9ZE1mYTysu3LGodsq8zlR2MqqUUrT%5C%2FLiLOigjUuVMl8c8q%5CK76tG191s%5Cw7nPc6vIexpnO5IsucHEVskINNcjHWBjwRCbWmdWDtJeXgp01OzZQ6Zht7Qr8tVAwZV5AEsSBWn%2Bqzfgl7XNxdWBXQnPL%5CjMMpEcHfHkDnQ2qm242J%3A1676563510904; KLBRSID=c450def82e5863a200934bb67541d696|1676562782|1676555170'"

H = new RegExp("d_c0=([^;]+)")
K = function() {
            var t = H.exec(document.cookie);
            return t && t[1]
        }
        console.log(K())

n = {
    "zse93": "101_3_3.0",
    "dc0": K() ,
    "xZst81": null
}
t = 'https://www.zhihu.com/api/v4/comment_v5/answers/2869341539/root_comment?order_by=score&limit=20&offset='

//md5  加密
var CryptoJS = require('crypto-js')



z = function(t) {
            var e = new URL(t,"https://www.zhihu.com");
            return "" + e.pathname + e.search
        }
G = function(t) {
            return null == t ? "" : "string" == typeof t ? t : "undefined" != typeof URLSearchParams && t instanceof URLSearchParams ? t.toString() : s()(t) ? JSON.stringify(t) : ("object" == typeof (e = t) ? null === e : "function" != typeof e) ? String(t) : "";
            var e
}
V = function(t, e) {
            return void 0 === e && (e = 4096),
            !!t && function(t) {
                return new Blob([t]).size
            }(t) <= e
        }


var C = K(),
S = function(t, e, n, r) {

    var o = n.zse93
      , i = n.dc0
      , a = n.xZst81
      , u = z(t)
      , c = G(e)
      , s = [o, u, i, V(c) && c, a].filter(Boolean).join("+");
        function MD5Test() {

        return CryptoJS.MD5(s).toString()
}
    return {
        source: s,
        signature: (MD5Test(s))
    }
}

e = undefined

// console.log(S(t, e, n)['signature']);


t = function (t){
    return S(t,e,n)['signature']
}


console.log(t());