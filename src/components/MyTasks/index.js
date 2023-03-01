import {Component} from 'react'

import {v4 as uuid} from 'uuid'

import {
  MainContainer,
  Form,
  FormHeading,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  AddButton,
  DisplaySection,
  DisplayHeading,
  TagsList,
  TagItem,
  SelectedTagButton,
  TagButton,
  TasksList,
  TaskItem,
  TaskName,
  NoTask,
  NoTaskPara,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    tasksList: [],
    taskValue: '',
    tagValue: tagsList[0].displayText,
    filter: '',
  }

  changeTaskValue = event => this.setState({taskValue: event.target.value})

  changeTagValue = event => this.setState({tagValue: event.target.value})

  changeFilter = event => {
    const {filter} = this.state

    if (filter === event.target.textContent) {
      this.setState({filter: ''})
    } else {
      this.setState({filter: event.target.textContent})
    }
  }

  addTask = event => {
    event.preventDefault()

    const {taskValue, tagValue} = this.state
    if (taskValue.length !== 0) {
      const obj = {id: uuid(), taskValue, tagValue}

      this.setState(prev => ({tasksList: [...prev.tasksList, obj]}))
    }
  }

  renderTagItem = each => {
    const {filter} = this.state

    return (
      <TagItem key={each.optionId}>
        {filter === each.displayText ? (
          <SelectedTagButton type="button" onClick={this.changeFilter}>
            {each.displayText}
          </SelectedTagButton>
        ) : (
          <TagButton type="button" onClick={this.changeFilter}>
            {each.displayText}
          </TagButton>
        )}
      </TagItem>
    )
  }

  render() {
    const {taskValue, tagValue, filter, tasksList} = this.state

    const filteredList = tasksList.filter(each =>
      each.tagValue.includes(filter),
    )
    return (
      <MainContainer>
        <Form onSubmit={this.addTask}>
          <FormHeading>Create a task!</FormHeading>
          <FormLabel htmlFor="task">Task</FormLabel>
          <FormInput
            id="task"
            onChange={this.changeTaskValue}
            placeholder="Enter the task here"
            value={taskValue}
          />
          <FormLabel htmlFor="task">Task</FormLabel>
          <FormSelect value={tagValue} onChange={this.changeTagValue}>
            {tagsList.map(each => (
              <FormOption value={each.displayText} key={each.optionId}>
                {each.displayText}
              </FormOption>
            ))}
          </FormSelect>
          <AddButton type="submit">Add Task</AddButton>
        </Form>
        <DisplaySection>
          <DisplayHeading>Tags</DisplayHeading>
          <TagsList>{tagsList.map(each => this.renderTagItem(each))}</TagsList>
          <DisplayHeading>Tasks</DisplayHeading>
          {filteredList.length === 0 ? (
            <NoTask>
              <NoTaskPara>No Tasks Added Yet</NoTaskPara>
            </NoTask>
          ) : (
            <TasksList>
              {filteredList.map(each => (
                <TaskItem key={each.id}>
                  <TaskName>{each.taskValue}</TaskName>
                  <SelectedTagButton type="button">
                    {each.tagValue}
                  </SelectedTagButton>
                </TaskItem>
              ))}
            </TasksList>
          )}
        </DisplaySection>
      </MainContainer>
    )
  }
}

export default MyTasks
