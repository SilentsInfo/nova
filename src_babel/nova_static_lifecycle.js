'use strict';
(function() {
    Nova.Utils.mix(Nova, {
        ready: function(eles, callback) {
            if(eles.constructor != Array) {
                eles = [eles];
            }

            let count = eles.length;
            let readyCount = 0;
            eles.forEach(function(ele) {
                // 原生元素
                if(ele.tagName.indexOf('-') < 0 && !ele.getAttribute('is')) {
                    readyCount++;
                }
                else if(ele._nova && ele._nova.isReady) {
                    readyCount++;
                } else {
                    ele.addEventListener('nova.ready', function() {
                        readyCount++;
                        checkForReady();
                    });
                }
            });
            checkForReady();

            function checkForReady() {
                if(readyCount == count) {
                    callback();
                }
            }

        }
    });
})();
