import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  test("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    // testing if an image exists and if it has a src
    expect(screen.getByRole("img", { name: /title1/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );

    expect(
      screen.getByRole("heading", { name: /title1/i })
    ).toBeInTheDocument();
    
    expect(screen.getByText("body1")).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    
    expect(container.firstChild).toMatchSnapshot();
  });
});
