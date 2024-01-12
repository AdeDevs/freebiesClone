import "../styles/admin.css"
import Articles from "./articles";

function AdminPage() {
  return (
    <div className="add-article">
      <form>
        <input type="text" placeholder="Type in your title" />
        <textarea
          name="article"
          placeholder="Type your article in here"
        ></textarea>
        <div className="categories">
        <p >Select Category: </p>
        <select name="categories">
          <option value="update">Update</option>
          <option value="crypto">Crypto</option>
          <option value="airtime">Airtime</option>
        </select>
        </div>
        <button>Post Article</button>
      </form>
      <div className="boxes">
        {/* <AdminArticles /> */}
      </div>
    </div>
  );
}

export default AdminPage;