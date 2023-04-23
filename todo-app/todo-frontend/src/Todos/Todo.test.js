import { render, screen } from "@testing-library/react";
import ToDo from './Todo'

test('test ToDo component', async () => {
  const task = {
    text: "a task",
    done: false
  }

  const fn = jest.fn()
  render(<ToDo todo={task} deleteTodo={fn} completeTodo={fn} />)

  const element = screen.getByText(task.text)

  expect(element).toBeDefined()
})
