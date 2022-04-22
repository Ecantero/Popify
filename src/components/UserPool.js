import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-1_ent7j7CLJ",
    ClientId: "hlidni6ebgomr8jcsbkf0qroh"
}

export default new CognitoUserPool(poolData);