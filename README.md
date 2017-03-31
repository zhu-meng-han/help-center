
## Development

不需要 `vue-router` 时，只需：

```js
new Vue({
  render: h => h('router-view')
}).$mount(document.querySelector('app'));
```

使用 `vue-router` 时，只需：

```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/list', component: require('./components/home/index.vue')},
    {path: '/help', component: require('./components/help/index.vue')}
  ]
});

new Vue({
  router,
  render: h => h('router-view')
}).$mount(document.querySelector('app'));
```

或

创建一个 `routes.js`：

```js
export default [
  {
    path: '/list',
    component: require('./components/home/index.vue')
  },
  {
    path: '/help',
    component: require('./components/help/index.vue')
  }
];
```

在 `index.js` 文件内：

```js
import routers from './router.js';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h('router-view')
}).$mount(document.querySelector('app'));
```


以下是启动运行：

```shell
make install
make dev
```

## 访问

```js
http://localhost:8081/
```

## Production
```
make deploy
```

## License

ISC


