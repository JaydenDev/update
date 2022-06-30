const React = require('react');

class Spinner extends React.Component {
 render() {
    return (
      <div className="spinner">
        <img src={require(`./loading.gif`)} alt='pic' />
      </div>
    );
 }
}

export default Spinner;