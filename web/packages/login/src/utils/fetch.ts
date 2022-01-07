// Copyright (c) 2021-2022 THL A29 Limited
//
// This source code file is made available under MIT License
// See LICENSE for details
// ==============================================================================

import Cookies from 'universal-cookie';
import { get } from 'lodash';

const cookies = new Cookies();

export const CSRF_HEADER_NAME = 'X-XSRF-TOKEN';
export const CSRF_COOKIE_NAME = 'XSRF-TOKEN';

export function appendXSRFTokenHeader(headers: object): object {
  const xsrfToken = cookies.get(CSRF_COOKIE_NAME);
  if (!xsrfToken) {
    return headers;
  }
  return {
    ...headers,
    [CSRF_HEADER_NAME]: xsrfToken,
  };
}

export default function fetch(...args: any) {
  const [input, init] = args;

  const headers: any = {
    'Content-Type': get(init, 'headers.Content-Type', 'application/json'),
  };

  init.headers = appendXSRFTokenHeader(headers);

  return window.fetch(input, init);
}
