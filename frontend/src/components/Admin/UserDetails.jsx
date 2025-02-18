import React, { useEffect, useState } from 'react';
import { getUsers,addUser } from '../../services/userServices';
import '../../styles/UserDetails.scss';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUsers = () => {
    setShowAddUserForm(true);
  };

  const handleCloseForm = () => {
    setShowAddUserForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedUser = await addUser(newUser);
      setUsers([...users, addedUser]);
      setNewUser({ firstName: '', lastName: '', email: '', password: '' });
      setShowAddUserForm(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }


  return (
    <div className="user-details-component">
      <h1>User Details</h1>
      <button className='addUsers' onClick={handleAddUsers}>Add Users</button>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddUserForm && (
        <div className="user-details-modal">
          <div className="user-details-modal-content">
            <span className="user-details-close-button" onClick={handleCloseForm}>&times;</span>
            <h2>Add New User</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                First Name:
                <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} required />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} required />
              </label>
              <label>
                Email:
                <input type="email" name="email" value={newUser.email} onChange={handleInputChange} required />
              </label>
              <label>
                Password:
                <input type="password" name="password" value={newUser.password} onChange={handleInputChange} required />
              </label>
              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
