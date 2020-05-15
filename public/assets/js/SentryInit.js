"use strict";

Sentry.init({
  dsn: 'https://8b11cea713ac4616b893cf4e2f74775c@sentry.kitsoft.kiev.ua/8',
  environment: "prod",
  attachStacktrace: 1,
  debug: true,
  release: 2722
});