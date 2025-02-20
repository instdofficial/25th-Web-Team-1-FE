'use client';

import { Dropdown } from '@repo/ui';
import * as styles from './MinuteDropdown.css';

type MinuteDropdownProps = {
  value?: string;
  onChange: (value: string) => void;
};

const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, '0')
);

export function MinuteDropdown({
  value = '00',
  onChange,
}: MinuteDropdownProps) {
  return (
    <Dropdown value={value} onValueChange={onChange}>
      <Dropdown.Trigger className={styles.trigger}>{value}분</Dropdown.Trigger>
      <Dropdown.Content>
        {minutes.map((minute) => (
          <Dropdown.Item key={minute} value={minute}>
            {minute}분
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
}
