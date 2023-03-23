import { render, screen } from "@testing-library/react";
import { accountsData } from "./components/mock/accountData";
import Home from "./Home";

describe('AccountCard Component', () => {
  test('should render a Home Component', () => {
    render(<Home />);
    expect(screen.getByText(accountsData[0].name)).toBeDefined()
    expect(screen.getByText(accountsData[1].name)).toBeDefined()
    expect(screen.getByText(accountsData[2].name)).toBeDefined()
  });
});