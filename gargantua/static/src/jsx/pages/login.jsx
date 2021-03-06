/*
 * 博客登陆页
 */

'use strict';

import React from 'react';
import { Link } from 'react-router';

import { BaseComponent } from '../components/base.jsx';
import { Auth } from '../components/auth.jsx';


class Login extends BaseComponent {
    render() {
        return(
            <div id="login">
                <Auth method="POST"
                      action="/api/user/login/"
                      accountName="email"
                      accountLabel="邮箱"
                      accountPlaceholder="请输入登陆邮箱" />
            </div>
        );
    }
}


export { Login };
