export let users = {
  1: {
    id: '1',
    username: 'tyler N'
  },
  2: {
    id: '2',
    username: 'Robin Wieruch',
  },
  3: {
    id: '3',
    username: 'Dave Davids',
  },
}

export const userResolver = {
  Query: {
    users: () => {
      return Object.values(users);
    },
    user: (parent, { id }) => {
      return users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
  },
  User: {
    username: user => {
      return user.username
    }
  }
};