import { createTheme } from "@mui/material";

// Depending on the scale of the theme, each top-level theme object could
// be moved into its own file (eg., breakpoints.ts, palette.ts, etc)

export default createTheme({
  // See: https://mui.com/material-ui/customization/breakpoints/#custom-breakpoints
  breakpoints: {
    // Adapt material ui breakpoint and grid system to production
    // tables page breakpoints and grid system.
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1024,
      // The breakpoint and grid system on the production tables page doesn't align with material ui's
      // grid system (eg., padding/margin implementations) which affects numbers adapted here.
      xl: 1328,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        // All app links don't include underline. This theming system is an effective
        // way to customize material-ui's components to a design system.
        underline: "none",
      },
    },
  },
  // Multiple palettes could be implemented (eg., light mode vs dark mode) and the
  // app could select the appropriate palette based on conditions (eg., prefers-color-scheme)
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
