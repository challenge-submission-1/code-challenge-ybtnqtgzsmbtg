import { Category as CategoryType } from "@/types/types";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import Product from "./Product";

// Extend and forward root node props for most components
interface CategoryProps extends StackProps {
  category: CategoryType;
}

export default function Category({ category, ...props }: CategoryProps) {
  return (
    <Stack component="section" direction="column" spacing={2} {...props}>
      {
        /* Some text on the tables production site uses a serif font while other text
         * uses a sans serif font. A new typography variant could be added in
         * the theme or elsewhere for this functionality, using sx instead. */
      }
      <Typography variant="h2" sx={{ fontFamily: "serif" }}>
        {category.title}
      </Typography>
      {/* Use css grid for a modern two-dimensional grid layout */}
      <Box
        sx={{
          display: "grid",
          gap: 6,
          gridTemplateColumns: {
            // Add responsive mobile-first grid column values
            xs: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
        }}
      >
        {category.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Box>
    </Stack>
  );
}
