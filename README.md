# Vue2Epoch
Epoch converter filter for Vue js

`npm i vue2-epoch`

https://www.npmjs.com/package/vue2-epoch


## How to use ?

### step 1. Install vue2-epoch

`npm i vue2-epoch`



```import Vue2Epoch  from 'vue2-epoch';
import Vue from 'vue';
 
Vue.use(Vue2Epoch ); 
```


### step 2. use filter


```
data: {
  unixtime : 1553684014
}

{{ unixtime | epochToGMTDate  }} => Wed, 27 Mar 2019 10:53:34 GMT

```


## Filter List

- epochToGMTDate
- epochToLocalDate
- dateStringToEpoch
