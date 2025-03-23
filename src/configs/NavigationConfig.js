import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  PictureOutlined,
  ShopOutlined,
  TeamOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  GiftOutlined,
  ShoppingOutlined
} from '@ant-design/icons';

import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    title: 'Основные',
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        title: 'Дашборд',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'catalog',
        path: `${APP_PREFIX_PATH}/catalog`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'product',
            path: `${APP_PREFIX_PATH}/catalog/product`,
            title: 'Товары',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'category',
            path: `${APP_PREFIX_PATH}/catalog/category`,
            title: 'Категории',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            title: 'Коллекции',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            title: 'Комбо',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}/orders`,
        title: 'Заказы',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'users',
        path: `${APP_PREFIX_PATH}/users`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'list',
            path: `${APP_PREFIX_PATH}/users/list`,
            title: 'Список клиентов',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'groups',
            path: `${APP_PREFIX_PATH}/users/groups`,
            title: 'Группы клиентов',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'planner',
        path: `${APP_PREFIX_PATH}/planner`,
        title: 'Планировщик',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}/promocodes`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'offlain',
        path: `${APP_PREFIX_PATH}/offlain`,
        title: 'Офлайн точки',
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'address',
            path: `${APP_PREFIX_PATH}/offlain/address`,
            title: 'Адреса',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}/offlain/geozones`,
            title: 'Геозоны',
            breadcrumb: false,
            submenu: []
          },
        ]
      },
      {
        key: 'employees',
        path: `${APP_PREFIX_PATH}/employees`,
        title: 'Сотрудники',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mailings',
        path: `${APP_PREFIX_PATH}/mailings`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  },
  {
    title: 'Системные',
    submenu: [
      {
        key: 'settings',
        path: `${APP_PREFIX_PATH}/settings`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'mobile',
        path: `${APP_PREFIX_PATH}/mobile`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}/logs`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }
];

const navigationConfig = [
  ...dashBoardNavTree
];

export default navigationConfig;
