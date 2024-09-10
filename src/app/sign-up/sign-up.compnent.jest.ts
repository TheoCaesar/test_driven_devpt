import {render, screen} from "@testing-library/angular";
import { SignUpComponent } from "./sign-up.component";

it("print default text", async ()=> {
    await render(SignUpComponent);
    const pElement = screen.getByRole("heading", {name: "Sign Up"})
    expect(pElement).toBeTruthy();
    expect(pElement).toBeInTheDocument();
})