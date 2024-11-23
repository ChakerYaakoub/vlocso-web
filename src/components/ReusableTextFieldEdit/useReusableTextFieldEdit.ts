import React, { useEffect, useRef } from 'react';
import { FormControlState } from '@mui/material/FormControl';
import { useTheme, SxProps, alpha } from '@mui/material';
import { ClassNames, Theme } from '@emotion/react';
import useColorMode from '../../../hooks/useColorMode';
import { OnSaveFunction } from '../../../pages/General/useGeneral';

// not that this code its hard for you bro / sis
// chaker yaakoub 2024
export interface ReusableTextFieldEditProps {
  id?: string;
  htmlBefore?: React.ReactNode;
  heightFormHelperText?: number;
  afterFocus?: string;
  errorText?: string;
  name?: string;
  title?: string | React.ReactNode;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  max?: number;
  min?: number;
  // defaultValue?: string;
  value?: any;
  type?: string;
  helperText?: string;
  readOnly?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  maxRows?: number;
  positionIcon?: 'start' | 'end';
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  margin?: 'dense' | 'none' | 'normal';
  fullWidth?: boolean;
  ariaDescribedBy?: string;
  ariaDescribedById?: string;
  sx?: SxProps<Theme>;
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  isVeryRequired?: boolean;
  useFormControl?: () => FormControlState;
  onClickIcon?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange type
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Add onBlur type
  onSave?: OnSaveFunction;
}

