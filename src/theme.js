import { createMuiTheme } from '@material-ui/core/styles';

// =======================================
// -- Typography
// =======================================
const fontFamilyBold = [
    'proxima-nova',
    'sans-serif'].join(',');

const fontFamily = [
    'proxima-nova',
    'sans-serif'].join(',');

const getHeader = size => ({
    fontFamily: fontFamilyBold,
    fontSize: size,
    fontWeight: 'bold',
});

const h1 = getHeader(64);
const h2 = getHeader(48);
const h3 = getHeader(36);
const h4 = getHeader(24);
const h5 = getHeader(20);
const h6 = getHeader(18);

const typography = {
    fontFamily,
    fontSize: 16,
    fontWeight: 'normal',
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
};

// =======================================
// -- Palette
// =======================================

const primary = {
    main: '#212529',
    light: '#FFFFFF',
    dark: '#222222',
    80: '#383B3F',
    70: '#4D5154',
    60: '#64676A',
    50: '#7A7C7F',
    40: '#909294',
    30: '#A6A8A9',
    20: '#BDBEBF',
    10: '#D3D3D4',
    5: '#E9EAEA',
    0: '#F5F5F5',
};

const secondary = {
    main: '#E51931',
    light: '#FED1D8',
    dark: '#870017',
    80: '#870017',
    70: '#A4011A',
    60: '#BE021D',
    50: '#D4041F',
    40: '#E51931',
    30: '#F03E55',
    20: '#F87184',
    10: '#FDB0BB',
    5: '#FED1D8',
    0: '#FFF2F4',
};

const text = {
    primary: '#000000',
    secondary: '#FFFFFF'
};

// =======================================
// -- Overrides
// =======================================

// Checkbox
const MuiCheckbox = {
    root: {
        color: primary.main
    }
};

// Material-Table
const MTableHeader = {
    header: {
        backgroundColor: primary.light,
    }
};

const MuiTableCell = {
    head: {
        color: text.primary,
    }
};

// =======================================
// -- Global Classes
// =======================================

const getPnByFontWeight = fontWeight => ({
    fontFamily,
    fontStyle: 'normal',
    fontWeight,
});

const getFontColor = (color, emphasis) => ({
    color: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ emphasis })`,
});

function hexToRgb(hex) {
    // This Regex is creating 3 groups. Each group represents the hex value
    // for r, g, and b. Once we have these values, we can now convert them
    // to standard base 10 values.
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const textRgb = {
    primary: hexToRgb(text.primary),
    secondary: hexToRgb(text.secondary)
};

const error = {
    primary: {
        color: '#D4041F',
        backgroundColor: '#FED1D8',
    },
    secondary: {
        color: '#FED1D8',
        backgroundColor: '#D4041F',
    }
};

const warning = {
    primary: {
        color: '#5C5427',
        backgroundColor: '#F2EEBD',
    },
    secondary: {
        color: '#F2EEBD',
        backgroundColor: '#5C5427',
    }
};

const success = {
    primary: {
        color: '#155423',
        backgroundColor: '#BBEBC8',
    },
    secondary: {
        color: '#BBEBC8',
        backgroundColor: '#155423',
    }
};

const information = {
    primary: {
        color: '#23468C',
        backgroundColor: '#CCDEFE',
    },
    secondary: {
        color: '#CCDEFE',
        backgroundColor: '#23468C',
    }
};

const globalClasses = {
    pnThin: getPnByFontWeight(100),
    pnExtraLight: getPnByFontWeight(200),
    pnLight: getPnByFontWeight(300),
    pnRegular: getPnByFontWeight(400),
    pnMedium: getPnByFontWeight(500),
    pnSemiBold: getPnByFontWeight(600),
    pnBold: getPnByFontWeight(700),
    pnExtraBold: getPnByFontWeight(800),
    pnBlack: getPnByFontWeight(900),
    emphasisPrimaryHigh: getFontColor(textRgb.primary, 0.87),
    emphasisPrimaryMedium: getFontColor(textRgb.primary, 0.60),
    emphasisPrimaryDisabled: getFontColor(textRgb.primary, 0.38),
    emphasisSecondaryHigh: getFontColor(textRgb.secondary, 0.87),
    emphasisSecondaryMedium: getFontColor(textRgb.secondary, 0.60),
    emphasisSecondaryDisabled: getFontColor(textRgb.secondary, 0.38),
    errorPrimary: error.primary,
    errorSecondary: error.secondary,
    warningPrimary: warning.primary,
    warningSecondary: warning.secondary,
    informationPrimary: information.primary,
    informationSecondary: information.secondary,
    successPrimary: success.primary,
    successSecondary: success.secondary,
};

// =======================================
// -- Create Theme
// =======================================

export default (type = 'light') => createMuiTheme({
    globalClasses,
    overrides: {
        MuiCheckbox,
        MuiTableCell,
        MTableHeader,
    },
    palette: {
        primary,
        secondary,
        text,
        type,
    },
    typography,
});
