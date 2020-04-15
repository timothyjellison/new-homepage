// unused snippet, maybe use again later
;<nav className="nav grid">
  <div className="navItems">
    <Link to="/" className={pathname === '/' ? 'linkSelected' : 'link'}>
      Home
    </Link>
    <Link
      to="/faves"
      className={
        pathname.includes('faves') || pathname === '/faves'
          ? 'linkSelected'
          : 'link'
      }
    >
      Faves
    </Link>
    {/* <Link to="/music" className={pathname === '/music' ? "linkSelected" : "link"}>Music</Link> */}
  </div>
</nav>
