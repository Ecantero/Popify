import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  //https://1cdivxrxef.execute-api.us-west-1.amazonaws.com/prod

  const headers = {
    "access-control-allow-origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  };

  useEffect(() => {
    axios
      .post(
        "https://1cdivxrxef.execute-api.us-west-1.amazonaws.com/prod/spotifylogin",
        {
          code,
        },
        // {
        //   headers
        // }
      )
      .then((res) => {
        console.log(res);
        setAccessToken(res.body.accessToken);
        setRefreshToken(res.body.refreshToken);
        setExpiresIn(res.body.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log(err);
        // window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(
          "https://1cdivxrxef.execute-api.us-west-1.amazonaws.com/prod/spotifyrefreshtoken",
          {
            refreshToken,
          },
          // {
          //   headers
          // }
        )
        .then((res) => {
          setAccessToken(res.body.accessToken);
          setExpiresIn(res.body.expiresIn);
        })
        .catch((err) => {
          console.log(err);
          // window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
