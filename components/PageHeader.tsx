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
      {/* Some typography on the tables production site uses a serif font while others use sans serif font.
       * A new typography variant or similar could be added to encapsulate this functionality, will use sx instead. */}
      <Typography variant="h1" sx={{ fontWeight: "400", fontFamily: "serif" }}>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Stack>
  );
}
