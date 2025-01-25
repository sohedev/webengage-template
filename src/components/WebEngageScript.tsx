'use client';

import { useEffect } from 'react';

export default function WebEngageScript() {
    useEffect(() => {
        // Add the WebEngage snippet here
        (function (w, d, s, o, f, js, fjs) {
            w[o] =
                w[o] ||
                function () {
                    (w[o].q = w[o].q || []).push(arguments);
                };
            (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
            js.id = o;
            js.src = f;
            js.async = 1;
            fjs.parentNode.insertBefore(js, fjs);
        })(window, document, 'script', '_weq', 'https://cdn.widgets.webengage.com/js/widget/webengage-min-v4.js');

        // Initialize WebEngage
        window._weq('YOUR_WEBENGAGE_LICENSE_CODE');
    }, []);

    return null; // This component doesn't render anything
}