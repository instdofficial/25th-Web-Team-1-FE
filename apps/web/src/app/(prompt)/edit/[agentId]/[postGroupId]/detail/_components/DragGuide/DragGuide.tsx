import { Fragment } from 'react';
import * as styles from './DragGuide.css';
import { Text } from '@repo/ui';

type DragGuideProps = {
  description: string;
};

export function DragGuide({ description }: DragGuideProps) {
  return (
    <div className={styles.container}>
      <Text.H2
        className={styles.description}
        fontSize={18}
        fontWeight="medium"
        color="grey400"
      >
        {description.split('\\n').map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </Text.H2>
    </div>
  );
}