export const useReusableTextFieldEdit = (props: ReusableTextFieldEditProps) => {
  const [focused, setFocused] = React.useState(false);
  const [myText, setMyText] = React.useState(props.helperText);
  const [colorMode] = useColorMode();
  const theme = useTheme();
  const inputRef = useRef(null);

  const [voidValue, setVoidValue] = React.useState(false);
  const [enableEdit, setEnableEdit] = React.useState(false);
  const [oldValue, setOldValue] = React.useState(props.value);
  const [isValueChange, setIsValueChange] = React.useState(false);

  // thi use effect run only after the first render
  // the first render the value is empty
  // the right value will be saved after

  useEffect(() => {
    if (oldValue === '' || oldValue === null || oldValue === 0)
      setOldValue(props.value);
  }, [props.value, oldValue]);

  // if the value is empty, set the old value to the new value ==> empty by default or not required
  // this use effect run only once ==> if the voidValue is true for the first time , the use effect will stop
  // if the value its empty by default, the voidValue will be true

  // useEffect(() => {
  //   if (!voidValue) {
  //     if (
  //       props.value === null ||
  //       props.value === undefined ||
  //       props.value === '' ||
  //       props.value === 0
  //     ) {
  //       setVoidValue(true);
  //     } else {
  //       setVoidValue(false);
  //     }
  //   }
  // }, [props.value, voidValue, isValueChange]);

  // useEffect(() => {
  //   setOldValue(props.value);
  // }, [props.value]);

  useEffect(() => {
    setVoidValue(!props.value || props.value === 0);
  }, [props.value, voidValue]);
  // Css for the text field
  const CssTextField: SxProps<Theme> = {
    '& .MuiFilledInput-root': {
      '&:hover': {
        backgroundColor: 'rgb(249 251 255)',
      },
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused': {
        backgroundColor: 'rgb(249 251 255)',
      },
    },
    '.css-reij49-MuiInputBase-root-MuiFilledInput-root.Mui-disabled': {
      backgroundColor: '#bba8a81f',
    },
    '.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled': {
      color: colorMode === 'light' ? 'inherit' : '#AEB7C0',
      '-webkit-text-fill-color': colorMode === 'light' ? 'inherit' : '#AEB7C0',
    },
    '.css-hjq4k6-MuiInputBase-root-MuiFilledInput-root.Mui-disabled': {
      backgroundColor: '#bba8a81f',
    },
    '.css-7209ej-MuiInputBase-input-MuiFilledInput-input.Mui-disabled': {
      color: colorMode === 'light' ? 'inherit' : '#AEB7C0',
      '-webkit-text-fill-color': colorMode === 'light' ? 'inherit' : '#AEB7C0',
      // borderBottom: '2.5rem solid transparent ',
    },
    '.css-1gctnaj-MuiInputBase-input-MuiFilledInput-input.Mui-disabled': {
      color: colorMode === 'light' ? 'inherit' : '#AEB7C0',
      '-webkit-text-fill-color': colorMode === 'light' ? 'inherit' : '#AEB7C0',
    },
    '.css-7rjksv-MuiFormControl-root-MuiTextField-root .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input.Mui-disabled':
      {
        color: colorMode === 'light' ? '#AEB7C0' : '#AEB7C0',
        '-webkit-text-fill-color':
          colorMode === 'light' ? '#AEB7C0' : '#AEB7C0',
      },
    '.css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled': {
      color: 'inherit',
    },

    '.css-7209ej-MuiInputBase-input-MuiFilledInput-input': {
      // borderBottom: '2.5rem solid transparent !important',
    },
    '& .css-hjq4k6-MuiInputBase-root-MuiFilledInput-root': {
      padding: '25px 0px 12px 8px !important',
    },

    '& .MuiInputBase-root': {
      backgroundColor: 'rgb(249 251 255)',
      borderRadius: '4px',
      borderTop: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',

      borderLeft: '1px solid #e0e0e0',
      borderBottom: '0px solid #e0e0e0',
    },

    '& .MuiOutlinedInput-root': {
      '&:hover .MuiInputBase-root': {
        backgroundColor: 'rgb(249 251 255)',
      },
    },
    ' .css-o943dk-MuiFormLabel-root-MuiInputLabel-root': {
      color: 'inherit',
    },
    '.inheritColor.css-1wc848c-MuiFormHelperText-root': {
      color: 'red',
    },
    '.css-1u6mskf-MuiFormHelperText-root': {
      color: 'inherit',
    },
    '.css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-error ': {
      color: '#d32f2f',
    },
    '.outlined-required-helper-text': {
      color: colorMode === 'light' ? 'inherit' : '',
    },
    '.inheritColor': {
      color: colorMode === 'light' ? 'inherit' : '',
    },
    'css-1wc848c-MuiFormHelperText-root': {
      color: colorMode === 'light' ? 'inherit' : '',
    },
  };

  //  handle edit click
  // set the enable edit to the opposite value
  // if enable edit is true, focus the input
  const handleEditClick = () => {
    setEnableEdit(!enableEdit);
    if (inputRef.current) {
      setTimeout(() => {
        // @ts-ignore
        inputRef.current.focus();
      }, 50);
    }
  };

  // handle save click
  const handleSaveClick = () => {
    if (props.error) {
      return;
    }
    // now we have change the value
    setOldValue(props.value);
    // now we have change the value
    setIsValueChange(!isValueChange);
    // set the enable edit to the opposite value ==> false
    setEnableEdit(!enableEdit);

    // is not void now
    if (voidValue) {
      setVoidValue(false);
    }

    // Call onSave function here if needed
    // if the onSave function is passed, call it not required for now

    if (props.onSave) {
      // the other logic will be here
      props.onSave(props.name!);
    }
  };

  // handle change  event for input
  // not that if the value in the data base its '' ==> in the input its like this ' ' == >with 1 space
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // console.log(
    //   'newValue',
    //   oldValue === ' ' && newValue.toString().length === 0,
    // );
    // console.log(
    //   'newValue === old value : ',
    //   oldValue.toString() === newValue.toString(),
    //   'the old value ',
    //   oldValue,
    //   'the new value ',
    //   newValue,
    // );

    if (
      (oldValue === ' ' && newValue.toString().length === 0) ||
      (oldValue.toString() === newValue.toString() && newValue !== ' ') ||
      oldValue.toString() === newValue.toString()
    ) {
      setIsValueChange(false);
    } else {
      setIsValueChange(true);
    }

    props.onChange(event);
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
    inputRef,
    voidValue,
    isValueChange,
    enableEdit,
    CssTextField,
    colorMode,
    theme,
    setEnableEdit,
    setVoidValue,
    handleChange,
    handleSaveClick,
    handleEditClick,
    setIsValueChange,
    setMyText,
    setFocused,
  };
};
