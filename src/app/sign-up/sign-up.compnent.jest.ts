import {render, screen} from "@testing-library/angular";
import { SignUpComponent } from "./sign-up.component";
import {userEvent} from "@testing-library/user-event"

xdescribe("Set up", ()=>{
    it("print default text", async ()=> {
        await render(SignUpComponent);
        const pElement = screen.getByRole("heading", {name: "Sign Up"})
        expect(pElement).toBeTruthy();
        expect(pElement).toBeInTheDocument();
    });
})

xdescribe("Layout",  ()=>{
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

describe("User Interaction with Form", ()=>{
    it("disables buttons on default or non matching passwords", async ()=>{
        await render(SignUpComponent);
        const pwd1 = screen.getByLabelText("Password")
        const pwd2 = screen.getByLabelText("Confirm Password");
        const btn = screen.getByRole("button", {name : "Sign Up"})
        expect(btn).toHaveProperty('disabled', true)
        await userEvent.type(pwd1, "PAssword");
        await userEvent.type(pwd2, "P4ssword")
        // expect(btn).toBeDisabled()
        await userEvent.type(pwd2, "PAssword");
        // expect(btn).toBeEnabled()
    })

    xit("Check button disabled with matching passwords ", async ()=>{
        await render(SignUpComponent);
        let pwdInput = screen.getByPlaceholderText("Password");
        let cnfmInput = screen.getByPlaceholderText(/Confirm Password/i);
        let btn = screen.getByRole("button", {name: "Sign Up"})
        await userEvent.type(pwdInput, "P4ssword")
        await userEvent.type(cnfmInput, "P4ssword")
        expect(btn).toHaveProperty("disabled", false)
        expect(pwdInput).toBeTruthy();
        expect(cnfmInput).toBeTruthy();
    })
})