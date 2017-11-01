export default  {
  initialState : {
    auth:{
      isFetching: false,
      isAuthenticated: true,
      user: {
        email: 'redcreek@yahoo.com',
        password: '',
        id: 21
      }
    },
    guides: {
      isFetching: false,
      list: [
        {
          username: 'Elissa',
          email: 'email',
          id: 1,
          avatar: '/assets/images/guides/header-1.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
          expanded: false
        },
        {
          username: 'Chris',
          email: 'email',
          id: 2,
          avatar: '/assets/images/guides/header-2.jpg',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '

        }
      ]
    },
    adventures : {
      isFetching: false,
      list: [
        {
          location: 'gunnison',
          date: '2017-08-01',
          duration: '2017-08-01',
          activity: 'Rock Climbing',
          description:'Rock climb',
          id: 1
       },
       {
         location: 'lake city',
         date: '2017-08-01',
         duration: '2017-08-01',
         activity: 'Ice Climbing',
         description:'Ice climb',
         id: 2
      }
    ]
    }
  }
}
