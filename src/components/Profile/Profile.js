import React from "react";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet,
    };
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({
        formInput: data,
      }),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 304) {
          this.props.loadUser({ ...this.props.user, ...data });
          this.props.toggleModal();
        }
      })
      .catch(console.log);
  };

  onFormChange = (event) => {
    switch (event.target.name) {
      case "user-name":
        this.setState({ name: event.target.value });
        break;
      case "user-age":
        this.setState({ age: event.target.value });
        break;
      case "user-pet":
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  };

  render() {
    const { toggleModal, user } = this.props;
    const { name, age, pet } = this.state;
    return (
      <div className="profile-modal">
        <article>
          <main>
            <img
              src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
              alt="avatar"
            />
            <h1>{name}</h1>
            <h4>{`Images submitted: ${user.entries}`}</h4>
            <p>{`Member since: ${new Date(
              user.joined
            ).toLocaleDateString()}`}</p>
            <hr />
            <label htmlFor="user-name">Name:</label>
            <input
              type="text"
              name="user-name"
              placeholder={name}
              onChange={this.onFormChange}
            />
            <label htmlFor="user-age">Age:</label>
            <input
              type="text"
              name="user-age"
              placeholder={age}
              onChange={this.onFormChange}
            />
            <label htmlFor="user-pet">Favourite Pet:</label>
            <input
              type="text"
              name="user-pet"
              placeholder={pet}
              onChange={this.onFormChange}
            />
            <div className="btn-box">
              <button onClick={() => this.onProfileUpdate({ name, age, pet })}>
                Save
              </button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </main>
          <div className="modal-close" onClick={toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
