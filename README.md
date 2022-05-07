# todo-app

This app is a `posts app` under the **SPA paradigm**.\
It is implemented with Vuejs and Vuex.\

* * *

## routes

The app has a router configuration for filtering with 3 main routes:

- `Home` (default route: "/")
  
- `Contact` (route: "/contact")

- `Author` (route: "/author")

- `Detail` (route: "/detail/:id")

- `Page not found` (default route: "/")

The application shows a `404 page error` with routes that not match with the three commented routes.

## store

A store is implemented with Vuex inside the app to manage the todos state in a module with state, getters, mutations and actions included.\
The app makes use of vuex via mapActions and mapGetters to access to the state in the store.\

It has a main page named `HomePage`.\
In this main page we can find a list of posts from `https://jsonplaceholder.typicode.com/posts` url.\
The css styles are included in the components and in the pages.\

* * *

## Modules in the app

The modules included are:

| Module    | Page             |
| --------- | ---------------  |
| `author`  | `AuthorPage`     |
| `contact` | `ContactPage`    |
| `detail`  | `PostDetailPage` |
| `home`    | `HomePage`       |
| `shared`  | `NoPageFound`    |

* * *

## Components in the app

The components included are these ones:

### Contact module

- `BaseButton`

### Home module

- `Pagination`

- `PostImage`

- `PostsColletion`

* * *

## Dependencies included in this project by version

The following dependencies have been used for the development of this application

| Dependence            | Version    |
| --------------------- | ---------- |
| `Axios`               | `0.27.2`   |
| `Vue`                 | `3.2.13`   |
| `Vue-router`          | `4.0.3`    |
| `Vuex`                | `4.0.0`    |
| `Prettier (lintern)`  | `2.4.1`    |

* * *

## Project setup

This project uses `yarn` as a package manager, so you can use yarn commands for setup or running project options:

```javascript
yarn install
```

### Compiles and hot-reloads for development

```javascript
yarn serve
```

### Compiles and minifies for production

```javascript
yarn build
```

### Run your unit tests

```javascript
yarn test:unit
```

### Lints and fixes files

```javascript
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
