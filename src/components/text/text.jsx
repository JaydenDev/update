import '../../App.css';
const React = require('react');

class Text extends React.Component {
    render() {
        return (
        <div className="text">
            <p>You're 80% there.</p>
            <p>Please keep your computer on.</p>
        </div>
        );
    }
}
export default Text;