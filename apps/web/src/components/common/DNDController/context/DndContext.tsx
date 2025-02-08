import React, { ReactNode } from 'react';
import { createContext, useContext } from 'react';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
  MeasuringStrategy,
} from '@dnd-kit/core';
import { useDragAndDrop } from '../hooks';
import { ContentItem } from '../compounds';
import { Post } from '@web/types';

export type DndItemData = Post;

type DndControllerProviderProps = {
  initialItems: DndItemData[];
  children: ReactNode;
  onDragEnd?: (items: DndItemData[]) => void;
  disabled?: boolean;
};

type DndControllerContextType = ReturnType<typeof useDragAndDrop>;

const DndControllerContext = createContext<DndControllerContextType | null>(
  null
);

export function useDndController() {
  const context = useContext(DndControllerContext);
  if (!context) {
    throw new Error(
      'useDndController는 DndController.Provider 내부에서만 사용할 수 있습니다.'
    );
  }
  return context;
}

export function DndControllerProvider({
  initialItems,
  children,
  onDragEnd,
  disabled,
}: DndControllerProviderProps) {
  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 5 } })
  );

  const dnd = useDragAndDrop({
    initialItems,
    onDragEnd,
  });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={
        disabled
          ? undefined
          : ({ active }) => {
              dnd.setActiveId(Number(active.id));
            }
      }
      onDragOver={disabled ? undefined : dnd.handleDragOver}
      onDragEnd={
        disabled
          ? undefined
          : (event) => {
              dnd.handleDragEnd(event);
            }
      }
      measuring={{
        droppable: { strategy: MeasuringStrategy.Always },
      }}
    >
      <DndControllerContext.Provider value={dnd}>
        {children}
      </DndControllerContext.Provider>
      <DragOverlay>
        {dnd.activeId && (
          <ContentItem
            summary={
              dnd.items.find((item) => item.id === dnd.activeId)?.summary
            }
            updatedAt={
              dnd.items.find((item) => item.id === dnd.activeId)?.updatedAt ||
              ''
            }
            onRemove={() => {}}
            onModify={() => {}}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
}
