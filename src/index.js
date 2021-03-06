import util from './util/index'
import * as stringFilters from './string/index'
import * as arrayFilters from './array/index'
import * as otherFilters from './other/index'
import * as epochFilters from './epoch/index'

var Vue2Epoch = {
  install: function(Vue) {
    util.each(stringFilters, function(value, key) {
        Vue.filter(key, value)
    })

    util.each(epochFilters, function(value, key) {
        Vue.filter(key, value)
    })

    util.each(otherFilters, function(value, key) {
        Vue.filter(key, value)
    })

    Vue.mixin({
      methods: {
        limitBy: arrayFilters.limitBy,
        filterBy: arrayFilters.filterBy,
        orderBy: arrayFilters.orderBy,
        find: arrayFilters.find
      }
    })
  }
}

export default Vue2Epoch;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vue2Epoch);
}
