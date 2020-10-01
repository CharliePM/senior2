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
    title: 'Details',
    group: 'Details',
    component: 'Details',
    icon: 'emoji_transportation',
    items: [
     
      {name: 'statistic', title: 'Statistic', badge: 'new', href: '/Details/statistic'},
      {name: 'Parking', title: 'Parking', badge: 'new', href: '/Details/Parking'},
      {name: 'Traffic', title: 'Traffic', badge: 'new', href: '/Details/Traffic'},

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
