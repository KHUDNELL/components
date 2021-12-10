import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    name={faker.name.firstName()}
                    timeAgo="Today at 4:45PM"
                    avatar='/1.jpg'
                    comment={faker.hacker.phrase()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail name={faker.name.firstName()} timeAgo="Today at 2:00PM" avatar='9.jpg' comment={faker.hacker.phrase()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail name={faker.name.firstName()} timeAgo="Yesterday at 5:45PM" avatar='26.jpg' comment={faker.hacker.phrase()}/>
            </ApprovalCard>
            

           
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));