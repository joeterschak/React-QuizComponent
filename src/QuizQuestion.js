import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      incorrectAnswer: false
    }
  }

  handleClick (buttonText)  {
    const isCorrect = this.props.quiz_question.answer === buttonText;
    this.setState({incorrectAnswer: !isCorrect});
    if (isCorrect) {
      this.props.showNextQuestionHandler();
    }
  };

  render() {
    return (
      <main>
        {this.state.incorrectAnswer ? <p className={'error'}>Sorry, that's not right</p> : null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {
              this.props.quiz_question.answer_options.map((answer, i) => {
                return <QuizQuestionButton key={i} button_text={answer} clickHandler={this.handleClick}/>
              })
            }
          </ul>
        </section>
      </main>
    )
  }

}

export default QuizQuestion;