export type Storybooks = "NextUI";

export namespace NextUI {
  export type Spaces = "Buttons" | "Inputs" | "Forms";

  export type Buttons = "Button";

  export type ButtonProps = {
    type?: "submit" | "reset" | "button";
    message: string;
  };

  export type Inputs = "TextInput";

  export type TextInputProps = {
    register: any;
    name: string;
    aria: {
      label: string;
      describedby: string;
    };
    placeholder?: string;
  };

  export type Forms = "BaseForm";

  export type BaseFormProps = {
    button: {
      name: string;
    };
    inputs: Array<{
      register: any;
      name: string;
    }>;
  };
}
