export default function Contact() {
  return (
    <form className="formSub">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className="form-control" id="inputName"></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input className="form-control" id="inputEmail1"></input>
        <div id="emailHelp" className="form-text">
          We will never share your email with anyone else.
        </div>
      </div>
      <div className="input-group">
        <span className="input-group-text">Message</span>
        <textarea className="form-control" aria-label="Message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
