import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1868563/pexels-photo-1868563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="banner"
      />
    </div>
  );
}
