import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h1>Great Job! </h1>
        <h3>Your results are being evaluated. We will send your results over registered email once its done. By the time you can take others Quizzes. Happy Learning !</h3>
      </div>
    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
