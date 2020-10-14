const Projects =  [
  {
    username: 'Area A',
    avatar: 'https://nlac.mahidol.ac.th/green/images/bt_portfolio/103/original/018a9b75d36fb97ec0d13ce54cdfc774.jpeg',
    name: 'Area A',
    deadline: '127 Cars',
    progress: 90,
    color: 'pink',
  },
  {
    username: 'Area B',
    avatar: 'https://www.safetysignsandnotices.co.uk/image/cache/catalog/old_products/swh12-500x500.gif',    
    name: 'Area B',
    deadline: '84 Cars',
    progress: 70,
    color: 'success'
  },
  {
    username: 'Area C',
    avatar: 'https://parkandridefinder.com/wp-content/uploads/2018/05/logo-parking-Stadium-One3.jpg',    
    name: 'Area C',
    deadline: '72 Cars',
    progress: 50,
    color: 'info'
  },
  {
    username: 'Area D',
    avatar: 'https://www.aldonco.com/images/products/4100s/4115-155.jpg',    
    name: 'Area D',
    deadline: '36 Cars',
    progress: 30,
    color: 'teal'
  },
  {
    username: 'The Dome',
    avatar: 'https://lh3.googleusercontent.com/3fnif_kn3usnHa2SKca1r16aRbNn4rSlmzHhp-NpHfaUZIig2YPtNCB5GEaEwblPfLEi2VR_=w1080-h608-p-no-v0',    
    name: 'The Dome',
    deadline: '348 Cars',
    progress: 85,
    color: 'grey'
  },

];

const getProject = (limit) => {
  return (limit) ? Projects.slice(0, limit) : Projects;
};


export {
  Projects,
  getProject
};