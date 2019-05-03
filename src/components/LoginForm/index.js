import { reduxForm } from "redux-form";
import { connect } from "react-redux";
// import { loginIn, getAuth } from "../../modules/Auth";
// import LoginForm from "./LoginForm";
import { formValidation } from "./validation";

const mapStateFromProps = state => ({
  isAuthorized: getAuth(state)
});

const mapDispatchFromProps = { loginIn };

export default connect(
  mapStateFromProps,
  mapDispatchFromProps
)(
  reduxForm({
    form: "loginForm",
    validate: formValidation
  })(Login)
);
