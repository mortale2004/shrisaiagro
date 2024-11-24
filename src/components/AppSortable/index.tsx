import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { FC } from 'react';
import { SortableItem } from './SortableItem';
type AppSortableProps = {
  Items: any[];
};
const AppSortable: FC<AppSortableProps> = ({ Items }) => {
  return (
    <DndContext>
      <SortableContext items={Items}>
        {Items?.map((Item: any, index: number) => (
          <SortableItem key={index} Element={<Item />} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default AppSortable;
