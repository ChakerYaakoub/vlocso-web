import React from "react";
import { ReusableSelectProps, useReusableSelect } from "./useReusableSelect";
import { FormHelperText, MenuItem, Select } from "@mui/material";
// import { FaCaretDown, FaChevronDown } from 'react-icons/fa6';
import "./ReusableSelect.css";

const ReusableSelect: React.FC<ReusableSelectProps> = (props) => {
  const {
    setFocused,
    handleChange,
    onBlur,
    heightFormHelperText = 1,
    CssTextField,
    focused,
    value,
    myText,
    disabled = false,
    helperText = "",
    ariaDescribedById = "",
    id = "",
    label = "label",
    required = false,
    itsVeryRequired = false,
    formHelperText,
    htmlBefore = undefined,
    readOnly = false,
    type = "text",
    name = "",
    error = false,
    color = "primary",
    size = "medium",
    fullWidth = true,
    sx = {},
    options,
    margin = true,
    placeholder = "Please select",
    icon,
  } = useReusableSelect(props);

  return (
    <div className={` ${margin ? "TextFieldContainer" : ""}`}>
      {/* <h2
      // style={{ color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit' }}
      >
        {title}
      </h2> */}
      {/* {title && (
        <>
          <label
            className={`mb-2.5 block font-medium text-black dark:text-white ${
              title == "hidden" ? "invisible " : ""
            }`}
          >
            {title}
            {required && (
              <span
                aria-hidden="true"
                className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk"
                style={{ color: "red" }}
              >
                 *
              </span>
            )}
          </label>
        </>
      )} */}

      {htmlBefore}
      {formHelperText && (
        <>
          <FormHelperText
            sx={{
              color: true ? "#1976d2" : "inherit",

              height: `1rem`,
            }}
            className="inheritColor"
          >
            {formHelperText}
          </FormHelperText>
        </>
      )}

      <div className="relative relativeSelect">
        <label
          className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-filled MuiFormLabel-colorPrimary MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-sizeMedium MuiInputLabel-filled css-eok8s2-MuiFormLabel-root-MuiInputLabel-root"
          data-shrink="true"
          htmlFor={id}
          id={`${id}-label`}
        >
          {" "}
          {label}{" "}
          {required && (
            <span
              aria-hidden="true"
              className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk pl-0"
              style={{ color: "red" }}
            >
               *
            </span>
          )}
        </label>
        <Select
          value={value}
          id={id}
          name={name}
          // label={
          //   <>
          //     {" "}
          //     {label}{" "}
          //     {required ? (
          //       <span
          //         aria-hidden="true"
          //         className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-wgai2y-MuiFormLabel-asterisk pl-0"
          //         style={{ color: "red" }}
          //       >
          //         *
          //       </span>
          //     ) : (
          //       <> </>
          //     )}{" "}
          //   </>
          // }
          // label={label}
          autoComplete={`current-${name}`}
          variant="filled"
          error={error}
          required={itsVeryRequired}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          sx={{ ...CssTextField, ...sx, marginBottom: "0px" }}
          onFocus={() => {
            setFocused(!focused);
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (onBlur) onBlur(e); // Call Formik's onBlur

            setFocused(!focused);
          }}
          // @ts-ignore
          onChange={handleChange} // Handle onChange with Formik
          fullWidth={fullWidth}
          size={size}
          color={color}
          style={{
            marginTop: 5,
            backgroundColor: disabled ? "" : "rgb(249 251 255)",
          }}
          readOnly={readOnly}
          displayEmpty
          renderValue={(selected) => {
            if (!selected) {
              return (
                <span className="flex items-center gap-2">
                  {icon}
                  {placeholder}
                </span>
              );
            } else {
              return (
                <span className="flex items-center gap-2">
                  {icon}
                  {selected}
                </span>
              );
            }
          }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {/* <MenuItem value="">
            <ListItemIcon>{icon1}</ListItemIcon>
            <ListItemText primary={placeholder} />
          </MenuItem> */}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {/* <FaCaretDown
          className={'top-6.5 right-31 absolute icon-wrapper-select'}
          htmlFor={id}
        />
        <button
          className="p-2 w-25 rounded absolute top-4 right-3 bg-blue-500 text-white buttonService"
          onClick={() => {}}
          type="button"
        >
          change
        </button> */}
      </div>

      {helperText && (
        <FormHelperText
          sx={{
            // color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit',
            color: error ? "#d32f2f" : "inherit",

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

export default ReusableSelect;
