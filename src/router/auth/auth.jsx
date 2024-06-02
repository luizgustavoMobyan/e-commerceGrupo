import { SignIn } from '../../components/sign-in/sign-in';
import { SignUp } from '../../components/sign-up/sign-up';
import './auth.scss'

export function Auth() {
  return (
    <div className="container-auth">
      <SignIn />
      <SignUp />
    </div>
  )
}