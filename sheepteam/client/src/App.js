import './App.css';



function App() {
  return (
    <>
      <section className="header">

        <h3 className="logo">Sheep</h3>

        <div className="right">
          <i className="material-icons">settings</i>
          <i className="material-icons">assignment_ind</i>
          <i className="material-icons">apps</i>
        </div>

      </section>

      <section>
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo left">部落格</a>
            <ul id="nav-mobile" class="right">
              <li><a href="sass.html">關於我</a></li>
              <li><a href="badges.html">作品集</a></li>
              <li><a href="collapsible.html">相關連結</a></li>
            </ul>
          </div>
        </nav>
      </section>

    </>
  );
}

export default App;
