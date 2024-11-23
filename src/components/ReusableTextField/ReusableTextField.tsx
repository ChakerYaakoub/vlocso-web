import React from "react";
import "./ReusableTextField.css";
import {
  ReusableTextFieldProps,
  useReusableTextField,
} from "./useReusableTextField";
import {
  TextField as MuiTextField,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

const ReusableTextField: React.FC<ReusableTextFieldProps> = (props) => {
  const {
    // setMyText,
    setFocused,
    onClickIcon,
    // errorText,
    // colorMode,
    heightFormHelperText = 1,
    CssTextField,
    focused,
    value,
    myText,
    max,
    min = 0,
    // defaultValue = '',
    disabled = false,
    helperText = "",
    // afterFocus = '',
    id = "",
    label = "label",
    readOnly = false,
    required = false,
    multiline = false,
    htmlBefore = undefined,
    rows,
    maxRows,
    type = "text",
    name = "",
    error = false,
    positionIcon1,
    positionIcon2,
    icon1,
    icon2,
    onClickIcon2,
    ariaDescribedBy = "",
    ariaDescribedById = "",
    placeholder = "",
    color = "primary",
    size = "medium",
    margin = "normal",
    fullWidth = true,
    sx = {},
    itsVeryRequired = false,
    onChange, // Add onChange to props
    onBlur, // Add onBlur to props
  } = useReusableTextField(props);

  return (
    <div className="TextFieldContainer">
      {/* <h2
      // style={{ color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit' }}
      >
        {title}
      </h2> */}
      {/* <label className="mb-2.5 block font-medium text-black dark:text-white">
        {title}
        {required && (
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
            style={{ color: 'red' }}
          >
             *
          </span>
        )}
      </label> */}
      {htmlBefore}
      {max && (
        <>
          <div className="flex justify-end mr-1">
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {value.length} / {max}
            </span>
          </div>
        </>
      )}

      <MuiTextField
        value={value}
        id={id}
        name={name}
        label={
          <>
            {" "}
            {label}{" "}
            {required ? (
              <span
                aria-hidden="true"
                className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk pl-0"
                style={{ color: "red" }}
              >
                *
              </span>
            ) : (
              <> </>
            )}{" "}
          </>
        }
        autoComplete={`current-${name}`}
        variant="filled"
        error={error}
        required={itsVeryRequired}
        disabled={disabled}
        // defaultValue={defaultValue}
        type={type}
        sx={{ ...CssTextField, ...sx, marginBottom: "0px" }}
        onFocus={() => {
          // if (error) {
          //   setMyText(errorText);
          // } else setMyText(afterFocus);
          setFocused(!focused);
          // if (onBlur && error) onBlur(e);
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          // if (error) setMyText(errorText);
          // else {
          //   setMyText(helperText);
          // }
          if (onBlur) onBlur(e); // Call Formik's onBlur

          setFocused(!focused);
        }}
        onChange={onChange} // Handle onChange with Formik
        InputProps={{
          inputProps: {
            max: max,
            min: min,
          },
          readOnly,
          startAdornment:
            positionIcon1 === "start" ? (
              <InputAdornment
                sx={{
                  color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",
                  cursor: "pointer",
                }}
                onClick={onClickIcon}
                position="start"
              >
                {icon1}
              </InputAdornment>
            ) : positionIcon2 === "start" ? (
              <InputAdornment
                sx={{
                  color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",
                  cursor: "pointer",
                }}
                onClick={onClickIcon}
                position="start"
              >
                {icon2}
              </InputAdornment>
            ) : undefined,
          endAdornment:
            positionIcon1 === "end" ? (
              <InputAdornment
                sx={{
                  color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",
                  cursor: "pointer",
                }}
                position="end"
                onClick={onClickIcon2}
              >
                {icon1}
              </InputAdornment>
            ) : positionIcon2 === "end" ? (
              <InputAdornment
                sx={{
                  color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",
                  cursor: "pointer",
                }}
                position="end"
                onClick={onClickIcon2}
              >
                {icon2}
              </InputAdornment>
            ) : undefined,
        }}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        fullWidth={fullWidth}
        placeholder={placeholder}
        margin={margin}
        size={size}
        aria-describedby={ariaDescribedBy}
        color={color}
        style={{ marginTop: 5 }}
      />
      {helperText && (
        <FormHelperText
          sx={{
            color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",

            height: `${heightFormHelperText}rem`,
          }}
          id={ariaDescribedById}
          className="inheritColor"
        >
          {myText}
        </FormHelperText>
      )}
    </div>
  );
};

export default ReusableTextField;
