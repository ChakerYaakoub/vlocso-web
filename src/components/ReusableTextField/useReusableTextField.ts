import React, { useEffect } from 'react';
import { FormControlState } from '@mui/material/FormControl';
import { useTheme, SxProps, alpha } from '@mui/material';
import { Theme } from '@emotion/react';

export interface ReusableTextFieldProps {
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
  itsVeryRequired?: boolean;
  value?: any;
  type?: string;
  helperText?: string;
  readOnly?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  maxRows?: number;
  placeholder?: string;
  positionIcon1?: 'start' | 'end';
  icon1?: React.ReactNode;
  positionIcon2?: 'start' | 'end';
  icon2?: React.ReactNode;  
  onClickIcon2?: () => void;
  size?: 'small' | 'medium';
  margin?: 'dense' | 'none' | 'normal';
  fullWidth?: boolean;
  ariaDescribedBy?: string;
  ariaDescribedById?: string;
  sx?: SxProps<Theme>;
  className?: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  useFormControl?: () => FormControlState;
  onClickIcon?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange type
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Add onBlur type
}

export const useReusableTextField = (props: ReusableTextFieldProps) => {
  const [focused, setFocused] = React.useState(false);
  const [myText, setMyText] = React.useState(props.helperText);

  const theme = useTheme();

  const CssTextField: SxProps<Theme> = {
    // '.Mui-disabled': {
    //   backgroundColor: 'red',
    // },

    '& .MuiFilledInput-root': {
      '&:hover': {
        backgroundColor: 'white',
        // backgroundColor: 'rgb(249 251 255)',
      },
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused': {
        backgroundColor: 'white',
      },
    },

    '& .MuiInputBase-root': {
      backgroundColor: 'white',
      borderRadius: '4px',
      borderTop: '1px solid #e0e0e0',
      borderRight: '1px solid #e0e0e0',

      borderLeft: '1px solid #e0e0e0',
      borderBottom: '0px solid #e0e0e0',
    },
    ' & .MuiInputBase-root.Mui-disabled': {
      backgroundColor: 'white',
      color:  '#AEB7C0',
      '-webkit-text-fill-color': 'inherit' ,
    },

    '.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled': {
      color:  '#AEB7C0',
      '-webkit-text-fill-color':   '#AEB7C0',
    },

    '& .MuiOutlinedInput-root': {
      '&:hover .MuiInputBase-root': {
        backgroundColor: 'white',
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
      color: 'inherit' ,
    },
    '.inheritColor': {
      color: 'inherit' ,
    },
    'css-1wc848c-MuiFormHelperText-root': {
      color: 'inherit' ,
    },
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
    CssTextField,
    theme,
  };
};
