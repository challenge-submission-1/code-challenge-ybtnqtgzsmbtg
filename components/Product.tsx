import { Product as ProductType } from "@/types/types";
import { ArrowForward, Circle } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Link,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import Image from "next/image";

// Extend and forward root node props for most components
interface ProductProps extends StackProps {
  product: ProductType;
}

export default function Product({ product, ...props }: ProductProps) {
  return (
    <Stack spacing={2} {...props}>
      <Box
        sx={{
          borderRadius: 4,
          position: "relative",
        }}
      >
        {product.productTag && (
          <Chip
            label={product.productTag}
            size="small"
            sx={{
              m: 2,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          />
        )}
        <Link>
          {/* See: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-fill */}
          <Box
            sx={{
              position: "relative",
              height: "300px",
              // Setting a fixed width (eg., 400px) on the image or on the image container will cause the image to
              // grow past its container on smaller devices, use a fluid width while maintaining aspect ratio.
              width: "100%",
            }}
          >
            <Image
              alt={product.images.product[0]?.alt ?? ""}
              // Given product data from the production tables.json file some product urls are
              // empty and an opaque unkonwn fallback is used, these images will result in a 404.
              src={product.images.product[0]?.url ?? ""}
              fill
              style={{
                border: "2px solid lightgrey",
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
          </Box>
        </Link>
        <Chip
          icon={<Circle sx={{ "&&": { color: product.color.hex } }} />}
          label={product.color.title}
          sx={{
            m: 1,
            bottom: 0,
            right: 0,
            position: "absolute",
          }}
        />
      </Box>
      <Stack direction="column" spacing={0.5}>
        <Link color="primary" href="#">
          <Typography sx={{ fontWeight: "bold" }}>{product.name}</Typography>
        </Link>
        <Stack direction="row" spacing={0.5}>
          <Typography color="grey" variant="body2">
            {product.price.title}
            {!product.savingsText && " or financing"}
          </Typography>
          {product.savingsText && (
            <>
              <Divider orientation="vertical" />
              <Typography variant="body2">{product.savingsText}</Typography>
            </>
          )}
          <Divider orientation="vertical" />
          <Link href="#">
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Typography
                color="secondary"
                variant="body2"
                sx={{ fontWeight: "bold" }}
              >
                Customize
              </Typography>
              <ArrowForward color="secondary" sx={{ fontSize: 14 }} />
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
