import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  imageUrl: string;
  userId: string;
  articleId: string;
};

const ArticleItem = ({ text, imageUrl, userId, articleId }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      sx={isHovering ? { ...styles.card, ...styles.cardHover } : styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        objectFit="scale-down"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageUrl}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{text}</Heading>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() =>
              navigate(`/portfolio/${userId}/articles/${articleId}`)
            }
            variant="solid"
            colorScheme="blue"
          >
            {t("articleItem.explore")}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
const styles = {
  card: {
    backgroundColor: "brand.600",
    color: "brand.700",
    border: "2px solid transparent",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  cardHover: {
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
  },
};

export default ArticleItem;
