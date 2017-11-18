//Component example

class App extends React.Component {
    render() {
       return (
        <div className="notificationsFrame">
            <div className="panel">
                <Header title="Timeline" />
                <Header title="Profile" />
                <Header title="Settings" />
                <Header title="Friends" />
                <Content />
            </div>
        </div>
       );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>
                <span className="title">{this.props.title}</span>
                <input type="text" className="searchInput" placeholder="Search..." />
                <div className="fa fa-search searchIcon"></div>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="line"></div>
                { /* Timeline item */}
                <div className="item">
                    <div className="avatar">
                        <img alt='Doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />                        
                    </div>
                    <span className="time">An hour ago</span>
                    <p>Ate lunch</p>
                    <div className="commentCount">2</div>
                    {/* ... */}
                </div>
            </div>
        );
    }
}

var mountRoot = document.querySelector("#app");
ReactDOM.render(<App />, mountRoot);