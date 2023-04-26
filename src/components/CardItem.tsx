import { Card, CardContent, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

interface ICardItemProps {
  title: string;
  id: string;
  index: number;
}

// export const CardItem: React.FC<CardItemProps> = ({ title }) => (
//   <Card sx={{ minWidth: 275, mt: 2 }}>
//     <CardContent>
//       <Typography variant="body2">{title}</Typography>
//     </CardContent>
//   </Card>
// );
const CardItem = ({ title, id, index }: ICardItemProps) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <Card
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        sx={{ minWidth: 275, mt: 2 }}
      >
        <CardContent>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
      </Card>
    )}
  </Draggable>
);

export default CardItem;
