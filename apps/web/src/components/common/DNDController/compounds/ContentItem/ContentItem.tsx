import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { getTimeAgo } from '@web/utils';
import {
  contentItemStyle,
  cursorGrabStyle,
  iconHoverStyle,
  noShrinkStyle,
  timeStyle,
  summaryStyle,
} from './ContentItem.css';
import { Icon } from '@repo/ui/Icon';
import { IconButton } from '@repo/ui/IconButton';
import { Text } from '@repo/ui/Text';
import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import { Skeleton } from '@repo/ui/Skeleton';

export type ContentItemProps = {
  /**
   * 이미지 URL. 제공되지 않으면 기본 아이콘이 표시됩니다.
   */
  image?: string;
  /**
   * 표시할 제목 텍스트.
   */
  summary?: string;
  /**
   * ISO 8601 형식의 날짜 문자열로, 마지막 업데이트 시간을 나타냅니다.
   */
  updatedAt: string;
  /**
   * 삭제 아이콘 클릭 시 호출되는 콜백 함수.
   */
  onRemove?: VoidFunction;
  /**
   * 수정 아이콘 클릭 시 호출되는 콜백 함수.
   */
  onModify?: VoidFunction;
  /**
   * 드래그 아이콘 마우스 다운 시 리스너.
   */
  dragListeners?: DraggableSyntheticListeners;
  isLoading?: boolean;
  isSelected?: boolean;
} & Omit<ComponentPropsWithoutRef<'div'>, 'id'>;

/**
 * ContentItem 컴포넌트의 Props 타입
 *
 * @property {string} [image] - 이미지 URL. 제공되지 않으면 기본 아이콘이 표시됩니다.
 * @property {string} [summary] - 표시할 제목 텍스트.
 * @property {string} updatedAt - ISO 8601 형식의 날짜 문자열로, 마지막 업데이트 시간을 나타냅니다.
 * @property {VoidFunction} [onRemove] - 삭제 아이콘 클릭 시 호출되는 콜백 함수.
 * @property {VoidFunction} [onModify] - 수정 아이콘 클릭 시 호출되는 콜백 함수.
 * @property {DraggableSyntheticListeners} [dragListeners] - 드래그 아이콘 마우스 다운 시 리스너.
 */
export const ContentItem = forwardRef<HTMLDivElement, ContentItemProps>(
  (
    {
      image,
      summary,
      updatedAt,
      onRemove,
      onModify,
      dragListeners,
      className,
      isLoading,
      isSelected = 'false',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${contentItemStyle} ${className ?? ''}`}
        {...props}
      >
        {image ? (
          <div>x</div>
        ) : (
          <Icon
            className={noShrinkStyle}
            name="note"
            color="grey300"
            type="stroke"
            size="3.2rem"
          />
        )}
        {isLoading ? (
          <Skeleton width="100%" height={'2.7rem'} radius={16} />
        ) : (
          <>
            <Text
              className={summaryStyle}
              fontSize={18}
              fontWeight={isSelected ? 'bold' : 'semibold'}
              color={isSelected ? 'purple800' : 'grey600'}
            >
              {summary}
            </Text>

            <Text
              className={`${noShrinkStyle} ${timeStyle}`}
              fontSize={14}
              fontWeight="medium"
              color="grey400"
            >
              {`${getTimeAgo(updatedAt)}`}
            </Text>
          </>
        )}
        {!isLoading && (
          <div className={iconHoverStyle}>
            {onRemove && <IconButton icon="trash" onClick={onRemove} />}
            {onModify && <IconButton icon="pencil" onClick={onModify} />}
            {dragListeners && (
              <IconButton
                className={cursorGrabStyle}
                icon="sixDots"
                {...dragListeners}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

ContentItem.displayName = 'ContentItem';
