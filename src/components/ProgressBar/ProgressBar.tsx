import { useStyles } from './styles';
import type { ProgressBarProps } from './types';

export const ProgressBar = ({ currentValue, maxValue }: ProgressBarProps) => {
  const { classes } = useStyles();

  const progressPercentage = (currentValue / maxValue) * 100 + '%';

  return (
    <div className={classes.Wrapper}>
      <div style={{ width: progressPercentage }} className={classes.Progress} />
    </div>
  );
};
