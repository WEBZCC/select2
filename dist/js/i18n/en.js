window.$=window.$||{},function(){$&&$.fn&&$.fn.select2&&$.fn.select2.amd&&(define=$.fn.select2.amd.define,require=$.fn.select2.amd.require),define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return t!=1&&(n+="s"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Please enter "+t+" or more character";return t!=1&&(n+="s"),n},searching:function(){return"Searching…"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select"+e.maximum+" item";return e.maximum!=1&&(t+="s"),t},noResults:function(){return"No results found"}}}),require("jquery.select2"),$.fn.select2.amd={define:define,require:require}}();