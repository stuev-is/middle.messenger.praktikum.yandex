import fieldsValidation from "./fieldsValidation/fieldsValidation";
import Input from "../components/input/input";
import Button from "../components/button/button";

type FieldData<Field> = {
    name: Field;
    context: Record<string, string>;
    id: string;
}

type ButtonData = {
    text: string;
    id: string;
}

export default abstract class Form<Field extends string> {
    _formData: Record<Field, string>;
    _formErrors: Record<Field, boolean>;

    _inputs: Record<Field, any>;
    _button: HTMLElement;

    _inputsData: FieldData<Field>[];
    _buttonData = {} as ButtonData;

    constructor(
        inputsData: FieldData<Field>[],
        buttonData: ButtonData,
        formData: Record<Field, string>, 
        formErrors: Record<Field, boolean>
    ) {
        this._formData = formData;
        this._formErrors = formErrors;
        this._inputsData = inputsData;
        this._buttonData = buttonData;
        this._inputs = {} as Record<Field, any>;
    }

    validateField = (inputName: Field, block: any) => {
        const value = this._formData[inputName];
        this._formErrors[inputName] = !fieldsValidation(value, inputName);
        block.setProps({error: this._formErrors[inputName], value: this._formData[inputName]});
    }

    getInputEvents = (inputName: Field, block: any) => {
        return {
          'blur': () => {
            this.validateField(inputName, block);
          },
          'focus': () => console.log('focus'),
          'input': (e: Event) => {
            this._formData[inputName] = (e.target as HTMLInputElement)?.value;
            console.log('formData', this._formData);
          },
        }
    };

    insertInputs = () => {
        this._inputsData.forEach((inputInfo: FieldData<Field>) => {
            const input = new Input(
                {
                  context: inputInfo.context,
                  value: this._formData[inputInfo.name],
                }, 
                inputInfo.id
            )
            input.insertElement();
            input.setProps({events: this.getInputEvents(inputInfo.name, input)});
            this._inputs[inputInfo.name] = input;
        })
    }

    insertButton = () => {
        const button = new Button({text: this._buttonData.text, events: {click: this.onButtonClick }}, this._buttonData.id);
        button.insertElement();
    }

    onButtonClick = () => {
        (Object.entries(this._inputs) as Array<[Field, any]>).forEach(([inputName, input]) => {
            this.validateField(inputName, input);
        })
    }

    fillForm = () => {
        this.insertInputs();
        this.insertButton();
    }
}