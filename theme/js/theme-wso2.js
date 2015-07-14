/*
 * Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

(function($) {


    /* ========================================================================
     * add browser meta data to html tag
     * ======================================================================== */
    $('html')
        .attr('data-useragent',  navigator.userAgent)
        .attr('data-platform', navigator.platform)
        .addClass(((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':''));
    

    /* ========================================================================
     * loading function
     * ======================================================================== */
    $.fn.loading = function(action) {

        var html = '<div class="loading-animation"> \
                        <div class="logo"> \
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" \
                                 viewBox="0 0 14 14" enable-background="new 0 0 14 14" xml:space="preserve"> \
                                <path class="circle" stroke-width="1.4" stroke-miterlimit="10" d="M6.534,0.748C7.546,0.683,8.578,0.836,9.508,1.25 c1.903,0.807,3.339,2.615,3.685,4.654c0.244,1.363,0.028,2.807-0.624,4.031c-0.851,1.635-2.458,2.852-4.266,3.222 c-1.189,0.25-2.45,0.152-3.583-0.289c-1.095-0.423-2.066-1.16-2.765-2.101C1.213,9.78,0.774,8.568,0.718,7.335 C0.634,5.866,1.094,4.372,1.993,3.207C3.064,1.788,4.76,0.867,6.534,0.748z"/> \
                                <path class="pulse-line" stroke-width="0.55" stroke-miterlimit="10" d="M12.602,7.006c-0.582-0.001-1.368-0.001-1.95,0 c-0.491,0.883-0.782,1.4-1.278,2.28C8.572,7.347,7.755,5.337,6.951,3.399c-0.586,1.29-1.338,3.017-1.923,4.307 c-1.235,0-2.38-0.002-3.615,0"/> \
                            </svg> \
                            <div class="signal"></div> \
                        </div> \
                        <p>LOADING...</p> \
                    </div> \
                    <div class="loading-bg"></div>';

        return $(this).each(function(){
            if (action === 'show') {
                $(this).prepend(html).addClass('loading');
            }
            if (action === 'hide') {
                $(this).removeClass('loading');
                $('.loading-animation, .loading-bg', this).remove();
            }
        });

    };


    /* ========================================================================
     * extended popover function
     * ======================================================================== */
    $.fn.popover_extended = function(){

        var elem = $(this);

        return $(elem).each(function(){

            /**
             * button click function
             */
            $(elem).click(function(e){
                e.preventDefault();
                $(elem).next('.popover').toggle(0).toggleClass('in');
            });

            /**
             * Bind popover hide function to the document.
             */
            $(document).bind('click', function(e) {
                if(($(e.target).closest(elem).length !== 1) && ($(e.target).closest('.popover').length === 0)){
                    $(elem).next('.popover').removeClass('in').hide();
                }
            });

        });

    };

}(jQuery));