const Menu = [
  {header: 'Apps'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard'
  },

  {
    title: 'Widgets',
    group: 'widgets',
    component: 'widgets',
    icon: 'widgets',
    items: [
      {name: 'social', title: 'Social', href: '/widgets/social'},
      {name: 'statistic', title: 'Statistic', badge: 'new', href: '/widgets/statistic'},
      {name: 'chart', title: 'Chart', href: '/widgets/chart'},
      {name: 'list', title: 'List', href: '/widgets/list'},
    ]
  },
  {header: 'UI Elements'},

  {
    title: 'Pickers',
    group: 'pickers',
    component: 'picker',
    icon: 'filter_vintage',
    items: [
      {name: 'timepicker', title: 'Timepicker', href: '/pickers/timepicker'},
      {name: 'datepicker', title: 'Datepicker', href: '/pickers/datepicker'},

    ]
  },
  
  {
    title: 'Forms & Controls',
    group: 'forms',
    component: 'forms',
    icon: 'edit',
    items: [
      {name: 'basic', title: 'General', href: '/forms/basic-forms'},
      {name: 'selects', title: 'Selects', badge: 'new', href: '/forms/selects'},
      {name: 'selection-controls', title: 'Selection Controls', href: '/forms/selection-controls'},
      {name: 'text-fields', title: 'Text Fields', href: '/forms/text-fields'},
      {name: 'steppers', title: 'Steppers', href: '/forms/steppers'},
      {name: 'editors', title: 'Editors', href: '/forms/editors'},
    ]
  },
  {divider: true},
  {header: 'Extras'},
  {
    title: 'Login',
    group: 'extra',
    icon: 'list',
    href: '/login'
  },
  {
    title: 'Empty',
    group: 'extra',
    icon: 'insert_drive_file',
    href: '/empty'
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
