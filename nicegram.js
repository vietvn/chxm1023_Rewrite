/*************************************

项目名称：Nicegram(兼容新老旧版)
下载地址：https://t.cn/A6ou0MCe
更新日期：2023-11-28
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(nicegram\.cloud\/api\/v\d\/user\/info|restore-access\.indream\.app\/restoreAccess) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/nicegram.js

[mitm]
hostname = nicegram.cloud, restore-access.indream.app

*************************************/


const url = $request.url;
const isQX = typeof $task !== "undefined";
var chxm1023 = JSON.parse($response.body);
const subscriptionTest = /nicegram\.cloud\/api\/v\d\/user\/info/;
const premiumTest = /restoreAccess/;

if (subscriptionTest.test(url)) {
  chxm1023.data.user = {
    ...chxm1023.data.user,
    subscription: true,
    store_subscription: true,
    lifetime_subscription: true
  };
}

if (premiumTest.test(url)) {
  chxm1023 = {"data":{"premiumAccess": true}};
}

function finalizeResponse(content) {
  return { status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(content) };
}

$done(isQX ? finalizeResponse(chxm1023) : chxm1023);
