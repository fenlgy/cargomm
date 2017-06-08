const routers = [{
    path: '/',
    meta: { title: 'home'},
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/book',
    meta: { title: 'book'},
    component: (resolve) => require(['./views/book.vue'], resolve)
},{
    path: '/book1',
    meta: { title: 'book'},
    component: (resolve) => require(['./views/book.vue'], resolve)
}];
export default routers;