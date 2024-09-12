import {render, screen} from "@testing-library/angular";
import { SignUpComponent } from "./sign-up.component";

describe("Set up", ()=>{
    it("print default text", async ()=> {
        await render(SignUpComponent);
        const pElement = screen.getByRole("heading", {name: "Sign Up"})
        expect(pElement).toBeTruthy();
        expect(pElement).toBeInTheDocument();
    });
})

describe("Layout",  ()=>{
    it("contains username label & input", async ()=>{
        await render(SignUpComponent);
        let lbl = screen.getByLabelText("Username");
        let input = screen.getByPlaceholderText("Username")
        expect(lbl).toBeInTheDocument(); 
        expect(input).toBeInTheDocument(); 
        expect(lbl).toHaveAttribute("type", "text")
        expect(lbl).toHaveAttribute("id", "username")
        expect(lbl).toHaveAttribute("placeholder", "Username")
    })

    it("contains label for email & input", async ()=>{
        await render(SignUpComponent);
        const lbl = screen.getByLabelText(/email/i) //regex - case insensitive
        const input = screen.getByPlaceholderText(/email/i)
        expect(lbl).toBeInTheDocument();
        expect(lbl).toBeInTheDocument();
        expect(lbl).toHaveProperty('id', 'email');
        expect(lbl).toHaveProperty('type', 'email')
    })

    it ("contains a label and field for password", async ()=>{
        await render(SignUpComponent);
        let lbl = screen.getByLabelText("Password")
        let input = screen.getByPlaceholderText("Password")
        expect(lbl).toBeInTheDocument(); 
        expect(lbl).toBeInTheDocument();
        expect(lbl).toHaveProperty("type", "password")  
        expect(lbl).toHaveProperty("id", "password")
    })

    it ("contains a label and field for confirm password", async ()=>{
        await render(SignUpComponent);
        let lbl = screen.getByLabelText("Confirm Password")
        let input = screen.getByPlaceholderText("Confirm Password")
        expect(lbl).toBeInTheDocument(); 
        expect(lbl).toBeInTheDocument();
        expect(lbl).toHaveProperty("type", "password")  
        expect(lbl).toHaveProperty("id", "confirm")
    })
})

describe("Interaction", ()=>{
    it("mocks user interaction with form", async ()=>{
        await render(SignUpComponent);
        let pwdInput = screen.getAllByPlaceholderText("Password")
    })
})