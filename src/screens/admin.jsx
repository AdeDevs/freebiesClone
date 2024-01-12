import "../styles/admin.css"

function AdminPage() {
  return (
    <div className="add-article">
      <form>
        <input type="text" placeholder="Type in your title" />
        <textarea
          name="article"
          placeholder="Type your article in here"
        ></textarea>
        <label for="categories">Select Category: </label>
        <select name="categories">
          <option value="update">Update</option>
          <option value="crypto">Crypto</option>
          <option value="airtime">Airtime</option>
        </select>
        <button>Post Article</button>
      </form>
    </div>
  );
}

export default AdminPage;
