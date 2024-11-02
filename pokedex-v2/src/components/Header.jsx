export default function Header(props) {
  // const {handleToggleMenu} = props

  // handling this destructure down in the onclick props.handletoggle, just to show where handletogglemenu is coming from

  console.log(props);
  return (
    <header>
      <button onClick={props.handleToggleMenu} className="open-nav-button">
        <i className="fa-solid fa-bars" />
      </button>
      <h1 className="text-gradient">Pokédex </h1>
    </header>
  );
}
