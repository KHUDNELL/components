import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail name={faker.name.firstName()} avatar={faker.image.animals()}/>
            <CommentDetail name={faker.name.firstName()} avatar={faker.image.animals()}/>
            <CommentDetail name={faker.name.firstName()} avatar={faker.image.animals()}/>

            

           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));