import _mongoose, { connect } from "mongoose";

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI || MONGODB_URI.length === 0) {
  throw new Error("MongoDB URI not found");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  console.log(`Running`)
  if (cached.conn) {
    console.log(`Using cached connection`);
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(MONGODB_URI!, opts)
      .then((mongoose:any) => {
        console.log(`New connection established`);
        return mongoose;
      })
      .catch((error:Error) => {
        console.error(`Connection to db failed`);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

// import _mongoose, { connect } from "mongoose";

// declare global {
//   var mongoose: {
//     promise: ReturnType<typeof connect> | null;
//     conn: typeof _mongoose | null;
//   };
// }

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI || MONGODB_URI.length === 0) {
//   throw new Error("MongoDB URI not found");
// }


// async function connectDB() {
//   console.log(`Running`)

//     const opts = {
//       bufferCommands: false,
//     };

//    connect(MONGODB_URI!, opts)
//       .then((mongoose:any) => {
//         console.log(`New connection established`);
//         return mongoose;
//       })
//       .catch((error:Error) => {
//         console.error(`Connection to db failed`);
//         throw error;
//       });

//   }

// export default connectDB;