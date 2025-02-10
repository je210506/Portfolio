export default function Contact() {
  return (
    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input class="form-control" id="inputName"></input>
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input class="form-control" id="inputEmail1"></input>
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="input-group">
        <span class="input-group-text">Message</span>
        <textarea class="form-control" aria-label="Message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
