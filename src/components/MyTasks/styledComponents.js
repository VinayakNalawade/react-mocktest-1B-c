import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Form = styled.form`
  min-width: 35vw;
  background-color: #131213;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4%;
`
export const FormHeading = styled.h1`
  font-size: 30px;
  color: #f3aa4e;
  align-self: center;
  text-align: center;
`
export const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
`

export const FormInput = styled.input`
  border: none;
  outline: none;
  background-color: #ffffff;
  font-size: 17px;
  margin-bottom: 20px;
  padding: 10px;
`
export const FormSelect = styled.select`
  border: none;
  outline: none;
  background-color: #ffffff;
  font-size: 17px;
  margin-bottom: 20px;
  padding: 10px;
`
export const FormOption = styled.option``

export const AddButton = styled.button`
  border: none;
  outline: none;
  background-color: #f3aa4f;
  color: #ffffff;
  font-size: 17px;
  padding: 10px;
  width: 120px;
  align-self: center;
  border-radius: 8px;
`

export const DisplaySection = styled.div`
  min-width: 65vw;
  background-color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4%;
`
export const DisplayHeading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`

export const TagsList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const TagItem = styled.li`
  list-style-type: none;
  margin-right: 15px;
  margin-bottom: 12px;
`

export const SelectedTagButton = styled.button`
  border: none;
  outline: none;
  background-color: #f3aa4f;
  color: #323f4b;
  font-size: 17px;
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  align-self: center;
  border-radius: 15px;
`

export const TagButton = styled.button`
  border: 1px solid #f1f5f9;
  outline: none;
  background-color: transparent;
  color: #f1f5f9;
  font-size: 17px;
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  align-self: center;
  border-radius: 15px;
`

export const TasksList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const TaskItem = styled.li`
  list-style-type: none;
  background-color: #131213;
  padding: 12px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`
export const TaskName = styled.h1`
  color: #ffffff;
  font-size: 18px;
  margin: 0;
`
export const NoTask = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoTaskPara = styled.p`
  color: #64748b;
  font-size: 25px;
`
