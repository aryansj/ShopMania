import axios from "axios";
const ROOT_URL = "http://127.0.0.1:5000/";

export async function loginUser(dispatch, loginData) {
  let userToken = null;
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    await axios
      .post(ROOT_URL + "authenticate", {
        userID: loginData.userID,
        password: loginData.password,
      })
      .then((response) => {
        console.log(response.data);
        userToken = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    if (userToken) {
      dispatch({ type: "LOGIN_SUCCESS", payload: userToken });
      localStorage.setItem("currentUserToken", userToken);
      return userToken;
    }

    dispatch({ type: "LOGIN_ERROR", error: "Login failed" });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: "Login failed" });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUserToken");
}
