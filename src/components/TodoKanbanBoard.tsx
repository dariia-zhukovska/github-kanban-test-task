import React, { useState } from "react";
import { Grid } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";
import CardsList from "./CardsList";
import SearchInputForm from "./SearchInputForm";
import RepoInfo from "./RepoInfo";

export const TodoKanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState([
    {
      id: "column-1",
      title: "To Do",
      cards: [
        { id: "card-1", title: "Task 1" },
        { id: "card-2", title: "Task 2" },
        { id: "card-3", title: "Task 3" },
      ],
    },
    {
      id: "column-2",
      title: "In Progress",
      cards: [
        { id: "card-4", title: "Task 4" },
        { id: "card-5", title: "Task 5" },
      ],
    },
    {
      id: "column-3",
      title: "Done",
      cards: [{ id: "card-6", title: "Task 6" }],
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = columns.find(
      (column) => column.id === source.droppableId
    );
    const destinationColumn = columns.find(
      (column) => column.id === destination.droppableId
    );
    const card = sourceColumn?.cards[source.index];

    if (sourceColumn && destinationColumn && card) {
      sourceColumn.cards.splice(source.index, 1);
      destinationColumn.cards.splice(destination.index, 0, card);

      setColumns([...columns]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <SearchInputForm />
      <RepoInfo owner={"facebook"} repo={"react"} stars={10} />
      <Grid container spacing={2}>
        {columns.map((column) => (
          <Grid item xs key={column.id}>
            <CardsList {...column} />
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
};
