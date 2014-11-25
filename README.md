# koa-ensure-authenticated

Ensures that the request is authenticated

## Instalation

```
$ npm install cizar/koa-ensure-authenticated
```

## Example

```js
app.use(ensureAuthenticated({
  redirectUrl: '/login',
  message: 'Login required',
  setReturnTo: true
}))
```

## Licence

MIT