import { Stack, StackProps, Typography } from "@mui/material";

// Extend and forward root node props for most components
interface PageHeaderProps extends StackProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
  ...props
}: PageHeaderProps) {
  return (
    <Stack direction="column" spacing={1} {...props}>
      {
        /* Some text on the tables production site uses a serif font while other text
         * uses a sans serif font. A new typography variant could be added in
         * the theme or elsewhere for this functionality, using sx instead. */
      }
      <Typography variant="h1" sx={{ fontWeight: "400", fontFamily: "serif" }}>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Stack>
  );
}
