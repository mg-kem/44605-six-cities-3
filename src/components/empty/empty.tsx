import { IEmptyProps } from '../../types.props';

export default function Empty({ classDiv, classB, classP, boldContent, paragraph }: IEmptyProps): JSX.Element {
  return (
    <div className={classDiv}>
      <b className={classB}>{boldContent}</b>
      <p className={classP}>{paragraph}</p>
    </div>
  );
}
