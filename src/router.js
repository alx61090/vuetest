import { createRouter, createWebHistory} from 'vue-router'

import ListCategory from './pages/ListCategory'
import ListType from './pages/ListType'
import ListElement from './pages/ListElement'
import DetailElement from './pages/detail/DetailElement'
import BasePage from './pages/BasePage'

const routes = [
  {
    path:'/list',
    component: BasePage,
    children:[
      {
        name: 'list-category',
        path: 'category',
        component: ListCategory
      },
      {
        name: 'list-element',
        path: 'element/:type?/:id?',
        component: ListElement
      },
      {
        name: 'list-type',
        path: 'type',
        component: ListType
      }
    ]
  },
  {
    path:'/detail',
    component: BasePage,
    children:[
      {
        name: 'detail-element',
        path: 'element/:slug',
        component: DetailElement
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router