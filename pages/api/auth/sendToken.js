// // pages/api/sendToken.js
// import { getSession } from 'next-auth/react';

// export default async (req, res) => {
//   const session = await getSession();
//   const googleAccessToken = session?.user?.accessToken;

//   if (googleAccessToken) {
//     // You can send the access token as a JSON response
//     res.status(200).json({ googleAccessToken });
//   } else {
//     // Handle the case when the token is not available
//     res.status(401).json({ error: 'Google access token not available.' });
//   }
// };
