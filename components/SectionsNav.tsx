import { Chip, Link, Stack, StackProps } from "@mui/material";

// Extend and forward root node props for most components
interface SectionsNavProps extends StackProps {
  sections: string[];
}

export default function SectionsNav({
  sections,
  sx,
  ...props
}: SectionsNavProps) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={2}
      sx={{
        background: "lightgrey",
        borderRadius: 10,
        p: 1,
        position: "sticky",
        width: "fit-content",
        top: 0,
        ...sx,
      }}
      {...props}
    >
      {sections.map((section) => {
        return (
          <Link key={section} href="#">
            <Chip label={section} />
          </Link>
        );
      })}
    </Stack>
  );
}
