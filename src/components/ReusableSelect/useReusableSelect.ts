import React, { useEffect } from "react";
import { FormControlState } from "@mui/material/FormControl";
import { useTheme, SxProps, alpha } from "@mui/material";
import { Theme } from "@emotion/react";
import { Option } from "../../models/Inputs/FormType";

export type OnSaveFunction = (fieldName: string) => Promise<void> | void;

export interface ReusableSelectProps {
  id?: string;
  options: Option[];
  htmlBefore?: React.ReactNode;
  heightFormHelperText?: number;
  afterFocus?: string;
  errorText?: string;
  name: string;
  title?: string | React.ReactNode;
  label?: string;
  icon?: React.ReactNode;

  required?: boolean;
  itsVeryRequired?: boolean;
  disabled?: boolean;
  formHelperText?: string;
  placeholder?: string;
  margin?: boolean;
  value?: any;
  type?: string;
  helperText?: string;
  readOnly?: boolean;
  error?: boolean;
  size?: "small" | "medium";
  fullWidth?: boolean;
  ariaDescribedById?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  sx?: SxProps<Theme>;
  useFormControl?: () => FormControlState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange type
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Add onBlur type
  onSave: OnSaveFunction;
}

export const useReusableSelect = (props: ReusableSelectProps) => {
  const [focused, setFocused] = React.useState(false);
  const [myText, setMyText] = React.useState(props.helperText);
  const [colorMode] = "light";
  const theme = useTheme();

  const CssTextField: SxProps<Theme> = {
    "& .MuiFilledInput-root": {
      "&:hover": {
        backgroundColor: "rgb(249 251 255)",
      },
      "&:focus": {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused": {
        backgroundColor: "rgb(249 251 255)",
      },
    },
    " .css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input.Mui-disabled":
      {
        color: colorMode === "light" ? "inherit" : "#AEB7C0",
        "-webkit-text-fill-color":
          colorMode === "light" ? "inherit" : "#AEB7C0",
      },

    ".Mui-disabled": {
      color: colorMode === "light" ? "inherit" : "#AEB7C0",
      "-webkit-text-fill-color": colorMode === "light" ? "inherit" : "#AEB7C0",
    },

    "& .MuiInputBase-root": {
      backgroundColor: "rgb(249 251 255)",
      borderRadius: "4px",
      borderTop: "1px solid #e0e0e0",
      borderRight: "1px solid #e0e0e0",

      borderLeft: "1px solid #e0e0e0",
      borderBottom: "0px solid #e0e0e0",
    },
    "& .css-1vhk4h7-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root": {
      backgroundColor: "rgb(249 251 255)",
    },
    ".css-10jw9n8-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root.Mui-focused":
      {
        backgroundColor: "rgb(249 251 255)",
      },

    "& .MuiOutlinedInput-root": {
      "&:hover .MuiInputBase-root": {
        backgroundColor: "rgb(249 251 255)",
      },
    },
    " .css-o943dk-MuiFormLabel-root-MuiInputLabel-root": {
      color: "inherit",
    },

    ".inheritColor.css-1wc848c-MuiFormHelperText-root": {
      color: "red",
    },
    ".css-1u6mskf-MuiFormHelperText-root": {
      color: "inherit",
    },
    ".css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-error ": {
      color: "#d32f2f",
    },
    ".outlined-required-helper-text": {
      color: colorMode === "light" ? "inherit" : "",
    },
    ".inheritColor": {
      color: colorMode === "light" ? "inherit" : "",
    },
    "css-1wc848c-MuiFormHelperText-root": {
      color: colorMode === "light" ? "inherit" : "",
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);

    // if on save is passed, call it after 100ms ==> the change is done
    props.onSave(props.name);
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
    setMyText,
    focused,
    setFocused,
    handleChange,
    CssTextField,
    colorMode,
    theme,
  };
};
