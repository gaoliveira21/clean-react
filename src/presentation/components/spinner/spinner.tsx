import Styles from './spinner-styles.scss'

type SpinnerProps = React.HTMLAttributes<HTMLElement>

export const Spinner = (props: SpinnerProps): React.ReactElement => {
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, props.className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
