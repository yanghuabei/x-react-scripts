import React, { PureComponent } from 'react';
import { getUserList } from 'services';

export default class UserList extends PureComponent {
  state = {
    userList: [],
  };

  async componentDidMount() {
    this.setState({
      userList: await getUserList(),
    });
  }

  render() {
    return (
      <ul>
        {this.state.userList
          .slice(0, 20)
          .map(user => <UserItem key={user.id} item={user} />)}
      </ul>
    );
  }
}

function UserItem({ item }) {
  return (
    <li>
      id: {item.id}, &nbsp;&nbsp;&nbsp; name: {item.name}
    </li>
  );
}
