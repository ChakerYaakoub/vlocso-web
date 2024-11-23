import React, { useEffect } from "react";
import {
  ReusableTextFieldProps,
  useReusableTextField,
} from "../ReusableTextField/useReusableTextField";

export interface DefaultAutoCompleteProps extends ReusableTextFieldProps {
  // new props
  options: string[];
  loading?: boolean;
  onSave: any;
  placeholder?: string;
  OptionDisabled?: string[];
  disableCloseOnSelect?: boolean;
  blurOnSelect?: boolean;
  positionIcon1?: "start" | "end";
  icon1?: React.ReactNode;
  positionIcon2?: "start" | "end";
  icon2?: React.ReactNode;
  // old props
}

export const useDefaultAutoComplete = (props: DefaultAutoCompleteProps) => {
  const [focused, setFocused] = React.useState(false);
  const [myText, setMyText] = React.useState(props.helperText);
  const [colorMode] = "light";

  const [voidValue, setVoidValue] = React.useState(false);
  const [oldValue, setOldValue] = React.useState(props.value);
  const { CssTextField } = useReusableTextField(props);
  useEffect(() => {
    if (oldValue === "" || oldValue === null || oldValue === 0)
      setOldValue(props.value);
  }, [props.value, oldValue]);

  useEffect(() => {
    setVoidValue(!props.value || props.value === 0);
  }, [props.value, voidValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (
      (oldValue === " " && newValue.toString().length === 0) ||
      (oldValue.toString() === newValue.toString() && newValue !== " ") ||
      oldValue.toString() === newValue.toString()
    ) {
      // not change
    } else {
      if (props.onSave()) props.onSave();
    }

    props.onChange!(event);
  };

  useEffect(() => {
    if (props.errorText && props.error) {
      setMyText(props.errorText);
    } else if (!focused && props.helperText) {
      setMyText(props.helperText);
    } else {
      setMyText(focused ? props.afterFocus : props.helperText);
    }
  }, [props.errorText, props.helperText, focused, props.afterFocus]);

  return {
    ...props,
    myText,
    oldValue,
    focused,
    voidValue,
    CssTextField,
    colorMode,
    setVoidValue,
    handleChange,
    setMyText,
    setFocused,
  };
};
