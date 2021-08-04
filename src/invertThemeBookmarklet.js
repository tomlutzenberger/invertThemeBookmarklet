/*!
 * invertThemeBookmarklet v0.2.0
 * Dynamic Bookmarklet to invert the colors of a website
 *
 * Copyright (c) 2017 - Tom Lutzenberger (lutzenbergerthomas at gmail dot com)
 * https://github.com/tomlutzenberger/invertThemeBookmarklet
 * https://tomlutzenberger.github.io/invertThemeBookmarklet/
 *
 * @license: Licensed under the MIT license
 * https://github.com/tomlutzenberger/invertThemeBookmarklet/blob/master/LICENSE
 */

/*jslint esnext:true */

(() => {
    'use strict';

    const ZERO = 0;
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const media = document.querySelectorAll('img, video, svg, iframe');

    html.style.filter = 'invert(100%)';
    html.style.backgroundColor = '#111';
    body.style.backgroundColor = '#eee';

    if (media.length > ZERO) {
        media.forEach((mediaElement) => {
            mediaElement.style.filter = 'invert(100%)';
        });
    }
})();
