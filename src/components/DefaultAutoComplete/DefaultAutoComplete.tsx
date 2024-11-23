import React from "react";
import "./DefaultAutoComplete.css";
import {
  Autocomplete,
  CircularProgress,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  DefaultAutoCompleteProps,
  useDefaultAutoComplete,
} from "./useDefaultAutoComplete";

const DefaultAutoComplete: React.FC<DefaultAutoCompleteProps> = (props) => {
  const {
    options,
    loading = false,
    heightFormHelperText = 1,
    CssTextField,
    focused,
    value,
    myText,
    disabled = false,
    helperText = "",
    positionIcon1,
    icon1,
    positionIcon2,
    icon2,
    id = "",
    title = "",
    label = "label",
    readOnly = false,
    required = false,
    itsVeryRequired = false,
    htmlBefore = undefined,
    name = "",
    error = false,
    color = "primary",
    size = "medium",
    margin = "normal",
    ariaDescribedById = "",
    fullWidth = true,
    sx = {},
    blurOnSelect = false,
    className = "",
    placeholder,
    disableCloseOnSelect = false,
    OptionDisabled = [],
    setFocused,
    handleChange,
    onBlur,
    // @ts-ignore
    onChange,
  } = useDefaultAutoComplete(props);
  // Utility function to handle invalid values
  const getValidValue = (value: any) => {
    if (value === "" || value === null || !options.includes(value)) {
      return null; // or you can return a default value
    }
    return value;
  };

  const isOptionEqualToValue = (option: string[], value: any) => {
    // Since options are strings, directly compare them
    return option === value;
  };

  return (
    <div className="">
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
      </label>
      {htmlBefore} */}

      {/* <div className="">
        {" "}
        {helperText && (
          <FormHelperText
            sx={{
              color: error ? "#d32f2f" : focused ? "#1976d2" : "inherit",

              maxHeight: `${heightFormHelperText}rem`,
              paddingLeft: "0.2rem",
            }}
            id={ariaDescribedById}
            className="inheritColor"
          >
            {myText}
          </FormHelperText>
        )}
      </div> */}

      <Autocomplete
        disablePortal
        loading={loading}
        options={options}
        getOptionDisabled={(option) => OptionDisabled.includes(option)}
        value={getValidValue(value)}
        isOptionEqualToValue={isOptionEqualToValue}
        disabled={disabled}
        // blurOnSelect={blurOnSelect}
        disableCloseOnSelect={disableCloseOnSelect}
        sx={sx}
        renderInput={(params) => (
          <TextField
            {...params}
            className={className}
            required={itsVeryRequired}
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
            variant="filled"
            error={error}
            sx={{ ...CssTextField, ...sx, marginBottom: "0px" }}
            onFocus={() => {
              setFocused(!focused);
            }}
            onBlur={(e) => {
              if (onBlur) onBlur(e as React.FocusEvent<HTMLInputElement>);
              handleChange(e as React.ChangeEvent<HTMLInputElement>);
              setFocused(!focused);
            }}
            value={value}
            fullWidth={fullWidth}
            color={color}
            style={{ marginTop: 5 }}
            margin={margin}
            size={size}
            placeholder={placeholder}
            // InputProps={{
            //   ...params.InputProps,
            //   readOnly: readOnly,
            //   endAdornment: (
            //     <React.Fragment>
            //       {loading ? (
            //         <CircularProgress color="inherit" size={20} />
            //       ) : null}
            //       {params.InputProps.endAdornment}
            //     </React.Fragment>
            //   ),
            // }}
            InputProps={{
              ...params.InputProps,
              readOnly,
              startAdornment:
                positionIcon1 === "start" ? (
                  <InputAdornment
                    sx={{
                      color: error
                        ? "#d32f2f"
                        : focused
                        ? "#1976d2"
                        : "inherit",
                      cursor: "pointer",
                      marginTop: "0px",
                    }}
                    // onClick={onClickIcon}
                    position="start"
                  >
                    {icon1}
                  </InputAdornment>
                ) : positionIcon2 === "start" ? (
                  <InputAdornment
                    sx={{
                      color: error
                        ? "#d32f2f"
                        : focused
                        ? "#1976d2"
                        : "inherit",
                      cursor: "pointer",
                    }}
                    // onClick={onClickIcon}
                    position="start"
                  >
                    {icon2}
                  </InputAdornment>
                ) : undefined,
              endAdornment:
                positionIcon1 === "end" ? (
                  <InputAdornment
                    sx={{
                      color: error
                        ? "#d32f2f"
                        : focused
                        ? "#1976d2"
                        : "inherit",
                      cursor: "pointer",
                    }}
                    position="end"
                    // onClick={onClickIcon2}
                  >
                    {icon1}
                  </InputAdornment>
                ) : positionIcon2 === "end" ? (
                  <InputAdornment
                    sx={{
                      color: error
                        ? "#d32f2f"
                        : focused
                        ? "#1976d2"
                        : "inherit",
                      cursor: "pointer",
                    }}
                    position="end"
                    // onClick={onClickIcon2}
                  >
                    {icon2}
                  </InputAdornment>
                ) : (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
            }}
          />
        )}
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

export default DefaultAutoComplete;
