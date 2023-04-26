// import { Box, Typography } from "@mui/material";
// import { CardItem } from "./CardItem";
// import { Droppable } from "react-beautiful-dnd";

// interface CardsListProps {
//   columnTitle: string;
//   cards: string[];
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   onCardDrop: (source: any, destination: any, draggableId: any) => void;
// }
// // export const CardsList: React.FC<CardsListProps> = ({ columnTitle, cards }) => (
// //   <Box
// //     sx={{
// //       height: "100vh",
// //       backgroundColor: "#f0efe9",
// //       borderRadius: "16px",
// //       mt: 4,
// //       p: 3,
// //     }}
// //   >
// //     <Typography variant="h5" align="center" gutterBottom>
// //       {columnTitle}
// //     </Typography>
// //     <Box>
// //       {cards.map((title, index) => (
// //         <CardItem key={index} title={title} id={""} index={0} />
// //       ))}
// //     </Box>
// //   </Box>
// // );

// export const CardsList: React.FC<CardsListProps> = ({
//   columnTitle,
//   cards,
//   onCardDrop,
// }) => {
//   const handleCardDrop = (result: any) => {
//     const { source, destination, draggableId } = result;
//     if (!destination) {
//       return;
//     }
//     onCardDrop(source, destination, draggableId);
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         backgroundColor: "#f0efe9",
//         borderRadius: "16px",
//         mt: 4,
//         p: 3,
//       }}
//     >
//       <Typography variant="h5" align="center" gutterBottom>
//         {columnTitle}
//       </Typography>
//       <Droppable droppableId={columnTitle}>
//         {(provided) => (
//           <Box ref={provided.innerRef} {...provided.droppableProps}>
//             {cards.map((title, index) => (
//               <CardItem
//                 key={index}
//                 title={title}
//                 id={`card-${index}`}
//                 index={index}
//               />
//             ))}
//             {provided.placeholder}
//           </Box>
//         )}
//       </Droppable>
//     </Box>
//   );
// };

import { Droppable } from "react-beautiful-dnd";
import { Box, Typography } from "@mui/material";
import CardItem from "./CardItem";

interface ICardsListProps {
  id: string;
  title: string;
  cards: { id: string; title: string }[];
}

const CardsList = ({ id, title, cards }: ICardsListProps) => {
  return (
    <Box sx={{ minWidth: 275, padding: 2 }}>
      <Typography variant="h5">{title}</Typography>
      <Droppable droppableId={id}>
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {cards.map((card, index) => (
              <CardItem
                key={card.id}
                id={card.id}
                title={card.title}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default CardsList;
