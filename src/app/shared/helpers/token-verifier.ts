// import { environment } from "../environment/environment";
// import { JwtHelperService } from "@auth0"

/* EXPORT MODULE | DECODE_TOKEN */
export const DECODE_TOKEN = (token: any) => {
    const tokenPayload = token.split('.')[1]; // Extract the payload part of the token
    const decodedPayload = atob(tokenPayload); // Decode the base64-encoded payload
    const tokenData = JSON.parse(decodedPayload); // Parse the JSON data
    return tokenData;
    // console.log('Decoded Token:', tokenData);
  };
  

//   DECODE_TOKEN("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJkaXNwbGF5X25hbWUiOiJhZG1pbiIsImVtYWlsIjoic3RhY2tuZXdiaWVAZ21haWwuY29tIiwiZW1haWxlZCI6MCwiZGVsZXRlZCI6MCwiYWRtaW4iOjEsImlhdCI6MTY4NzY5NzQ3NCwiZXhwIjoxNjg4MDU3NDc0fQ.ctrPCn-4iUf8mo8L50UdbUWlIqrTrtzVZyd-fvDCnuk")