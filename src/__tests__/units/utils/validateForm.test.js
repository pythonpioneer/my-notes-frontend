import { validateForm } from "../../../utility";

// testing the validateForm method
describe('Testing the form validation method', () => {

    // testing validateForm method with the valid input fields
    test("Testing with valid fields", async () => {

        // calling the function expecting promise behaviour
        const res = await validateForm({ title: "valid title", desc: "valid desc", category: "valid category" });
        expect(res).toBe("All fields are valid");
    });

    // testing the method with the invalid title which is empty title or title.length < 1
    test("Testing with no title", () => {

        // calling the function expecting asynchronous behaviour
        validateForm({ title: "", desc: "valid desc", category: "valid category" })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });

    // testing the method with the invalid title which is title.length > 100
    test("Testing with invalid title, length > 100", () => {

        // a very big title which is invalid for the form
        const invalidTitle = "big title which is greater than hundred big title which is greater than hundred big title which is greater than hundred ";

        // calling the function expecting asynchronous behaviour
        validateForm({ title: invalidTitle, desc: "valid desc", category: "valid category" })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });

    // testing the method with the invalid desc which is empty desc or desc.length < 1
    test("Testing with the no desc", () => {

        // calling the function expecting asynchronous behaviour
        validateForm({ title: "valid title", desc: "", category: "valid category" })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });

    // testing the method with the invalid desc which is desc.length > 100
    test("Testing with the invalid desc, length > 100", () => {

        // a very big desc which is invalid for the form
        const invalidDesc = "big desc which is greater than hundred big desc which is greater than hundred big desc which is greater than hundred ";

        // calling the function expecting asynchronous behaviour
        validateForm({ title: "valid title", desc: invalidDesc, category: "valid category" })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });

    // testing the method with the invalid category which is empty category or category.length < 1
    test("Testing with the no category", () => {

        // calling the function expecting asynchronous behaviour
        validateForm({ title: "valid title", desc: "valid desc", category: "" })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });

    // testing the method with the invalid category which is category.length > 100
    test("Testing with the invalid category, length > 100", () => {

        // a bery big category which is invalid for the form
        const invalidCat = "category is invalid which is hundred characters long category is invalid which is hundred characters long category is invalid which is hundred characters long ";

        // calling the function expecting asynchronous behaviour
        validateForm({ title: "valid title", desc: "valid desc", category: invalidCat })
            .catch(rej => {
                expect(rej).not.toBe("All fields are valid");
            });
    });
});