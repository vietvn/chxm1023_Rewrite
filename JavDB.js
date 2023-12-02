/*************************************

项目名称：JavDB-净化/VIP
在线地址：https://javdb008.com
下载地址：https://jav522.app
更新日期：2023-12-03
脚本作者：chxm1023
数据来源：@yqc_123
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(users|startup|ads) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js
^https?:\/\/api\.hechuangxinxi\.xyz\/api\/v\d\/(movies\/.*\/play|startup) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/JavDB.js

[mitm]
hostname = api.hechuangxinxi.xyz

*************************************/


const chxm1024 = {};
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  const headers = $request.headers;
  headers["authorization"] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTc1NDMwLCJ1c2VybmFtZSI6IndlaWd1YW5naHQifQ.lyfGvtZcz0SjiKNx-k9Aoe_UgcMyxwG4Xqq3lzvbIao";
  chxm1024.headers = headers;
} else {
  const user = /users/;
  const ada = /startup/;
  const adb = /ads/;

  if(user.test($request.url)){
    chxm1023.data.user = Object.assign({}, chxm1023.data.user, {
      "promotion_code" : "bkdhng",
      "vip_expired_at" : "2099-09-09T09:09:09.000+08:00",
      "is_vip" : true
    });
  }

  if(ada.test($request.url)){
    chxm1023.data.splash_ad.enabled = false;
    chxm1023.data.splash_ad.overtime = 0;
    chxm1023.data.splash_ad.ad = {};
    chxm1023.data.feedback.placeholder = "";
    chxm1023.data.settings.UPDATE_DESCRIPTION = "";
    chxm1023.data.settings.NOTICE = ""; 
  }

  if(adb.test($request.url)){
    chxm1023.data.ads = {};
    chxm1023.enabled = false;
  }
  chxm1024.body = JSON.stringify(chxm1023);
}

$done(chxm1024);
