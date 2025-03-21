import { 
  DashboardOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboard',`,
  title: 'Дашборд',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
