import { createTheme } from "@mui/material";

// Depending on the scale of the theme, each top-level theme object could
// be moved into its own file (eg., breakpoints.ts, palette.ts, etc)

export default createTheme({
  // See: https://mui.com/material-ui/customization/breakpoints/#custom-breakpoints
  breakpoints: {
    // Adapt material ui breakpoints and grid system to the production
    // tables page breakpoints and grid system.
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      // The breakpoints and grid system on the production tables page doesn't match material ui's
      // grid system implementation (eg., padding/margin) which affects numbers here.
      xl: 1328,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        // App links don't include underline styles. Customizing material-ui's 
        // components via the theme is an effective way to match design systems.
        underline: "none",
      },
    },
  },
  // Multiple palettes could be implemented (eg., light mode vs dark mode) and the
  // app could select palettes based on conditions (eg., prefers-color-scheme)
  // See: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  palette: {
    background: {
      default: "fff",
    },
    // Only necessary palette colors were updated.
    secondary: {
      main: "#69A2FF",
    },
  },
  typography: {
    allVariants: {
      color: "#0B2341",
    },
  },
});
