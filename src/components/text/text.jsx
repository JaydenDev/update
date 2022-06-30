import '../../App.css';
const React = require('react');

var value = '10';
var reset = Math.floor(Math.random() * (24000 - 3000 + 1)) + 3000;

class Text extends React.Component {
    render() {
        setInterval(() => {
            var inc = Math.floor(Math.random() * 5) + 1;
            if (value >= '100') {
                value = '0';
            }
            value = parseInt(value) + inc;
            this.forceUpdate();
        }, reset);
        return (
        <div className="text">
            <p>You're {value}% there.</p>
            <p>Please keep your computer on.</p>
        </div>
        );
    }
}

export default Text;