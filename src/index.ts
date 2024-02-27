export {};

// EXAMPLE 1 - Making HTTP GET requests with Axios in TypeScript

import axios from 'axios';

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

async function getUsers() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetUsersResponse>(
      'https://reqres.in/api/users',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getUsers();

// ---------------------------------------------------

// // EXAMPLE 2 - Making HTTP POST requests with Axios in TypeScript

// import axios from 'axios';

// type CreateUserResponse = {
//   name: string;
//   job: string;
//   id: string;
//   createdAt: string;
// };

// async function createUser() {
//   try {
//     // 👇️ const data: CreateUserResponse
//     const { data, status } = await axios.post<CreateUserResponse>(
//       'https://reqres.in/api/users',
//       { name: 'John Smith', job: 'manager' },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       },
//     );

//     console.log(JSON.stringify(data, null, 4));

//     console.log(status);

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       // 👇️ error: AxiosError<any, any>
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// createUser();

// ---------------------------------------------------

// // EXAMPLE 3 - Making HTTP PATCH requests with Axios in TypeScript

// import axios from 'axios';

// type UpdateUserResponse = {
//   name: string;
//   job: string;
//   updatedAt: string;
// };

// async function updateUser() {
//   try {
//     // 👇️ const data: UpdateUserResponse
//     const { data } = await axios.patch<UpdateUserResponse>(
//       'https://reqres.in/api/users/2',
//       { name: 'John Smith', job: 'manager' },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       },
//     );

//     console.log(JSON.stringify(data, null, 4));

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       // 👇️ error: AxiosError<any, any>
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// updateUser();

// ---------------------------------------------------

// // EXAMPLE 4 - Making HTTP PUT requests with Axios in TypeScript

// import axios from 'axios';

// type UpdateUserResponse = {
//   name: string;
//   job: string;
//   updatedAt: string;
// };

// async function updateUser() {
//   try {
//     // 👇️ const data: UpdateUserResponse
//     const { data } = await axios.put<UpdateUserResponse>(
//       'https://reqres.in/api/users/2',
//       { name: 'John Smith', job: 'manager' },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       },
//     );

//     console.log(JSON.stringify(data, null, 4));

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       // 👇️ error: AxiosError<any, any>
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// updateUser();

// ---------------------------------------------------

// // EXAMPLE 5 - Making HTTP DELETE requests with Axios in TypeScript

// import axios from 'axios';

// type DeleteUserResponse = '';

// async function deleteUser() {
//   try {
//     // 👇️ const data: UpdateUserResponse
//     const { data, status } = await axios.delete<DeleteUserResponse>(
//       'https://reqres.in/api/users/2',
//       {
//         headers: {
//           Accept: 'application/json',
//         },
//       },
//     );

//     console.log('response is: ', data);

//     // 👇️ response status is: 204
//     console.log('response status is: ', status);

//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.log('error message: ', error.message);
//       // 👇️ error: AxiosError<any, any>
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// deleteUser();
