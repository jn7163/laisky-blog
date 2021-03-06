/**
 * aboutme
 */

'use strict';

import React from 'react';
import { Link } from 'react-router';

import { BaseComponent } from '../components/base.jsx';
import { Redirect } from '../components/redirect.jsx';


export class About extends BaseComponent {
    render() {
        return (
            <div id="about" className="container-fluid">
                {/* Tab title */}
                <ul className="nav nav-tabs" ref="myTabs">
                    <li role="presentation" className="active"><a href="#site" data-toggle="tab">关于本站</a></li>
                    <li role="presentation"><a href="#me" data-toggle="tab">关于我</a></li>
                    <li role="presentation"><a href="#right" data-toggle="tab">授权</a></li>
                </ul>

                {/* Tab panes */}
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade" id="me">
                        <article>
                            <h2>关于我</h2>
                            <p>aboutme: <Link target="_blank" to="https://about.me/laisky">https://about.me/laisky</Link></p>
                        </article>
                    </div>
                    <div role="tabpanel" className="tab-pane fade in active" id="site">
                        <article>
                            <h2>关于本站</h2>
                            <p>本站采用 Nginx & Tornado & MongoDB 构建</p>
                            <p>项目地址在：<Link target="_blank" to="https://github.com/Laisky/laisky-blog">https://github.com/Laisky/laisky-blog</Link></p>
                        </article>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="right">
                        <article>
                            <h2>版权声明</h2>
                            <p>本站采用「署名 4.0 国际（CC BY 4.0）」许可协议。也就是只要保留署名，即可任意的使用本站的内容。</p>
                            <img src="https://s1.laisky.com/images/cc-by-4_0.jpg" alt="cc by 4.0"/>
                        </article>
                    </div>
                </div>
            </div>
        );
    };
}
