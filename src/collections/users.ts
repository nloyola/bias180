import type { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  // auth: {
  //   tokenExpiration: 7200, // How many seconds to keep the user logged in
  //   verify: true, // Require email verification before being allowed to authenticate
  //   maxLoginAttempts: 5, // Automatically lock a user out after X amount of failed logins
  //   lockTime: 600 * 1000 // Time period to allow the max login attempts
  //   // More options are available
  // },
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
