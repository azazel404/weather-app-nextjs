import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    isRequired: boolean;
    message?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    isRequired,
    message,
    ...props
}) => {
    const [field, { error }] = useField(props);

    return (
        <FormControl isRequired={isRequired}>
            <FormLabel htmlFor={field.name} ml={1}>
                {props.label}
            </FormLabel>
            <Input
                {...field}
                {...props}
                id={field.name}
                placeholder={props.placeholder}
            />
            <FormHelperText ml={1}>{message}</FormHelperText>
        </FormControl>
    );
};
