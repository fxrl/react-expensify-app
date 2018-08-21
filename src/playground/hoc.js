import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        {props.isAuthenticated && <p>The info is: {props.info}</p>}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share.</p>
        }
            <WrappedComponent {...props}/>
        </div>
    ) 
};

// requireAuthentification

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
            <WrappedComponent {...props}/>
    ) 
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info='Here are the details' />, document.getElementById('app'));