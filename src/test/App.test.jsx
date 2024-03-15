import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App tests', () => {
  it('renders App component', () => {
    render(<App />)
    const header = screen.getByText(/food planner/i)
    expect(header).toBeInTheDocument()
  })
})