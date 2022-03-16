import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../App"

const Root = (props) => {
    return(
    <div>
        <App />
    </div>
    )

}

const mapStateToProps = (state) => {
    return {
    //   myProfileInformation: state.api[MY_PROFILE] || false,
    //   myBussinessInformation: state.api.BUSINESS_INFO,
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    // LocationPicker dispatchers.
    // onAuthModuleClick: (obj) => {
    //   return dispatch(authModuleClick(obj));
    // },
    // resetAuthHandler: () => {
    //   return dispatch(resetAuth());
    // },
  });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Root));
