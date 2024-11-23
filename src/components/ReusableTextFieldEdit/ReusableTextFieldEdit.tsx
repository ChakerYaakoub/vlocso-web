import React from 'react';
import './ReusableTextFieldEdit.css';
import {
  ReusableTextFieldEditProps,
  useReusableTextFieldEdit,
} from './useReusableTextFieldEdit';
import {
  TextField as MuiTextField,
  FormHelperText,
  InputAdornment,
} from '@mui/material';

const ReusableTextFieldEdit: React.FC<ReusableTextFieldEditProps> = (props) => {
  const {
    setFocused,
    handleChange,
    handleSaveClick,
    handleEditClick,
    onBlur,
    isValueChange,
    voidValue,
    heightFormHelperText = 1,
    CssTextField,
    focused,
    value,
    myText,
    max,
    min = 0,
    inputRef,
    disabled = false,
    helperText = '',
    id = '',
    enableEdit,
    label = 'label',
    readOnly = false,
    required = false,
    multiline = false,
    htmlBefore = undefined,
    rows,
    maxRows,
    type = 'text',
    name = '',
    error = false,
    ariaDescribedBy = '',
    ariaDescribedById = '',
    title = '',
    color = 'primary',
    size = 'medium',
    margin = 'normal',
    fullWidth = true,
    sx = {},
    // isVeryRequired = false,
    className = '',
  } = useReusableTextFieldEdit(props);

  return (
    <div className="TextFieldContainer">
      {/* if you want the title the same color in focus and error */}
      {/* <h2
      // style={{ color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit' }}
      >
        {title}
      </h2> */}
      <label className="mb-2.5 block font-medium text-black dark:text-white">
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
        className={className}
        value={value}
        id={id}
        name={name}
        label={label}
        autoComplete={`current-${name}`}
        variant="filled"
        error={error}
        // required={required}
        disabled={!enableEdit || disabled}
        type={type}
        sx={{ ...CssTextField, ...sx, marginBottom: '0px' }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          setFocused(!focused);
          if (onBlur) onBlur(e);
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          if (onBlur) onBlur(e);

          setFocused(!focused);
          if (isValueChange && !error) {
            handleSaveClick();
          }
          if (enableEdit && !error) {
            handleEditClick();
          }
        }}
        onChange={handleChange}
        InputProps={{
          inputProps: {
            max: max,
            min: min,
          },
          readOnly,
          inputRef,

          endAdornment: (
            <InputAdornment
              sx={{
                color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit',
                cursor: 'pointer',
              }}
              position="end"
            >
              {/* if value then we can save it  */}
              {isValueChange ? (
                <button
                  // p-2
                  className={`py-1 w-25 rounded cursor-pointer ${
                    error ? 'bg-yellow-500' : 'bg-green-500'
                  } text-white buttonService ${
                    multiline ? 'bottom-2 right-2 absolute ' : ''
                  }`}
                  style={{ height: '2rem' }}
                  onClick={handleSaveClick}
                  disabled={error}
                  type="button"
                >
                  <span className="my-auto">Finalize</span>
                </button>
              ) : (
                <>
                  {!voidValue &&
                    !enableEdit &&
                    (value.toString() != '' || value !== 0) && (
                      <button
                        className={`py-1 cursor-pointer  w-25 rounded bg-blue-500 text-white buttonService ${
                          multiline ? 'bottom-2 right-2 absolute' : ''
                        }`}
                        style={{ height: '2rem' }}
                        onClick={handleEditClick}
                        type="button"
                      >
                        Change
                      </button>
                    )}

                  {enableEdit && (
                    <button
                      className={`py-1 cursor-pointer  w-25 rounded bg-slate-500 text-white buttonService ${
                        multiline ? 'bottom-2 right-2 absolute' : ''
                      }`}
                      style={{ height: '2rem' }}
                      onClick={handleEditClick}
                      type="button"
                    >
                      {/* Discard */}
                      Cancel
                      {/* No Changes */}
                    </button>
                  )}
                  {voidValue &&
                    !enableEdit &&
                    (value === '' || value === 0) && (
                      <button
                        className={`py-1 cursor-pointer  w-25 rounded bg-teal-600 text-white buttonService ${
                          multiline ? 'bottom-2 right-2 absolute' : ''
                        }`}
                        style={{ height: '2rem' }}
                        onClick={handleEditClick}
                        type="button"
                      >
                        Add New
                      </button>
                    )}
                </>
              )}
            </InputAdornment>
          ),
        }}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        fullWidth={fullWidth}
        margin={margin}
        size={size}
        aria-describedby={ariaDescribedBy}
        color={color}
        style={{ marginTop: 5 }}
      />
      {helperText && (
        <FormHelperText
          sx={{
            color: error ? '#d32f2f' : focused ? '#1976d2' : 'inherit',

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

export default ReusableTextFieldEdit;
