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
                <Content activities={activities} />
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

        const {activities} = this.props;
    //  const activities = this.props.activities;

        return (
            <div className="content">
                <div className="line"></div>
                
                { /* Timeline item */}
                {activities.map((activity) => (
                    <ActivityItem activity={activity} />
                ))}
            </div>
        );
    }
}

class ActivityItem extends React.Component {
    render() {
        const {activity} = this.props;

        return (
            <div className="item">
                <div className="avatar">
                    <img alt={activity.text} src={activity.user.avatar} />
                    {activity.user.name}
                </div>                
                <span className="time">
                    {activity.timestamp}
                </span>
                <p>{activity.text}</p>
                <div className="commentCount">
                    {activity.comments.length}
                </div>
            </div>
        );
    }
}

var mountRoot = document.querySelector("#app");
ReactDOM.render(<App />, mountRoot);