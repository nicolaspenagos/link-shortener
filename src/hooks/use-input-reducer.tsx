import { useReducer } from "react";

enum TYPE {
    VALUE_CHANGED,
    INPUT_BLUR,
    CLEAR
}

type InputState = {
    value: string | undefined,
    isValid: boolean | undefined,
    isTouched: boolean
}

type Action = {
    type: TYPE,
    value?: string,
    validateValue?: (value: string) => boolean
}

const inputReducer = (state: InputState, action: Action) => {

    let { value, isValid, isTouched } = { ...state };

    switch (action.type) {
        case TYPE.VALUE_CHANGED:
            value = action.value;
            if (action.validateValue)
                isValid = action.validateValue(action.value || '');
            break;

        case TYPE.INPUT_BLUR:
            isTouched = true;
            break;

        case TYPE.CLEAR:
            isValid = false;
            isTouched = false;
            value = '';
            break;
    }

    return {
        value,
        isValid,
        isTouched
    }
}

const useInputReducer = (validateValue: () => boolean) => {
    const [inputState, dispatchInput] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false });

    const hasError = !inputState.isValid && inputState.isTouched;

    const blurHandler = () => {
        dispatchInput({type: TYPE.INPUT_BLUR});
    }

    const valueChangedHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatchInput({
            type:TYPE.VALUE_CHANGED,
            value:event.target.value,
            validateValue
        })
    }
    
    const clearHandler = () => {
        dispatchInput({
            type:TYPE.CLEAR
        });
    }

    return {
        value:inputState.value,
        hasError,
        blurHandler,
        valueChangedHandler,
        clearHandler
    }

}