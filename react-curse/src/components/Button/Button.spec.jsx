import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button />", () => {
  test('should render the button with the text "Load more"', () => {
    render(<Button text="Load more posts"/>);

    expect.assertions(1)

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });
  
  test('should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text="Load more posts" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    
    fireEvent.click(button);

    expect(fn).toHaveBeenCalled()
  });
  
  test('should be disabled when disabled is true', () => {
    render(<Button text="Load more posts" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    
    expect(button).toBeDisabled();
  });
  
  test('should be enabled when disabled is false', () => {
    render(<Button text="Load more posts" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more posts/i });
    
    expect(button).toBeEnabled();
  });
  
  test('should be enabled when disabled is false', () => {
    const fn = jest.fn()
    render(<Button text="Load more posts" disabled={false} />);

    const {container} = render(<Button text="Load more posts" disabled={false} />);
    
    expect(container.firstChild).toMatchSnapshot();
  });
});
