import "../style.css";

const User = (props) => {
  return (
    <div className="solid column">
      <div className="row">
        <span className="lessermargined">Name:</span>
        <p>{props.user.name}</p>
      </div>
      <div className="row">
        <span className="lessermargined">Email:</span>
        <p>{props.user.email}</p>
      </div>
      <div className="row">
        <span className="lessermargined">Phone:</span>
        <p>{props.user.phone}</p>
      </div>
    </div>
  );
};

export default User;
