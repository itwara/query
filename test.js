#case1 
 url: https://fang.lousiling.cn?a=123&b=456 
 output: {a: "123", b: "456"}

#case1.1
 url: https://fang.lousiling.cn?a=123&A=456 
 output: {a: "123", A: "456"}
 description: 默认区分大小写，考虑支持可配

#case2
 url: https://fang.lousiling.cn#a=123&b=456
 redirect: https://fang.lousiling.cn#/a=123&b=456
 output: {/a: "123", b: "456"}
 description: 1.考虑默认将/也加入过滤字符 2.考虑支持自定义过滤字符
 status: 1. done
         2. done

#case2.1
 url: https://fang.lousiling.cn#/?a=123&b=456
 output: {a: "123", b: "456"}

#case3
 url: https://fang.lousiling.cn?a=123#/?b=456
 output: {a: "123", b: "456"}

#case4
 url: https://fang.lousiling.cn?a=123&b=456#/?a=789&b=012
 output: {a: "789", b: "012"}
 description: 1. 目前如果key值相同，采用的策略是以最后出现的value为准
              2. 考虑策略自定义
 status: 1. done
         2. undo

#case5
url: https%3A%2F%2Ffang.lousiling.cn%3Fa%3D123%26b%3D456%23%2F%3Fa%3D789%26b%3D012
output: {}
description: 增加解码功能
status: done