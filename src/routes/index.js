import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import { HeaderOnly } from '~/components/Layouts'
import Upload from '~/pages/Upload'

// Pubic route
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/@:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
