import Styles from './input-styles.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = (props: InputProps): React.ReactElement => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}
